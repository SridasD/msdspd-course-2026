# M.Sc. Data Science & Product Development — Core Courses Syllabus
### CS101 – CS105 · Full Syllabus

*Work-Integrated Learning Programme (WILP) · School of Digital Sciences · Kerala University of Digital Sciences, Innovation and Technology*

---

## A. Programme Context

- **Structure:** 2 years · 4 semesters · 80 credits (30 Lecture / 50 Practical) · lab-integrated, portfolio-based, WILP.
- **Core courses:** 5 × 4 credits = 20 credits. **All cores are L–T–P 1–0–3** (per §13, Course-wise L–T–P Structure).
- **Semester placement:** CS101 & CS102 → Sem I · CS103 & CS105 → Sem II · CS104 → Sem III.
- **Mandatory certifications:** each student completes **any two** from — Google Cloud Professional Data Engineer · Microsoft Data Analyst Associate (Power BI) · AWS Solutions Architect Associate · AWS Certified Machine Learning · freeCodeCamp Full Stack Developer · Google Cloud Associate Cloud Engineer · CKAD (Coursera).

### Assessment Model (governs all core courses — §11)

| Component | Weight |
|---|---|
| Live Project Work | 50% |
| Product Milestones | 20% |
| Documentation & process (CMMI-aligned) | 10% |
| Continuous Evaluation | 10% |
| Theory Exams (core only) | 10% |

*Course-level emphases noted in the plan: CS101 — 70% Project / 30% Theory; CS102 — Deployment + Architecture Review. These sit within the programme model above.*

### Programme & Programme-Specific Outcomes (reference)

**PO1** AI/ML for intelligent systems · **PO2** architect scalable cloud-native full-stack · **PO3** distributed backend & real-time data · **PO4** DevOps/CI-CD/MLOps · **PO5** requirements → validated products · **PO6** ethical AI, security & governance · **PO7** experimentation, benchmarking, optimization · **PO8** industry readiness & professionalism.

**PSO1** end-to-end AI full-stack products · **PSO2** microservices cloud platforms · **PSO3** deploy AI via DevOps/MLOps · **PSO4** compliant, secure, quality-assured systems.

*Unit activities and tasks below are reproduced from the course plan. Course Outcomes and CO→PO/PSO mappings are derived scaffolding to complete each syllabus.*

---

# CS101 · Advanced AI & Machine Learning

| Semester | Type | Credits | L–T–P |
|---|---|---|---|
| I — Foundation & Ideation | Core | 4 | 1–0–3 |

**Description:** Build the AI/ML backbone of the capstone — from automated data pipelines and feature engineering, through baseline and deep-learning models with transfer learning, to systematic tuning, explainability, and deployment of models as monitored APIs.

**Course Outcomes**

| CO | Outcome |
|---|---|
| CO1 | Build automated data pipelines — review, clean, and vectorize data. |
| CO2 | Design and train baseline and deep-learning models, applying transfer learning. |
| CO3 | Systematically tune and explain models, diagnosing where they fail. |
| CO4 | Package and deploy models as monitored inference APIs. |

**Detailed Syllabus**

**Unit 1 · Data Engineering & Feature Orchestration** — *Activity: Building an automated data pipeline.*
| Task | Description |
|---|---|
| Data Review | Use visual tools (Seaborn, Plotly) to find errors or bias in data. |
| Automated Cleaning | Write scripts to fix missing info and scale numbers. |
| Vectorization | Turn text/images into numbers (Word2Vec, BERT). |

**Unit 2 · Neural Architecture & Deep Learning Sprints** — *Activity: The Architecture Shootout.*
| Task | Description |
|---|---|
| Simple Models | Use baselines (e.g. Random Forest) to get a starting score. |
| Deep Learning | Build custom networks for images/text (PyTorch, TensorFlow). |
| Transfer Learning | Adapt a pre-trained model to your specific task. |

**Unit 3 · Hyperparameter Optimization & Model Explainability** — *Activity: Systematic tuning and testing.*
| Task | Description |
|---|---|
| Auto-Tuning | Use Optuna to find the best settings for speed and accuracy. |
| Error Check | Find exactly where the model makes mistakes. |
| AI Explanation | Use SHAP or LIME to see which data the model relies on. |

**Unit 4 · AI Model Deployment & Inference via API** — *Activity: Creating the AI-as-a-Service.*
| Task | Description |
|---|---|
| Packaging | Put the model inside a Docker container. |
| API Setup | Use FastAPI so other programs can call the model. |
| Speed Optimization | Shrink the model so it runs faster. |
| Monitoring | Track the model to ensure it stays accurate over time. |

**CO → PO/PSO:** CO1 → PO1, PO7, PSO1 · CO2 → PO1, PO7, PSO1 · CO3 → PO1, PO6, PO7, PSO4 · CO4 → PO1, PO4, PO2, PSO3.
**Key tools:** Seaborn/Plotly, Word2Vec/BERT, Random Forest, PyTorch/TensorFlow, Optuna, SHAP/LIME, Docker, FastAPI.

---

# CS102 · Full Stack Architecture & Cloud-Native Development

| Semester | Type | Credits | L–T–P |
|---|---|---|---|
| I — Foundation & Ideation | Core | 4 | 1–0–3 |

**Description:** Architect and deliver an AI-integrated, full-stack, cloud-native product end-to-end — multi-tier design, unified API gateway, containerized microservices, and a secure zero-downtime cloud launch.

**Course Outcomes**

| CO | Outcome |
|---|---|
| CO1 | Design a multi-tier full-stack architecture with a sound data plan and data-flow. |
| CO2 | Build a unified API gateway integrating external services with caching. |
| CO3 | Containerize and orchestrate a microservice system. |
| CO4 | Deploy a secure, zero-downtime cloud-native product using IaC and serverless. |

**Detailed Syllabus**

**Unit 1 · Multi-Tier Ecosystem** — *Activity: Architecting the project structure.*
| Task | Description |
|---|---|
| Tech Stack | Choose the front-end and back-end tools. |
| Data Plan | Design how to store user info and AI results. |
| System Map | Draw how data moves from the screen to the AI and back. |

**Unit 2 · The Middle Layer & API Orchestration** — *Activity: Building a Unified API Gateway.*
| Task | Description |
|---|---|
| Server Build | Use Node.js or FastAPI to handle the main logic. |
| External Data | Connect to outside services (weather, finance feeds). |
| Speed | Use Redis to cache common data. |

**Unit 3 · Containerization & Microservice Orchestration** — *Activity: Dockerizing the system.*
| Task | Description |
|---|---|
| Dockerfiles | Write setup files for every part of the app. |
| Local Setup | Use Docker Compose to run everything at once. |
| Scaling | Use Kubernetes to handle many users at once. |

**Unit 4 · Cloud-Native Deployment & Serverless Logic** — *Activity: The Zero-Downtime Cloud Launch.*
| Task | Description |
|---|---|
| Cloud Setup | Use Terraform to provision cloud servers and databases. |
| Serverless | Use AWS Lambda for small, event-driven tasks. |
| Security | Use secure logins and protect private API keys. |

**CO → PO/PSO:** CO1 → PO2, PO5, PSO1 · CO2 → PO2, PO3, PSO2 · CO3 → PO2, PO4, PSO2 · CO4 → PO2, PO4, PO6, PSO2, PSO3.
**Key tools:** React/Next.js, Node.js/FastAPI, Redis, Docker/Compose, Kubernetes, Terraform, AWS Lambda.

---

# CS103 · Modern Backend Systems & Data Engineering

| Semester | Type | Credits | L–T–P |
|---|---|---|---|
| II — Backend & AI/Full-Stack Engineering | Core | 4 | 1–0–3 |

**Description:** Engineer the data backbone — hybrid relational/document/vector schemas, real-time streaming, asynchronous task processing, and automated ETL/ELT orchestration for AI systems.

**Course Outcomes**

| CO | Outcome |
|---|---|
| CO1 | Design hybrid data schemas across relational, document, and vector stores. |
| CO2 | Build real-time data pipelines with event streaming and live sync. |
| CO3 | Implement asynchronous task processing and caching to manage latency. |
| CO4 | Orchestrate automated ETL/ELT pipelines with scheduling and tracking. |

**Detailed Syllabus**

**Unit 1 · Advanced Database Design** — *Activity: The Hybrid Data Schema Build.*
| Task | Description |
|---|---|
| Standard Databases | Set up PostgreSQL for user accounts and billing. |
| Flexible Databases | Use MongoDB for logs and irregular data. |
| AI Databases | Use Pinecone to store and search AI vector data. |

**Unit 2 · Real-time Data Engineering & Event Streaming** — *Activity: Building a data pipeline.*
| Task | Description |
|---|---|
| Messaging | Use Kafka or RabbitMQ to move data between services. |
| Live Processing | Update the user's screen instantly as the AI works. |
| Syncing | Keep the main database and search tools matched. |

**Unit 3 · Asynchronous Task Processing** — *Activity: Manage Latency.*
| Task | Description |
|---|---|
| Background Jobs | Use Celery to handle slow AI tasks without freezing the app. |
| Caching | Use Redis to store frequent answers. |
| Efficiency | Manage many concurrent tasks without errors. |

**Unit 4 · Data Orchestration & ETL/ELT for AI** — *Activity: The Automated Data Pipeline.*
| Task | Description |
|---|---|
| Scheduling | Use Airflow to schedule data moves. |
| Combining Data | Pull and clean data from three different sources. |
| Tracking | Build a system that records how well the AI is doing. |

**CO → PO/PSO:** CO1 → PO3, PO2, PSO1 · CO2 → PO3, PO7, PSO2 · CO3 → PO3, PO4, PSO2 · CO4 → PO3, PO4, PO7, PSO3.
**Key tools:** PostgreSQL, MongoDB, Pinecone, Kafka/RabbitMQ, Celery, Redis, Airflow.

---

# CS104 · API Design & Microservices Orchestration

| Semester | Type | Credits | L–T–P |
|---|---|---|---|
| III — Integration & Cloud Orchestration | Core | 4 | 1–0–3 |

**Description:** Design contract-first APIs and decompose the system into resilient, observable microservices — with a gateway for traffic and security, and a service mesh for resilience.

**Course Outcomes**

| CO | Outcome |
|---|---|
| CO1 | Design and document contract-first APIs (REST best practices, GraphQL). |
| CO2 | Decompose systems into independent, discoverable microservices. |
| CO3 | Implement an API gateway for traffic, aggregation, and token security. |
| CO4 | Engineer resilience with service mesh, circuit breakers, and tracing. |

**Detailed Syllabus**

**Unit 1 · API Design & Documentation** — *Activity: The API Contract Sprint.*
| Task | Description |
|---|---|
| Blueprints | Use Swagger to design the API before coding. |
| Best Practices | Apply standard web rules for requests and errors. |
| Smart Queries | Use GraphQL so the front end fetches only needed data. |

**Unit 2 · Microservices Decomposition** — *Activity: The Service Split.*
| Task | Description |
|---|---|
| Fast Talk | Use gRPC for high-speed internal communication. |
| Independent Services | Ensure parts can fail without breaking the whole. |
| Service Registry | Let services discover each other automatically in the cloud. |

**Unit 3 · The API Gateway** — *Activity: Implementing a Traffic Controller.*
| Task | Description |
|---|---|
| Gateway Setup | Use Kong or AWS to manage incoming traffic. |
| Data Aggregation | Combine AI and database data into one package. |
| Security | Use tokens to stop unauthorized users. |

**Unit 4 · Service Mesh & Resilience** — *Activity: The Chaos Engineering Test.*
| Task | Description |
|---|---|
| Traffic Management | Use Istio to control service-to-service traffic. |
| Safety Switches | Use circuit breakers to stop a slow service crashing the app. |
| Tracing | Use Jaeger to follow a request through the system. |

**CO → PO/PSO:** CO1 → PO2, PO5, PSO2 · CO2 → PO2, PO3, PSO2 · CO3 → PO2, PO6, PSO2 · CO4 → PO2, PO7, PO4, PSO2, PSO4.
**Key tools:** Swagger/OpenAPI, GraphQL, gRPC, Kong/AWS, Istio, Jaeger.

---

# CS105 · DevOps & Automated Pipelines

| Semester | Type | Credits | L–T–P |
|---|---|---|---|
| II — Backend & AI/Full-Stack Engineering | Core | 4 | 1–0–3 |

**Description:** Automate the delivery lifecycle — CI/CD with quality gates, infrastructure-as-code and GitOps, MLOps for data/model lifecycle, and full observability with alerting.

**Course Outcomes**

| CO | Outcome |
|---|---|
| CO1 | Build CI/CD pipelines with automated quality gates and image storage. |
| CO2 | Provision infrastructure as code and implement GitOps. |
| CO3 | Implement MLOps — data versioning, automated retraining, and scalable serving. |
| CO4 | Establish observability with centralized logging, dashboards, and alerts. |

**Detailed Syllabus**

**Unit 1 · The CI/CD Engine** — *Activity: Building the Green-to-Green Pipeline.*
| Task | Description |
|---|---|
| Auto-Flow | Use GitHub Actions to start builds when code is saved. |
| Quality Checks | Automatically reject code that fails tests. |
| Image Storage | Save Docker images to a private registry. |

**Unit 2 · Infrastructure as Code & GitOps** — *Activity: The Scripted Data Center.*
| Task | Description |
|---|---|
| Code-Based Servers | Use Terraform to define cloud hardware. |
| Software Setup | Use Ansible to install software inside containers. |
| Auto-Sync | Use ArgoCD to keep the live app matched with the code. |

**Unit 3 · MLOps** — *Activity: Building DVC and automatic retraining.*
| Task | Description |
|---|---|
| Data Versioning | Track dataset changes just like code. |
| Auto-Retrain | Set the AI to retrain when new data arrives. |
| AI Serving | Deploy the model to handle many requests at once. |

**Unit 4 · Observability & Feedback** — *Activity: Monitor and update.*
| Task | Description |
|---|---|
| Log Gathering | Use the ELK stack to collect error reports. |
| Dashboards | Build Grafana screens to watch system health. |
| Alerts | Get notified when the AI misbehaves or the app crashes. |

**CO → PO/PSO:** CO1 → PO4, PO8, PSO4 · CO2 → PO4, PO2, PSO2 · CO3 → PO4, PO1, PSO3 · CO4 → PO4, PO7, PO6, PSO4.
**Key tools:** GitHub Actions, Docker registry, Terraform, Ansible, ArgoCD, DVC, ELK, Grafana.

---

## B. Supporting Programme Elements

**Project Lab (portfolio, one per semester):** Sem I — Concept + UI/UX + Feasibility · Sem II — AI model + Backend CRUD · Sem III — API orchestration + Cloud deployment. *Evaluation: sprint reviews, code audits, architecture validation, demo defence.*

**Final Project (Semester IV):** 6-month mandatory placement in an AI / Full-Stack / Cloud / DevOps role · monthly progress review · industry/faculty mentor evaluation · final product/solution demonstration and viva voce.

---

## C. Note for Board Review

- **L–T–P adopted as 1–0–3 for all five cores** per §13 (definitive Course-wise L–T–P table); the Detailed Syllabus headers (2–0–2) and the §12 credit-summary table (which shows internal arithmetic inconsistencies) should be corrected to match §13.
- **Course-specific assessment weightings** are stated only for CS101 (70/30) and CS102 (Deployment + Architecture Review); CS103–CS105 default to the programme Assessment Model (§11). Confirm whether per-course weightings are intended.
- **CS104 title** appears as both "API Design & Microservices" (detailed syllabus) and "API Design & Microservices Orchestration" (core-subjects list) — standardise.

---

*Prepared from "SODS — M.Sc. Data Science and Product Development — Final Course Plan." Unit activities and tasks are reproduced from the source; Course Outcomes, CO–PO/PSO mappings, and per-course descriptions are derived scaffolding to complete the syllabus.*
