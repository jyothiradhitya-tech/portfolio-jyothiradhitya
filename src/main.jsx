import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Code2, Github, Linkedin, Mail,
  Menu, X, ExternalLink, FileText, Sparkles, Database, Globe, Terminal,
  Cpu, Layers3, Workflow, GraduationCap, BriefcaseBusiness, Award,
  ChevronRight, Send, MapPin, CheckCircle2, Languages, Lock, Unlock,
  Upload, Download, Eye, ShieldCheck, Check, RotateCcw, AlertCircle,
  Camera, User, Sparkle
} from "lucide-react";
import "./styles.css";

const initialProfile = {
  name: "Jyothi Radhithya",
  fullName: "Nali Jyothiradhitya",
  role: "Aspiring Generative AI Developer & ML Engineer",
  location: "Nagari, Andhra Pradesh, India",
  email: "jyothiradhithya269@gmail.com",
  github: "https://github.com/jyothiradhitya-tech",
  linkedin: "https://linkedin.com/in/jyothi-radhithya-861303307",
  resumePath: "/resume.pdf",
  photoPath: "/photo.jpg",
  intro: "Results-oriented Computer Science Graduate (AI & ML) with strong technical competence in Python, Machine Learning architectures, FastAPI backend development, and full-stack web solutions. Demonstrated capability in developing multimodal synthetic media detection systems with 96%+ forensic accuracy and production-ready prediction pipelines."
};

const initialProjects = [
  {
    id: "truthlens",
    number: "01",
    name: "TruthLens",
    type: "MULTIMODAL AI · CREDIBILITY & DEEPFAKE FORENSICS",
    role: "Lead Developer",
    description: "Architected a multimodal deepfake verification platform analyzing visual artifacts, acoustic phonemes, and text claims, reaching 96.4% detection reliability. Integrated OCR and semantic vector embeddings for cross-lingual claim verification, slashing automated processing time by 30%.",
    tags: ["Python", "Multimodal AI", "Deepfake Forensics", "OCR", "Vector Embeddings", "FastAPI", "NLP"],
    detail: "96.4% Forensic Detection Reliability · 30% Accelerated Verification Pipeline",
    status: "Lead Developer",
    icon: BrainCircuit,
    repoUrl: "https://github.com/jyothiradhitya-tech/TruthLens",
    demoUrl: ""
  },
  {
    id: "smartlender",
    number: "02",
    name: "SmartLender",
    type: "MACHINE LEARNING · PREDICTIVE ANALYTICS",
    role: "ML Developer",
    description: "Built and deployed an automated loan classification engine processing applicant financial parameters, attaining an 88% prediction accuracy. Implemented automated missing-value imputation and outlier suppression pipelines, reducing false positive approvals by 20%.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Feature Pipelines", "Classification"],
    detail: "88% Prediction Accuracy · 20% Reduction in False Positives",
    status: "ML Developer",
    icon: Layers3,
    repoUrl: "https://github.com/jyothiradhitya-tech/SmartLender",
    demoUrl: ""
  },
  {
    id: "pg-search",
    number: "03",
    name: "PG Search & Accommodation Platform",
    type: "FULL-STACK · WEB APPLICATION",
    role: "Full-Stack Developer",
    description: "Constructed an accommodation portal featuring secure role-based portals (User, Property Owner, Administrator) managing 50+ listings. Streamlined relational booking schemas and inquiry submission workflows, delivering sub-second page load times.",
    tags: ["JavaScript", "PHP", "MySQL", "REST APIs", "Bootstrap", "RBAC Auth"],
    detail: "3 Role-Based Portals · 50+ Listings · Sub-Second Query & Page Speeds",
    status: "Full-Stack Developer",
    icon: Globe,
    repoUrl: "https://github.com/jyothiradhitya-tech/PG-Search-Platform",
    demoUrl: ""
  }
];

const initialCertificates = [
  {
    id: "smartbridge",
    name: "Applied Machine Learning Specialization",
    issuer: "SmartBridge Education Services Pvt. Ltd.",
    type: "AI/ML Internship Specialization",
    date: "2024",
    skills: ["Automated Data Pipelines", "Feature Scaling", "Supervised ML", "Model Evaluation"],
    fileUrl: "/certificates/smartbridge-aiml.pdf"
  },
  {
    id: "vaultsphere",
    name: "Full-Stack Web Development Apprenticeship",
    issuer: "Vaultsphere AI Technologies Pvt. Ltd.",
    type: "Web & API Apprenticeship Credential",
    date: "2024",
    skills: ["RESTful APIs", "PHP", "JavaScript", "MySQL", "Database Query Optimization"],
    fileUrl: "/certificates/vaultsphere-fullstack.pdf"
  },
  {
    id: "udemy-python",
    name: "Python Programming Specialization",
    issuer: "Udemy",
    type: "Professional Certification",
    date: "2024",
    skills: ["Python Architecture", "Data Structures", "Algorithms", "Object-Oriented Design"],
    fileUrl: ""
  }
];

const skills = [
  {
    title: "Generative AI & LLM Stack",
    icon: Sparkles,
    items: [
      "LLMs & Transformers",
      "Prompt Engineering",
      "OpenAI & Gemini APIs",
      "LangChain",
      "RAG Architecture",
      "Embeddings & Vector DBs",
      "LangGraph & AI Agents"
    ]
  },
  {
    title: "Backend, NLP & Core ML",
    icon: BrainCircuit,
    items: [
      "FastAPI",
      "REST APIs",
      "NLP",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Node.js"
    ]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "SQL"]
  },
  {
    title: "Databases & Web Technologies",
    icon: Globe,
    items: ["MySQL", "Angular", "HTML5", "CSS3", "Bootstrap", "PHP"]
  },
  {
    title: "Developer Tools & Environment",
    icon: Terminal,
    items: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter Notebook", "XAMPP"]
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    items: [
      "Complex Problem-Solving",
      "Team Collaboration",
      "Agile Delivery",
      "Technical Communication"
    ]
  }
];

const experiences = [
  {
    id: "smartbridge",
    period: "Internship",
    company: "SmartBridge Education Services Pvt. Ltd.",
    role: "AI / ML Intern",
    certId: "smartbridge",
    certLabel: "View Internship Certificate",
    icon: BrainCircuit,
    highlights: [
      "Engineered automated data preprocessing and feature scaling pipelines across 10,000+ dataset records, slashing data preparation time by 35% and improving feature evaluation accuracy by 18%.",
      "Developed and deployed 6+ supervised machine learning models, resulting in a 15% acceleration in model convergence speed and delivering an 89% validation accuracy across 12+ test benchmarks."
    ],
    tags: ["Python", "Machine Learning", "Data Preprocessing", "Feature Scaling", "Model Evaluation"]
  },
  {
    id: "vaultsphere",
    period: "Apprenticeship",
    company: "Vaultsphere AI Technologies Pvt. Ltd.",
    role: "Full-Stack Web Development Apprenticeship",
    certId: "vaultsphere",
    certLabel: "View Apprenticeship Certificate",
    icon: BriefcaseBusiness,
    highlights: [
      "Designed and deployed 4 responsive web application modules and 12+ RESTful endpoints using PHP, JavaScript, and MySQL, serving 500+ users while maintaining a 100% on-time milestone delivery.",
      "Optimized 15+ backend relational database queries and payload structures, resulting in a 25% reduction in API response latency and improving client load speeds by 20%."
    ],
    tags: ["PHP", "JavaScript", "MySQL", "REST APIs", "Database Optimization", "Full-Stack"]
  }
];

const education = [
  {
    year: "Expected 2027",
    degree: "B.Tech in Computer Science (CAI)",
    institution: "Siddharth Institute of Engineering and Technology, Puttur",
    score: "CGPA: 8.4",
    icon: GraduationCap
  },
  {
    year: "2023",
    degree: "Intermediate (MPC)",
    institution: "Sri Sai Vivekananda Junior College, Nagari",
    score: "Score: 94%",
    icon: GraduationCap
  },
  {
    year: "2021",
    degree: "SSC (Secondary School Certificate)",
    institution: "Govt. High School, Nagari",
    score: "Score: 89%",
    icon: GraduationCap
  }
];

const languages = ["English", "Telugu", "Tamil"];
const competencies = [
  "Complex Problem-Solving",
  "Team Collaboration",
  "Agile Delivery",
  "Technical Communication"
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

// High-DPI AI Neural Synapse & Quantum Signal Animation
function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    initCanvas();

    const handleResize = () => {
      initCanvas();
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: null, y: null, radius: 170 };
    const ripples = [];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        maxRadius: 180,
        opacity: 0.65
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    const particleCount = Math.min(Math.floor(width / 20), 75);
    const particles = [];
    const colorThemes = [
      { r: 232, g: 93, b: 69 },   // Coral
      { r: 13, g: 79, b: 87 },     // Deep Teal
      { r: 255, g: 115, b: 92 },  // Electric Coral
      { r: 35, g: 125, b: 138 }   // Aqua Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      const color = colorThemes[Math.floor(Math.random() * colorThemes.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2.4 + 1.2,
        baseAlpha: Math.random() * 0.35 + 0.35,
        color,
        pulseSpeed: Math.random() * 0.025 + 0.015,
        pulseVal: Math.random() * Math.PI * 2
      });
    }

    // Dynamic Neural Signals (Data Packets moving along synapses)
    const signals = [];
    const spawnSignal = (p1, p2) => {
      if (signals.length < 18 && Math.random() < 0.07) {
        signals.push({
          x1: p1.x,
          y1: p1.y,
          x2: p2.x,
          y2: p2.y,
          progress: 0,
          speed: Math.random() * 0.022 + 0.014,
          color: p1.color
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Expanding click shockwaves
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 4;
        rip.opacity -= 0.015;

        if (rip.opacity <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 93, 69, ${rip.opacity * 0.5})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Push nearby nodes with shockwave
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - rip.x;
          const dy = p.y - rip.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - rip.radius) < 28) {
            p.x += (dx / (dist || 1)) * 2.2;
            p.y += (dy / (dist || 1)) * 2.2;
          }
        }
      }

      // Update & draw nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.18;

        // Soft outer halo glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.28})`;
        ctx.fill();

        // Center core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.fill();

        // Magnetic connection to cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(232, 93, 69, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            p.x += dx * 0.009;
            p.y += dy * 0.009;
          }
        }

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const lineAlpha = (1 - dist / 135) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(13, 79, 87, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();

            spawnSignal(p, p2);
          }
        }
      }

      // Draw firing neural signals
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const currX = sig.x1 + (sig.x2 - sig.x1) * sig.progress;
        const currY = sig.y1 + (sig.y2 - sig.y1) * sig.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${sig.color.r}, ${sig.color.g}, ${sig.color.b}, 0.88)`;
        ctx.shadowColor = `rgba(${sig.color.r}, ${sig.color.g}, ${sig.color.b}, 0.95)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" />;
}

// Cryptographic One-Way SHA-256 Hash of Owner Passcode
// Plaintext passcode is NEVER stored in the client bundle
const SEC_AUTH_HASH = "131f413f89bd40363bd9cb53b4ff86ac8867de7647106ec6e0f1e37b9b23f817";

async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function App() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("jyothi_profile");
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [photoData, setPhotoData] = useState(() => {
    return localStorage.getItem("jyothi_photo") || profile.photoPath || "/photo.jpg";
  });

  const [photoError, setPhotoError] = useState(false);

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("jyothi_projects");
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [certificates, setCertificates] = useState(() => {
    const saved = localStorage.getItem("jyothi_certificates");
    if (!saved) return initialCertificates;
    try {
      const parsed = JSON.parse(saved);
      return initialCertificates.map((init) => {
        const found = parsed.find((c) => c.id === init.id);
        return {
          ...init,
          fileUrl: (found && found.fileUrl) ? found.fileUrl : init.fileUrl
        };
      });
    } catch {
      return initialCertificates;
    }
  });

  const [resumeData, setResumeData] = useState(() => {
    return localStorage.getItem("jyothi_resume") || "";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Modals state
  const [activeCert, setActiveCert] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [adminAuthed, setAdminAuthed] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState("");
  const [adminTab, setAdminTab] = useState("photo");
  const [adminError, setAdminError] = useState("");
  const [saveToast, setSaveToast] = useState("");

  const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const openCertificate = (certIdOrObj) => {
    if (typeof certIdOrObj === "string") {
      const found = certificates.find((c) => c.id === certIdOrObj);
      if (found) setActiveCert(found);
    } else {
      setActiveCert(certIdOrObj);
    }
  };

  // Persistent Security Lockout State
  const [cooldownTime, setCooldownTime] = useState(() => {
    const lockUntil = Number(localStorage.getItem("_sec_lock_ts") || 0);
    const remaining = Math.ceil((lockUntil - Date.now()) / 1000);
    return remaining > 0 ? remaining : 0;
  });

  const [secretClicks, setSecretClicks] = useState(0);

  useEffect(() => {
    if (cooldownTime <= 0) return;
    const timer = setInterval(() => {
      setCooldownTime((prev) => {
        if (prev <= 1) {
          localStorage.removeItem("_sec_lock_ts");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownTime]);

  // Stealth Access Trigger 1: Global Shortcut Ctrl+Shift+O or Cmd+Shift+O
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "O" || e.key === "o")) {
        e.preventDefault();
        setAdminModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Stealth Access Trigger 2: URL Hash detection (#owner or #security)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#owner" || window.location.hash === "#security") {
        setAdminModalOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Stealth Access Trigger 3: Secret triple-click on footer copyright
  const handleSecretTrigger = () => {
    const next = secretClicks + 1;
    if (next >= 3) {
      setAdminModalOpen(true);
      setSecretClicks(0);
    } else {
      setSecretClicks(next);
      setTimeout(() => setSecretClicks(0), 1200);
    }
  };

  // Cryptographic Passcode Verification (SHA-256)
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (cooldownTime > 0) return;

    try {
      const inputHash = await sha256(adminPasscode.trim());
      if (inputHash === SEC_AUTH_HASH) {
        setAdminAuthed(true);
        setAdminError("");
        localStorage.removeItem("_sec_fail_count");
        localStorage.removeItem("_sec_lock_ts");
        setAdminPasscode("");
      } else {
        const failCount = Number(localStorage.getItem("_sec_fail_count") || 0) + 1;
        localStorage.setItem("_sec_fail_count", failCount);

        if (failCount >= 8) {
          const lockDuration = 300; // 5 minutes
          localStorage.setItem("_sec_lock_ts", Date.now() + lockDuration * 1000);
          setCooldownTime(lockDuration);
          setAdminError("Maximum attempts exceeded. Security cooldown active for 5 minutes.");
        } else if (failCount >= 5) {
          const lockDuration = 60; // 60 seconds
          localStorage.setItem("_sec_lock_ts", Date.now() + lockDuration * 1000);
          setCooldownTime(lockDuration);
          setAdminError("Too many incorrect attempts. Security lockout active for 60 seconds.");
        } else {
          setAdminError("Access denied. Invalid security key.");
        }
        setAdminPasscode("");
      }
    } catch {
      setAdminError("Cryptographic verification failed.");
      setAdminPasscode("");
    }
  };

  // Upload Photo Handler
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPhotoData(dataUrl);
      setPhotoError(false);
      localStorage.setItem("jyothi_photo", dataUrl);
      setSaveToast("Profile photo uploaded successfully!");
      setTimeout(() => setSaveToast(""), 3000);
    };
    reader.readAsDataURL(file);
  };

  // Upload Resume Handler
  const handleResumeUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setResumeData(dataUrl);
      localStorage.setItem("jyothi_resume", dataUrl);
      setSaveToast("Resume uploaded successfully!");
      setTimeout(() => setSaveToast(""), 3000);
    };
    reader.readAsDataURL(file);
  };

  // Upload Certificate Handler
  const handleCertificateUpload = (certId, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const updated = certificates.map((c) =>
        c.id === certId ? { ...c, fileUrl: dataUrl } : c
      );
      setCertificates(updated);
      localStorage.setItem("jyothi_certificates", JSON.stringify(updated));
      setSaveToast("Certificate document saved!");
      setTimeout(() => setSaveToast(""), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleProjectRepoChange = (projectId, field, value) => {
    const updated = projects.map((p) =>
      p.id === projectId ? { ...p, [field]: value } : p
    );
    setProjects(updated);
    localStorage.setItem("jyothi_projects", JSON.stringify(updated));
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all uploaded data and links to defaults?")) {
      localStorage.removeItem("jyothi_photo");
      localStorage.removeItem("jyothi_resume");
      localStorage.removeItem("jyothi_projects");
      localStorage.removeItem("jyothi_certificates");
      localStorage.removeItem("jyothi_profile");
      setPhotoData("/photo.jpg");
      setPhotoError(false);
      setResumeData("");
      setProjects(initialProjects);
      setCertificates(initialCertificates);
      setProfile(initialProfile);
      setSaveToast("Reset to initial defaults.");
      setTimeout(() => setSaveToast(""), 3000);
    }
  };

  const activeResumeUrl = resumeData || profile.resumePath;

  return (
    <div className="site-shell">
      {/* Dynamic Animated Background Layers */}
      <div className="bg-grid-pattern" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <NeuralBackground />

      {/* TOPBAR */}
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">{"<"}</span> {profile.name.split(" ")[0]}
          <span className="brand-dot">.</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <button
            className="nav-cta"
            onClick={() => setResumeModalOpen(true)}
            style={{ background: "none", cursor: "pointer" }}
          >
            <FileText size={14} /> Resume <Eye size={12} />
          </button>
        </nav>
        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO SECTION WITH TOP PROFILE PHOTO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" /> OPEN TO ENTRY-LEVEL & INTERNSHIP ROLES
            </div>
            <p className="hero-kicker">HELLO, WORLD. I'M</p>
            <h1>
              {profile.name}
              <span className="hero-period">.</span>
            </h1>
            <h2 className="hero-role">
              Building <span>Generative AI</span>
              <br className="desktop-break" /> & high-performance ML systems.
            </h2>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore Selected Work <ArrowUpRight size={17} />
              </a>
              <button
                className="button button-quiet"
                onClick={() => setResumeModalOpen(true)}
              >
                <FileText size={16} /> View & Download Resume
              </button>
              <a className="button button-quiet" href="#contact">
                Let's connect <ChevronRight size={17} />
              </a>
            </div>
            <div className="social-row">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub: jyothiradhitya-tech"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn: jyothi-radhithya"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Job Opportunity - AI & ML Engineer")}`}
                target="_blank"
                rel="noreferrer noopener"
                className="email-pill-badge"
                title="Compose directly in Gmail"
              >
                <Mail size={15} />
                <span>{profile.email}</span>
              </a>
              <button
                className="email-copy-pill"
                onClick={copyEmail}
                title="Copy email to clipboard"
              >
                <FileText size={13} />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              <span className="social-divider" />
              <span className="location">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </div>

          {/* TOP PROFILE PHOTO CARD (IN HERO) */}
          <div className="hero-art-container" aria-label="Jyothi Radhithya profile portrait and credential highlights">
            <div className="photo-card-frame">
              <div className="photo-img-wrapper">
                {!photoError && photoData ? (
                  <img
                    src={photoData}
                    alt={profile.name}
                    className="photo-img"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="photo-fallback">
                    <div className="photo-avatar-circle">JR</div>
                    <strong style={{ color: "#082126", fontSize: "15px" }}>{profile.name}</strong>
                    <span style={{ color: "#e85d45", fontSize: "11px", fontWeight: 700, marginTop: "4px" }}>
                      AI & ML Engineer
                    </span>
                    <div
                      style={{
                        marginTop: "14px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(232, 93, 69, 0.08)",
                        border: "1px solid rgba(232, 93, 69, 0.25)",
                        color: "#c84630",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: 700
                      }}
                    >
                      <Sparkles size={13} /> Generative AI & Forensics
                    </div>
                  </div>
                )}
              </div>

              <div className="photo-info-bar">
                <span className="photo-name-tag">{profile.name}</span>
                <span className="photo-role-tag">CS · AI & ML</span>
              </div>
            </div>

            {/* Floating Highlights Badges */}
            <div className="float-card card-top">
              <span className="mini-icon">
                <Sparkles size={16} />
              </span>
              <span>
                <b>96.4% Accuracy</b>
                <small>Synthetic Media Forensics</small>
              </span>
            </div>
            <div className="float-card card-bottom">
              <span className="mini-icon purple">
                <Code2 size={16} />
              </span>
              <span>
                <b>FastAPI & ML</b>
                <small>Production Pipelines</small>
              </span>
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="01 / PROFILE"
            title="Results-oriented Computer Science Graduate."
            text="Specialized in AI & Machine Learning, building reliable pipelines and intelligent software."
          />
          <div className="about-grid">
            <div className="about-main panel">
              <span className="panel-label">PROFILE SUMMARY</span>
              <h3>
                Turning complex AI concepts into <span>production-ready software.</span>
              </h3>
              <p>
                Computer Science Graduate (AI & ML) with strong technical competence in
                Python, Machine Learning architectures, FastAPI backend development, and
                full-stack web solutions.
              </p>
              <p>
                Demonstrated project capability in developing multimodal synthetic media detection
                systems with 96%+ forensic accuracy and production-ready prediction pipelines.
                Seeking an entry-level role in Generative AI Development to build scalable,
                high-performance systems.
              </p>
              <div className="about-values">
                <div>
                  <CheckCircle2 size={16} /> Multimodal Deepfake Verification
                </div>
                <div>
                  <CheckCircle2 size={16} /> RAG & Generative AI Solutions
                </div>
                <div>
                  <CheckCircle2 size={16} /> Scalable FastAPI & REST Backends
                </div>
              </div>
            </div>
            <div className="about-side">
              <div className="stat-panel panel">
                <span className="stat-symbol">
                  <Cpu size={20} />
                </span>
                <strong>96.4% Accuracy</strong>
                <span>TruthLens Forensics</span>
              </div>
              <div className="stat-panel panel">
                <span className="stat-symbol">
                  <GraduationCap size={20} />
                </span>
                <strong>8.4 CGPA</strong>
                <span>B.Tech in CS (AI & ML)</span>
              </div>
              <div className="quote-panel">
                <span>“</span>
                <p>
                  Build scalable architectures, evaluate rigorously with data benchmarks,
                  and deliver impactful generative AI solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="02 / TOOLKIT"
            title="Technical Skills & Competencies"
            text="Core expertise across Generative AI architectures, machine learning frameworks, backend engineering, and databases."
          />
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <article className="skill-card panel" key={title}>
                <div className="skill-head">
                  <span className="skill-icon">
                    <Icon size={19} />
                  </span>
                  <h3>{title}</h3>
                </div>
                <div className="tag-list">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section-wrap section-block" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Engineered Projects"
            text="Click direct GitHub Repository links to explore architectures, test scripts, and implementations."
          />
          <div className="project-list">
            {projects.map(
              ({
                id,
                number,
                name,
                type,
                description,
                tags,
                detail,
                status,
                icon: Icon,
                repoUrl,
                demoUrl
              }) => (
                <article className="project-card panel" key={id || name}>
                  <div className="project-number">{number}</div>
                  <div className="project-content">
                    <div className="project-type">{type}</div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="tag-list">
                      {tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-detail">
                      <span>{detail}</span>
                      <span className="project-status">{status}</span>
                    </div>

                    {/* ACTION BUTTONS (FOR VISITORS / CUSTOMERS) */}
                    <div className="action-btn-row">
                      {repoUrl && (
                        <a
                          href={repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button button-quiet btn-sm"
                        >
                          <Github size={14} /> GitHub Repository <ArrowUpRight size={12} />
                        </a>
                      )}
                      {demoUrl && (
                        <a
                          href={demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button button-quiet btn-sm"
                        >
                          <ExternalLink size={14} /> Live Demo <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-icon">
                    <Icon size={27} />
                  </div>
                </article>
              )
            )}
          </div>
          <div className="github-callout panel">
            <div>
              <Github size={22} />
              <div>
                <strong>Explore all repositories on GitHub</strong>
                <p>Browse active codebases, experimental models, and repositories.</p>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Visit github.com/jyothiradhitya-tech <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section-wrap section-block" id="experience">
          <SectionHeading
            eyebrow="04 / EXPERIENCE"
            title="Experience & Practical Apprenticeship"
            text="Hands-on industry experience building machine learning data pipelines and full-stack enterprise solutions."
          />
          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline-item" key={exp.company}>
                <div className="timeline-marker">
                  <exp.icon size={18} />
                </div>
                <div className="timeline-body panel">
                  <div className="timeline-year">{exp.period}</div>
                  <h3 style={{ fontSize: "16px", margin: "6px 0 10px" }}>
                    {exp.role} ·{" "}
                    <span style={{ color: "#e85d45" }}>{exp.company}</span>
                  </h3>
                  <ul className="timeline-list">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "16px",
                      paddingTop: "14px",
                      borderTop: "1px solid rgba(13, 79, 87, 0.08)"
                    }}
                  >
                    <div className="tag-list">
                      {exp.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Button */}
                    <button
                      className="cert-view-btn"
                      onClick={() => openCertificate(exp.certId)}
                    >
                      <Award size={14} /> {exp.certLabel} <Eye size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CREDENTIALS SECTION */}
        <section className="section-wrap section-block" id="education">
          <SectionHeading
            eyebrow="05 / ACADEMICS & CREDENTIALS"
            title="Education & Certifications"
            text="Academic background, verified professional credentials, and linguistic skills."
          />
          <div className="timeline">
            {education.map((edu) => (
              <div className="timeline-item" key={edu.institution}>
                <div className="timeline-marker">
                  <edu.icon size={18} />
                </div>
                <div className="timeline-body panel">
                  <div className="timeline-year">{edu.year}</div>
                  <h3 style={{ fontSize: "15px", margin: "6px 0 4px" }}>
                    {edu.degree}
                  </h3>
                  <p style={{ color: "#5a777c", margin: "2px 0 6px", fontWeight: 600 }}>
                    {edu.institution}
                  </p>
                  <p style={{ color: "#e85d45", fontWeight: 800, margin: 0 }}>
                    {edu.score}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="credential-grid">
            <div className="panel" style={{ padding: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px"
                }}
              >
                <div className="skill-icon">
                  <Award size={19} />
                </div>
                <h3 style={{ fontSize: "14px", margin: 0, fontWeight: 800 }}>
                  Verified Certifications
                </h3>
              </div>
              <div style={{ display: "grid", gap: "12px" }}>
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                      padding: "12px 14px",
                      background: "#faf7f2",
                      border: "1px solid rgba(13, 79, 87, 0.08)",
                      borderRadius: "10px"
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          color: "#082126",
                          fontSize: "12px",
                          display: "block"
                        }}
                      >
                        {cert.name}
                      </strong>
                      <span style={{ color: "#5a777c", fontSize: "11px", fontWeight: 600 }}>
                        {cert.issuer}
                      </span>
                    </div>
                    <button
                      className="cert-view-btn"
                      onClick={() => openCertificate(cert)}
                    >
                      <Eye size={12} /> View Certificate
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel" style={{ padding: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px"
                }}
              >
                <div className="skill-icon">
                  <Languages size={19} />
                </div>
                <h3 style={{ fontSize: "14px", margin: 0, fontWeight: 800 }}>
                  Languages & Core Competencies
                </h3>
              </div>
              <div style={{ marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#e85d45",
                    display: "block",
                    marginBottom: "8px",
                    fontFamily: '"DM Mono", monospace',
                    fontWeight: 700
                  }}
                >
                  LANGUAGES:
                </span>
                <div className="tag-list">
                  {languages.map((lang) => (
                    <span className="tag" key={lang}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#e85d45",
                    display: "block",
                    marginBottom: "8px",
                    fontFamily: '"DM Mono", monospace',
                    fontWeight: 700
                  }}
                >
                  COMPETENCIES:
                </span>
                <div className="tag-list">
                  {competencies.map((comp) => (
                    <span className="tag" key={comp}>
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section-wrap section-block contact-section" id="contact">
          <div className="contact-panel panel">
            <div className="contact-orb" />
            <SectionHeading
              eyebrow="06 / GET IN TOUCH"
              title="Let's build intelligent systems together."
              text="Open to entry-level Generative AI and ML roles, internships, and engineering collaborations."
            />
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Job Opportunity - AI & ML Engineer")}&body=${encodeURIComponent("Hi Jyothi,\n\nI reviewed your portfolio and would like to connect with you regarding...")}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Send me an email (Gmail) <Send size={16} />
              </a>
              <button className="button button-quiet" onClick={copyEmail}>
                {copied ? "Email copied!" : "Copy email address"} <FileText size={16} />
              </button>
              <button
                className="button button-quiet"
                onClick={() => setResumeModalOpen(true)}
              >
                <Download size={16} /> View & Download Resume
              </button>
            </div>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                target="_blank"
                rel="noreferrer noopener"
                title="Compose in Gmail"
              >
                <Mail size={17} /> {profile.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">{"<"}</span> {profile.name.split(" ")[0]}
          <span className="brand-dot">.</span>
        </a>
        <span>Designed & built for high-performance AI solutions.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span
            onClick={handleSecretTrigger}
            style={{ cursor: "default", userSelect: "none" }}
            title=""
          >
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 1. VISITOR RESUME MODAL (READ-ONLY FOR VISITORS) */}
      {/* ======================================================== */}
      {resumeModalOpen && (
        <div className="modal-overlay" onClick={() => setResumeModalOpen(false)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>
                <FileText size={18} style={{ color: "#e85d45" }} />
                <span>Resume Preview — {profile.name}</span>
              </h3>
              <button
                className="modal-close"
                onClick={() => setResumeModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-content">
              {resumeData ? (
                <div style={{ height: "65vh", width: "100%" }}>
                  <iframe
                    src={resumeData}
                    title="Resume Document"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "10px",
                      background: "#fff"
                    }}
                  />
                </div>
              ) : (
                <div className="cert-preview-card">
                  <div className="cert-seal">
                    <FileText size={28} />
                  </div>
                  <div className="cert-badge-type">PROFESSIONAL RESUME</div>
                  <h2>{profile.name}</h2>
                  <div className="cert-recipient">
                    <span>{profile.role}</span>
                    <strong style={{ fontSize: "13px", color: "#5a777c" }}>
                      {profile.location} · {profile.email}
                    </strong>
                  </div>

                  <div
                    style={{
                      background: "#faf7f2",
                      border: "1px solid rgba(13, 79, 87, 0.08)",
                      borderRadius: "12px",
                      padding: "18px",
                      textAlign: "left",
                      fontSize: "12px",
                      lineHeight: "1.8",
                      color: "#173c42",
                      maxWidth: "580px",
                      margin: "0 auto 20px"
                    }}
                  >
                    <p style={{ margin: "0 0 10px" }}>
                      <strong>Summary:</strong> {profile.intro}
                    </p>
                    <p style={{ margin: "0 0 10px" }}>
                      <strong>Education:</strong> Siddharth Institute of Engineering & Technology — B.Tech in CS (CAI) | CGPA: 8.4 (Expected 2027)
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Core Highlights:</strong> TruthLens (96.4% deepfake forensic detection), SmartBridge AI/ML Internship, Vaultsphere Full-Stack Apprenticeship.
                    </p>
                  </div>

                  <p style={{ fontSize: "11px", color: "#5a777c" }}>
                    The complete official PDF document can be downloaded directly below or requested via email.
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <a
                href={activeResumeUrl}
                download="Jyothi_Radhithya_Resume.pdf"
                className="button button-primary btn-sm"
              >
                <Download size={14} /> Download PDF
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Request for Resume - Jyothi Radhithya")}`}
                target="_blank"
                rel="noreferrer noopener"
                className="button button-quiet btn-sm"
              >
                <Mail size={14} /> Request via Gmail
              </a>
              <button
                className="button button-quiet btn-sm"
                onClick={() => setResumeModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. VISITOR CERTIFICATE MODAL (READ-ONLY FOR VISITORS) */}
      {/* ======================================================== */}
      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>
                <ShieldCheck size={18} style={{ color: "#0e353b" }} />
                <span>Verified Credential Certificate</span>
              </h3>
              <button className="modal-close" onClick={() => setActiveCert(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-content">
              {activeCert.fileUrl ? (
                <div>
                  {activeCert.fileUrl.startsWith("data:application/pdf") ? (
                    <iframe
                      src={activeCert.fileUrl}
                      title={activeCert.name}
                      style={{
                        width: "100%",
                        height: "60vh",
                        border: "none",
                        borderRadius: "8px"
                      }}
                    />
                  ) : (
                    <img
                      src={activeCert.fileUrl}
                      alt={activeCert.name}
                      style={{
                        width: "100%",
                        maxHeight: "65vh",
                        objectFit: "contain",
                        borderRadius: "10px",
                        border: "1px solid rgba(13, 79, 87, 0.12)"
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="cert-preview-card">
                  <div className="cert-seal">
                    <ShieldCheck size={32} />
                  </div>
                  <div className="cert-badge-type">{activeCert.type.toUpperCase()}</div>
                  <h2>{activeCert.name}</h2>
                  <div className="cert-recipient">
                    <span>Awarded To</span>
                    <strong>{profile.fullName || profile.name}</strong>
                  </div>
                  <p style={{ color: "#436267", fontSize: "13px", margin: "10px 0" }}>
                    Issued by: <strong style={{ color: "#082126" }}>{activeCert.issuer}</strong>
                  </p>
                  <p style={{ color: "#0e353b", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700 }}>
                    <CheckCircle2 size={14} style={{ color: "#e85d45" }} /> Verification Status: Verified & Completed ({activeCert.date})
                  </p>

                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(13, 79, 87, 0.08)"
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: '"DM Mono", monospace',
                        fontSize: "10px",
                        letterSpacing: "1px",
                        color: "#e85d45",
                        fontWeight: 700,
                        marginBottom: "10px"
                      }}
                    >
                      SKILLS VALIDATED
                    </span>
                    <div
                      className="tag-list"
                      style={{ justifyContent: "center" }}
                    >
                      {activeCert.skills.map((skill) => (
                        <span className="tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {activeCert.fileUrl && (
                <a
                  href={activeCert.fileUrl}
                  download={`${activeCert.id}-certificate`}
                  className="button button-primary btn-sm"
                >
                  <Download size={14} /> Download Certificate
                </a>
              )}
              <button
                className="button button-quiet btn-sm"
                onClick={() => setActiveCert(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. OWNER PORTAL (PASSWORD PROTECTED FOR JYOTHI ONLY) */}
      {/* ======================================================== */}
      {adminModalOpen && (
        <div className="modal-overlay" onClick={() => setAdminModalOpen(false)}>
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(840px, 100%)" }}
          >
            <div className="modal-head">
              <h3>
                {adminAuthed ? (
                  <>
                    <Unlock size={18} style={{ color: "#e85d45" }} />
                    <span>Portfolio Owner Studio (Upload Photo, Resume & Certificates)</span>
                  </>
                ) : (
                  <>
                    <Lock size={18} style={{ color: "#e85d45" }} />
                    <span>Owner Portal Login</span>
                  </>
                )}
              </h3>
              <button
                className="modal-close"
                onClick={() => setAdminModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-content">
              {/* Login screen if not authenticated */}
              {!adminAuthed ? (
                <form onSubmit={handleAdminLogin} style={{ maxWidth: "380px", margin: "30px auto", textAlign: "center" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      margin: "0 auto 16px",
                      borderRadius: "50%",
                      background: "rgba(232, 93, 69, 0.12)",
                      display: "grid",
                      placeItems: "center",
                      color: "#e85d45"
                    }}
                  >
                    <Lock size={26} />
                  </div>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#082126" }}>Owner Verification</h3>
                  <p style={{ color: "#436267", fontSize: "12px", marginBottom: "20px" }}>
                    Only you (the owner) have access to upload your profile photo, resume, certificates, and modify GitHub repo links.
                  </p>

                  <div style={{ marginBottom: "18px", textAlign: "left" }}>
                    <label className="form-label">ENTER SECURITY KEY:</label>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="••••••••••••"
                      value={adminPasscode}
                      onChange={(e) => setAdminPasscode(e.target.value)}
                      disabled={cooldownTime > 0}
                      autoFocus
                    />
                    {adminError && (
                      <p style={{ color: "#d94d35", fontSize: "12px", marginTop: "8px", fontWeight: 700 }}>
                        {adminError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="button button-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                    disabled={cooldownTime > 0}
                  >
                    {cooldownTime > 0 ? `Security Lockout (${cooldownTime}s)` : "Verify & Unlock"} <ChevronRight size={16} />
                  </button>
                </form>
              ) : (
                /* Authenticated Owner Management Panel */
                <div>
                  {saveToast && (
                    <div
                      style={{
                        padding: "10px 14px",
                        borderRadius: "8px",
                        background: "rgba(232, 93, 69, 0.12)",
                        border: "1px solid rgba(232, 93, 69, 0.3)",
                        color: "#b73e2b",
                        fontSize: "12px",
                        fontWeight: 700,
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <Check size={16} /> {saveToast}
                    </div>
                  )}

                  <div className="admin-tab-nav">
                    <button
                      className={`admin-tab ${adminTab === "photo" ? "active" : ""}`}
                      onClick={() => setAdminTab("photo")}
                    >
                      <Camera size={14} /> Profile Photo
                    </button>
                    <button
                      className={`admin-tab ${adminTab === "resume" ? "active" : ""}`}
                      onClick={() => setAdminTab("resume")}
                    >
                      <FileText size={14} /> Resume Upload
                    </button>
                    <button
                      className={`admin-tab ${adminTab === "certificates" ? "active" : ""}`}
                      onClick={() => setAdminTab("certificates")}
                    >
                      <Award size={14} /> Internship Certificates
                    </button>
                    <button
                      className={`admin-tab ${adminTab === "projects" ? "active" : ""}`}
                      onClick={() => setAdminTab("projects")}
                    >
                      <Github size={14} /> Project Repo Links
                    </button>
                    <button
                      className={`admin-tab ${adminTab === "guide" ? "active" : ""}`}
                      onClick={() => setAdminTab("guide")}
                    >
                      <AlertCircle size={14} /> Folder Paths Guide
                    </button>
                  </div>

                  {/* TAB 0: PROFILE PHOTO */}
                  {adminTab === "photo" && (
                    <div className="admin-card">
                      <h4 style={{ margin: "0 0 6px", fontSize: "15px", color: "#082126" }}>Upload Top Profile Photo</h4>
                      <p style={{ color: "#436267", fontSize: "12px", margin: "0 0 16px" }}>
                        Upload your headshot or profile photo to display prominently at the top of your portfolio hero section.
                      </p>

                      <div style={{ marginBottom: "16px" }}>
                        <span className="status-pill">
                          {photoData && !photoError ? (
                            <>
                              <Check size={12} style={{ color: "#e85d45" }} /> Active Photo Loaded
                            </>
                          ) : (
                            <>Avatar Initial Badge Active (/photo.jpg)</>
                          )}
                        </span>
                      </div>

                      <label className="file-upload-box" style={{ display: "block" }}>
                        <Camera size={30} style={{ color: "#e85d45", margin: "0 auto 8px" }} />
                        <span style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#082126" }}>
                          Click to Browse & Select Your Photo
                        </span>
                        <span style={{ fontSize: "11px", color: "#5a777c", marginTop: "4px", display: "block" }}>
                          Supports JPG, PNG, WEBP (Square or portrait recommended)
                        </span>
                        <input
                          type="file"
                          accept=".png,.jpg,.jpeg,.webp"
                          style={{ display: "none" }}
                          onChange={handlePhotoUpload}
                        />
                      </label>

                      {photoData && (
                        <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "14px" }}>
                          <img
                            src={photoData}
                            alt="Current preview"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "10px",
                              objectFit: "cover",
                              border: "2px solid #e85d45"
                            }}
                          />
                          <button
                            className="button button-quiet btn-sm"
                            onClick={() => {
                              setPhotoData("/photo.jpg");
                              localStorage.removeItem("jyothi_photo");
                              setPhotoError(false);
                              setSaveToast("Reverted to /photo.jpg");
                              setTimeout(() => setSaveToast(""), 3000);
                            }}
                            style={{ color: "#d94d35" }}
                          >
                            Remove Custom Photo
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 1: RESUME */}
                  {adminTab === "resume" && (
                    <div className="admin-card">
                      <h4 style={{ margin: "0 0 6px", fontSize: "15px", color: "#082126" }}>Official Resume Document</h4>
                      <p style={{ color: "#436267", fontSize: "12px", margin: "0 0 16px" }}>
                        Your resume PDF is active at <strong style={{ color: "#082126" }}>public/resume.pdf</strong>. Visitors can view and download it directly.
                      </p>

                      <div style={{ marginBottom: "16px" }}>
                        <span className="status-pill">
                          <Check size={12} style={{ color: "#e85d45" }} />
                          {resumeData ? "Custom Browser Upload Active" : "public/resume.pdf Active & Available"}
                        </span>
                      </div>

                      <label className="file-upload-box" style={{ display: "block" }}>
                        <Upload size={28} style={{ color: "#e85d45", margin: "0 auto 8px" }} />
                        <span style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#082126" }}>
                          Click to Replace / Upload New Resume PDF
                        </span>
                        <span style={{ fontSize: "11px", color: "#5a777c", marginTop: "4px", display: "block" }}>
                          Supports .pdf documents
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          style={{ display: "none" }}
                          onChange={handleResumeUpload}
                        />
                      </label>

                      <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
                        <a
                          href={activeResumeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button button-quiet btn-sm"
                        >
                          <Eye size={14} /> Test Open Resume PDF
                        </a>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: CERTIFICATES */}
                  {adminTab === "certificates" && (
                    <div>
                      <p style={{ color: "#436267", fontSize: "12px", marginBottom: "16px" }}>
                        Upload official certificate scans or PDFs for your internships and courses. Visitors will only be able to view and download them when clicking "View Certificate".
                      </p>

                      <div style={{ display: "grid", gap: "16px" }}>
                        {certificates.map((cert) => (
                          <div key={cert.id} className="admin-card">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                              <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: "14px", color: "#082126" }}>{cert.name}</h4>
                                <span style={{ color: "#5a777c", fontSize: "11px", fontWeight: 600 }}>{cert.issuer}</span>
                              </div>
                              <span className="status-pill">
                                {cert.fileUrl ? "Document Attached" : "Verified Badge Active"}
                              </span>
                            </div>

                            <label
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "rgba(232, 93, 69, 0.08)",
                                border: "1px dashed rgba(232, 93, 69, 0.35)",
                                padding: "9px 15px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "11px",
                                color: "#b73e2b",
                                fontWeight: 700
                              }}
                            >
                              <Upload size={14} />
                              <span>{cert.fileUrl ? "Replace Certificate File" : "Upload Certificate Scan (PNG/PDF)"}</span>
                              <input
                                type="file"
                                accept=".png,.jpg,.jpeg,.pdf"
                                style={{ display: "none" }}
                                onChange={(e) => handleCertificateUpload(cert.id, e)}
                              />
                            </label>

                            {cert.fileUrl && (
                              <button
                                className="button button-quiet btn-sm"
                                style={{ marginLeft: "10px" }}
                                onClick={() => openCertificate(cert)}
                              >
                                <Eye size={12} /> Test View
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: PROJECT REPOS */}
                  {adminTab === "projects" && (
                    <div>
                      <p style={{ color: "#436267", fontSize: "12px", marginBottom: "16px" }}>
                        Enter your GitHub repository URLs and live demo links for each project. These will be shown as direct clickable buttons on each project card for your visitors.
                      </p>

                      <div style={{ display: "grid", gap: "16px" }}>
                        {projects.map((p) => (
                          <div key={p.id} className="admin-card">
                            <h4 style={{ margin: "0 0 12px", fontSize: "14px", color: "#082126" }}>
                              {p.number}. {p.name} ({p.role})
                            </h4>

                            <div style={{ marginBottom: "10px" }}>
                              <label className="form-label">GITHUB REPO URL:</label>
                              <input
                                type="url"
                                className="form-input"
                                placeholder="https://github.com/jyothiradhitya-tech/..."
                                value={p.repoUrl || ""}
                                onChange={(e) =>
                                  handleProjectRepoChange(p.id, "repoUrl", e.target.value)
                                }
                              />
                            </div>

                            <div>
                              <label className="form-label">OPTIONAL LIVE DEMO URL:</label>
                              <input
                                type="url"
                                className="form-input"
                                placeholder="https://your-demo-link.app (leave empty if none)"
                                value={p.demoUrl || ""}
                                onChange={(e) =>
                                  handleProjectRepoChange(p.id, "demoUrl", e.target.value)
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: DEPLOY GUIDE */}
                  {adminTab === "guide" && (
                    <div className="admin-card">
                      <h4 style={{ margin: "0 0 8px", fontSize: "15px", color: "#082126" }}>Exact Folder File Locations</h4>
                      <p style={{ color: "#3b575c", fontSize: "12px", lineHeight: "1.8" }}>
                        In addition to uploading files right here in this browser studio, you can also directly drop your files into your project's <strong style={{ color: "#082126" }}>public/</strong> folder:
                      </p>

                      <div
                        style={{
                          background: "#faf7f2",
                          border: "1px solid rgba(13, 79, 87, 0.12)",
                          padding: "16px",
                          borderRadius: "10px",
                          fontFamily: '"DM Mono", monospace',
                          fontSize: "11px",
                          color: "#082126",
                          lineHeight: "2",
                          margin: "14px 0"
                        }}
                      >
                        1. <strong>Top Photo:</strong> <span style={{ color: "#e85d45" }}>ai-engineer-portfolio/public/photo.jpg</span><br />
                        2. <strong>Resume PDF:</strong> <span style={{ color: "#e85d45" }}>ai-engineer-portfolio/public/resume.pdf</span><br />
                        3. <strong>SmartBridge Certificate:</strong> <span style={{ color: "#e85d45" }}>ai-engineer-portfolio/public/certificates/smartbridge-aiml.png</span><br />
                        4. <strong>Vaultsphere Certificate:</strong> <span style={{ color: "#e85d45" }}>ai-engineer-portfolio/public/certificates/vaultsphere-fullstack.png</span><br />
                        5. <strong>Udemy Certificate:</strong> <span style={{ color: "#e85d45" }}>ai-engineer-portfolio/public/certificates/udemy-python.png</span>
                      </div>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(13, 79, 87, 0.08)"
                    }}
                  >
                    <button
                      className="button button-quiet btn-sm"
                      onClick={handleResetDefaults}
                      style={{ color: "#d94d35" }}
                    >
                      <RotateCcw size={13} /> Reset to Defaults
                    </button>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        className="button button-quiet btn-sm"
                        onClick={() => {
                          setAdminAuthed(false);
                          setAdminModalOpen(false);
                          setAdminPasscode("");
                        }}
                        style={{ color: "#082126" }}
                      >
                        <Lock size={13} /> Lock & Sign Out
                      </button>
                      <button
                        className="button button-primary btn-sm"
                        onClick={() => {
                          setSaveToast("Changes saved successfully!");
                          setTimeout(() => {
                            setSaveToast("");
                            setAdminModalOpen(false);
                          }, 1000);
                        }}
                      >
                        <Check size={14} /> Done / Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
