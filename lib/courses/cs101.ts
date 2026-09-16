import type { Course, CourseData, CoursePart } from "../types";

export const CS101_COURSE: Course = {
  university: "Kerala University of Digital Sciences, Innovation and Technology",
  department: "School of Digital Sciences",
  code: "CS101",
  title: "Advanced AI & Machine Learning",
  semester: "Semester 1",
  ltp: "3–0–1",
  credits: 4,
  totalHours: 0,
  totalPoints: 4000,
  type: "core",
};

export const CS101_PARTS: CoursePart[] = [
  {
    "id": "I",
    "label": "Unit 1 — Data Engineering and Feature Orchestration",
    "statLabel": "Data engineering points",
    "color": "indigo"
  },
  {
    "id": "II",
    "label": "Unit 2 — Neural Architecture and Deep Learning",
    "statLabel": "Deep learning points",
    "color": "sky"
  },
  {
    "id": "III",
    "label": "Unit 3 — Optimization and Explainability",
    "statLabel": "Optimization points",
    "color": "violet"
  },
  {
    "id": "IV",
    "label": "Unit 4 — Deployment and Inference API",
    "statLabel": "Deployment points",
    "color": "emerald"
  }
] as CoursePart[];

export const CS101_ACTIVITIES = [
  {
    "id": "CS101-ACT-01",
    "part": "I",
    "icon": "workflow",
    "hours": 0,
    "points": 1000,
    "title": "Data Engineering and Feature Orchestration",
    "desc": "Build a reproducible data and feature pipeline from ingestion through monitoring.",
    "outcome": "Engineer, orchestrate, version and monitor production-ready data and feature pipelines.",
    "subs": [
      {
        "id": "CS101-SUB-1.1",
        "title": "Multi-Source Data Ingestion",
        "hours": 0,
        "points": 50,
        "tag": "Understand Core Ideas",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Ingest raw data from at least three different source types (flat files such as CSV/JSON, a relational database, and a REST API or streaming source) into a common raw data layer. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.2",
        "title": "Data Quality Profiling and Diagnostics",
        "hours": 0,
        "points": 55,
        "tag": "Analyse the Problem",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Profile the ingested data for missing values, duplicates, outliers, type mismatches, and distribution characteristics, and produce a written data quality report. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.3",
        "title": "Exploratory Data Analysis and Feature Hypothesis Log",
        "hours": 0,
        "points": 45,
        "tag": "Analyse the Problem",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Conduct exploratory analysis to identify relationships and patterns, and maintain a log of candidate feature ideas with the reasoning behind each one. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.4",
        "title": "Data Cleaning and Preprocessing Pipeline",
        "hours": 0,
        "points": 60,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Build a reusable, script-based cleaning pipeline (missing value handling, deduplication, type correction, outlier treatment) that can be re-run on new data drops. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.5",
        "title": "Schema Definition and Automated Data Validation",
        "hours": 0,
        "points": 55,
        "tag": "Design and Build",
        "evidence": "Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.",
        "standard": "The submission demonstrably completes the stated task: Define an explicit schema/data contract for the cleaned dataset and implement automated validation checks (for example with Pandera or Great Expectations) that fail loudly on violation. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.6",
        "title": "Core Feature Engineering",
        "hours": 0,
        "points": 60,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Implement core feature transformations: categorical encoding, numerical scaling/normalization, binning, and imputation strategies, packaged as reusable functions. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.7",
        "title": "Advanced Feature Engineering",
        "hours": 0,
        "points": 80,
        "tag": "Understand Core Ideas",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Engineer higher-complexity features: time-window aggregations, interaction terms, ratio features, and at least one embedding-based feature for a high-cardinality or unstructured field. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.8",
        "title": "Feature Selection and Dimensionality Reduction",
        "hours": 0,
        "points": 60,
        "tag": "Review and Justify",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Apply statistical and model-based feature selection methods and at least one dimensionality reduction technique, and justify the final feature subset. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.9",
        "title": "Feature Store Design and Implementation",
        "hours": 0,
        "points": 90,
        "tag": "Design and Build",
        "evidence": "Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.",
        "standard": "The submission demonstrably completes the stated task: Design and implement a feature store with an offline (batch/training) layer and an online (low-latency serving) layer, including a defined feature registry. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.10",
        "title": "Workflow Orchestration: DAG Design",
        "hours": 0,
        "points": 85,
        "tag": "Design and Build",
        "evidence": "Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.",
        "standard": "The submission demonstrably completes the stated task: Design and implement a directed acyclic graph (DAG) in an orchestration tool such as Airflow, Prefect, or Dagster that chains ingestion, cleaning, validation, and feature engineering into one workflow. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.11",
        "title": "Orchestration Hardening: Scheduling, Retries, and Failure Handling",
        "hours": 0,
        "points": 70,
        "tag": "Understand Core Ideas",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Add scheduling, task dependencies, retry policies, alerting, and graceful failure handling to the orchestrated pipeline so it can run unattended. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.12",
        "title": "Data and Feature Versioning with Lineage Tracking",
        "hours": 0,
        "points": 50,
        "tag": "Apply Principles",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Introduce version control for datasets and features (for example with DVC, MLflow, or Delta Lake) and document the lineage from raw source to final feature. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.13",
        "title": "Pipeline Monitoring, Logging, and Drift Detection",
        "hours": 0,
        "points": 60,
        "tag": "Design and Build",
        "evidence": "Working instrumentation or monitoring configuration, sample logs or metrics, alert evidence, and an interpretation note.",
        "standard": "The submission demonstrably completes the stated task: Instrument the pipeline with logging and metrics, and implement a basic data/feature drift detection check that flags when incoming data departs from the training distribution. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-1.14",
        "title": "Capstone: End-to-End Data Engineering and Feature Orchestration Pipeline",
        "hours": 0,
        "points": 180,
        "tag": "Design and Build",
        "evidence": "Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.",
        "standard": "The submission demonstrably completes the stated task: Integrate all preceding components (ingestion, cleaning, validation, core and advanced feature engineering, feature store, orchestration, versioning, monitoring) into a single automated, reproducible, end-to-end pipeline. Deliver a working demonstration, architecture diagram, and documentation covering design decisions and trade-offs. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      }
    ]
  },
  {
    "id": "CS101-ACT-02",
    "part": "II",
    "icon": "design",
    "hours": 0,
    "points": 1000,
    "title": "Machine Learning, Neural Architecture and Deep Learning (including Transfer Learning)",
    "desc": "Compare classical and deep neural architectures, including transfer learning.",
    "outcome": "Design, train and evaluate neural systems against defensible baselines and metrics.",
    "subs": [
      {
        "id": "CS101-SUB-2.1",
        "title": "Baseline Model Development",
        "hours": 0,
        "points": 40,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Using the features produced by the Unit 1 pipeline, train and compare at least two classical machine learning baselines (for example linear/logistic regression and a tree-based model) to establish a performance floor. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.2",
        "title": "Model Evaluation Framework and Metric Selection",
        "hours": 0,
        "points": 40,
        "tag": "Review and Justify",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Define and justify an evaluation protocol (train/validation/test split or cross-validation) and the metrics appropriate to the problem type, and apply it consistently to the baselines. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.3",
        "title": "Cross-Validation and Hyperparameter Tuning",
        "hours": 0,
        "points": 55,
        "tag": "Design and Build",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Implement k-fold cross-validation and a systematic hyperparameter search (grid, random, or Bayesian) for the baseline models, and report the sensitivity of performance to key hyperparameters. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.4",
        "title": "Ensemble Learning",
        "hours": 0,
        "points": 60,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Build at least one bagging model, one boosting model, and a stacked ensemble, and compare their accuracy, variance, and training cost against the single-model baselines. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.5",
        "title": "Neural Network Fundamentals: Building and Training an MLP",
        "hours": 0,
        "points": 55,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Implement a multi-layer perceptron from a deep learning framework (PyTorch or TensorFlow), including forward pass, loss computation, and backpropagation-based training on the Unit 1 feature set. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.6",
        "title": "Training Dynamics: Optimizers, Loss Functions, and Regularization",
        "hours": 0,
        "points": 60,
        "tag": "Understand Core Ideas",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Experiment with different optimizers (SGD, Adam, RMSprop), loss functions, and regularization techniques (dropout, batch normalization, weight decay, early stopping), and document their effect on convergence and generalization. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.7",
        "title": "Convolutional Neural Network Architecture Design",
        "hours": 0,
        "points": 75,
        "tag": "Design and Build",
        "evidence": "Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.",
        "standard": "The submission demonstrably completes the stated task: Design and train a convolutional neural network for an image or grid-structured dataset, including at least one architectural variant (depth, filter size, or pooling strategy) tested against a baseline CNN. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.8",
        "title": "Sequence Architectures: RNN, LSTM, and GRU",
        "hours": 0,
        "points": 75,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Design and train a recurrent architecture for sequential or time-series data, comparing a vanilla RNN against LSTM and/or GRU variants on the same task. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.9",
        "title": "Attention Mechanisms and Transformer Architecture",
        "hours": 0,
        "points": 85,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Implement or adapt an attention mechanism and a transformer-based architecture for the task at hand, and compare it against the recurrent and convolutional models built earlier. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.10",
        "title": "Transfer Learning: Feature Extraction from Pretrained Models",
        "hours": 0,
        "points": 65,
        "tag": "Apply Principles",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Use a pretrained model (for example a vision or language backbone) as a fixed feature extractor, attach a new task-specific head, and evaluate performance against models trained from scratch. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.11",
        "title": "Transfer Learning: Fine-Tuning and Domain Adaptation",
        "hours": 0,
        "points": 85,
        "tag": "Analyse the Problem",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Fine-tune a pretrained model on the target dataset using techniques such as partial layer unfreezing and discriminative learning rates, and analyze the trade-off between training cost and performance gain versus feature extraction alone. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.12",
        "title": "Model Compression and Efficient Inference",
        "hours": 0,
        "points": 60,
        "tag": "Apply Principles",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Apply at least one compression technique (quantization, pruning, or knowledge distillation) to a trained model and measure the resulting change in accuracy, latency, and model size. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.13",
        "title": "Experiment Tracking and Reproducibility",
        "hours": 0,
        "points": 50,
        "tag": "Apply Principles",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Set up an experiment tracking system (for example MLflow or Weights and Biases) to log hyperparameters, metrics, and artifacts across all models trained in this unit, and produce a reproducibility report. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-2.14",
        "title": "Capstone: End-to-End Machine Learning and Deep Learning Pipeline with Transfer Learning",
        "hours": 0,
        "points": 195,
        "tag": "Design and Build",
        "evidence": "Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.",
        "standard": "The submission demonstrably completes the stated task: Integrate the strongest models from this unit (classical baseline, deep architecture, and transfer-learned model) with the Unit 1 feature pipeline into one automated pipeline that trains, evaluates, selects, and serves a final model via an API or endpoint. Deliver the working pipeline, an architecture diagram, a model comparison report, and a live demonstration. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      }
    ]
  },
  {
    "id": "CS101-ACT-03",
    "part": "III",
    "icon": "audit",
    "hours": 0,
    "points": 1000,
    "title": "Hyperparameter Optimization and Model Explainability",
    "desc": "Tune models systematically, diagnose errors and validate explanations.",
    "outcome": "Produce a tuned, explainable model supported by error analysis and reliable local and global explanations.",
    "subs": [
      {
        "id": "CS101-SUB-3.1",
        "title": "Search Space Definition and Baseline Tuning (Systematic Tuning and Testing)",
        "hours": 0,
        "points": 55,
        "tag": "Analyse the Problem",
        "evidence": "Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.",
        "standard": "The submission demonstrably completes the stated task: Define a hyperparameter search space for the model trained in Unit 2, and run grid search and random search baselines, comparing them on the number of trials needed versus the best score found. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.2",
        "title": "Cross-Validation Strategy for Robust Tuning (Systematic Tuning and Testing)",
        "hours": 0,
        "points": 60,
        "tag": "Design and Build",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: Implement a nested cross-validation scheme so that hyperparameter selection is tested on data the tuning process has never seen, and quantify how much the grid/random search results in Activity 1 were overfit to the validation set. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.3",
        "title": "Optuna Study Setup (Auto-Tuning)",
        "hours": 0,
        "points": 55,
        "tag": "Apply Principles",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Set up an Optuna study: define the objective function, encode the search space using Optuna's trial API, and run a first automated study to find the best hyperparameter settings for accuracy. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.4",
        "title": "Bayesian Optimization with Pruning (Auto-Tuning)",
        "hours": 0,
        "points": 75,
        "tag": "Analyse the Problem",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Reconfigure the Optuna study to use a Bayesian/TPE sampler together with a pruning strategy (for example Median Pruner or Hyperband), and compare convergence speed and final accuracy against the unpruned study from Activity 3. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.5",
        "title": "Multi-Objective Tuning for Speed and Accuracy (Auto-Tuning)",
        "hours": 0,
        "points": 90,
        "tag": "Review and Justify",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Extend the Optuna study to a multi-objective search that optimizes accuracy and inference speed/model size simultaneously, and produce a Pareto front of candidate models with a written recommendation of which trade-off point to deploy. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.6",
        "title": "Distributed Hyperparameter Search (Auto-Tuning)",
        "hours": 0,
        "points": 70,
        "tag": "Understand Core Ideas",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Scale the Optuna study to run trials in parallel across multiple processes or workers using a shared storage backend, and measure the wall-clock speed-up over the single-process study. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.7",
        "title": "Confusion Matrix and Misclassification Taxonomy (Error Check)",
        "hours": 0,
        "points": 55,
        "tag": "Design and Build",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: Using the best model from the tuning activities, build a confusion matrix and classify the errors into a taxonomy (for example: near-boundary cases, mislabeled data, rare classes, outliers), identifying which categories dominate. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.8",
        "title": "Error Slicing and Subgroup Analysis (Error Check)",
        "hours": 0,
        "points": 75,
        "tag": "Analyse the Problem",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Slice model errors by relevant feature segments or metadata (for example time period, source, or demographic/category groups) to find exactly where the model systematically underperforms, and report any subgroup with a significantly higher error rate. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.9",
        "title": "Root-Cause Error Investigation (Error Check)",
        "hours": 0,
        "points": 70,
        "tag": "Analyse the Problem",
        "evidence": "Reproducible analysis, generated results, supporting plots or tables, and a written findings report.",
        "standard": "The submission demonstrably completes the stated task: Take the worst-performing samples identified in Activities 7 and 8 and trace each one back through the Unit 1 feature pipeline to determine whether the error originates from the data, the features, or the model itself. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.10",
        "title": "Global Explainability with SHAP (AI Explanation)",
        "hours": 0,
        "points": 70,
        "tag": "Understand Core Ideas",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: Compute SHAP values for the tuned model and produce a global feature importance summary showing which features the model relies on most across the whole dataset. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.11",
        "title": "Local Explainability with SHAP and LIME (AI Explanation)",
        "hours": 0,
        "points": 80,
        "tag": "Analyse the Problem",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: For a set of individual predictions, especially the misclassified cases from the Error Check activities, generate local explanations using both SHAP and LIME, and compare where the two methods agree and disagree on which data points the model cared about most. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.12",
        "title": "Explainability Validation and Sanity Checks (AI Explanation)",
        "hours": 0,
        "points": 65,
        "tag": "Analyse the Problem",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: Stress-test the explanations from Activities 10 and 11 with perturbation and stability checks (for example, do explanations stay consistent under small input changes, and do they match domain expectations), and document any case where the explanation looks unreliable. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-3.13",
        "title": "Capstone: End-to-End Tuned and Explainable Model Pipeline",
        "hours": 0,
        "points": 180,
        "tag": "Design and Build",
        "evidence": "Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.",
        "standard": "The submission demonstrably completes the stated task: Integrate automated Optuna tuning, systematic error analysis, and SHAP/LIME explainability into a single pipeline that takes the Unit 1/2 pipeline output, produces a tuned final model, an error analysis report, and a per-prediction explainability report. Deliver the working pipeline, the best hyperparameter configuration with justification, and a live demonstration explaining at least three predictions end to end. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      }
    ]
  },
  {
    "id": "CS101-ACT-04",
    "part": "IV",
    "icon": "cloud",
    "hours": 0,
    "points": 1000,
    "title": "AI Model Deployment and Inference via API",
    "desc": "Package, serve, optimize and monitor an AI model through an API.",
    "outcome": "Deploy an optimized, tested and observable AI service with drift monitoring.",
    "subs": [
      {
        "id": "CS101-SUB-4.1",
        "title": "Service Design and Requirements Definition (Creating the AI-as-a-Service)",
        "hours": 0,
        "points": 45,
        "tag": "Apply Principles",
        "evidence": "Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.",
        "standard": "The submission demonstrably completes the stated task: Define the service contract for the model finalized in Unit 3: input/output schema, latency and throughput targets, versioning strategy, and failure-mode behavior, written up as a short service specification. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.2",
        "title": "Inference Wrapper Development (Creating the AI-as-a-Service)",
        "hours": 0,
        "points": 50,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Build a clean inference wrapper around the trained model that applies the same preprocessing used in training, runs prediction, and applies any postprocessing, so the model can be called as a single function or class. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.3",
        "title": "Dependency Management and Environment Reproducibility (Packaging)",
        "hours": 0,
        "points": 40,
        "tag": "Understand Core Ideas",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Pin all dependencies and produce a reproducible environment definition (requirements file or environment.yml) so the inference wrapper runs identically on a different machine. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.4",
        "title": "Containerization with Docker (Packaging)",
        "hours": 0,
        "points": 65,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Write a Dockerfile that packages the model, the inference wrapper, and its dependencies, build the image, and verify that the container produces correct predictions when run locally. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.5",
        "title": "Optimized Docker Build and Registry Push (Packaging)",
        "hours": 0,
        "points": 60,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Reduce the Docker image size and build time using techniques such as multi-stage builds and slim base images, then push the optimized image to a container registry with a clear tagging/versioning scheme. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.6",
        "title": "FastAPI Service Development (API Setup)",
        "hours": 0,
        "points": 70,
        "tag": "Design and Build",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Use FastAPI to expose the model as a service with prediction, health-check, and metadata endpoints, using Pydantic models to validate request and response schemas so other programs can talk to the AI reliably. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.7",
        "title": "API Testing, Validation, and Documentation (API Setup)",
        "hours": 0,
        "points": 60,
        "tag": "Review and Justify",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: Write automated tests for each endpoint (valid input, invalid input, edge cases), and configure the interactive API documentation (OpenAPI/Swagger) along with basic authentication or rate limiting. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.8",
        "title": "Load Testing and Concurrency Handling (API Setup)",
        "hours": 0,
        "points": 65,
        "tag": "Analyse the Problem",
        "evidence": "Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.",
        "standard": "The submission demonstrably completes the stated task: Load-test the running API with a tool such as Locust or k6, identify the throughput ceiling, and tune worker/concurrency settings to handle concurrent requests without failure. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.9",
        "title": "Model Quantization for Faster Inference (Speed Optimization)",
        "hours": 0,
        "points": 70,
        "tag": "Analyse the Problem",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Apply quantization (post-training or dynamic) to shrink the model, and measure the resulting change in inference latency, memory footprint, and accuracy compared to the full-precision model. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.10",
        "title": "Model Pruning and/or Distillation (Speed Optimization)",
        "hours": 0,
        "points": 70,
        "tag": "Analyse the Problem",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Apply pruning and/or knowledge distillation to further shrink the model, and benchmark the result against the quantized version from Activity 9 on size, speed, and accuracy. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.11",
        "title": "Inference Runtime Optimization (Speed Optimization)",
        "hours": 0,
        "points": 80,
        "tag": "Analyse the Problem",
        "evidence": "Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.",
        "standard": "The submission demonstrably completes the stated task: Export the model to an optimized runtime format (such as ONNX, TensorRT, or TorchScript), integrate it into the Dockerized FastAPI service, and benchmark the end-to-end request latency improvement over the original model. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.12",
        "title": "Logging and Request/Response Telemetry (Monitoring)",
        "hours": 0,
        "points": 55,
        "tag": "Design and Build",
        "evidence": "Working instrumentation or monitoring configuration, sample logs or metrics, alert evidence, and an interpretation note.",
        "standard": "The submission demonstrably completes the stated task: Instrument the API with structured logging and metrics (request volume, latency, error rate), and build a simple dashboard that shows the service's health in real time. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.13",
        "title": "Model Performance and Drift Monitoring Over Time (Monitoring)",
        "hours": 0,
        "points": 75,
        "tag": "Design and Build",
        "evidence": "Working instrumentation or monitoring configuration, sample logs or metrics, alert evidence, and an interpretation note.",
        "standard": "The submission demonstrably completes the stated task: Track prediction distributions and an accuracy proxy metric over simulated time, implement an alerting rule that fires when performance degrades or input drift is detected, and document what action the alert should trigger. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      },
      {
        "id": "CS101-SUB-4.14",
        "title": "Capstone: End-to-End Deployed, Optimized, and Monitored AI-as-a-Service",
        "hours": 0,
        "points": 195,
        "tag": "Design and Build",
        "evidence": "Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.",
        "standard": "The submission demonstrably completes the stated task: Integrate the packaged and speed-optimized model into the FastAPI service, run it in its Docker container, and wire in the monitoring and drift-alerting from Activities 12 and 13. Deliver a live demonstration of an external client calling the API end to end, a performance-over-time monitoring dashboard, and a short write-up of the deployment architecture and its trade-offs. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.",
        "resources": []
      }
    ]
  }
] satisfies CourseData["activities"];

export const CS101_DATA: CourseData = {
  slug: "cs101",
  course: CS101_COURSE,
  shortDesc: "A point-based, evidence-driven curriculum spanning data engineering, deep learning, model optimization and explainability, and production AI service deployment.",
  status: "active",
  parts: CS101_PARTS,
  activities: CS101_ACTIVITIES,
  resources: {},
};
