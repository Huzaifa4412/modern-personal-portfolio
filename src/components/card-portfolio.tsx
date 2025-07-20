import React from "react";

// Main App component to display the profile card
export default function CodeProfile() {
  return (
    <div className="flex items-center justify-center bg-white p-4 font-sans dark:bg-zinc-950">
      <CoderProfileCard />
    </div>
  );
}

// The data for the code snippet remains the same
const coderData = {
  name: "Huzaifa Mukhtar",
  role: "Web & Python Developer",
  seniority: "Intermediate",
  location: "Pakistan",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Python",
    "TailwindCSS",
    "GSAP",
    "Framer Motion",
    "OpenAI SDK",
    "Sanity CMS",
    "Streamlit",
    "HTML",
    "CSS",
    "Node.js",
    "Web Scraping",
    "GitHub",
  ],
};

// The restored component that renders the styled code window without animation
const CoderProfileCard = () => {
  return (
    // Main container with gradient, border, and shadow - theme-aware
    <div className="relative mx-auto w-full max-w-2xl rounded-lg border border-zinc-300 bg-gradient-to-r from-zinc-100 to-zinc-200 shadow-lg dark:border-[#1b2c68a0] dark:from-[#000000] dark:to-[#0a0d37]">
      {/* Top gradient border element */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window Header */}
      <div className="flex items-center justify-between bg-zinc-200 px-4 py-5 lg:px-8 dark:bg-[#000000]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="font-mono text-xs text-zinc-600 dark:text-gray-400">
          coder.js
        </div>
      </div>

      {/* Code Content Area */}
      <div className="relative overflow-hidden border-t-[2px] border-zinc-300 px-4 py-4 lg:px-8 lg:py-8 dark:border-indigo-900">
        {/* Background blur effects */}
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-blue-600 opacity-10 blur-3xl filter"></div>
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-pink-600 opacity-10 blur-3xl filter"></div>

        <div className="relative flex">
          {/* Line Numbers */}
          <div className="hidden flex-col items-end pr-4 font-mono text-xs text-zinc-600 md:flex dark:text-gray-500">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed opacity-70 select-none">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Snippet with theme-aware colors */}
          <code className="w-full font-mono text-xs md:text-sm lg:text-base">
            <div>
              <span className="mr-2 text-pink-500 dark:text-pink-400">
                const
              </span>
              <span className="mr-2 text-violet-500 dark:text-violet-400">
                coder
              </span>
              <span className="mr-2 text-pink-500 dark:text-pink-400">=</span>
              <span className="text-zinc-600 dark:text-gray-400">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">name:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.name}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">role:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.role}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">seniority:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.seniority}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">location:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">
                {coderData.location}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">skills:</span>
              <span className="text-zinc-600 dark:text-gray-400">{"["}</span>
              <div className="flex flex-wrap pl-6">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-zinc-600 dark:text-gray-400">
                      &#39;
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      {skill}
                    </span>
                    <span className="text-zinc-600 dark:text-gray-400">
                      &#39;
                    </span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-zinc-600 dark:text-gray-400">
                        ,{" "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-zinc-600 dark:text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-gray-400">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      {/* Window Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-zinc-300 px-4 pt-3 pb-4 text-xs text-zinc-600 lg:px-8 dark:border-gray-800 dark:text-gray-500">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};
