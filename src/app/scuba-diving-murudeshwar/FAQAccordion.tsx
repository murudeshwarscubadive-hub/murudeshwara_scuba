"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => toggle(index)}
              className="w-full py-6 flex items-center justify-between text-left group"
              aria-expanded={isOpen}
              aria-label={`${isOpen ? "Collapse" : "Expand"}: ${item.question}`}
              type="button"
            >
              <span
                className={`text-lg font-medium transition-colors duration-300 ${
                  isOpen ? "text-[var(--netrani-blue)]" : "text-gray-800"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 ml-6 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--netrani-blue)] text-white rotate-180"
                    : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                }`}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-minus"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">Still have questions? We are here to help.</p>
        <a
          href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--netrani-blue)] font-bold hover:underline"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
}
