"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sections from "../../app/data/PrivacyPolicyData";

export default function PrivacyPolicyPage({PolicyData}) {
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
        <aside className="md:sticky md:top-35 h-fit flex flex-col md:justify-center md:items-center
        md:pl-0 pl-4">
          {/* <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Privacy Policy
          </h2> */}

          <ul className="space-y-3 border-l pl-4 relative">
            {PolicyData.map((item) => (
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

        {/* ================= Content + Animation ================= */}
        <section className="md:pr-35 p-4 flex flex-col gap-10">
          {sections.map((data) => (
            <motion.div
              key={data.id}
              id={data.id}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="md:text-2xl text-xl font-semibold mb-4 text-gray-900">
                {data.title}
              </h3>
              <p className="text-gray-500 leading-relaxed md:text-base text-sm">
                {data.desc}
              </p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}



