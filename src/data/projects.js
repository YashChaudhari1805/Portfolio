/**
 * Static project data.
 *
 * To add links to a project, uncomment and fill in:
 *   liveUrl: "https://your-deployed-site.com"   → shows "Live Demo" button
 *   repoUrl: "https://github.com/you/repo"      → shows "Source" button
 *
 * Both are optional. Either or both can be set independently.
 */
export const projects = [
  {
    title: "Oral Cancer Detection (Deep Learning)",
    description:
      "A clinical-grade diagnostic tool for detecting Oral Squamous Cell Carcinoma (OSCC) from histopathological images using CNN-based deep learning.",
    bullets: [
      "Designed a CNN-based classification model achieving 92% diagnostic accuracy.",
      "Engineered an image preprocessing pipeline to normalize clinical images and improve feature extraction.",
      "Implemented advanced data augmentation to enhance model robustness against overfitting.",
      "Validated reliability using clinical metrics including Sensitivity, Specificity, and AUC-ROC.",
    ],
    stack: ["Python", "TensorFlow", "Deep Learning", "CNN"],
    status: "completed",
    year: "2025",
    // liveUrl: "https://oral-cancer-demo.yashchaudhari.dev",
    // repoUrl: "https://github.com/YashChaudhari1805/oral-cancer-detection",
  },
  {
    title: "FinTech AI Pipeline — LoanGuard",
    description:
      "An end-to-end automated loan approval system leveraging Gradient Boosting and Generative AI to enable transparent, compliant financial decisions.",
    bullets: [
      "Built high-performance XGBoost engine for accurate credit risk assessment on diverse datasets.",
      "Integrated SHAP and LIME for explainable AI insights, clarifying rejection factors for users and regulators.",
      "Orchestrated Grok API-powered LLM layer for personalized advisor emails based on model predictions.",
      "Implemented AI Guardrail with system prompts to ensure professional decorum and regulatory compliance.",
    ],
    stack: ["XGBoost", "Python", "Grok API", "SHAP", "Resend"],
    status: "in-progress",
    year: "2026",
    // repoUrl: "https://github.com/YashChaudhari1805/loan-guard",
  },
  {
    title: "FitBite — AI-Powered Nutrition Tracker",
    description:
      "A full-stack MERN application designed to simplify health tracking, featuring a React frontend and a Node.js backend for auth, metrics, and data management.",
    bullets: [
      "Developed responsive UI with React and Tailwind CSS for seamless data entry and intuitive UX.",
      "Engineered backend using Node.js and Express for secure authentication and health metrics storage.",
      "Integrated MongoDB for efficient management of user nutritional data and history logs.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "completed",
    year: "2026",
    // liveUrl: "https://fitbite.yashchaudhari.dev",
    // repoUrl: "https://github.com/YashChaudhari1805/fitbite",
  },
  {
    title: "MERN Stack Portfolio & Personal Brand",
    description:
      "A high-performance, responsive portfolio showcasing the intersection of Machine Learning and Full-Stack Engineering — built with React, Tailwind CSS, and Vite.",
    bullets: [
      "Architected React frontend with Tailwind CSS for modern, minimalist UI/UX across devices.",
      "Integrated dual-theme (light/dark) design system with smooth page transitions.",
      "Built Node.js/Express backend for dynamic serving of project metadata via RESTful API.",
      "Deployed with automated CI/CD for high availability and optimal performance.",
    ],
    stack: ["React", "Tailwind CSS", "Vite"],
    status: "completed",
    year: "2026",
    liveUrl: "https://yashchaudhari.dev",
  },
  {
    title: "Hybrid Anomaly Detection Pipeline",
    description:
      "A sophisticated security log analysis system combining Isolation Forest and Deep Autoencoder to detect complex threats and system failures that single-model approaches miss.",
    bullets: [
      "Developed dual-model ensemble pipeline (Isolation Forest + Deep Autoencoder) achieving ROC-AUC of 0.96.",
      "Engineered feature processing suite using RobustScaler with custom system-level stress indicators.",
      "Implemented PyTorch Neural Network with LayerNorm and GELU activations compressing to an 8-dimensional latent space.",
      "Optimized detection via Precision-Recall curve thresholding for mathematically determined F1-optimal classification.",
      "Built Plotly visualizations for Root Cause Analysis and rolling anomaly monitoring timelines.",
    ],
    stack: ["Python", "PyTorch", "Deep Learning", "NumPy", "Scikit-Learn"],
    status: "completed",
    year: "2025",
    // repoUrl: "https://github.com/YashChaudhari1805/anomaly-detection",
  },
  {
    title: "Resource-Constrained Project Scheduling (MILP)",
    description:
      "Mathematical optimization model for solving resource-constrained project scheduling problems using Mixed Integer Linear Programming.",
    bullets: [
      "Formulated MILP model to minimize project makespan under multi-resource constraints.",
      "Implemented using PuLP with custom constraint generation for complex multi-resource scenarios.",
      "Benchmarked against heuristic approaches to demonstrate optimality guarantees.",
    ],
    stack: ["Python", "PuLP", "Optimization", "MILP"],
    status: "completed",
    year: "2025",
    // repoUrl: "https://github.com/YashChaudhari1805/milp-scheduling",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "An end-to-end data science project delivering a high-accuracy diabetes prediction system through comprehensive ML pipelines, developed during internship at Exposys Data Labs.",
    bullets: [
      "Engineered complete prediction pipeline from raw data cleaning to model deployment.",
      "Evaluated classification algorithms including Random Forest, SVM, and Logistic Regression.",
      "Achieved 94% prediction accuracy through rigorous feature scaling and outlier detection.",
      "Visualized key correlations and performance metrics using Pandas and Matplotlib.",
    ],
    stack: ["Scikit-learn", "Python", "Pandas", "Matplotlib"],
    status: "completed",
    year: "2024",
    // repoUrl: "https://github.com/YashChaudhari1805/diabetes-prediction",
  },
];
