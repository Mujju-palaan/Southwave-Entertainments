"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "collection", title: "Information We Collect" },
  { id: "usage", title: "How We Use Information" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "sharing", title: "Information Sharing" },
  { id: "security", title: "Data Security" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState("intro");

  /* -------- Scroll Spy -------- */
  useEffect(() => {
    const handler = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* -------- Smooth Scroll -------- */
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[25%_70%] gap-6">
        {/* ================= Sidebar ================= */}
        <aside className="md:sticky md:top-24 h-fit flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Privacy Policy
          </h2>

          <ul className="space-y-3 border-l pl-4 relative">
            {sections.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`block text-left text-sm w-full transition-colors ${
                    active === item.id
                      ? "text-indigo-600 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </button>

                {/* Active Indicator */}
                {active === item.id && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute -left-[17px] top-1 h-4 w-1 rounded-full bg-indigo-600"
                  />
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* ================= Content ================= */}
        <section className="md:pr-40 flex flex-col gap-10">
          <PolicySection id="intro" title="Introduction">
            We respect your privacy and are committed to protecting your personal
            data. This Privacy Policy explains how we handle your information when
            you use our services.
          </PolicySection>

          <PolicySection id="collection" title="Information We Collect">
            We may collect personal information such as name, email address,
            phone number, and usage data including interactions with our website.
          </PolicySection>

          <PolicySection id="usage" title="How We Use Information">
            Your data is used to provide services, improve user experience,
            communicate updates, and comply with legal obligations.
          </PolicySection>

          <PolicySection id="cookies" title="Cookies & Tracking">
            We use cookies and similar technologies to track activity, analyze
            trends, and enhance functionality.
          </PolicySection>

          <PolicySection id="sharing" title="Information Sharing">
            We do not sell your personal data. Information may be shared with
            trusted service providers or legal authorities when required.
          </PolicySection>

          <PolicySection id="security" title="Data Security">
            We implement industry-standard security measures to protect your
            information from unauthorized access.
          </PolicySection>

          <PolicySection id="contact" title="Contact Us">
            If you have any questions regarding this Privacy Policy, please
            contact us at <strong>privacy@example.com</strong>.
          </PolicySection>
        </section>
      </div>
    </main>
  );
}

/* ================= Animated Section ================= */

function PolicySection({ id, title, children }) {
  return (
    <motion.div
      id={id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-base">
        {children}
      </p>
    </motion.div>
  );
}
