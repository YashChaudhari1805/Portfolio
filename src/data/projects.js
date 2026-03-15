/**
 * Static project data.
 * Keep UI components free of hardcoded content — edit here only.
 */

/** @typedef {'completed'|'in-progress'} ProjectStatus */

/**
 * @typedef {Object} Project
 * @property {string}        title
 * @property {string}        description
 * @property {string[]}      bullets
 * @property {string[]}      stack
 * @property {ProjectStatus} status
 * @property {string}        year
 */

/** @type {Project[]} */
export const projects = [
  {
    title: "Oral Cancer Detection (Deep Learning)",
    description:
      "A clinical-grade diagnostic tool for detecting Oral Squamous Cell Carcinoma (OSCC) from histopathological images.",
    bullets: [
      "Designed a CNN-based classification model achieving 92% diagnostic accuracy.",
      "Engineered an image preprocessing pipeline to normalize clinical images and improve feature extraction.",
      "Implemented advanced data augmentation to enhance model robustness against overfitting.",
      "Validated reliability using clinical metrics including Sensitivity, Specificity, and AUC-ROC.",
    ],
    stack: ["Python", "TensorFlow", "Deep Learning", "CNN"],
    status: "completed",
    year: "2025",
  },
  {
    title: "FinTech AI Pipeline",
    description:
      "Developed an end-to-end automated loan approval system, LoanGuard, leveraging Gradient Boosting and Generative AI to enable transparent, compliant financial decisions.",
    bullets: [
      "Built high-performance XGBoost engine to achieve accurate credit risk assessment on diverse datasets.",
      "Integrated SHAP and LIME to achieve explainable AI insights, clarifying rejection factors for users and regulators.",
      "Orchestrated Gemini API-powered LLM layer to achieve personalized advisor emails based on model predictions.",
      "Implemented AI Guardrail with system prompts to achieve professional decorum and regulatory compliance in all communications.",
    ],
    stack: ["XGBoost", "Python", "Gemini API", "SHAP", "MERN Stack"],
    status: "in-progress",
    year: "2026",
  },
  {
    title: "MERN Stack Portfolio & Personal Brand",
    description:
      "A high-performance, responsive portfolio showcasing the intersection of Machine Learning and Full-Stack Engineering, built with React, Tailwind CSS, Node.js, and Vite.",
    bullets: [
      "Architected React frontend with Tailwind CSS to achieve modern, minimalist UI/UX across devices.",
      "Integrated dark-mode-first design system to achieve smooth page transitions and enhanced user engagement.",
      "Built Node.js/Express backend to achieve dynamic serving of project metadata via RESTful API.",
      "Automated deployment workflows to achieve high availability and optimal performance.",
    ],
    stack: ["React", "Node.js", "Tailwind CSS", "Vite"],
    status: "completed",
    year: "2026",
  },
  {
    title: "A Multi-Model Approach to Log Security",
    description:
      "This project implements a sophisticated Hybrid Anomaly Detection Pipeline designed to identify complex security threats and system failures in structured log data. By combining traditional machine learning with deep learning, the system captures both global outliers and subtle multivariate deviations that single-model approaches often miss.",
    bullets: [
      "Developed a dual-model ensemble pipeline combining Isolation Forest and a Deep Autoencoder to detect system anomalies in structured log data with a ROC_AUC of 0.96.",
      "Engineered a robust feature processing suite using RobustScaler and OrdinalEncoder, incorporating custom system-level stress indicators such as hardware pressure indices and network I/O ratios.",
      "Implemented a high-performance Neural Network (PyTorch) featuring LayerNorm and GELU activations to compress system metrics into an 8-dimensional latent space for reconstruction-based error analysis.",
      "Optimized detection sensitivity by utilizing Precision-Recall (PR) Curve thresholding to mathematically determine the optimal F1-score for binary classification.",
      "Built advanced visualization tools for Root Cause Analysis (RCA), including feature-level reconstruction error charts and rolling anomaly monitoring timelines using Plotly.",
      "Designed an automated artifact persistence system to export fitted scaling pipelines, model weights, and performance metrics for seamless production deployment."
    ],
    stack: ["Python", "PyTorch", "Deep Learning", "Numpy", "Sckit-Learn"],
    status: "completed",
    year: "2025",
  },
  {
    title: "Resource-Constrained Project Scheduling (MILP)",
    description:
      "A clinical-grade diagnostic tool for detecting Oral Squamous Cell Carcinoma (OSCC) from histopathological images using CNN-based deep learning.",
    bullets: [
      "Secured MOU with Sushrut Hospital Mumbai to achieve access to wax blocks for creating a specialized dataset reflecting Indian genetics and heritage.",
      "Designed CNN classification model to achieve 92% diagnostic accuracy on clinical datasets.",
      "Engineered image preprocessing pipeline to achieve normalized inputs and enhanced feature extraction.",
      "Implemented advanced data augmentation to achieve model robustness and prevent overfitting.",
      "Validated performance with clinical metrics to achieve reliable Sensitivity, Specificity, and AUC-ROC scores.",
    ],
    stack: ["Python", "PuLP", "Optimization", "MILP"],
    status: "completed",
    year: "2025",
  },
  {
    title: "FitBite — AI-Powered Nutrition Tracker",
    description:
      "A full-stack MERN application designed to simplify health tracking, featuring a completed React frontend and backend nearing completion for auth, metrics, and data management.",
    bullets: [
      "Developed responsive UI with React and Tailwind CSS to achieve seamless data entry and intuitive user experience.",
      "Engineered 85% of backend using Node.js and Express to achieve secure authentication and health metrics storage.",
      "Integrated MongoDB to achieve efficient management of user nutritional data and history logs.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "in-progress",
    year: "2026",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "An end-to-end data science project developed during internship at Exposys Data Labs, delivering a high-accuracy diabetes prediction system through comprehensive ML pipelines.",
    bullets: [
      "Engineered complete prediction pipeline to achieve seamless processing from raw data cleaning to model deployment.",
      "Evaluated classification algorithms including Random Forest, SVM, and Logistic Regression to achieve optimal performance selection.",
      "Achieved 94% prediction accuracy through rigorous feature scaling and outlier detection techniques.",
      "Visualized key correlations and performance metrics to achieve clear insights using Pandas and Matplotlib.",
    ],
    stack: ["Scikit-learn", "Python", "Pandas", "Matplotlib"],
    status: "completed",
    year: "2024",
  },
];
