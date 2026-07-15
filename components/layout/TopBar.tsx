"use client";
import { Phone, MapPin, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 lg:px-8">

        {/* Logo — hidden only on tablet range (md to lg), visible on lg+ */}
        <div className="hidden lg:flex items-center gap-4">
          <img
            src="/images/logo.jpeg"
            alt="AG&R Law Firm"
            className="h-16 w-16 lg:h-20 lg:w-[87px] rounded-full border-2 border-[#C8A24D] shadow-md object-cover"
          />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 lg:gap-10 w-full">

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="bg-[#C8A24D]/10 p-3 rounded-full">
              <Phone size={18} className="text-[#C8A24D]" />
            </div>
            <div>
              <p className="font-semibold text-[#111827]">0301-4440346</p>
              <p className="text-xs text-gray-500">Hotline</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 sm:border-l border-gray-300 sm:pl-8">
            <div className="bg-[#C8A24D]/10 p-3 rounded-full">
              <MapPin size={18} className="text-[#C8A24D]" />
            </div>
            <div>
              <p className="font-semibold text-[#111827]">3rd Floor, Ali Plaza</p>
              <p className="text-xs text-gray-500">Location</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-center gap-3 sm:border-l border-gray-300 sm:pl-8">
            <div className="bg-[#C8A24D]/10 p-3 rounded-full">
              <Clock size={18} className="text-[#C8A24D]" />
            </div>
            <div>
              <p className="font-semibold text-[#111827]">Sun – Fri | 10:00 AM – 11:00 PM</p>
              <p className="text-xs text-gray-500">Office Hours</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}