"use client";

import React, { useState, useRef } from "react";

interface BookingTicketCardProps {
  whatsappNumber?: string;
  phoneNumber?: string;
  displayPhoneNumber?: string;
  defaultPrice?: number;
  className?: string;
}

interface DatePill {
  id: string;
  dayName: string;
  dateNum: string;
  monthName: string;
  dateStr: string;
  fullDate: string;
  iso: string;
}

interface PackageOption {
  id: "standard" | "extended";
  name: string;
  duration: string;
  price: number;
  badge: string;
}

const PACKAGES: PackageOption[] = [
  {
    id: "standard",
    name: "Full Netrani Dive",
    duration: "30–40 min underwater",
    price: 3500,
    badge: "Most Popular",
  },
  {
    id: "extended",
    name: "Extended Deep Dive",
    duration: "45–55 min underwater",
    price: 4500,
    badge: "Deep Coral Reef",
  },
];

// Dynamically compute upcoming weekend dates based on current time
function computeDynamicDates(): { sat: DatePill; sun: DatePill; todayIso: string } {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

  // Days to upcoming Saturday
  let daysToSat = (6 - currentDay + 7) % 7;
  // If today is Saturday after 10:30 AM, target next Saturday
  if (daysToSat === 0 && now.getHours() >= 10 && now.getMinutes() >= 30) {
    daysToSat = 7;
  }

  const satDate = new Date(now);
  satDate.setDate(now.getDate() + daysToSat);

  // Sunday is the day after Saturday
  const sunDate = new Date(satDate);
  sunDate.setDate(satDate.getDate() + 1);

  const formatPill = (d: Date, id: string): DatePill => ({
    id,
    dayName: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
    dateNum: d.toLocaleDateString("en-US", { day: "numeric" }),
    monthName: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    dateStr: d.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
    fullDate: d.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    iso: d.toISOString().split("T")[0],
  });

  return {
    sat: formatPill(satDate, "sat"),
    sun: formatPill(sunDate, "sun"),
    todayIso: now.toISOString().split("T")[0],
  };
}

export default function BookingTicketCard({
  whatsappNumber = "917406329777",
  phoneNumber = "+917829975777",
  displayPhoneNumber = "+91 78299 75777",
  defaultPrice = 3500,
  className = "",
}: BookingTicketCardProps) {
  const [selectedPackage, setSelectedPackage] = useState<"standard" | "extended">(
    defaultPrice === 4500 ? "extended" : "standard"
  );
  const [selectedBatch, setSelectedBatch] = useState<"morning" | "afternoon">("morning");
  const [divers, setDivers] = useState<number>(1);
  const [dates] = useState(computeDynamicDates);
  const [selectedDateId, setSelectedDateId] = useState<"sat" | "sun" | "custom">("sat");
  const [customDate, setCustomDate] = useState<{
    display: string;
    dayName: string;
    dateNum: string;
    monthName: string;
    full: string;
    iso: string;
  } | null>(null);

  const datePickerInputRef = useRef<HTMLInputElement>(null);

  const activePkg = PACKAGES.find((p) => p.id === selectedPackage) || PACKAGES[0];
  const unitPrice = activePkg.price;
  const totalPrice = divers * unitPrice;
  const advanceDeposit = divers * 500;

  // Resolve current active date text
  const getSelectedDateText = () => {
    if (selectedDateId === "custom" && customDate) {
      return customDate.full;
    }
    if (selectedDateId === "sun") {
      return dates.sun.fullDate;
    }
    return dates.sat.fullDate;
  };

  const handleCustomDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) return;
    const parts = val.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const monthIndex = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, monthIndex, day);
      if (!isNaN(d.getTime())) {
        setCustomDate({
          display: d.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
          dayName: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
          dateNum: d.toLocaleDateString("en-US", { day: "numeric" }),
          monthName: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
          full: d.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          iso: val,
        });
        setSelectedDateId("custom");
      }
    }
  };

  const openDatePicker = () => {
    setSelectedDateId("custom");
    if (datePickerInputRef.current) {
      if ("showPicker" in HTMLInputElement.prototype) {
        try {
          datePickerInputRef.current.showPicker();
        } catch {
          datePickerInputRef.current.focus();
        }
      } else {
        datePickerInputRef.current.focus();
      }
    }
  };

  // Generate WhatsApp message and URL
  const generateWhatsAppUrl = () => {
    const dateText = getSelectedDateText();
    const formattedTotal = totalPrice.toLocaleString("en-IN");
    const formattedAdvance = advanceDeposit.toLocaleString("en-IN");
    const batchText =
      selectedBatch === "morning" ? "Morning Batch" : "Afternoon Batch";

    const message = `*Murudeshwar Scuba Diving Booking Enquiry* 🤿

Hello Murudeshwar Scuba Dive! I would like to check slot availability for:

✨ *Package:* ${activePkg.name} (${activePkg.duration})
📍 *Destination:* Netrani Island, Murudeshwar
📅 *Date:* ${dateText}
🌅 *Preferred Batch:* ${batchText}
👥 *No. of Divers:* ${divers} ${divers === 1 ? "Diver" : "Divers"}
💰 *Total Amount:* ${divers} × ₹${unitPrice.toLocaleString("en-IN")} = ₹${formattedTotal} (All-in)
🎁 *Includes:* Speedboat ride, gear, 1:1 certified instructor & complimentary HD photos/videos
💳 *Advance Deposit:* ₹${formattedAdvance} (₹500/diver to confirm once approved)

Please let me know if slots are available for our group!`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className={`relative w-full max-w-[440px] rounded-[32px] bg-gradient-to-b from-[#0a1f38]/95 via-[#061527]/98 to-[#030d1a]/95 backdrop-blur-2xl border border-white/[0.12] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,12,28,0.85)] text-white transition-all duration-300 ${className}`}
      id="booking-card"
    >
      {/* Glow highlight effects */}
      <div className="absolute top-0 right-10 w-44 h-44 bg-[#00D4FF]/15 rounded-full blur-[70px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-[70px] pointer-events-none" />

      {/* HEADER BAR: LIVE STATUS & LOCATION */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            Booking Desk Online
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-300">
          <svg
            className="w-3 h-3 text-[#00D4FF]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Netrani Island</span>
        </div>
      </div>

      {/* PACKAGE SELECTOR TABS */}
      <div className="relative z-10 mt-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
            Select Package
          </label>
          <span className="text-[10px] font-semibold text-[#00D4FF]">
            {activePkg.duration}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 bg-[#030e1c]/80 p-1 rounded-2xl border border-white/10">
          {PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative py-2.5 px-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#00D4FF]/25 to-[#005B96]/30 border border-[#00D4FF]/50 text-white shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold block truncate">
                    {pkg.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-sm font-black font-display text-white">
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] text-gray-400">/ person</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* DYNAMIC DATE PICKER (UPCOMING SAT, SUN & CUSTOM DATE PICKER) */}
      <div className="relative z-10 mt-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
            Choose Dive Date
          </label>
          <span className="text-[11px] font-semibold text-[#00D4FF]">
            {getSelectedDateText()}
          </span>
        </div>

        {/* 3 PILL CARDS (DYNAMIC SAT, SUN, OTHER DAY) */}
        <div className="grid grid-cols-3 gap-2">
          {/* DYNAMIC SATURDAY */}
          <button
            type="button"
            onClick={() => setSelectedDateId("sat")}
            className={`py-2.5 px-2 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
              selectedDateId === "sat"
                ? "border-[#00D4FF] bg-[#00D4FF]/20 text-white shadow-[0_0_15px_rgba(0,212,255,0.25)] ring-1 ring-[#00D4FF]/50"
                : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <span className="text-[10px] font-bold tracking-wider uppercase block">
              {dates.sat.dayName}
            </span>
            <span className="text-xl font-black text-white font-display leading-tight block my-0.5">
              {dates.sat.dateNum}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">
              {dates.sat.monthName}
            </span>
          </button>

          {/* DYNAMIC SUNDAY */}
          <button
            type="button"
            onClick={() => setSelectedDateId("sun")}
            className={`py-2.5 px-2 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
              selectedDateId === "sun"
                ? "border-[#00D4FF] bg-[#00D4FF]/20 text-white shadow-[0_0_15px_rgba(0,212,255,0.25)] ring-1 ring-[#00D4FF]/50"
                : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <span className="text-[10px] font-bold tracking-wider uppercase block">
              {dates.sun.dayName}
            </span>
            <span className="text-xl font-black text-white font-display leading-tight block my-0.5">
              {dates.sun.dateNum}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">
              {dates.sun.monthName}
            </span>
          </button>

          {/* OTHER DAY BUTTON */}
          <button
            type="button"
            onClick={openDatePicker}
            className={`py-2.5 px-2 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
              selectedDateId === "custom"
                ? "border-[#00D4FF] bg-[#00D4FF]/20 text-white shadow-[0_0_15px_rgba(0,212,255,0.25)] ring-1 ring-[#00D4FF]/50"
                : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {customDate ? (
              <>
                <span className="text-[10px] font-bold tracking-wider uppercase block">
                  {customDate.dayName}
                </span>
                <span className="text-xl font-black text-white font-display leading-tight block my-0.5">
                  {customDate.dateNum}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">
                  {customDate.monthName}
                </span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mb-0.5 text-[#00D4FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Other Day
                </span>
              </>
            )}
          </button>
        </div>

        {/* EXPLICIT DATE PICKER BAR (SHOWN WHEN "OTHER DAY" IS SELECTED OR CLICKED) */}
        {selectedDateId === "custom" && (
          <div className="mt-2.5 p-3 rounded-2xl bg-gradient-to-r from-[#00D4FF]/10 via-[#0a2744]/70 to-[#00D4FF]/10 border border-[#00D4FF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 animate-fadeIn">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF] shrink-0">
                <svg
                  className="w-4 h-4 text-[#00D4FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D4FF] block leading-none">
                  Custom Diving Date
                </span>
                <span className="text-xs font-extrabold text-white block mt-0.5">
                  {customDate ? customDate.full : "Select a date below"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                ref={datePickerInputRef}
                type="date"
                min={dates.todayIso}
                value={customDate?.iso || ""}
                onChange={handleCustomDateChange}
                className="w-full sm:w-auto bg-[#030e1c] border border-[#00D4FF]/50 text-white text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] cursor-pointer shadow-inner"
              />
            </div>
          </div>
        )}
      </div>

      {/* BATCH SELECTOR (MORNING BATCH OR AFTERNOON BATCH) */}
      <div className="relative z-10 mt-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
            Select Batch
          </label>
          <span className="text-[10px] font-semibold text-[#00D4FF]">
            {selectedBatch === "morning" ? "Morning Slot" : "Afternoon Slot"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 bg-[#030e1c]/80 p-1 rounded-2xl border border-white/10">
          {/* MORNING BATCH */}
          <button
            type="button"
            onClick={() => setSelectedBatch("morning")}
            className={`py-2.5 px-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
              selectedBatch === "morning"
                ? "bg-gradient-to-r from-[#00D4FF]/25 to-[#005B96]/30 border border-[#00D4FF]/50 text-white shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                selectedBatch === "morning"
                  ? "bg-[#00D4FF]/20 text-[#00D4FF]"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              {/* Sun / Morning icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold block leading-tight">
                Morning Batch
              </span>
              <span className="text-[10px] text-gray-400 block mt-0.5">
                First Slot
              </span>
            </div>
          </button>

          {/* AFTERNOON BATCH */}
          <button
            type="button"
            onClick={() => setSelectedBatch("afternoon")}
            className={`py-2.5 px-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
              selectedBatch === "afternoon"
                ? "bg-gradient-to-r from-[#00D4FF]/25 to-[#005B96]/30 border border-[#00D4FF]/50 text-white shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                selectedBatch === "afternoon"
                  ? "bg-[#00D4FF]/20 text-[#00D4FF]"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              {/* Sunset / Afternoon icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 10V2" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h20" />
                <path d="M20 18a8 8 0 1 0-16 0" />
                <path d="m19.07 10.93-1.41 1.41" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold block leading-tight">
                Afternoon Batch
              </span>
              <span className="text-[10px] text-gray-400 block mt-0.5">
                Second Slot
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* DIVERS COUNTER */}
      <div className="relative z-10 mt-5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-white block">
            How many divers?
          </span>
          <span className="text-[11px] text-gray-400 block mt-0.5">
            Non-swimmers &amp; beginners guided 1:1
          </span>
        </div>
        <div className="flex items-center gap-3 bg-[#030e1c] border border-white/15 rounded-xl px-2.5 py-1.5 shadow-inner">
          <button
            type="button"
            onClick={() => setDivers((d) => Math.max(1, d - 1))}
            disabled={divers <= 1}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-base font-bold transition-colors select-none ${
              divers <= 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-300 hover:text-white hover:bg-white/10 active:scale-90 cursor-pointer"
            }`}
            aria-label="Decrease divers"
          >
            −
          </button>
          <span className="text-base font-black text-white min-w-[20px] text-center font-display select-none">
            {divers}
          </span>
          <button
            type="button"
            onClick={() => setDivers((d) => Math.min(20, d + 1))}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-base font-bold text-gray-300 hover:text-white hover:bg-white/10 active:scale-90 transition-colors cursor-pointer select-none"
            aria-label="Increase divers"
          >
            +
          </button>
        </div>
      </div>

      {/* PRICE ESTIMATE & INCLUSIONS BOX */}
      <div className="relative z-10 mt-5 p-4 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/15">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
              Estimated Total ({divers} Diver{divers > 1 ? "s" : ""})
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl sm:text-4xl font-black text-[#FFE500] font-display tracking-tight drop-shadow-[0_2px_12px_rgba(255,229,0,0.3)]">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-gray-400 font-semibold uppercase">
                All-in
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
              Advance to confirm
            </span>
            <span className="text-sm font-extrabold text-white">
              ₹{advanceDeposit.toLocaleString("en-IN")}
            </span>
            <span className="text-[9px] text-gray-400 block">
              (₹500 / diver)
            </span>
          </div>
        </div>

        {/* Feature Checkmarks */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10 text-[11px] text-gray-300">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Boat &amp; Scuba Gear</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>1:1 PADI/SSI Instructor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Complimentary 4K Media</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Weather Refund Policy</span>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="relative z-10 space-y-2.5 mt-5">
        {/* PRIMARY WHATSAPP BUTTON */}
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp_ticket"
          className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-black font-black text-xs sm:text-sm py-4 px-4 rounded-2xl flex items-center justify-center gap-2.5 uppercase tracking-wider transition-all duration-200 shadow-[0_6px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] cursor-pointer group"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-5 h-5 fill-black transition-transform duration-200 group-hover:scale-110 shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.411 2.439 1.109 3.393l-.728 2.659 2.732-.716a5.727 5.727 0 0 0 2.654.66h.002c3.181 0 5.767-2.586 5.767-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.39 8.162c-.146.411-.749.771-1.092.812-.34.041-.679.233-2.19-.367-1.807-.716-2.92-2.56-3.011-2.68-.09-.12-.734-.976-.734-1.859 0-.883.456-1.318.616-1.48.163-.162.355-.203.474-.203.118 0 .237.003.34.007.109.004.254-.042.397.302.146.355.501 1.22.544 1.309.043.09.073.195.014.312-.06.117-.09.19-.178.293-.09.103-.189.23-.27.31-.09.09-.184.188-.08.365.105.178.468.771.999 1.246.686.614 1.264.805 1.442.894.178.09.282.076.388-.046.106-.122.457-.531.579-.711.122-.18.243-.151.411-.09.169.06 1.07.505 1.252.597.183.092.304.137.349.215.045.078.045.452-.101.863zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.117 1.515 5.86L0 24l6.337-1.663c1.7.925 3.645 1.463 5.663 1.463 6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.884 0-3.649-.508-5.176-1.393l-.371-.216-3.847.986.995-3.633-.243-.377C2.476 15.827 2 13.974 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          <span>Send Details to WhatsApp</span>
        </a>

        {/* CALL DESK BUTTON */}
        <a
          href={`tel:${phoneNumber}`}
          data-cta="call_ticket"
          className="w-full relative group overflow-hidden border border-[#00D4FF]/30 hover:border-[#00D4FF] bg-gradient-to-r from-[#00D4FF]/10 via-[#0a2744]/70 to-[#00D4FF]/10 hover:from-[#00D4FF]/20 hover:to-[#00D4FF]/20 active:scale-[0.98] py-3 px-4 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,212,255,0.12)] hover:shadow-[0_4px_25px_rgba(0,212,255,0.25)]"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
              <svg
                className="w-4 h-4 text-[#00D4FF]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D4FF] block leading-none mb-0.5">
                Direct Dive Desk
              </span>
              <span className="text-sm font-black text-white tracking-wide font-display block leading-tight">
                {displayPhoneNumber}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-[#00D4FF]/15 border border-[#00D4FF]/30 px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Call Desk</span>
          </div>
        </a>
      </div>

      {/* FOOTNOTE */}
      <p className="relative z-10 text-[11px] text-gray-400 text-center leading-normal max-w-[320px] mx-auto pt-3">
        WhatsApp opens with your selected itinerary ready to send. Deposit only after dates are confirmed.
      </p>
    </div>
  );
}
