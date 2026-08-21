import Link from "next/link";
import Image from "next/image";
import WeatherStats from "./WeatherStats";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#00111F] to-[#002B5B] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Decorative background images */}
      <div className="absolute top-20 left-10 w-48 h-48 opacity-10 animate-float pointer-events-none">
        <Image
          src="/images/fisher-men.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-40 right-20 w-32 h-32 opacity-10 animate-drift animation-delay-2 pointer-events-none">
        <Image
          src="/images/packages-fish.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-16 border-b border-white/10">
          <div className="w-full lg:w-1/2 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-3 tracking-wider font-display text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 font-medium text-sm md:text-base">
              Get updates on <strong className="text-white">Netrani diving</strong> conditions and special offers.
            </p>
            <form
              action="mailto:murudeshwar.scuba.dive@gmail.com?subject=Scuba%20Diving%20Inquiry%20/%20Join%20Us"
              method="get"
              className="flex w-full max-w-md"
            >
              <input
                id="newsletter-email"
                type="email"
                name="body"
                placeholder="Enter Email"
                aria-label="Email Address for newsletter updates"
                required
                className="bg-white/5 text-white px-6 py-4 outline-none w-full border border-white/10 border-r-0 focus:border-[#00D4FF]/50 transition-colors placeholder:text-gray-500 rounded-l-full text-sm font-medium"
              />
              <button
                type="submit"
                className="bg-[#00D4FF] text-black font-bold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#80e9ff] transition-all rounded-r-full whitespace-nowrap shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              >
                Join Us
              </button>
            </form>
          </div>

          {/* Conditions / Stats */}
          <WeatherStats />
        </div>

        {/* Main Footer Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-8">
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <h2 className="text-xl font-black tracking-widest text-white font-display">
                MURUDESHWAR
              </h2>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#00D4FF] uppercase">
                - SCUBA DIVE -
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              We run the best <strong className="text-white">scuba in Murudeshwar</strong>. We are a PADI Dive Resort. From beginner <strong className="text-white">murudeshwar beach scuba diving</strong> trips to pro courses, we do it all.
            </p>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
              <strong>Murudeshwar scuba diving timings</strong>: 8 AM - 3 PM daily.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] font-display text-white mb-6">
              Helpful Links
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400 font-medium">
              <li>
                <Link href="/contact" className="hover:text-[#00D4FF] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/how-to-reach-murudeshwar" className="hover:text-[#00D4FF] transition-colors">
                  How to Reach
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#00D4FF] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog/netrani-island-guide" className="hover:text-[#00D4FF] transition-colors">
                  About Netrani
                </Link>
              </li>
              <li>
                <Link href="/blog/gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar" className="hover:text-[#00D4FF] transition-colors">
                  Gandhada Gudi &amp; Netrani
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#00D4FF] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-age-limit" className="hover:text-[#00D4FF] transition-colors">
                  Age Limit
                </Link>
              </li>
              <li>
                <Link href="/blog/best-time-scuba-diving-murudeshwar" className="hover:text-[#00D4FF] transition-colors">
                  Best Time for Scuba Diving
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-timings" className="hover:text-[#00D4FF] transition-colors">
                  Scuba Diving Timings
                </Link>
              </li>
              <li>
                <Link href="/blog/beginner-scuba-diving-guide" className="hover:text-[#00D4FF] transition-colors">
                  Beginner FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-murudeshwar-non-swimmers" className="hover:text-[#00D4FF] transition-colors">
                  Non-Swimmers Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-booking-murudeshwar" className="hover:text-[#00D4FF] transition-colors">
                  Scuba Diving Booking Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/murudeshwar-scuba-diving-safety" className="hover:text-[#00D4FF] transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/murudeshwar-scuba-diving-operator" className="hover:text-[#00D4FF] transition-colors">
                  Operator Checklist
                </Link>
              </li>
              <li>
                <Link href="/blog/netrani-island-marine-life" className="hover:text-[#00D4FF] transition-colors">
                  Marine Life Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#00D4FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00D4FF] transition-colors">
                  Terms &amp; Booking Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] font-display text-white mb-6">
              Dive Links
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400 font-medium">
              <li>
                <Link href="/" className="hover:text-[#00D4FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/netrani-scuba-diving" className="hover:text-[#00D4FF] transition-colors">
                  Netrani Scuba Package
                </Link>
              </li>
              <li>
                <Link href="/intro-scuba-diving" className="hover:text-[#00D4FF] transition-colors">
                  Intro Scuba (Try Dive)
                </Link>
              </li>
              <li>
                <Link href="/bulk-scuba-booking" className="hover:text-[#00D4FF] transition-colors">
                  Bulk / Group Booking
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#00D4FF] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] font-display text-white mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00D4FF]"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+917829975777" className="hover:text-white transition-colors">
                  +91 78299 75777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00D4FF]"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                </svg>
                <a href="mailto:murudeshwar.scuba.dive@gmail.com" className="hover:text-white transition-colors">
                  murudeshwar.scuba.dive@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#00D4FF] mt-1"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-300">
                  Temple Main Road, Murudeshwar,
                  <br />
                  Karnataka, India 581350
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/how-to-reach-murudeshwar" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors font-semibold">
                Get Directions
              </Link>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/murudeshwar_scuba_dive/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00D4FF] hover:text-black hover:border-transparent transition-all"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Explore Guides & Resources */}
        <div className="pt-10 mt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-display text-white/90">
              Explore Guides &amp; Resources
            </h4>
            <Link
              href="/blog"
              className="text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors uppercase tracking-wider"
            >
              View All Guides →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <Link
              href="/blog/gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all text-[#00D4FF] font-semibold"
            >
              Gandhada Gudi &amp; Puneeth Rajkumar
            </Link>
            <Link
              href="/blog/murudeshwar-scuba-diving-price-cost"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Price &amp; Cost Guide (2026)
            </Link>
            <Link
              href="/blog/scuba-diving-murudeshwar-non-swimmers"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Non-Swimmers Diving Guide
            </Link>
            <Link
              href="/blog/best-time-scuba-diving-murudeshwar"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Best Season &amp; Visibility
            </Link>
            <Link
              href="/blog/scuba-diving-timings"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Boat Timings &amp; Schedule
            </Link>
            <Link
              href="/blog/scuba-diving-age-limit"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Age Limit &amp; Medical Rules
            </Link>
            <Link
              href="/blog/netrani-island-guide"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Netrani Island Guide
            </Link>
            <Link
              href="/blog/murudeshwar-scuba-diving-from-bangalore"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Bangalore to Murudeshwar Trip
            </Link>
            <Link
              href="/blog/beginner-scuba-diving-guide"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              First-Time Diver Checklist
            </Link>
            <Link
              href="/blog/murudeshwar-scuba-diving-safety"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
            >
              Safety Standards &amp; Equipment
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/5 text-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Murudeshwar Scuba Dive. All Rights Reserved. Netrani Adventures Murudeshwara Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
