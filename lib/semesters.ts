export interface SemesterData {
  id: string; // "s1", "s2", "s3", "s4"
  slug: string; // "1", "2", "3", "4"
  number: number;
  roman: string; // "I", "II", "III", "IV"
  title: string;
  focus: string;
  credits: number;
  status: "active" | "upcoming";
  earnings: string;
  summary: string;
  academicDirection: string[];
  project: {
    title: string;
    focus: string[];
    expectedOutcome: string;
  };
  coreCourses: {
    code: string;
    title: string;
    credits: number;
    ltp?: string;
    status: "active" | "upcoming";
    slug?: string;
    description?: string;
  }[];
  electiveInfo: {
    count: number;
    credits: number;
    description: string;
    note?: string;
  };
}

export const SEMESTERS: SemesterData[] = [
  {
    id: "s1",
    slug: "1",
    number: 1,
    roman: "I",
    title: "Foundation and Ideation",
    focus: "Research, UI/UX, full-stack architecture, AI foundations, and electives",
    credits: 20,
    status: "active",
    earnings: "₹10,000 / month",
    summary:
      "Establish common technical foundations in AI/ML, cloud-native architecture, UI/UX prototyping, and core elective specialisations.",
    academicDirection: [
      "Advanced AI and Machine Learning foundations (CS101)",
      "Full-Stack architecture and cloud-native systems (CS102)",
      "Three elective specialisation tracks (CS501, CS601, CS1101)",
    ],
    project: {
      title: "Project I: Foundation and Ideation",
      focus: [
        "Market research and opportunity validation",
        "Problem space exploration with industry stakeholders",
        "Technology-stack selection & trade-off analysis",
        "Initial solution architecture blueprint",
        "Interactive UI/UX design & Figma prototype",
      ],
      expectedOutcome:
        "A validated project idea, architecture blueprint and high-fidelity interface prototype.",
    },
    coreCourses: [
      {
        code: "CS101",
        title: "Advanced AI and Machine Learning",
        credits: 4,
        ltp: "3–0–1",
        status: "active",
        slug: "cs101",
        description:
          "Deep learning foundations, Transformer architectures, neural networks, and scalable production ML deployment.",
      },
      {
        code: "CS102",
        title: "Full Stack Architecture and Cloud-Native Development",
        credits: 4,
        ltp: "1–0–3",
        status: "active",
        slug: "cs102",
        description:
          "Modern full-stack web architecture, API engineering, relational persistence, secure containerized delivery, and cloud-native serverless systems.",
      },
    ],
    electiveInfo: {
      count: 3,
      credits: 9,
      description: "3 Electives (3 Credits each = 9 Credits)",
      note: "Active electives include CS501 (AI Ethics & Governance) and CS601 (Advanced Frontend Frameworks), with CS1101 (Big Data Analytics) in preview.",
    },
  },
  {
    id: "s2",
    slug: "2",
    number: 2,
    roman: "II",
    title: "Backend and AI / Full-Stack Engineering",
    focus: "Backend systems, data engineering, DevOps pipelines, and working solutions",
    credits: 20,
    status: "upcoming",
    earnings: "₹10,000 / month",
    summary:
      "Engineers backend services, distributed data pipelines, containerized automated CI/CD workflows, and a locally working AI/full-stack solution.",
    academicDirection: [
      "Modern Backend Systems and Data Engineering (CS103)",
      "DevOps and Automated Pipelines (CS105)",
      "Three elective skill areas",
    ],
    project: {
      title: "Project II: Working Solution",
      focus: [
        "Develop AI model or full-stack solution components",
        "Backend services, persistence layers and CRUD operations",
        "Establish a locally executable working solution",
        "Automated CI/CD test pipelines and containerized builds",
      ],
      expectedOutcome:
        "A functional backend with a trained AI model, or a functional full-stack solution accessible in a local environment.",
    },
    coreCourses: [
      {
        code: "CS103",
        title: "Modern Backend Systems and Data Engineering",
        credits: 4,
        ltp: "3–0–1",
        status: "upcoming",
        description:
          "High-throughput backend engines, relational/NoSQL storage, caching topologies, message queues, and resilient data processing.",
      },
      {
        code: "CS105",
        title: "DevOps and Automated Pipelines",
        credits: 4,
        ltp: "2–0–2",
        status: "upcoming",
        description:
          "Automated CI/CD pipelines, Docker containerisation, Kubernetes orchestration, infrastructure as code (IaC), and telemetry.",
      },
    ],
    electiveInfo: {
      count: 3,
      credits: 9,
      description: "3 Electives (3 Credits each = 9 Credits)",
      note: "Students select 3 electives from the elective pool to deepen AI or engineering depth.",
    },
  },
  {
    id: "s3",
    slug: "3",
    number: 3,
    roman: "III",
    title: "Integration and Cloud Orchestration",
    focus: "API orchestration, microservices, cloud deployment, and live integrations",
    credits: 20,
    status: "upcoming",
    earnings: "₹20,000 / month",
    summary:
      "Connects distributed microservices, integrates third-party APIs and cloud payment gateways, and deploys the production-ready system to the cloud.",
    academicDirection: [
      "API Design and Microservices Orchestration (CS104)",
      "Four elective skill areas across advanced engineering and specialized systems",
    ],
    project: {
      title: "Project III: Cloud Deployment & Integration",
      focus: [
        "Integrate frontend, backend, and AI service layers",
        "Connect approved third-party APIs and external data services",
        "Integrate payment gateways, auth providers, and event buses",
        "Deploy the integrated solution to production cloud infrastructure",
      ],
      expectedOutcome:
        "A fully integrated and operational digital product deployed to cloud infrastructure.",
    },
    coreCourses: [
      {
        code: "CS104",
        title: "API Design and Microservices Orchestration",
        credits: 4,
        ltp: "2–0–2",
        status: "upcoming",
        description:
          "Domain-driven microservices architecture, OpenAPI/gRPC protocols, API gateways, distributed transactions, and service meshes.",
      },
    ],
    electiveInfo: {
      count: 4,
      credits: 12,
      description: "4 Electives (3 Credits each = 12 Credits)",
      note: "Extends domain mastery with 4 chosen electives across cloud, distributed systems, security, or AI.",
    },
  },
  {
    id: "s4",
    slug: "4",
    number: 4,
    roman: "IV",
    title: "Solution Evaluation, Report and Viva",
    focus: "Enterprise capstone in CDIPD Lab, evidence portfolio, formal report, and viva defense",
    credits: 20,
    status: "upcoming",
    earnings: "₹30,000 / month",
    summary:
      "Full-time capstone engineering within Digital University Kerala's CDIPD Lab, compiling traceable professional evidence, comprehensive technical reports, and viva evaluation.",
    academicDirection: [
      "Final project development within DUK / CDIPD Lab (12 credits)",
      "Report, evidence portfolio, and viva evaluation (8 credits)",
    ],
    project: {
      title: "Project IV: Enterprise Capstone & Defense",
      focus: [
        "Production hardening and load testing in CDIPD Lab",
        "Compilation of traceable evidence (commits, pull requests, CI traces, security scans)",
        "Comprehensive formal technical thesis report",
        "Defense presentation before academic and industry evaluation panel",
      ],
      expectedOutcome:
        "A professionally evaluated final product or solution, supported by a formal report, evidence portfolio and viva presentation.",
    },
    coreCourses: [
      {
        code: "PRJ401",
        title: "Final Project Development (DUK / CDIPD Lab)",
        credits: 12,
        status: "upcoming",
        description:
          "Supervised full-immersion product engineering inside the Centre for Digital Innovation and Product Development.",
      },
      {
        code: "VIV402",
        title: "Project Report, Evidence Portfolio & Viva Voce",
        credits: 8,
        status: "upcoming",
        description:
          "Evaluation of technical documentation, code quality, verification evidence, and oral defense.",
      },
    ],
    electiveInfo: {
      count: 0,
      credits: 0,
      description: "Full focus on Capstone Project & Evaluation (20 Credits)",
    },
  },
];

export const PROGRAMME_HIGHLIGHTS = {
  institution: "Digital University Kerala",
  school: "School of Digital Sciences",
  title: "M.Sc. in Data Science and Product Development",
  shortTitle: "MSDSPD 2026",
  duration: "2 Years / 4 Semesters",
  totalCredits: 80,
  intake: 20,
  workImmersiveCredits: 50,
  theoryCredits: 30,
  participatingCentres: [
    { code: "CDIPD", name: "Centre for Digital Innovation and Product Development" },
    { code: "AIIRL", name: "Applied AI Research Lab" },
    { code: "CGA", name: "Centre for Geospatial Analytics" },
    { code: "CDA", name: "Centre for Data Analytics" },
  ],
  coreSubjects: [
    { code: "CS101", title: "Advanced AI and Machine Learning" },
    { code: "CS102", title: "Full Stack Architecture and Cloud-Native Development" },
    { code: "CS103", title: "Modern Backend Systems and Data Engineering" },
    { code: "CS104", title: "API Design and Microservices Orchestration" },
    { code: "CS105", title: "DevOps and Automated Pipelines" },
  ],
  earningsProgression: [
    { semester: "Semester I", amount: "₹10,000 / month" },
    { semester: "Semester II", amount: "₹10,000 / month" },
    { semester: "Semester III", amount: "₹20,000 / month" },
    { semester: "Semester IV", amount: "₹30,000 / month" },
  ],
};

export function getAllSemesters(): SemesterData[] {
  return SEMESTERS;
}

export function getSemesterById(id: string): SemesterData | undefined {
  const norm = id.trim().toLowerCase();
  return SEMESTERS.find(
    (s) =>
      s.id.toLowerCase() === norm ||
      s.slug === norm ||
      `semester-${s.slug}` === norm ||
      `semester-${s.roman.toLowerCase()}` === norm ||
      `sem-${s.slug}` === norm,
  );
}
