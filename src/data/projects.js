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
    title: "LoanGuard — FinTech AI Pipeline",
    image: "/projects/loanguard.png",
    description:
      "An end-to-end automated loan approval system combining Gradient Boosting with Generative AI for transparent financial decision-making.",
    bullets: [
      "Building a high-performance engine using XGBoost for credit risk assessment.",
      "Integrating SHAP/LIME to provide Explainable AI (XAI) insights into rejection factors.",
      "Orchestrating an LLM-based communication layer to generate personalized advisor emails based on model output.",
      "Implementing an AI Guardrail system with strict system prompting to maintain professional decorum and regulatory compliance.",
    ],
    stack: ["XGBoost", "Python", "Gemini API", "SHAP", "MERN Stack"],
    status: "in-progress",
    year: "2025",
  },
  {
    title: "FitBite — AI-Powered Nutrition Tracker",
    image: "/projects/loanguard.png",
    description:
      "A full-stack MERN application designed to simplify health tracking, with a completed React frontend and a backend nearing completion.",
    bullets: [
      "Developed a responsive UI using React and Tailwind CSS for seamless data entry.",
      "Engineered 85% of the RESTful API backend using Node.js and Express for auth and health metrics.",
      "Integrating MongoDB to manage complex user nutritional data and history logs.",
      "Planning ML-based food recognition to automate calorie counting and nutritional analysis.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "in-progress",
    year: "2025",
  },
  {
    title: "MERN Stack Portfolio & Personal Brand",
    image: "/projects/loanguard.png",
    description:
      "A high-performance, responsive portfolio showcasing the intersection of Machine Learning and Full-Stack Engineering.",
    bullets: [
      "Architected with React and Tailwind CSS for a modern, minimalist UI/UX.",
      "Integrated a dark-mode-first design system with smooth page transitions.",
      "Building out a Node.js/Express backend to serve dynamic project metadata via a RESTful API.",
      "Automated deployment workflows for high availability and performance.",
    ],
    stack: ["React", "Node.js", "Tailwind CSS", "Vite"],
    status: "completed",
    year: "2025",
  },
  {
    title: "Oral Cancer Detection (Deep Learning)",
    image: "/projects/loanguard.png",
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
    title: "Resource-Constrained Project Scheduling (MILP)",
    image: "/projects/loanguard.png",
    description:
      "A mathematical optimization system designed to solve the Resource-Constrained Project Scheduling Problem (RCPSP).",
    bullets: [
      "Formulated a Mixed-Integer Linear Programming (MILP) model to minimize overall project makespan.",
      "Integrated constraints for both renewable and non-renewable resources to ensure problem fidelity.",
      "Developed the solver using Python and PuLP to identify globally optimal schedules.",
      "Analyzed trade-offs between resource limits and duration to reduce total project time.",
    ],
    stack: ["Python", "PuLP", "Optimization", "MILP"],
    status: "completed",
    year: "2025",
  },
  {
    title: "Diabetes Prediction System",
    image: "/projects/loanguard.png",
    description:
      "An end-to-end data science project developed during my internship at Exposys Data Labs.",
    bullets: [
      "Engineered a complete prediction pipeline from raw data cleaning to final model deployment.",
      "Evaluated multiple classification algorithms including Random Forest, SVM, and Logistic Regression.",
      "Achieved 94% prediction accuracy through rigorous feature scaling and outlier detection.",
      "Visualized key correlations and performance metrics using Pandas and Matplotlib.",
    ],
    stack: ["Scikit-learn", "Python", "Pandas", "Matplotlib"],
    status: "completed",
    year: "2024",
  },
];
