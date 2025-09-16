// --- CONTENT (edit here once) ---
const DATA = {
  basics: {
    name: "Harshavardhan Chintapatla",
    tagline: "Graduate Research Assistant (M.S. Computer Science) • Cloud, AI/ML, Test Automation, and Secure Systems",
    location: "Columbia, MO",
    email: "hcm6r@umsystem.edu",
    github: "https://github.com/harshavardhanchintapatla",
    resumeUrl: "Harsha_s_Resume.pdf" // keep this file at site root
  },
  metrics: {
    latencyAccuracy: "40ms / 94%",
    automation: "Multi-region / CI-CD",
    stack: "AWS • Java • Python • JS"
  },
  projects: [
    {
      title: "Cloud-AI Cyberattack Detection Testbed",
      period: "2024–Present",
      summary:
        "AI-driven cloud testbed using AWS Lambda, SageMaker, and EC2 to detect/mitigate cyberattacks in near-real time.",
      highlights: [
        "Latency: ~40ms, Accuracy: 94%",
        "User/Admin portal with secure data retrieval, schedulers for transfers",
        "Converted static site to dynamic data-driven app"
      ],
      tech: ["AWS","Lambda","SageMaker","EC2","API Gateway","RDS","S3","IAM","Python","JavaScript"],
      links: []
    },
    {
      title: "Twitter Data Analysis with PySpark",
      period: "2024",
      summary:
        "Analyzed engagement, media types, geo, and word frequencies; explored mention–hashtag interaction networks.",
      highlights: ["PySpark SQL processing","Matplotlib & Plotly visualizations"],
      tech: ["PySpark","Python","SQL","Matplotlib","Plotly"],
      links: []
    },
    {
      title: "OrangeHRM Demo – QA & CI Automation",
      period: "2023",
      summary:
        "Manual + automated testing across modules with POM; CI via Jenkins for continuous feedback.",
      highlights: ["Java + Selenium (POM)","Jira for test mgmt","CI via Jenkins"],
      tech: ["Java","Selenium","Jenkins","Jira","CI/CD"],
      links: [{label:"Demo Site", url:"https://opensource-demo.orangehrmlive.com/"}]
    }
  ],
  experience: [
    {
      role: "Graduate Research Assistant",
      org: "University of Missouri",
      where: "Columbia, Missouri",
      period: "Feb 2024 – Present",
      bullets: [
        "Built AI cloud testbed on AWS (Lambda, SageMaker, EC2) achieving ~40ms latency & 94% accuracy.",
        "Developed secure research portal with role-based access and automated data pipelines.",
        "Modernized a static site into a dynamic web app for faster rendering and interactive data handling."
      ]
    },
    {
      role: "Associate Consultant",
      org: "Capgemini Technology Services",
      where: "Hyderabad, India",
      period: "Aug 2021 – Dec 2023",
      bullets: [
        "Automated backend/UI tests with Postman, Opentest, and Cypress; functional/integration/regression.",
        "Built multi-market scripts to run across regions, increasing coverage & efficiency.",
        "Fixed flaky pipeline issues and improved test pass rates."
      ]
    }
  ],
  skills: {
    "Languages": [
      {name:"Java",level:90},{name:"Python",level:85},{name:"JavaScript",level:80},{name:"HTML/CSS",level:85},{name:"SQL",level:80}
    ],
    "Cloud & ML": [
      {name:"AWS (Lambda/EC2/API-GW/RDS/S3/IAM/SageMaker)",level:85},
      {name:"Docker",level:70}
    ],
    "QA & Tooling": [
      {name:"Cypress / Selenium / Postman / Jira",level:85},
      {name:"CI/CD (Jenkins, GitHub Actions)",level:75}
    ],
    "IDEs": [
      {name:"VS Code / Eclipse / Visual Studio",level:80}
    ]
  },
  education: [
    {school:"University of Missouri", degree:"M.S. in Computer Science", period:"Jan 2024 – Present", location:"Columbia, Missouri"},
    {school:"Bharath Institute of Higher Education and Research", degree:"B.Tech in Electronics & Communication Engineering", period:"Jul 2017 – Jun 2021", location:"Chennai, India"}
  ],
  awards: [
    "Xtramile Award – Outstanding performance (Dec 2022)",
    "IEVOLVE certificate – Kaizen idea productivity improvement (Postman)"
  ]
};
// (Content sourced from your resume.) 

// --- RENDERING ---
const $ = (sel)=>document.querySelector(sel);
const $$ = (sel)=>document.querySelectorAll(sel);

function initBasics(){
  $("#name").textContent = DATA.basics.name;
  $("#tagline").textContent = DATA.basics.tagline;
  $("#location").textContent = DATA.basics.location;
  $("#githubLink").href = DATA.basics.github;
  $("#githubCTA").href = DATA.basics.github;
  $("#emailLink").href = `mailto:${DATA.basics.email}`;
  $("#emailCTA").href = `mailto:${DATA.basics.email}`;
  $("#downloadCV").href = DATA.basics.resumeUrl;
  $("#metric-1").textContent = DATA.metrics.latencyAccuracy;
  $("#metric-2").textContent = DATA.metrics.automation;
  $("#metric-3").textContent = DATA.metrics.stack;
  $("#year").textContent = new Date().getFullYear();
  $("#lastUpdated").textContent = new Date(document.lastModified).toLocaleDateString();
}

function renderProjects(list = DATA.projects){
  const grid = $("#projectGrid");
  grid.innerHTML = "";
  list.forEach(p=>{
    const card = document.createElement("article");
    card.className = "card";
    const techBads = p.tech.map(t=>`<span class="badge">${t}</span>`).join("");
    const links = (p.links||[]).map(l=>`<a class="ghost-btn" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
    const highlights = (p.highlights||[]).map(h=>`<li>${h}</li>`).join("");
    card.innerHTML = `
      <h3>${p.title}</h3>
      <small>${p.period}</small>
      <p>${p.summary}</p>
      ${highlights?`<ul class="bullets">${highlights}</ul>`:""}
      <div class="badges">${techBads}</div>
      <div class="links">${links}</div>`;
    grid.appendChild(card);
  });
}

function allTags(){
  const s = new Set();
  DATA.projects.forEach(p=>p.tech.forEach(t=>s.add(t)));
  return Array.from(s).sort();
}

function renderTags(){
  const bar = $("#tagBar");
  bar.innerHTML = "";
  allTags().forEach(tag=>{
    const el = document.createElement("button");
    el.className = "tag";
    el.textContent = tag;
    el.onclick = ()=>{
      $$(".tag").forEach(t=>t.classList.remove("active"));
      el.classList.add("active");
      const filtered = DATA.projects.filter(p=>p.tech.includes(tag));
      renderProjects(filtered);
    };
    bar.appendChild(el);
  });
  // add reset tag
  const reset = document.createElement("button");
  reset.className = "tag active";
  reset.textContent = "All";
  reset.onclick = ()=>{ $$(".tag").forEach(t=>t.classList.remove("active")); reset.classList.add("active"); renderProjects(); };
  bar.prepend(reset);
}

function renderExperience(){
  const wrap = $("#expTimeline"); wrap.innerHTML = "";
  DATA.experience.forEach(x=>{
    const item = document.createElement("article");
    item.className = "timecard";
    item.innerHTML = `
      <h3>${x.role} • ${x.org}</h3>
      <small>${x.period} • ${x.where}</small>
      <ul class="bullets">${x.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`;
    wrap.appendChild(item);
  });
}

function renderSkills(){
  const wrap = $("#skillsWrap"); wrap.innerHTML = "";
  Object.entries(DATA.skills).forEach(([group, items])=>{
    const box = document.createElement("div");
    box.className = "skill";
    box.innerHTML = `<h3>${group}</h3>`;
    items.forEach(s=>{
      const row = document.createElement("div");
      row.innerHTML = `
        <div style="display:flex;justify-content:space-between;gap:8px">
          <strong>${s.name}</strong><small>${s.level}%</small>
        </div>
        <div class="meter"><span style="width:${s.level}%"></span></div>`;
      box.appendChild(row);
    });
    wrap.appendChild(box);
  });
}

function renderEducation(){
  const wrap = $("#eduList"); wrap.innerHTML = "";
  DATA.education.forEach(e=>{
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${e.school}</h3>
      <p><strong>${e.degree}</strong><br/><small>${e.period} • ${e.location}</small></p>`;
    wrap.appendChild(card);
  });
}

function renderAwards(){
  $("#awardsList").innerHTML = DATA.awards.map(a=>`<li>${a}</li>`).join("");
}

function wireSearch(){
  $("#projectSearch").addEventListener("input", (e)=>{
    const q = e.target.value.toLowerCase();
    const filtered = DATA.projects.filter(p =>
      [p.title,p.summary,(p.highlights||[]).join(" "),p.tech.join(" ")].join(" ").toLowerCase().includes(q)
    );
    renderProjects(filtered);
  });
}

function theme(){
  const root = document.documentElement;
  const key = "pref-theme";
  const stored = localStorage.getItem(key);
  if(stored){ root.setAttribute("data-theme", stored); }
  $("#themeToggle").onclick = ()=>{
    const next = root.getAttribute("data-theme")==="dark" ? "light":"dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(key,next);
  };
}

function init(){
  initBasics();
  renderProjects();
  renderTags();
  renderExperience();
  renderSkills();
  renderEducation();
  renderAwards();
  wireSearch();
  theme();
}
document.addEventListener("DOMContentLoaded", init);
