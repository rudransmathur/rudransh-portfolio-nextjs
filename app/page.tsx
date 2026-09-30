"use client";

import { useEffect, useState } from "react";

const github = "https://github.com/rudransmathur";
const linkedin = "https://linkedin.com/in/rudransh-mathur/";
const kaggle = "https://kaggle.com/rudranshmathur/code";
const leetcode = "https://leetcode.com/u/rudranshmathur/";
const email = "mailto:mathur.rudransh@gmail.com";

const projects = [
  {
    number: "01",
    title: "Engage2Value",
    type: "Machine Learning · Data Science",
    stack: ["Python", "Scikit-Learn", "NumPy", "Pandas"],
    description:
      `Predicted a customer's purchase value based on their multi-session behavior across digital touchpoints. Used Data Pre-Processing techniques like Encoding, Feature Extraction, Feature Selection, etc. to improve model performance.

Trained on various ensemble models like Random Forest Regressor, CatBoost Regressor, XGBoost and AdaBoost to evaluate model's performance on test dataset.

Got a R2 Score of 0.62 on test dataset using XGBoost and ranked 190 out of 1700 participants.`,
    highlight: "R2 Score of 0.62  ·  Rank 190/1700",
    link: "https://github.com/rudransmathur/Engage2Value",
  },
  {
    number: "02",
    title: "Messy Mashup",
    type: "Audio AI · Deep Learning",
    stack: ["Python", "Hugging Face", "Librosa", "PyTorch"],
    description:
      `Predicted Genre class of the music dataset under realistic and noisy mixing conditions.

      Used ResNet, EfficientNet, Convolutional Recurrent Neural Networks (CRNNs) combining CNN and LSTM layers, as well as transformer-based audio models such as HuBERT and Audio Spectrogram Transformer (AST) to tackle the problem.

      Among these models, AST gave the best accuracy of 91% and least validation loss of 0.41.
`,
    highlight: "91% accuracy · AST",
    link: "https://github.com/rudransmathur/MessyMashupProject",
  },
  {
    number: "03",
    title: "Hospital Management System",
    type: "Full Stack · Backend",
    stack: ["Flask", "Vue.js", "Redis", "Celery"],
    description:
      `Developed a full-stack Hospital Management System using Flask, Vue.js, SQLite, Redis, and Celery, 

      Implemented role-based access control, REST APIs, caching, and automated background tasks for efficient healthcare operations.
`,
    highlight: "Redis + Celery",
    link: "https://github.com/rudransmathur/HMS_MAD_2",
  },
  {
    number: "04",
    title: "Influencer Sponsorship Platform",
    type: "Web · Social / Content",
    stack: ["Flask", "SQLAlchemy", "REST APIs", "HTML/CSS"],
    description:
      `Developed a web-based application that allows sponsors and influencers to create and manage advertising campaigns. 

The application required features such as user authentication, campaign and ad request management, and search functionalities for sponsors and influencers.
`,
    highlight: "Backend development",
    link: "https://github.com/rudransmathur/influencer-sponsor-platf",
  },
  {
    number: "05",
    title: "LLM Assignment Solver",
    type: "Generative AI · Automation",
    stack: ["OpenAI", "FastAPI", "Python", "LLMs", "Vercel"],
    description:
      "Automated the solving of graded assignments using an LLM-powered API that processes questions and file attachments, through data processing and large language models to replicate human problem-solving capabilities.",
    highlight: "LLM-powered workflow",
    link: "https://github.com/rudransmathur/TDS_LLM_app",
  },
  {
    number: "06",
    title: "Churn Prediction Model",
    type: "Machine Learning · Predictive Analytics",
    stack: ["Scikit-Learn", "Flask", "Python"],
    description:
      "Built a Flask-based web app to predict customer churn using Random Forest, Logistic Regression, and KNN. Combined the predictions manually through accuracy-weighted voting and enabled real-time predictions through HTML interface.",
    highlight: "Churn prediction",
    link: "https://github.com/Shru-10p/ChurnPrediction",
  },
];

const skills = [
  ["Languages", "Python · C++ · Java · C · JavaScript · SQL · Bash"],
  ["AI / GenAI", "LLMs · Transformers · LangChain · Prompt Engineering · Agents"],
  ["Machine Learning", "Deep Learning · CNNs · RNN & LSTM · Attention Transformers · OOD Detection"],
  ["ML Frameworks", "PyTorch · Torchvision · Torchaudio · Hugging Face · Scikit-learn · Weights and Biases"],
  ["Web Development", "FastAPI · Flask · REST APIs · SQLAlchemy · Redis · Celery"],
  ["Mathematics", "Linear Algebra · Multivariate Analysis · Statistics · Probability"],
  ["Software Development", "Git · Docker · Linux · Object Oriented Programming · Data Structures & Algorithms"],
];

const experience = [
  {
    date: "May 2026 — Jul 2026",
    role: "Intern · CSIR-National Aerospace Laboratories",
    tag: "COMPUTER VISION",
    bullets: [
      "Experimented and developed a computer vision model for automated dent localization on surfaces using multi-camera images and image stitching techniques.",
      "Developed and evaluated various tools and techniques such as  SIFT, SURF, ORB, and LightGlue for feature extraction, image matching, and multi-camera stitching."
    ],
  },
  {
    date: "May 2025 — Aug 2025",
    role: "Research Intern · Medical Deep Learning & AI Lab, IIT Bombay",
    tag: "MEDICAL AI",
    bullets: [
      "Competed in the Mitosis Domain Generalization 2025 challenge on AI-assisted cancer diagnosis where I trained numerous Convolution neural network models like ResNet, ConvNext, EfficientNet, MobileNet on 5000 long mitotic figure datasets using Torchvision.",
      "Ranked 11th out of 32 teams in Mitosis Detection Track with an F1-Score of 0.76 and ranked 13th out of 35 teams in Atypical Mitosis Classification Track with a Balanced Accuracy of 87%",
    ],
  },
  {
    date: "Dec 2025",
    role: "Research Intern · Medical Deep Learning & AI Lab, IIT Bombay",
    tag: "UNCERTAINTY / OOD",
    bullets: [
      "Collaborated on a Post-Hoc Uncertainty Estimation research project for deep neural networks.",
      "Designed and evaluated multiple meta-model architectures using ResNet backbones for out-of-distribution (OOD) datasets like SVHN, Fashion MNIST, ImageNET-C.",
      "Conducted experiments on entropy-based uncertainty metrics like Max Probability and Entropy across in-domain and OOD datasets."
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
          const ids = ["home", "about", "achievements", "projects", "experience", "skills", "contact"];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 150 && r.bottom >= 150;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          Rudrash Mathur<span>.</span>
        </button>

        <button
          className="menuButton"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          {["home", "about", "achievements", "projects", "experience", "skills", "contact"].map((id) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              {id}
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">
              <span className="pulse" /> AI / ML · Agentic AI · Backend Systems
            </div>
            <h1>
              Rudransh Mathur
            </h1>
            <div className="heroEducation" aria-label="Education">
              <div className="educationItem">
                <span>2023 - 2027</span>
                <strong>B.Tech Mathematics &amp; Computing</strong>
                <span>Manipal Institute of Technology</span>
              </div>
              <div className="educationItem">
                <span>2023 - 2028</span>
                <strong>BS Data Science &amp; Applications</strong>
                <span>IIT Madras</span>
                <div className="educationCredentials">
                  <span>Diploma in Programming</span>
                  <span>Diploma in Data Science</span>
                </div>
              </div>
            </div>
            <p className="heroCopy heroSummary">
              I enjoy building practical solutions across AI, backend systems
              and data, from REST APIs to machine learning and intelligent
              applications.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => scrollTo("projects")}>
                Explore my work <span>↗</span>
              </button>
              <a className="secondary" href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span>↗</span>
              </a>
              <a className="secondary" href={github} target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
              <a className="secondary" href={kaggle} target="_blank" rel="noreferrer">
                Kaggle <span>↗</span>
              </a>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="orb orbOne" />
            <div className="orb orbTwo" />
            <div className="gridSphere">
              <div className="sphereLine l1" />
              <div className="sphereLine l2" />
              <div className="sphereLine l3" />
              <div className="sphereLine l4" />
              <div className="sphereLine l5" />
              <div className="sphereDot d1" />
              <div className="sphereDot d2" />
              <div className="sphereDot d3" />
              <div className="sphereDot d4" />
            </div>
            <div className="codeFloat">
              <span>01</span>
              <span>model.fit()</span>
              <span>→ deploy()</span>
            </div>
          </div>
        </div>

        <div className="scrollHint">SCROLL TO EXPLORE ↓</div>
      </section>
      
      <section id="about" className="section aboutSection">
        <div className="aboutLabel">01 — ABOUT</div>
        <div className="aboutContent">
          <h2>
            Curious by default.
            <br />
            <span>Hands-on by choice.</span>
          </h2>
          <p>
            I&apos;m pursuing a B.Tech in Mathematics and Computing at Manipal
            Institute of Technology alongside a BS in Data Science and
            Applications from IIT Madras.
          </p>
          <p>
            My interests sit at the intersection of machine learning,
            generative AI, computer vision and software engineering. I enjoy
            taking an unfamiliar problem, learning what I need, building a
            working prototype and then improving it through experimentation.
          </p>
          <div id="achievements" className="achievementHeader">
            <p className="sectionKicker">SELECTED RESULTS</p>
            <h2>Achievements.</h2>
          </div>
          <div className="achievementGrid">
            <article className="achievementCard">
              <div className="achievementTop">
                <span className="achievementIndex">01</span>
                <span className="achievementType">AI RESEARCH</span>
              </div>
              <h3>Mitosis Domain Generalization 2025 Challenge</h3>
              <div className="achievementResult">
                <strong>0.76</strong>
                <span>F1-score · 11th / 32 teams</span>
              </div>
            </article>
            <article className="achievementCard">
              <div className="achievementTop">
                <span className="achievementIndex">02</span>
                <span className="achievementType">KAGGLE COMPETITION</span>
              </div>
              <h3>Engage2Value</h3>
              <div className="achievementResult">
                <strong>190th</strong>
                <span>out of 1,700</span>
              </div>
            </article>
            <article className="achievementCard">
              <div className="achievementTop">
                <span className="achievementIndex">03</span>
                <span className="achievementType">KAGGLE COMPETITION</span>
              </div>
              <h3>Messy Mashup</h3>
              <div className="achievementResult">
                <strong>91%</strong>
                <span>Accuracy · 200th out of 1,200</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section workSection">
        <div className="sectionHead">
          <div>
            <p className="sectionKicker">Projects</p>
            <h2>Things I&apos;ve built.</h2>
          </div>
        </div>

        <div className="projectGrid">
          {projects.map((p) => (
            <article className="projectCard" key={p.number}>
              <div className="projectTop">
                <span className="projectNumber">{p.number}</span>
                <span className="projectType">{p.type}</span>
              </div>
              <h3>{p.title}</h3>
              <ul className="projectDescription">
                {p.description
                  .split(/\n\s*\n/)
                  .map((point, index) => (
                    <li key={`${p.number}-${index}`}>{point.trim()}</li>
                  ))}
              </ul>
              <div className="projectBottom">
                <div className="chips">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                  ↗
                </a>
              </div>
              <div className="highlight">{p.highlight}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section darkSection">
        <div className="sectionHead">
          <div>
            <p className="sectionKicker">EXPERIENCE</p>
            <h2>My journey.</h2>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <article className="timelineItem" key={`${item.role}-${item.date}`}>
              <div className="timelineRail">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="timelineBody">
                <div className="timelineMeta">
                  <span>{item.date}</span>
                  <span className="tag">{item.tag}</span>
                </div>
                <h3>{item.role}</h3>
                <ul>
                  {item.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHead">
          <div>
            <p className="sectionKicker">TOOLBOX</p>
            <h2>My Skills.</h2>
          </div>
        </div>
        <div className="skillsGrid">
          {skills.map(([title, text]) => (
            <div className="skillRow" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div className="contactGlow" />
        <p className="sectionKicker">GET IN TOUCH</p>
        <h2>Let&apos;s build something.</h2>
        <p>
          Open to AI/ML, software engineering and research opportunities.
        </p>
        <a className="emailLink" href={email}>
          mathur.rudransh@gmail.com <span>↗</span>
        </a>

        <div className="socials">
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={kaggle} target="_blank" rel="noreferrer">Kaggle</a>
          <a href={leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Rudransh Mathur</span>
        <span>Built with Next.js · Designed for the web</span>
      </footer>
    </main>
  );
}