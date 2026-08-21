import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20scuba%20diving%20in%20Murudeshwar.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="w-6 h-6 fill-current transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.411 2.439 1.109 3.393l-.728 2.659 2.732-.716a5.727 5.727 0 0 0 2.654.66h.002c3.181 0 5.767-2.586 5.767-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.39 8.162c-.146.411-.749.771-1.092.812-.34.041-.679.233-2.19-.367-1.807-.716-2.92-2.56-3.011-2.68-.09-.12-.734-.976-.734-1.859 0-.883.456-1.318.616-1.48.163-.162.355-.203.474-.203.118 0 .237.003.34.007.109.004.254-.042.397.302.146.355.501 1.22.544 1.309.043.09.073.195.014.312-.06.117-.09.19-.178.293-.09.103-.189.23-.27.31-.09.09-.184.188-.08.365.105.178.468.771.999 1.246.686.614 1.264.805 1.442.894.178.09.282.076.388-.046.106-.122.457-.531.579-.711.122-.18.243-.151.411-.09.169.06 1.07.505 1.252.597.183.092.304.137.349.215.045.078.045.452-.101.863zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.117 1.515 5.86L0 24l6.337-1.663c1.7.925 3.645 1.463 5.663 1.463 6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.884 0-3.649-.508-5.176-1.393l-.371-.216-3.847.986.995-3.633-.243-.377C2.476 15.827 2 13.974 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
      {/* Tooltip on Hover */}
      <span className="absolute right-16 bg-[#00111F]/90 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
        Chat on WhatsApp
      </span>
    </a>
  );
}
