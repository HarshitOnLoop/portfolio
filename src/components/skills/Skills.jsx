import React, { useEffect, useState } from "react";
import "./Skills.css";

function Skills({ popupContact_open }) {
  const [activeDetail, setActiveDetail] = useState("default");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false); // <-- track hover

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

  function getContrastColor(bgColor) {
    const c = bgColor.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.299 * r + 0.587 * g + 0.114 * b;
    return luma > 150 ? "#000" : "#fff";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(false);
      }, 250);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="what-we-do">
      <div className="parent">
        {/* INTRO */}
        <div className="div1">
          <div id="cssportal-grid">
            <div id="cdiv1">
              <section id="intro">
                <h1>
                  Hi, I am{" "}
                  <span style={{
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textDecorationStyle: "dashed",
                    textDecorationColor: "rgb(255, 255, 255)"
                  }}>
                    Harshit Sharma
                  </span>
                </h1>
                <p className="mhide">
                  I’m a 3rd-year BE student at Chitkara University with a passion
                  for Web Development, SEO, WordPress, and Digital Marketing. I’ve
                  worked on projects like video call apps, event websites, and
                  Android apps, and gained experience through internships in
                  WordPress development and nonprofit fundraising. Currently, I’m
                  learning React JS, C++, and DSA, and I’m excited to apply my
                  skills to create impactful and innovative projects.
                </p>
                <p className="phide">
                  I’m a 3rd-year BE student at Chitkara University, passionate about Web Development, SEO, WordPress, and Digital Marketing. I have experience building apps and websites and am currently learning React JS, C++, and DSA to create impactful projects.
                </p>
              </section>
            </div>
            <div id="cdiv2">
              <img src="a.png" alt="profile pic" />
            </div>
          </div>
        </div>

        {/* EXPERIENCE + QUOTE */}
        <div className="div3">
          <div className="stripe">
            <p>"It works… ship it!" 🚀</p>
          </div>
          <div className="bg-text">
            <p>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE ...</p>
            {/* ...repeat as before */}
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
                  onMouseEnter={() => { setActiveDetail(btn.id); setHoveredBtn(true); }}
                  onMouseLeave={() => { setActiveDetail("default"); setHoveredBtn(false); }}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Detail sections */}
            {[
              { id: "dev", text: "As a Software Developer Intern, I worked on building and optimizing applications..." },
              { id: "seo", text: "As an SEO Specialist, I improved website visibility..." },
              { id: "blogger", text: "As a WordPress Blogger, I created and managed SEO-optimized content..." },
              { id: "wpdev", text: "As a WordPress Developer Intern, I assisted in developing and customizing websites..." },
              { id: "fund", text: "As a Fundraising Intern, I supported fundraising campaigns..." },
              { id: "video", text: "As a Video Editor Intern, I edited videos using professional tools..." },
            ].map((exp) => (
              <div key={exp.id} id={exp.id} className={`experience-detail ${activeDetail === exp.id ? "active" : ""}`}>
                {exp.text}
              </div>
            ))}

            {/* Rotating quote hidden on hover */}
            {!hoveredBtn && (
              <div className="quote-box">
                <p
                  className={fade ? "fade" : ""}
                  style={{
                    backgroundColor: colors[quoteIndex],
                    color: getContrastColor(colors[quoteIndex]),
                    borderRadius: "8px",
                    display: "inline-block",
                    minWidth: "250px",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight:"1",
                    padding:"10px",
                    transition: "all 0.25s ease",
                  }}
                >
                  {quotes[quoteIndex]}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SKILLS */}
        <div className="div4">
          <div className="skill">
            <h1>skills</h1>
            <button className="button" onClick={popupContact_open}>
              <p className="button__text">
                {"I Love Web Dev ❤️".split("").map((ch, idx) => (
                  <span key={idx} style={{ "--index": idx }}>{ch}</span>
                ))}
              </p>
              <div className="button__circle">
                <svg viewBox="0 0 14 15" fill="none" className="button__icon" width="14">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"/>
                </svg>
              </div>
            </button>
          </div>

          <div className="skillsgrid">
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
      </div>
    </section>
  );
}

export default Skills;
