export interface UnitTask {
  name: string;
  description: string;
}

export interface SyllabusUnit {
  unitNumber: number;
  title: string;
  activity: string;
  tasks: UnitTask[];
}

export interface CourseOutcome {
  code: string;
  description: string;
}

export interface SyllabusCourse {
  code: string;
  title: string;
  semester: {
    number: number;
    roman: string;
    name: string;
  };
  credits: number;
  ltp: string;
  type: "Core";
  description: string;
  outcomes: CourseOutcome[];
  units: SyllabusUnit[];
  outcomeMapping: string;
  keyTools: string[];
  assessmentEmphasis?: string;
  existingSlug?: string;
}

export interface AssessmentComponent {
  component: string;
  weight: number;
  description?: string;
}

export interface CertificationTrack {
  name: string;
  provider: string;
  badgeType: string;
}

export interface OutcomeDefinition {
  code: string;
  title: string;
}

export interface ProgrammeContext {
  structure: {
    duration: string;
    semesters: number;
    totalCredits: number;
    lectureCredits: number;
    practicalCredits: number;
    model: string;
    coreCredits: number;
    coreLtp: string;
  };
  assessmentModel: AssessmentComponent[];
  mandatoryCertifications: {
    rule: string;
    options: CertificationTrack[];
  };
  programOutcomes: OutcomeDefinition[];
  programSpecificOutcomes: OutcomeDefinition[];
  supportingElements: {
    projectLab: {
      title: string;
      semesters: { semester: string; focus: string }[];
      evaluation: string;
    };
    finalProject: {
      semester: string;
      description: string;
      evaluation: string;
    };
  };
  boardReviewNotes: {
    topic: string;
    detail: string;
  }[];
}

export const PROGRAMME_CONTEXT: ProgrammeContext = {
  structure: {
    duration: "2 Years",
    semesters: 4,
    totalCredits: 80,
    lectureCredits: 30,
    practicalCredits: 50,
    model: "Work-Integrated Learning Programme (WILP) · Lab-Integrated · Portfolio-Based",
    coreCredits: 20, // 5 courses × 4 credits
    coreLtp: "1–0–3",
  },
  assessmentModel: [
    { component: "Live Project Work", weight: 50, description: "Hands-on implementation on live product sprints and CoE initiatives" },
    { component: "Product Milestones", weight: 20, description: "Milestone demonstrations, code audits, architecture reviews, and sprint deliveries" },
    { component: "Documentation & Process", weight: 10, description: "CMMI-aligned engineering artifacts, technical specifications, and architectural maps" },
    { component: "Continuous Evaluation", weight: 10, description: "Weekly sprint stand-ups, lab performance, peer feedback, and mentor checks" },
    { component: "Theory Exams", weight: 10, description: "Core academic examinations assessing conceptual and foundational depth" },
  ],
  mandatoryCertifications: {
    rule: "Each student must complete any two certifications from the approved panel prior to degree completion.",
    options: [
      { name: "Google Cloud Professional Data Engineer", provider: "Google Cloud", badgeType: "Cloud & Data" },
      { name: "Microsoft Data Analyst Associate (Power BI)", provider: "Microsoft", badgeType: "Analytics & BI" },
      { name: "AWS Certified Solutions Architect – Associate", provider: "Amazon Web Services", badgeType: "Architecture & Cloud" },
      { name: "AWS Certified Machine Learning – Specialty", provider: "Amazon Web Services", badgeType: "AI & ML" },
      { name: "freeCodeCamp Full Stack Developer", provider: "freeCodeCamp", badgeType: "Web Engineering" },
      { name: "Google Cloud Associate Cloud Engineer", provider: "Google Cloud", badgeType: "Cloud Operations" },
      { name: "Certified Kubernetes Application Developer (CKAD)", provider: "Linux Foundation / Coursera", badgeType: "DevOps & Containers" },
    ],
  },
  programOutcomes: [
    { code: "PO1", title: "AI/ML for intelligent systems" },
    { code: "PO2", title: "Architect scalable cloud-native full-stack" },
    { code: "PO3", title: "Distributed backend & real-time data" },
    { code: "PO4", title: "DevOps / CI-CD / MLOps" },
    { code: "PO5", title: "Requirements → validated products" },
    { code: "PO6", title: "Ethical AI, security & governance" },
    { code: "PO7", title: "Experimentation, benchmarking, optimization" },
    { code: "PO8", title: "Industry readiness & professionalism" },
  ],
  programSpecificOutcomes: [
    { code: "PSO1", title: "End-to-end AI full-stack products" },
    { code: "PSO2", title: "Microservices cloud platforms" },
    { code: "PSO3", title: "Deploy AI via DevOps/MLOps" },
    { code: "PSO4", title: "Compliant, secure, quality-assured systems" },
  ],
  supportingElements: {
    projectLab: {
      title: "Project Lab (Portfolio, one per semester)",
      semesters: [
        { semester: "Semester I", focus: "Concept + UI/UX + Feasibility Validation" },
        { semester: "Semester II", focus: "AI Model + Backend CRUD Integration" },
        { semester: "Semester III", focus: "API Orchestration + Production Cloud Deployment" },
      ],
      evaluation: "Evaluated through sprint reviews, code audits, architecture validation, and demo defence.",
    },
    finalProject: {
      semester: "Semester IV",
      description: "6-month mandatory placement in an AI / Full-Stack / Cloud / DevOps role at an approved industry partner or university research lab.",
      evaluation: "Monthly progress review, industry/faculty mentor evaluation, and final product/solution demonstration with viva voce.",
    },
  },
  boardReviewNotes: [
    {
      topic: "L–T–P Standardization to 1–0–3",
      detail: "L–T–P is officially adopted as 1–0–3 for all five core courses per §13 (Course-wise L–T–P Structure). Historical draft headers (2–0–2 or 3–0–1) are harmonized to 1–0–3.",
    },
    {
      topic: "Course-Specific Assessment Weightings",
      detail: "CS101 emphasizes 70% Project / 30% Theory; CS102 emphasizes Deployment + Architecture Review. CS103–CS105 follow the standard programme 50/20/10/10/10 model.",
    },
    {
      topic: "CS104 Standard Title",
      detail: "Title standardized across the curriculum as 'API Design & Microservices Orchestration'.",
    },
  ],
};

export const CORE_COURSES_SYLLABUS: SyllabusCourse[] = [
  {
    code: "CS101",
    title: "Advanced AI & Machine Learning",
    semester: {
      number: 1,
      roman: "I",
      name: "Foundation & Ideation",
    },
    credits: 4,
    ltp: "1–0–3",
    type: "Core",
    description:
      "Build the AI/ML backbone of the capstone — from automated data pipelines and feature engineering, through baseline and deep-learning models with transfer learning, to systematic tuning, explainability, and deployment of models as monitored APIs.",
    outcomes: [
      { code: "CO1", description: "Build automated data pipelines — review, clean, and vectorize data." },
      { code: "CO2", description: "Design and train baseline and deep-learning models, applying transfer learning." },
      { code: "CO3", description: "Systematically tune and explain models, diagnosing where they fail." },
      { code: "CO4", description: "Package and deploy models as monitored inference APIs." },
    ],
    units: [
      {
        unitNumber: 1,
        title: "Data Engineering & Feature Orchestration",
        activity: "Building an automated data pipeline",
        tasks: [
          { name: "Data Review", description: "Use visual tools (Seaborn, Plotly) to find errors or bias in data." },
          { name: "Automated Cleaning", description: "Write scripts to fix missing info and scale numbers." },
          { name: "Vectorization", description: "Turn text/images into numbers (Word2Vec, BERT)." },
        ],
      },
      {
        unitNumber: 2,
        title: "Neural Architecture & Deep Learning Sprints",
        activity: "The Architecture Shootout",
        tasks: [
          { name: "Simple Models", description: "Use baselines (e.g. Random Forest) to get a starting score." },
          { name: "Deep Learning", description: "Build custom networks for images/text (PyTorch, TensorFlow)." },
          { name: "Transfer Learning", description: "Adapt a pre-trained model to your specific task." },
        ],
      },
      {
        unitNumber: 3,
        title: "Hyperparameter Optimization & Model Explainability",
        activity: "Systematic tuning and testing",
        tasks: [
          { name: "Auto-Tuning", description: "Use Optuna to find the best settings for speed and accuracy." },
          { name: "Error Check", description: "Find exactly where the model makes mistakes." },
          { name: "AI Explanation", description: "Use SHAP or LIME to see which data the model relies on." },
        ],
      },
      {
        unitNumber: 4,
        title: "AI Model Deployment & Inference via API",
        activity: "Creating the AI-as-a-Service",
        tasks: [
          { name: "Packaging", description: "Put the model inside a Docker container." },
          { name: "API Setup", description: "Use FastAPI so other programs can call the model." },
          { name: "Speed Optimization", description: "Shrink the model so it runs faster." },
          { name: "Monitoring", description: "Track the model to ensure it stays accurate over time." },
        ],
      },
    ],
    outcomeMapping: "CO1 → PO1, PO7, PSO1 · CO2 → PO1, PO7, PSO1 · CO3 → PO1, PO6, PO7, PSO4 · CO4 → PO1, PO4, PO2, PSO3",
    keyTools: ["Seaborn", "Plotly", "Word2Vec", "BERT", "Random Forest", "PyTorch", "TensorFlow", "Optuna", "SHAP", "LIME", "Docker", "FastAPI"],
    assessmentEmphasis: "70% Project Work / 30% Theory Examination (within programme assessment structure)",
    existingSlug: "cs101",
  },
  {
    code: "CS102",
    title: "Full Stack Architecture & Cloud-Native Development",
    semester: {
      number: 1,
      roman: "I",
      name: "Foundation & Ideation",
    },
    credits: 4,
    ltp: "1–0–3",
    type: "Core",
    description:
      "Architect and deliver an AI-integrated, full-stack, cloud-native product end-to-end — multi-tier design, unified API gateway, containerized microservices, and a secure zero-downtime cloud launch.",
    outcomes: [
      { code: "CO1", description: "Design a multi-tier full-stack architecture with a sound data plan and data-flow." },
      { code: "CO2", description: "Build a unified API gateway integrating external services with caching." },
      { code: "CO3", description: "Containerize and orchestrate a microservice system." },
      { code: "CO4", description: "Deploy a secure, zero-downtime cloud-native product using IaC and serverless." },
    ],
    units: [
      {
        unitNumber: 1,
        title: "Multi-Tier Ecosystem",
        activity: "Architecting the project structure",
        tasks: [
          { name: "Tech Stack", description: "Choose the front-end and back-end tools." },
          { name: "Data Plan", description: "Design how to store user info and AI results." },
          { name: "System Map", description: "Draw how data moves from the screen to the AI and back." },
        ],
      },
      {
        unitNumber: 2,
        title: "The Middle Layer & API Orchestration",
        activity: "Building a Unified API Gateway",
        tasks: [
          { name: "Server Build", description: "Use Node.js or FastAPI to handle the main logic." },
          { name: "External Data", description: "Connect to outside services (weather, finance feeds)." },
          { name: "Speed", description: "Use Redis to cache common data." },
        ],
      },
      {
        unitNumber: 3,
        title: "Containerization & Microservice Orchestration",
        activity: "Dockerizing the system",
        tasks: [
          { name: "Dockerfiles", description: "Write setup files for every part of the app." },
          { name: "Local Setup", description: "Use Docker Compose to run everything at once." },
          { name: "Scaling", description: "Use Kubernetes to handle many users at once." },
        ],
      },
      {
        unitNumber: 4,
        title: "Cloud-Native Deployment & Serverless Logic",
        activity: "The Zero-Downtime Cloud Launch",
        tasks: [
          { name: "Cloud Setup", description: "Use Terraform to provision cloud servers and databases." },
          { name: "Serverless", description: "Use AWS Lambda for small, event-driven tasks." },
          { name: "Security", description: "Use secure logins and protect private API keys." },
        ],
      },
    ],
    outcomeMapping: "CO1 → PO2, PO5, PSO1 · CO2 → PO2, PO3, PSO2 · CO3 → PO2, PO4, PSO2 · CO4 → PO2, PO4, PO6, PSO2, PSO3",
    keyTools: ["React", "Next.js", "Node.js", "FastAPI", "Redis", "Docker", "Docker Compose", "Kubernetes", "Terraform", "AWS Lambda"],
    assessmentEmphasis: "Deployment + Architecture Review evaluation emphasis",
    existingSlug: "cs102",
  },
  {
    code: "CS103",
    title: "Modern Backend Systems & Data Engineering",
    semester: {
      number: 2,
      roman: "II",
      name: "Backend & AI/Full-Stack Engineering",
    },
    credits: 4,
    ltp: "1–0–3",
    type: "Core",
    description:
      "Engineer the data backbone — hybrid relational/document/vector schemas, real-time streaming, asynchronous task processing, and automated ETL/ELT orchestration for AI systems.",
    outcomes: [
      { code: "CO1", description: "Design hybrid data schemas across relational, document, and vector stores." },
      { code: "CO2", description: "Build real-time data pipelines with event streaming and live sync." },
      { code: "CO3", description: "Implement asynchronous task processing and caching to manage latency." },
      { code: "CO4", description: "Orchestrate automated ETL/ELT pipelines with scheduling and tracking." },
    ],
    units: [
      {
        unitNumber: 1,
        title: "Advanced Database Design",
        activity: "The Hybrid Data Schema Build",
        tasks: [
          { name: "Standard Databases", description: "Set up PostgreSQL for user accounts and billing." },
          { name: "Flexible Databases", description: "Use MongoDB for logs and irregular data." },
          { name: "AI Databases", description: "Use Pinecone to store and search AI vector data." },
        ],
      },
      {
        unitNumber: 2,
        title: "Real-time Data Engineering & Event Streaming",
        activity: "Building a data pipeline",
        tasks: [
          { name: "Messaging", description: "Use Kafka or RabbitMQ to move data between services." },
          { name: "Live Processing", description: "Update the user's screen instantly as the AI works." },
          { name: "Syncing", description: "Keep the main database and search tools matched." },
        ],
      },
      {
        unitNumber: 3,
        title: "Asynchronous Task Processing",
        activity: "Manage Latency",
        tasks: [
          { name: "Background Jobs", description: "Use Celery to handle slow AI tasks without freezing the app." },
          { name: "Caching", description: "Use Redis to store frequent answers." },
          { name: "Efficiency", description: "Manage many concurrent tasks without errors." },
        ],
      },
      {
        unitNumber: 4,
        title: "Data Orchestration & ETL/ELT for AI",
        activity: "The Automated Data Pipeline",
        tasks: [
          { name: "Scheduling", description: "Use Airflow to schedule data moves." },
          { name: "Combining Data", description: "Pull and clean data from three different sources." },
          { name: "Tracking", description: "Build a system that records how well the AI is doing." },
        ],
      },
    ],
    outcomeMapping: "CO1 → PO3, PO2, PSO1 · CO2 → PO3, PO7, PSO2 · CO3 → PO3, PO4, PSO2 · CO4 → PO3, PO4, PO7, PSO3",
    keyTools: ["PostgreSQL", "MongoDB", "Pinecone", "Apache Kafka", "RabbitMQ", "Celery", "Redis", "Apache Airflow"],
    assessmentEmphasis: "Standard Programme Assessment Model (50/20/10/10/10)",
  },
  {
    code: "CS104",
    title: "API Design & Microservices Orchestration",
    semester: {
      number: 3,
      roman: "III",
      name: "Integration & Cloud Orchestration",
    },
    credits: 4,
    ltp: "1–0–3",
    type: "Core",
    description:
      "Design contract-first APIs and decompose the system into resilient, observable microservices — with a gateway for traffic and security, and a service mesh for resilience.",
    outcomes: [
      { code: "CO1", description: "Design and document contract-first APIs (REST best practices, GraphQL)." },
      { code: "CO2", description: "Decompose systems into independent, discoverable microservices." },
      { code: "CO3", description: "Implement an API gateway for traffic, aggregation, and token security." },
      { code: "CO4", description: "Engineer resilience with service mesh, circuit breakers, and tracing." },
    ],
    units: [
      {
        unitNumber: 1,
        title: "API Design & Documentation",
        activity: "The API Contract Sprint",
        tasks: [
          { name: "Blueprints", description: "Use Swagger to design the API before coding." },
          { name: "Best Practices", description: "Apply standard web rules for requests and errors." },
          { name: "Smart Queries", description: "Use GraphQL so the front end fetches only needed data." },
        ],
      },
      {
        unitNumber: 2,
        title: "Microservices Decomposition",
        activity: "The Service Split",
        tasks: [
          { name: "Fast Talk", description: "Use gRPC for high-speed internal communication." },
          { name: "Independent Services", description: "Ensure parts can fail without breaking the whole." },
          { name: "Service Registry", description: "Let services discover each other automatically in the cloud." },
        ],
      },
      {
        unitNumber: 3,
        title: "The API Gateway",
        activity: "Implementing a Traffic Controller",
        tasks: [
          { name: "Gateway Setup", description: "Use Kong or AWS to manage incoming traffic." },
          { name: "Data Aggregation", description: "Combine AI and database data into one package." },
          { name: "Security", description: "Use tokens to stop unauthorized users." },
        ],
      },
      {
        unitNumber: 4,
        title: "Service Mesh & Resilience",
        activity: "The Chaos Engineering Test",
        tasks: [
          { name: "Traffic Management", description: "Use Istio to control service-to-service traffic." },
          { name: "Safety Switches", description: "Use circuit breakers to stop a slow service crashing the app." },
          { name: "Tracing", description: "Use Jaeger to follow a request through the system." },
        ],
      },
    ],
    outcomeMapping: "CO1 → PO2, PO5, PSO2 · CO2 → PO2, PO3, PSO2 · CO3 → PO2, PO6, PSO2 · CO4 → PO2, PO7, PO4, PSO2, PSO4",
    keyTools: ["Swagger / OpenAPI", "GraphQL", "gRPC", "Kong Gateway", "AWS API Gateway", "Istio Service Mesh", "Jaeger Tracing"],
    assessmentEmphasis: "Standard Programme Assessment Model (50/20/10/10/10)",
  },
  {
    code: "CS105",
    title: "DevOps & Automated Pipelines",
    semester: {
      number: 2,
      roman: "II",
      name: "Backend & AI/Full-Stack Engineering",
    },
    credits: 4,
    ltp: "1–0–3",
    type: "Core",
    description:
      "Automate the delivery lifecycle — CI/CD with quality gates, infrastructure-as-code and GitOps, MLOps for data/model lifecycle, and full observability with alerting.",
    outcomes: [
      { code: "CO1", description: "Build CI/CD pipelines with automated quality gates and image storage." },
      { code: "CO2", description: "Provision infrastructure as code and implement GitOps." },
      { code: "CO3", description: "Implement MLOps — data versioning, automated retraining, and scalable serving." },
      { code: "CO4", description: "Establish observability with centralized logging, dashboards, and alerts." },
    ],
    units: [
      {
        unitNumber: 1,
        title: "The CI/CD Engine",
        activity: "Building the Green-to-Green Pipeline",
        tasks: [
          { name: "Auto-Flow", description: "Use GitHub Actions to start builds when code is saved." },
          { name: "Quality Checks", description: "Automatically reject code that fails tests." },
          { name: "Image Storage", description: "Save Docker images to a private registry." },
        ],
      },
      {
        unitNumber: 2,
        title: "Infrastructure as Code & GitOps",
        activity: "The Scripted Data Center",
        tasks: [
          { name: "Code-Based Servers", description: "Use Terraform to define cloud hardware." },
          { name: "Software Setup", description: "Use Ansible to install software inside containers." },
          { name: "Auto-Sync", description: "Use ArgoCD to keep the live app matched with the code." },
        ],
      },
      {
        unitNumber: 3,
        title: "MLOps",
        activity: "Building DVC and automatic retraining",
        tasks: [
          { name: "Data Versioning", description: "Track dataset changes just like code." },
          { name: "Auto-Retrain", description: "Set the AI to retrain when new data arrives." },
          { name: "AI Serving", description: "Deploy the model to handle many requests at once." },
        ],
      },
      {
        unitNumber: 4,
        title: "Observability & Feedback",
        activity: "Monitor and update",
        tasks: [
          { name: "Log Gathering", description: "Use the ELK stack to collect error reports." },
          { name: "Dashboards", description: "Build Grafana screens to watch system health." },
          { name: "Alerts", description: "Get notified when the AI misbehaves or the app crashes." },
        ],
      },
    ],
    outcomeMapping: "CO1 → PO4, PO8, PSO4 · CO2 → PO4, PO2, PSO2 · CO3 → PO4, PO1, PSO3 · CO4 → PO4, PO7, PO6, PSO4",
    keyTools: ["GitHub Actions", "Docker Registry", "Terraform", "Ansible", "ArgoCD", "DVC", "ELK Stack", "Grafana"],
    assessmentEmphasis: "Standard Programme Assessment Model (50/20/10/10/10)",
  },
];
