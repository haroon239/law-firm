// components/sections/Footer.tsx
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const practiceAreas = [
  { label: "Corporate Law", href: "/practice-areas/corporate-law" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
  { label: "Property Law", href: "/practice-areas/property-law" },
  { label: "Civil Litigation", href: "/practice-areas/civil-litigation" },
  { label: "Intellectual Property", href: "/practice-areas/intellectual-property" },
];

const contactDetails = [
  { icon: MapPin, label: "Office Address", value: "3rd Floor, Ali Plaza, Pakistan" },
  { icon: Phone, label: "Phone", value: "+92 301 4440346" },
  { icon: Mail, label: "Email", value: "info@lawfirm.com" },
  { icon: Clock, label: "Office Hours", value: "Monday – Friday\n9:00 AM – 6:00 PM" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-amber-500/10 relative overflow-hidden">
      {/* decorative corner lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-28 h-28 border-t border-l border-amber-500/40 rotate-0" />
        <div className="absolute top-0 right-0 w-28 h-28 border-t border-r border-amber-500/40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative">
        {/* Main columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpeg"
                alt="AG&R Law Firm"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-amber-500/50 object-cover shrink-0"
              />
              <div>
                <p className="text-white font-serif text-lg sm:text-xl font-bold leading-tight">
                  AG&amp;R
                </p>
                <p className="text-[#C8A24D] text-xs sm:text-sm font-semibold tracking-wide">
                  Law Firm
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Providing trusted legal solutions with integrity, professionalism,
              and over 15 years of experience. We are committed to protecting
              our clients&apos; rights and achieving exceptional legal outcomes.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-amber-500/40 flex items-center justify-center text-[#C8A24D] hover:bg-[#a37b24] hover:text-neutral-900 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#C8A24D] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.label}>
                  <a
                    href={area.href}
                    className="flex items-center justify-between text-gray-400 text-sm hover:text-[#C8A24D] transition-colors duration-300 group"
                  >
                    {area.label}
                    <ChevronRight className="w-3.5 h-3.5 text-[#C8A24D] group-hover:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-5">
              Contact Information
            </h3>
            <div className="border border-amber-500/25 rounded-lg p-5 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-[#C8A24D] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-bold">{detail.label}</p>
                      <p className="text-gray-400 text-xs sm:text-sm whitespace-pre-line">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Secondary contact strip */}
        <div className="mt-12 sm:mt-14 border border-amber-500/20 rounded-xl px-6 sm:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={`strip-${detail.label}`} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#C8A24D] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-bold">{detail.label}</p>
                    <p className="text-gray-400 text-xs sm:text-sm whitespace-pre-line">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber-500/10 bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026 AG&amp;R Law Firm. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="/privacy-policy" className="text-gray-400 text-xs sm:text-sm hover:text-[#C8A24D] underline underline-offset-4 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 text-xs sm:text-sm hover:text-[#C8A24D] transition-colors duration-300">
              Terms &amp; Conditions
            </a>
            <a href="/cookie-policy" className="text-gray-400 text-xs sm:text-sm hover:text-[#C8A24D] transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}