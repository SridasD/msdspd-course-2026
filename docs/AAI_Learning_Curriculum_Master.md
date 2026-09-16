# Advanced AI and Machine Learning Curriculum Master

## Purpose

This document converts the supplied activity-based learning plan into a consistent, machine-readable curriculum structure for use by an LLM, curriculum portal, faculty planner, mentor workflow, or student activity tracker.

## Interpretation Rules

- Each source unit is represented as one **Activity**.
- Each numbered source activity is represented as one **Sub-Activity**.
- Source point values are preserved exactly as **Points**.
- The source does not define learning hours. Hours must not be inferred from points.
- Course code, credit value, category, semester, level and prerequisites require confirmation.
- IDs, thinking-skill tags, evidence statements and evaluation standards are normalized for consistent system use. They are not quoted source metadata.
- An LLM must preserve the original title, objective and points when creating schedules, portal data, rubrics or assignments.

## Curriculum Hierarchy

```text
Course
  -> Activity (source Unit)
      -> Sub-Activity (source numbered Activity)
          -> Objective
          -> Thinking Skill Tag
          -> Points
          -> Evidence Required
          -> Evaluation Standard
```

## Course Metadata

- **Course Title:** Advanced AI and Machine Learning
- **Course Code:** Requires confirmation
- **Category:** Requires confirmation
- **Credits:** Requires confirmation
- **Total Learning Hours:** Requires confirmation
- **Total Activities:** 4
- **Total Sub-Activities:** 55
- **Total Points:** 4000

## Activity Summary

| Activity ID | Activity Title | Sub-Activities | Total Points |
|---|---|---:|---:|
| AAI-ACT-01 | Data Engineering and Feature Orchestration | 14 | 1000 |
| AAI-ACT-02 | Machine Learning, Neural Architecture and Deep Learning (including Transfer Learning) | 14 | 1000 |
| AAI-ACT-03 | Hyperparameter Optimization and Model Explainability | 13 | 1000 |
| AAI-ACT-04 | AI Model Deployment and Inference via API | 14 | 1000 |

# Activity 1 Data Engineering and Feature Orchestration

- **Activity ID:** `AAI-ACT-01`
- **Source Unit:** Unit 1
- **Sub-Activities:** 14
- **Total Points:** 1000

## 1.1 Multi-Source Data Ingestion

- **Sub-Activity ID:** `AAI-SUB-1.1`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 50
- **Hours:** Requires confirmation
- **Objective:** Ingest raw data from at least three different source types (flat files such as CSV/JSON, a relational database, and a REST API or streaming source) into a common raw data layer.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Ingest raw data from at least three different source types (flat files such as CSV/JSON, a relational database, and a REST API or streaming source) into a common raw data layer. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.2 Data Quality Profiling and Diagnostics

- **Sub-Activity ID:** `AAI-SUB-1.2`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Profile the ingested data for missing values, duplicates, outliers, type mismatches, and distribution characteristics, and produce a written data quality report.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Profile the ingested data for missing values, duplicates, outliers, type mismatches, and distribution characteristics, and produce a written data quality report. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.3 Exploratory Data Analysis and Feature Hypothesis Log

- **Sub-Activity ID:** `AAI-SUB-1.3`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 45
- **Hours:** Requires confirmation
- **Objective:** Conduct exploratory analysis to identify relationships and patterns, and maintain a log of candidate feature ideas with the reasoning behind each one.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Conduct exploratory analysis to identify relationships and patterns, and maintain a log of candidate feature ideas with the reasoning behind each one. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.4 Data Cleaning and Preprocessing Pipeline

- **Sub-Activity ID:** `AAI-SUB-1.4`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Build a reusable, script-based cleaning pipeline (missing value handling, deduplication, type correction, outlier treatment) that can be re-run on new data drops.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Build a reusable, script-based cleaning pipeline (missing value handling, deduplication, type correction, outlier treatment) that can be re-run on new data drops. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.5 Schema Definition and Automated Data Validation

- **Sub-Activity ID:** `AAI-SUB-1.5`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Define an explicit schema/data contract for the cleaned dataset and implement automated validation checks (for example with Pandera or Great Expectations) that fail loudly on violation.
- **Evidence Required:** Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Define an explicit schema/data contract for the cleaned dataset and implement automated validation checks (for example with Pandera or Great Expectations) that fail loudly on violation. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.6 Core Feature Engineering

- **Sub-Activity ID:** `AAI-SUB-1.6`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Implement core feature transformations: categorical encoding, numerical scaling/normalization, binning, and imputation strategies, packaged as reusable functions.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Implement core feature transformations: categorical encoding, numerical scaling/normalization, binning, and imputation strategies, packaged as reusable functions. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.7 Advanced Feature Engineering

- **Sub-Activity ID:** `AAI-SUB-1.7`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 80
- **Hours:** Requires confirmation
- **Objective:** Engineer higher-complexity features: time-window aggregations, interaction terms, ratio features, and at least one embedding-based feature for a high-cardinality or unstructured field.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Engineer higher-complexity features: time-window aggregations, interaction terms, ratio features, and at least one embedding-based feature for a high-cardinality or unstructured field. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.8 Feature Selection and Dimensionality Reduction

- **Sub-Activity ID:** `AAI-SUB-1.8`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Review and Justify
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Apply statistical and model-based feature selection methods and at least one dimensionality reduction technique, and justify the final feature subset.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Apply statistical and model-based feature selection methods and at least one dimensionality reduction technique, and justify the final feature subset. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.9 Feature Store Design and Implementation

- **Sub-Activity ID:** `AAI-SUB-1.9`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 90
- **Hours:** Requires confirmation
- **Objective:** Design and implement a feature store with an offline (batch/training) layer and an online (low-latency serving) layer, including a defined feature registry.
- **Evidence Required:** Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Design and implement a feature store with an offline (batch/training) layer and an online (low-latency serving) layer, including a defined feature registry. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.10 Workflow Orchestration: DAG Design

- **Sub-Activity ID:** `AAI-SUB-1.10`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 85
- **Hours:** Requires confirmation
- **Objective:** Design and implement a directed acyclic graph (DAG) in an orchestration tool such as Airflow, Prefect, or Dagster that chains ingestion, cleaning, validation, and feature engineering into one workflow.
- **Evidence Required:** Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Design and implement a directed acyclic graph (DAG) in an orchestration tool such as Airflow, Prefect, or Dagster that chains ingestion, cleaning, validation, and feature engineering into one workflow. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.11 Orchestration Hardening: Scheduling, Retries, and Failure Handling

- **Sub-Activity ID:** `AAI-SUB-1.11`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Add scheduling, task dependencies, retry policies, alerting, and graceful failure handling to the orchestrated pipeline so it can run unattended.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Add scheduling, task dependencies, retry policies, alerting, and graceful failure handling to the orchestrated pipeline so it can run unattended. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.12 Data and Feature Versioning with Lineage Tracking

- **Sub-Activity ID:** `AAI-SUB-1.12`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Apply Principles
- **Points:** 50
- **Hours:** Requires confirmation
- **Objective:** Introduce version control for datasets and features (for example with DVC, MLflow, or Delta Lake) and document the lineage from raw source to final feature.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Introduce version control for datasets and features (for example with DVC, MLflow, or Delta Lake) and document the lineage from raw source to final feature. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.13 Pipeline Monitoring, Logging, and Drift Detection

- **Sub-Activity ID:** `AAI-SUB-1.13`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Instrument the pipeline with logging and metrics, and implement a basic data/feature drift detection check that flags when incoming data departs from the training distribution.
- **Evidence Required:** Working instrumentation or monitoring configuration, sample logs or metrics, alert evidence, and an interpretation note.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Instrument the pipeline with logging and metrics, and implement a basic data/feature drift detection check that flags when incoming data departs from the training distribution. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 1.14 Capstone: End-to-End Data Engineering and Feature Orchestration Pipeline

- **Sub-Activity ID:** `AAI-SUB-1.14`
- **Parent Activity ID:** `AAI-ACT-01`
- **Thinking Skill Tag:** Design and Build
- **Points:** 180
- **Hours:** Requires confirmation
- **Objective:** Integrate all preceding components (ingestion, cleaning, validation, core and advanced feature engineering, feature store, orchestration, versioning, monitoring) into a single automated, reproducible, end-to-end pipeline. Deliver a working demonstration, architecture diagram, and documentation covering design decisions and trade-offs.
- **Evidence Required:** Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Integrate all preceding components (ingestion, cleaning, validation, core and advanced feature engineering, feature store, orchestration, versioning, monitoring) into a single automated, reproducible, end-to-end pipeline. Deliver a working demonstration, architecture diagram, and documentation covering design decisions and trade-offs. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.


# Activity 2 Machine Learning, Neural Architecture and Deep Learning (including Transfer Learning)

- **Activity ID:** `AAI-ACT-02`
- **Source Unit:** Unit 2
- **Sub-Activities:** 14
- **Total Points:** 1000

## 2.1 Baseline Model Development

- **Sub-Activity ID:** `AAI-SUB-2.1`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 40
- **Hours:** Requires confirmation
- **Objective:** Using the features produced by the Unit 1 pipeline, train and compare at least two classical machine learning baselines (for example linear/logistic regression and a tree-based model) to establish a performance floor.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Using the features produced by the Unit 1 pipeline, train and compare at least two classical machine learning baselines (for example linear/logistic regression and a tree-based model) to establish a performance floor. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.2 Model Evaluation Framework and Metric Selection

- **Sub-Activity ID:** `AAI-SUB-2.2`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Review and Justify
- **Points:** 40
- **Hours:** Requires confirmation
- **Objective:** Define and justify an evaluation protocol (train/validation/test split or cross-validation) and the metrics appropriate to the problem type, and apply it consistently to the baselines.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Define and justify an evaluation protocol (train/validation/test split or cross-validation) and the metrics appropriate to the problem type, and apply it consistently to the baselines. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.3 Cross-Validation and Hyperparameter Tuning

- **Sub-Activity ID:** `AAI-SUB-2.3`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Implement k-fold cross-validation and a systematic hyperparameter search (grid, random, or Bayesian) for the baseline models, and report the sensitivity of performance to key hyperparameters.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Implement k-fold cross-validation and a systematic hyperparameter search (grid, random, or Bayesian) for the baseline models, and report the sensitivity of performance to key hyperparameters. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.4 Ensemble Learning

- **Sub-Activity ID:** `AAI-SUB-2.4`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Build at least one bagging model, one boosting model, and a stacked ensemble, and compare their accuracy, variance, and training cost against the single-model baselines.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Build at least one bagging model, one boosting model, and a stacked ensemble, and compare their accuracy, variance, and training cost against the single-model baselines. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.5 Neural Network Fundamentals: Building and Training an MLP

- **Sub-Activity ID:** `AAI-SUB-2.5`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Implement a multi-layer perceptron from a deep learning framework (PyTorch or TensorFlow), including forward pass, loss computation, and backpropagation-based training on the Unit 1 feature set.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Implement a multi-layer perceptron from a deep learning framework (PyTorch or TensorFlow), including forward pass, loss computation, and backpropagation-based training on the Unit 1 feature set. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.6 Training Dynamics: Optimizers, Loss Functions, and Regularization

- **Sub-Activity ID:** `AAI-SUB-2.6`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Experiment with different optimizers (SGD, Adam, RMSprop), loss functions, and regularization techniques (dropout, batch normalization, weight decay, early stopping), and document their effect on convergence and generalization.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Experiment with different optimizers (SGD, Adam, RMSprop), loss functions, and regularization techniques (dropout, batch normalization, weight decay, early stopping), and document their effect on convergence and generalization. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.7 Convolutional Neural Network Architecture Design

- **Sub-Activity ID:** `AAI-SUB-2.7`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 75
- **Hours:** Requires confirmation
- **Objective:** Design and train a convolutional neural network for an image or grid-structured dataset, including at least one architectural variant (depth, filter size, or pooling strategy) tested against a baseline CNN.
- **Evidence Required:** Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Design and train a convolutional neural network for an image or grid-structured dataset, including at least one architectural variant (depth, filter size, or pooling strategy) tested against a baseline CNN. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.8 Sequence Architectures: RNN, LSTM, and GRU

- **Sub-Activity ID:** `AAI-SUB-2.8`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 75
- **Hours:** Requires confirmation
- **Objective:** Design and train a recurrent architecture for sequential or time-series data, comparing a vanilla RNN against LSTM and/or GRU variants on the same task.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Design and train a recurrent architecture for sequential or time-series data, comparing a vanilla RNN against LSTM and/or GRU variants on the same task. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.9 Attention Mechanisms and Transformer Architecture

- **Sub-Activity ID:** `AAI-SUB-2.9`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 85
- **Hours:** Requires confirmation
- **Objective:** Implement or adapt an attention mechanism and a transformer-based architecture for the task at hand, and compare it against the recurrent and convolutional models built earlier.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Implement or adapt an attention mechanism and a transformer-based architecture for the task at hand, and compare it against the recurrent and convolutional models built earlier. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.10 Transfer Learning: Feature Extraction from Pretrained Models

- **Sub-Activity ID:** `AAI-SUB-2.10`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Apply Principles
- **Points:** 65
- **Hours:** Requires confirmation
- **Objective:** Use a pretrained model (for example a vision or language backbone) as a fixed feature extractor, attach a new task-specific head, and evaluate performance against models trained from scratch.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Use a pretrained model (for example a vision or language backbone) as a fixed feature extractor, attach a new task-specific head, and evaluate performance against models trained from scratch. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.11 Transfer Learning: Fine-Tuning and Domain Adaptation

- **Sub-Activity ID:** `AAI-SUB-2.11`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 85
- **Hours:** Requires confirmation
- **Objective:** Fine-tune a pretrained model on the target dataset using techniques such as partial layer unfreezing and discriminative learning rates, and analyze the trade-off between training cost and performance gain versus feature extraction alone.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Fine-tune a pretrained model on the target dataset using techniques such as partial layer unfreezing and discriminative learning rates, and analyze the trade-off between training cost and performance gain versus feature extraction alone. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.12 Model Compression and Efficient Inference

- **Sub-Activity ID:** `AAI-SUB-2.12`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Apply Principles
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Apply at least one compression technique (quantization, pruning, or knowledge distillation) to a trained model and measure the resulting change in accuracy, latency, and model size.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Apply at least one compression technique (quantization, pruning, or knowledge distillation) to a trained model and measure the resulting change in accuracy, latency, and model size. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.13 Experiment Tracking and Reproducibility

- **Sub-Activity ID:** `AAI-SUB-2.13`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Apply Principles
- **Points:** 50
- **Hours:** Requires confirmation
- **Objective:** Set up an experiment tracking system (for example MLflow or Weights and Biases) to log hyperparameters, metrics, and artifacts across all models trained in this unit, and produce a reproducibility report.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Set up an experiment tracking system (for example MLflow or Weights and Biases) to log hyperparameters, metrics, and artifacts across all models trained in this unit, and produce a reproducibility report. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 2.14 Capstone: End-to-End Machine Learning and Deep Learning Pipeline with Transfer Learning

- **Sub-Activity ID:** `AAI-SUB-2.14`
- **Parent Activity ID:** `AAI-ACT-02`
- **Thinking Skill Tag:** Design and Build
- **Points:** 195
- **Hours:** Requires confirmation
- **Objective:** Integrate the strongest models from this unit (classical baseline, deep architecture, and transfer-learned model) with the Unit 1 feature pipeline into one automated pipeline that trains, evaluates, selects, and serves a final model via an API or endpoint. Deliver the working pipeline, an architecture diagram, a model comparison report, and a live demonstration.
- **Evidence Required:** Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Integrate the strongest models from this unit (classical baseline, deep architecture, and transfer-learned model) with the Unit 1 feature pipeline into one automated pipeline that trains, evaluates, selects, and serves a final model via an API or endpoint. Deliver the working pipeline, an architecture diagram, a model comparison report, and a live demonstration. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.


# Activity 3 Hyperparameter Optimization and Model Explainability

- **Activity ID:** `AAI-ACT-03`
- **Source Unit:** Unit 3
- **Sub-Activities:** 13
- **Total Points:** 1000

## 3.1 Search Space Definition and Baseline Tuning (Systematic Tuning and Testing)

- **Sub-Activity ID:** `AAI-SUB-3.1`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Define a hyperparameter search space for the model trained in Unit 2, and run grid search and random search baselines, comparing them on the number of trials needed versus the best score found.
- **Evidence Required:** Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Define a hyperparameter search space for the model trained in Unit 2, and run grid search and random search baselines, comparing them on the number of trials needed versus the best score found. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.2 Cross-Validation Strategy for Robust Tuning (Systematic Tuning and Testing)

- **Sub-Activity ID:** `AAI-SUB-3.2`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Design and Build
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Implement a nested cross-validation scheme so that hyperparameter selection is tested on data the tuning process has never seen, and quantify how much the grid/random search results in Activity 1 were overfit to the validation set.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Implement a nested cross-validation scheme so that hyperparameter selection is tested on data the tuning process has never seen, and quantify how much the grid/random search results in Activity 1 were overfit to the validation set. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.3 Optuna Study Setup (Auto-Tuning)

- **Sub-Activity ID:** `AAI-SUB-3.3`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Apply Principles
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Set up an Optuna study: define the objective function, encode the search space using Optuna's trial API, and run a first automated study to find the best hyperparameter settings for accuracy.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Set up an Optuna study: define the objective function, encode the search space using Optuna's trial API, and run a first automated study to find the best hyperparameter settings for accuracy. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.4 Bayesian Optimization with Pruning (Auto-Tuning)

- **Sub-Activity ID:** `AAI-SUB-3.4`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 75
- **Hours:** Requires confirmation
- **Objective:** Reconfigure the Optuna study to use a Bayesian/TPE sampler together with a pruning strategy (for example Median Pruner or Hyperband), and compare convergence speed and final accuracy against the unpruned study from Activity 3.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Reconfigure the Optuna study to use a Bayesian/TPE sampler together with a pruning strategy (for example Median Pruner or Hyperband), and compare convergence speed and final accuracy against the unpruned study from Activity 3. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.5 Multi-Objective Tuning for Speed and Accuracy (Auto-Tuning)

- **Sub-Activity ID:** `AAI-SUB-3.5`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Review and Justify
- **Points:** 90
- **Hours:** Requires confirmation
- **Objective:** Extend the Optuna study to a multi-objective search that optimizes accuracy and inference speed/model size simultaneously, and produce a Pareto front of candidate models with a written recommendation of which trade-off point to deploy.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Extend the Optuna study to a multi-objective search that optimizes accuracy and inference speed/model size simultaneously, and produce a Pareto front of candidate models with a written recommendation of which trade-off point to deploy. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.6 Distributed Hyperparameter Search (Auto-Tuning)

- **Sub-Activity ID:** `AAI-SUB-3.6`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Scale the Optuna study to run trials in parallel across multiple processes or workers using a shared storage backend, and measure the wall-clock speed-up over the single-process study.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Scale the Optuna study to run trials in parallel across multiple processes or workers using a shared storage backend, and measure the wall-clock speed-up over the single-process study. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.7 Confusion Matrix and Misclassification Taxonomy (Error Check)

- **Sub-Activity ID:** `AAI-SUB-3.7`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Design and Build
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Using the best model from the tuning activities, build a confusion matrix and classify the errors into a taxonomy (for example: near-boundary cases, mislabeled data, rare classes, outliers), identifying which categories dominate.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Using the best model from the tuning activities, build a confusion matrix and classify the errors into a taxonomy (for example: near-boundary cases, mislabeled data, rare classes, outliers), identifying which categories dominate. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.8 Error Slicing and Subgroup Analysis (Error Check)

- **Sub-Activity ID:** `AAI-SUB-3.8`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 75
- **Hours:** Requires confirmation
- **Objective:** Slice model errors by relevant feature segments or metadata (for example time period, source, or demographic/category groups) to find exactly where the model systematically underperforms, and report any subgroup with a significantly higher error rate.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Slice model errors by relevant feature segments or metadata (for example time period, source, or demographic/category groups) to find exactly where the model systematically underperforms, and report any subgroup with a significantly higher error rate. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.9 Root-Cause Error Investigation (Error Check)

- **Sub-Activity ID:** `AAI-SUB-3.9`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Take the worst-performing samples identified in Activities 7 and 8 and trace each one back through the Unit 1 feature pipeline to determine whether the error originates from the data, the features, or the model itself.
- **Evidence Required:** Reproducible analysis, generated results, supporting plots or tables, and a written findings report.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Take the worst-performing samples identified in Activities 7 and 8 and trace each one back through the Unit 1 feature pipeline to determine whether the error originates from the data, the features, or the model itself. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.10 Global Explainability with SHAP (AI Explanation)

- **Sub-Activity ID:** `AAI-SUB-3.10`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Compute SHAP values for the tuned model and produce a global feature importance summary showing which features the model relies on most across the whole dataset.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Compute SHAP values for the tuned model and produce a global feature importance summary showing which features the model relies on most across the whole dataset. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.11 Local Explainability with SHAP and LIME (AI Explanation)

- **Sub-Activity ID:** `AAI-SUB-3.11`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 80
- **Hours:** Requires confirmation
- **Objective:** For a set of individual predictions, especially the misclassified cases from the Error Check activities, generate local explanations using both SHAP and LIME, and compare where the two methods agree and disagree on which data points the model cared about most.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: For a set of individual predictions, especially the misclassified cases from the Error Check activities, generate local explanations using both SHAP and LIME, and compare where the two methods agree and disagree on which data points the model cared about most. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.12 Explainability Validation and Sanity Checks (AI Explanation)

- **Sub-Activity ID:** `AAI-SUB-3.12`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 65
- **Hours:** Requires confirmation
- **Objective:** Stress-test the explanations from Activities 10 and 11 with perturbation and stability checks (for example, do explanations stay consistent under small input changes, and do they match domain expectations), and document any case where the explanation looks unreliable.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Stress-test the explanations from Activities 10 and 11 with perturbation and stability checks (for example, do explanations stay consistent under small input changes, and do they match domain expectations), and document any case where the explanation looks unreliable. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 3.13 Capstone: End-to-End Tuned and Explainable Model Pipeline

- **Sub-Activity ID:** `AAI-SUB-3.13`
- **Parent Activity ID:** `AAI-ACT-03`
- **Thinking Skill Tag:** Design and Build
- **Points:** 180
- **Hours:** Requires confirmation
- **Objective:** Integrate automated Optuna tuning, systematic error analysis, and SHAP/LIME explainability into a single pipeline that takes the Unit 1/2 pipeline output, produces a tuned final model, an error analysis report, and a per-prediction explainability report. Deliver the working pipeline, the best hyperparameter configuration with justification, and a live demonstration explaining at least three predictions end to end.
- **Evidence Required:** Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Integrate automated Optuna tuning, systematic error analysis, and SHAP/LIME explainability into a single pipeline that takes the Unit 1/2 pipeline output, produces a tuned final model, an error analysis report, and a per-prediction explainability report. Deliver the working pipeline, the best hyperparameter configuration with justification, and a live demonstration explaining at least three predictions end to end. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.


# Activity 4 AI Model Deployment and Inference via API

- **Activity ID:** `AAI-ACT-04`
- **Source Unit:** Unit 4
- **Sub-Activities:** 14
- **Total Points:** 1000

## 4.1 Service Design and Requirements Definition (Creating the AI-as-a-Service)

- **Sub-Activity ID:** `AAI-SUB-4.1`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Apply Principles
- **Points:** 45
- **Hours:** Requires confirmation
- **Objective:** Define the service contract for the model finalized in Unit 3: input/output schema, latency and throughput targets, versioning strategy, and failure-mode behavior, written up as a short service specification.
- **Evidence Required:** Versioned design or specification, relevant diagrams or schemas, implementation artifacts where required, and decision notes.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Define the service contract for the model finalized in Unit 3: input/output schema, latency and throughput targets, versioning strategy, and failure-mode behavior, written up as a short service specification. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.2 Inference Wrapper Development (Creating the AI-as-a-Service)

- **Sub-Activity ID:** `AAI-SUB-4.2`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 50
- **Hours:** Requires confirmation
- **Objective:** Build a clean inference wrapper around the trained model that applies the same preprocessing used in training, runs prediction, and applies any postprocessing, so the model can be called as a single function or class.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Build a clean inference wrapper around the trained model that applies the same preprocessing used in training, runs prediction, and applies any postprocessing, so the model can be called as a single function or class. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.3 Dependency Management and Environment Reproducibility (Packaging)

- **Sub-Activity ID:** `AAI-SUB-4.3`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Understand Core Ideas
- **Points:** 40
- **Hours:** Requires confirmation
- **Objective:** Pin all dependencies and produce a reproducible environment definition (requirements file or environment.yml) so the inference wrapper runs identically on a different machine.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Pin all dependencies and produce a reproducible environment definition (requirements file or environment.yml) so the inference wrapper runs identically on a different machine. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.4 Containerization with Docker (Packaging)

- **Sub-Activity ID:** `AAI-SUB-4.4`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 65
- **Hours:** Requires confirmation
- **Objective:** Write a Dockerfile that packages the model, the inference wrapper, and its dependencies, build the image, and verify that the container produces correct predictions when run locally.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Write a Dockerfile that packages the model, the inference wrapper, and its dependencies, build the image, and verify that the container produces correct predictions when run locally. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.5 Optimized Docker Build and Registry Push (Packaging)

- **Sub-Activity ID:** `AAI-SUB-4.5`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Reduce the Docker image size and build time using techniques such as multi-stage builds and slim base images, then push the optimized image to a container registry with a clear tagging/versioning scheme.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Reduce the Docker image size and build time using techniques such as multi-stage builds and slim base images, then push the optimized image to a container registry with a clear tagging/versioning scheme. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.6 FastAPI Service Development (API Setup)

- **Sub-Activity ID:** `AAI-SUB-4.6`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Use FastAPI to expose the model as a service with prediction, health-check, and metadata endpoints, using Pydantic models to validate request and response schemas so other programs can talk to the AI reliably.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Use FastAPI to expose the model as a service with prediction, health-check, and metadata endpoints, using Pydantic models to validate request and response schemas so other programs can talk to the AI reliably. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.7 API Testing, Validation, and Documentation (API Setup)

- **Sub-Activity ID:** `AAI-SUB-4.7`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Review and Justify
- **Points:** 60
- **Hours:** Requires confirmation
- **Objective:** Write automated tests for each endpoint (valid input, invalid input, edge cases), and configure the interactive API documentation (OpenAPI/Swagger) along with basic authentication or rate limiting.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Write automated tests for each endpoint (valid input, invalid input, edge cases), and configure the interactive API documentation (OpenAPI/Swagger) along with basic authentication or rate limiting. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.8 Load Testing and Concurrency Handling (API Setup)

- **Sub-Activity ID:** `AAI-SUB-4.8`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 65
- **Hours:** Requires confirmation
- **Objective:** Load-test the running API with a tool such as Locust or k6, identify the throughput ceiling, and tune worker/concurrency settings to handle concurrent requests without failure.
- **Evidence Required:** Executable checks or analysis, result outputs, identified issues, and a concise interpretation of findings.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Load-test the running API with a tool such as Locust or k6, identify the throughput ceiling, and tune worker/concurrency settings to handle concurrent requests without failure. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.9 Model Quantization for Faster Inference (Speed Optimization)

- **Sub-Activity ID:** `AAI-SUB-4.9`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Apply quantization (post-training or dynamic) to shrink the model, and measure the resulting change in inference latency, memory footprint, and accuracy compared to the full-precision model.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Apply quantization (post-training or dynamic) to shrink the model, and measure the resulting change in inference latency, memory footprint, and accuracy compared to the full-precision model. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.10 Model Pruning and/or Distillation (Speed Optimization)

- **Sub-Activity ID:** `AAI-SUB-4.10`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 70
- **Hours:** Requires confirmation
- **Objective:** Apply pruning and/or knowledge distillation to further shrink the model, and benchmark the result against the quantized version from Activity 9 on size, speed, and accuracy.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Apply pruning and/or knowledge distillation to further shrink the model, and benchmark the result against the quantized version from Activity 9 on size, speed, and accuracy. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.11 Inference Runtime Optimization (Speed Optimization)

- **Sub-Activity ID:** `AAI-SUB-4.11`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Analyse the Problem
- **Points:** 80
- **Hours:** Requires confirmation
- **Objective:** Export the model to an optimized runtime format (such as ONNX, TensorRT, or TorchScript), integrate it into the Dockerized FastAPI service, and benchmark the end-to-end request latency improvement over the original model.
- **Evidence Required:** Working implementation or notebook, source code or configuration, execution output, and concise documentation of decisions and results.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Export the model to an optimized runtime format (such as ONNX, TensorRT, or TorchScript), integrate it into the Dockerized FastAPI service, and benchmark the end-to-end request latency improvement over the original model. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.12 Logging and Request/Response Telemetry (Monitoring)

- **Sub-Activity ID:** `AAI-SUB-4.12`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 55
- **Hours:** Requires confirmation
- **Objective:** Instrument the API with structured logging and metrics (request volume, latency, error rate), and build a simple dashboard that shows the service's health in real time.
- **Evidence Required:** Working instrumentation or monitoring configuration, sample logs or metrics, alert evidence, and an interpretation note.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Instrument the API with structured logging and metrics (request volume, latency, error rate), and build a simple dashboard that shows the service's health in real time. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.13 Model Performance and Drift Monitoring Over Time (Monitoring)

- **Sub-Activity ID:** `AAI-SUB-4.13`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 75
- **Hours:** Requires confirmation
- **Objective:** Track prediction distributions and an accuracy proxy metric over simulated time, implement an alerting rule that fires when performance degrades or input drift is detected, and document what action the alert should trigger.
- **Evidence Required:** Working instrumentation or monitoring configuration, sample logs or metrics, alert evidence, and an interpretation note.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Track prediction distributions and an accuracy proxy metric over simulated time, implement an alerting rule that fires when performance degrades or input drift is detected, and document what action the alert should trigger. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

## 4.14 Capstone: End-to-End Deployed, Optimized, and Monitored AI-as-a-Service

- **Sub-Activity ID:** `AAI-SUB-4.14`
- **Parent Activity ID:** `AAI-ACT-04`
- **Thinking Skill Tag:** Design and Build
- **Points:** 195
- **Hours:** Requires confirmation
- **Objective:** Integrate the packaged and speed-optimized model into the FastAPI service, run it in its Docker container, and wire in the monitoring and drift-alerting from Activities 12 and 13. Deliver a live demonstration of an external client calling the API end to end, a performance-over-time monitoring dashboard, and a short write-up of the deployment architecture and its trade-offs.
- **Evidence Required:** Working end-to-end solution, source code, architecture diagram, execution evidence, technical documentation and live demonstration.
- **Evaluation Standard:** The submission demonstrably completes the stated task: Integrate the packaged and speed-optimized model into the FastAPI service, run it in its Docker container, and wire in the monitoring and drift-alerting from Activities 12 and 13. Deliver a live demonstration of an external client calling the API end to end, a performance-over-time monitoring dashboard, and a short write-up of the deployment architecture and its trade-offs. Results must be reproducible, measurable where applicable, and supported by appropriate technical justification.

# Recommended System Behaviour

- Store the course, activities and sub-activities as curriculum master data.
- Reference the master IDs from levels, sprints, assignments and mentor allocations instead of duplicating curriculum content.
- Permit faculty to add resources, dates, dependencies and assignment instructions without changing the approved master objective or points.
- Require students to submit evidence against each assigned sub-activity.
- Require mentors to evaluate submissions using the corresponding evaluation standard.
- Keep review comments, resubmissions, versions and final decisions traceable.
- Do not interpret progress as attendance.

# Fields Requiring Academic Confirmation

- Official course code
- Course category and credit value
- Semester, level and prerequisite mapping
- Learning hours for each activity and sub-activity
- Pass mark and point-to-grade conversion
- Whether capstones act as mandatory rubric gates
- Whether normalized evidence and evaluation wording requires faculty approval
