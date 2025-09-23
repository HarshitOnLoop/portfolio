import React, { useEffect, useState } from "react";
import "./Skills.css";

function Skills({ popupContact_open }) {
  const [activeDetail, setActiveDetail] = useState("default");
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Quotes + colors
  const quotes = [
    "There’s no place like 127.0.0.1.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "Programmer: A machine that turns coffee into code.",
    "“It works on my machine” is the best excuse ever.",
    "Software and cathedrals are much the same – first we build them, then we pray.",
    "Algorithm: Word used by programmers when they don’t want to explain what they did.",
    "Real programmers count from 0.",
    "In order to understand recursion, one must first understand recursion.",
    "Premature optimization is the root of all evil.",
  ];

  const colors = [
    "#FF204E", "#FDB827", "#000000", "#4F200D", "#410445",
    "#F94C10", "#f72585", "#3a0ca3", "#4361ee", "#ff6700"
  ];

  // Rotate quote every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="what-we-do">
      <div className="parent">
        {/* === INTRO === */}
        <div className="div1">
          <div id="cssportal-grid">
            <div id="cdiv1">
              <section id="intro">
                <h1>
                  Hi, I am{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                      textDecorationStyle: "dashed",
                      textDecorationColor: "rgb(255, 255, 255)",
                    }}
                  >
                    Harshit Sharma
                  </span>
                </h1>
                <p>
                  I’m a 3rd-year BE student at Chitkara University with a passion
                  for Web Development, SEO, WordPress, and Digital Marketing. I’ve
                  worked on projects like video call apps, event websites, and
                  Android apps, and gained experience through internships in
                  WordPress development and nonprofit fundraising. Currently, I’m
                  learning React JS, C++, and DSA, and I’m excited to apply my
                  skills to create impactful and innovative projects.
                </p>
              </section>
            </div>
            <div id="cdiv2">
              <img src="a.png" alt="profile pic" />
            </div>
          </div>
        </div>

        {/* === EXPERIENCE === */}
        <div className="div3">
          <div className="stripe">
            ......................................................................................That what i have done
          </div>
          <div className="bg-text">
            <p>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE ...</p>
          </div>

          <div id="star">
            <img src="star.png" alt="star" />
            <h1>Experience</h1>
          </div>

          <div className="experience-container">
            <div className="button-row">
              {[
                { id: "dev", label: "Software Developer Intern" },
                { id: "seo", label: "SEO Specialist" },
                { id: "blogger", label: "WordPress Blogger" },
                { id: "wpdev", label: "WordPress Developer Intern" },
                { id: "fund", label: "Fundraising Intern" },
                { id: "video", label: "Video Editor Intern" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  className="exp-btn"
                  onMouseEnter={() => setActiveDetail(btn.id)}
                  onMouseLeave={() => setActiveDetail("default")}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div id="dev" className={`experience-detail ${activeDetail === "dev" ? "active" : ""}`}>
              As a <b>Software Developer Intern</b>, I worked on building and optimizing applications...
            </div>
            <div id="seo" className={`experience-detail ${activeDetail === "seo" ? "active" : ""}`}>
              As an <b>SEO Specialist</b>, I improved website visibility...
            </div>
            <div id="blogger" className={`experience-detail ${activeDetail === "blogger" ? "active" : ""}`}>
              As a <b>WordPress Blogger</b>, I created and managed SEO-optimized content...
            </div>
            <div id="wpdev" className={`experience-detail ${activeDetail === "wpdev" ? "active" : ""}`}>
              As a <b>WordPress Developer Intern</b>, I assisted in developing and customizing websites...
            </div>
            <div id="fund" className={`experience-detail ${activeDetail === "fund" ? "active" : ""}`}>
              As a <b>Fundraising Intern</b>, I supported fundraising campaigns...
            </div>
            <div id="video" className={`experience-detail ${activeDetail === "video" ? "active" : ""}`}>
              As a <b>Video Editor Intern</b>, I edited videos using professional tools...
            </div>

            {/* Default rotating quote */}
            <div id="default" className={`experience-detail ${activeDetail === "default" ? "active" : ""}`}>
              <p
                id="quote"
                style={{
                  backgroundColor: colors[quoteIndex],
                  transition: "opacity 0.5s, transform 0.5s",
                }}
              >
                {quotes[quoteIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* === SKILLS === */}
        <div className="div4">
          <div className="skill">
            <h1>skills</h1>
            <button className="button" onClick={popupContact_open}>
              <p className="button__text">
                {"I Love Web Dev ❤️".split("").map((ch, idx) => (
                  <span key={idx} style={{ "--index": idx }}>
                    {ch}
                  </span>
                ))}
              </p>
              <div className="button__circle">
                <svg viewBox="0 0 14 15" fill="none" className="button__icon" width="14">
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
                <svg viewBox="0 0 14 15" fill="none" width="14" className="button__icon button__icon--copy">
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>

        <div className="sall" id="s1">HTML</div>
        <div className="sall" id="s2">CSS</div>
        <div className="sall" id="s3">JavaScript</div>
        <div className="sall" id="s4">React</div>
        <div className="sall" id="s5">Node.js</div>
        <div className="sall" id="s6">Git</div>
        <div className="sall" id="s7">SQL</div>
        <div className="sall" id="s8">Figma</div>

       


            </div>
      </div>
    </section>
  );
}

export default Skills;
