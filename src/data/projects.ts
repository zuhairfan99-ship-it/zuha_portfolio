import { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: "flood-prediction-system",
    title: "Flood Prediction System",
    category: "AI / ML",
    secondaryCategory: "Predictive Modeling",
    year: "2026",
    description: "An AI-powered environmental monitoring and early-warning system that analyzes hydrometeorological indicators to forecast local flood risks.",
    role: "Machine Learning & Architecture Lead (Academic Project)",
    technologies: ["Python", "PyTorch", "Pandas", "Scikit-Learn", "Data Preprocessing", "Predictive Modeling"],
    thumbnail: "/assets/flood-thumb.svg",
    heroImage: "/assets/flood-hero.svg",
    problem: "Seasonal flash floods cause severe localized disruptions and infrastructural damage in monsoon-prone regions. Traditional meteorological alerts often lack high-resolution localized predictive precision, leaving community emergency response teams with narrow preparation windows.",
    goal: "Develop a predictive machine learning pipeline that ingests historical precipitation, river gauge discharge levels, and soil moisture indicators to forecast flash flood probability 24–48 hours ahead of potential inundation.",
    myRole: "Curated and normalized regional hydrological datasets, trained and evaluated regression/classification algorithms in Python, tuned decision threshold parameters, and designed a lightweight diagnostic interface for visualizing risk scores.",
    processType: "engineering",
    process: [
      {
        title: "1. Requirements & Data Acquisition",
        description: "Compiled multi-year historical rainfall measurements, upstream river basin sensor logs, and topographic elevation models to establish a consistent temporal dataset.",
        deliverables: ["Data intake pipeline", "Feature schema definition", "Missing value interpolation strategy"]
      },
      {
        title: "2. Data Preprocessing & Feature Engineering",
        description: "Standardized temporal series, handled anomalous sensor spikes, and synthesized rolling precipitation aggregates (3-day, 7-day, 14-day cumulative rainfall).",
        deliverables: ["Feature correlation matrix", "Outlier cleaning routines", "Normalized training/test splits"]
      },
      {
        title: "3. Model Selection & PyTorch Implementation",
        description: "Trained comparative predictive architectures including Random Forests and recurrent neural networks (PyTorch) to capture sequential precipitation patterns.",
        deliverables: ["Model training notebooks", "Loss optimization curves", "Hyperparameter tuning logs"]
      },
      {
        title: "4. Testing, Validation & Evaluation",
        description: "Assessed predictive sensitivity using precision-recall curves and F1-score benchmarks to prioritize minimizing false negatives on severe flood events.",
        deliverables: ["Confusion matrices", "ROC-AUC comparative analysis", "Threshold calibration tables"]
      },
      {
        title: "5. Diagnostic Output & Reporting",
        description: "Designed a clean dashboard report summarizing risk status, feature importance rankings, and confidence intervals for civic readiness teams.",
        deliverables: ["Alert level indicator cards", "Temporal risk projection charts", "Deployment documentation"]
      }
    ],
    gallery: [
      {
        title: "Hydrological Risk Assessment Dashboard",
        caption: "Regional catchment overview displaying water levels, rainfall accumulation, and categorized threat tiers.",
        type: "desktop"
      },
      {
        title: "Comparative Model Performance Analytics",
        caption: "Precision vs. recall trade-offs across varying flood warning horizons (12h, 24h, 48h).",
        type: "chart"
      },
      {
        title: "Alert Notification & Sensor Map",
        caption: "Geographic sensor status overview with localized alert thresholds and historical event overlays.",
        type: "system"
      }
    ],
    outcome: "Created an end-to-end reproducible machine learning pipeline that demonstrated strong predictive correlation on historical monsoon datasets. The project reinforced key principles in PyTorch modeling, temporal feature extraction, and designing understandable analytical outputs for real-world scenarios.",
    featured: true,
    githubUrl: "https://github.com/placeholder-zuha/flood-prediction-system"
  },
  {
    slug: "air-quality-prediction-system",
    title: "Air Quality Prediction System",
    category: "AI / ML",
    secondaryCategory: "Environmental AI",
    year: "2025",
    description: "A machine learning pipeline forecasting particulate matter (PM2.5 / PM10) concentrations and Air Quality Index (AQI) tiers based on atmospheric telemetry.",
    role: "ML Developer & Data Analyst",
    technologies: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation", "Pandas", "Matplotlib"],
    thumbnail: "/assets/air-thumb.svg",
    heroImage: "/assets/air-hero.svg",
    problem: "Urban atmospheric pollution levels fluctuate drastically with seasonal wind shifts, vehicular density, and industrial output. Public health advisories require forward-looking forecasts rather than retrospective reporting to help sensitive populations plan outdoor activities safely.",
    goal: "Engineer an analytical forecasting model capable of predicting next-day AQI categories and particulate matter levels utilizing ambient environmental variables (temperature, humidity, wind velocity, and historical sensor readings).",
    myRole: "Implemented data cleaning and normalization pipelines, benchmarked multiple regression and classification algorithms, and evaluated model variance against seasonal urban climate shifts.",
    processType: "engineering",
    process: [
      {
        title: "1. Sensor Data Cleaning & Consolidation",
        description: "Parsed continuous telemetry logs from regional monitoring stations, rectifying intermittent sensor dropouts and calibrating baseline sensor drifts.",
        deliverables: ["Data pipeline scripts", "Missing data imputation logic"]
      },
      {
        title: "2. Atmospheric Feature Analysis",
        description: "Analyzed non-linear correlations between meteorological conditions (inversion layers, relative humidity, wind vectors) and particulate accumulation.",
        deliverables: ["Cross-variable scatter plots", "Seasonal trend decomposition"]
      },
      {
        title: "3. Model Training & Parameter Optimization",
        description: "Trained ensemble regressors to estimate continuous PM2.5 concentrations and calibrated a multi-class classifier for official AQI categories (Good to Hazardous).",
        deliverables: ["Scikit-Learn model checkpoints", "Mean Absolute Error tracking graphs"]
      },
      {
        title: "4. Empirical Validation & Edge Case Auditing",
        description: "Evaluated prediction fidelity during sudden weather inversion anomalies and high-smog episodes to ensure reliable bounding limits.",
        deliverables: ["Validation error summaries", "Residual distribution charts"]
      }
    ],
    gallery: [
      {
        title: "AQI Forecast & Health Recommendation View",
        caption: "Daily air quality index projection paired with precautionary guidance for sensitive individuals.",
        type: "desktop"
      },
      {
        title: "Hourly Particulate Concentration Curves",
        caption: "Observed versus forecasted PM2.5 and PM10 trends over a 72-hour validation sequence.",
        type: "chart"
      }
    ],
    outcome: "Delivered a clean, well-documented predictive model with robust validation protocols. Gained deep practical insight into data hygiene, handling noisy environmental sensor inputs, and optimizing regression metrics for public health utility.",
    featured: true,
    githubUrl: "https://github.com/placeholder-zuha/air-quality-prediction-system"
  },
  {
    slug: "heart-disease-detection-system",
    title: "Heart Disease Detection System",
    category: "AI / ML",
    secondaryCategory: "Healthcare Informatics",
    year: "2025",
    description: "A supervised clinical classification model designed to assist healthcare practitioners in identifying early indicators of cardiovascular risk.",
    role: "Machine Learning Researcher & Developer",
    technologies: ["Python", "PyTorch", "Scikit-Learn", "Model Training", "Evaluation Metrics", "Data Normalization"],
    thumbnail: "/assets/heart-thumb.svg",
    heroImage: "/assets/heart-hero.svg",
    problem: "Cardiovascular disease remains among the foremost global health challenges. Early detection can dramatically improve treatment efficacy, yet complex multivariate clinical data (ECG characteristics, blood lipid profiles, resting pressures) can be challenging to synthesize rapidly in high-volume clinics.",
    goal: "Construct a verified binary classification model that accurately stratifies cardiovascular risk based on standard clinical biomarker inputs while prioritizing model interpretability and high recall.",
    myRole: "Executed exploratory clinical data analysis, handled feature imbalance, trained supervised neural and tree-based classifiers, and produced visual feature attribution breakdowns.",
    processType: "engineering",
    process: [
      {
        title: "1. Clinical Dataset Preparation",
        description: "Standardized multi-attribute patient clinical records, checking feature scales across blood pressure, cholesterol, resting electrocardiographic results, and age brackets.",
        deliverables: ["Feature scaling modules", "Outlier bounding rules"]
      },
      {
        title: "2. Class Imbalance Mitigation",
        description: "Analyzed sample distributions across positive and negative diagnostics; evaluated resampling strategies to protect against majority-class bias.",
        deliverables: ["Stratified cross-validation splits", "Sampling strategy benchmarks"]
      },
      {
        title: "3. Classification Architecture Training",
        description: "Implemented and compared logistic regression, support vector classifiers, and multi-layer neural networks (PyTorch), tuning regularization weights.",
        deliverables: ["Loss function comparison", "Learning rate scheduler configs"]
      },
      {
        title: "4. Diagnostic Metric Evaluation",
        description: "Rigidly audited false-negative rates to ensure critical risk cases were not misclassified as low-risk, optimizing decision thresholds accordingly.",
        deliverables: ["Confusion matrices", "Recall-first sensitivity graphs"]
      }
    ],
    gallery: [
      {
        title: "Clinical Patient Diagnostic Intake View",
        caption: "Structured medical parameter entry interface with instant risk stratification feedback.",
        type: "desktop"
      },
      {
        title: "Biomarker Feature Contribution Breakdown",
        caption: "Relative weightings of systolic pressure, serum cholesterol, and maximum heart rate in risk scoring.",
        type: "chart"
      }
    ],
    outcome: "Built an interpretable, well-calibrated clinical diagnostic assistant model. Deepened expertise in high-stakes model evaluation, trade-offs between precision and recall in medical informatics, and reproducible validation structures.",
    featured: true,
    githubUrl: "https://github.com/placeholder-zuha/heart-disease-detection-system"
  },
  {
    slug: "smart-campus-resource-management-system",
    title: "Smart Campus Resource Management System",
    category: "Software Engineering",
    secondaryCategory: "Web Development",
    year: "2025",
    description: "A centralized software platform designed to manage institutional campus facilities, computer lab scheduling, and equipment allocations seamlessly.",
    role: "Full-Stack Software Engineer (Academic Team Lead)",
    technologies: ["JavaScript", "HTML5", "CSS3", "Backend APIs", "MySQL", "Git", "Responsive Web Design"],
    thumbnail: "/assets/campus-thumb.svg",
    heroImage: "/assets/campus-hero.svg",
    problem: "University departments frequently encounter scheduling conflicts, redundant paper requisition processes, and poor visibility into shared technical infrastructure such as computer labs, seminar halls, and laboratory equipment.",
    goal: "Architect a responsive, role-differentiated web system that provides real-time facility availability, self-service reservation requests, administrative approval workflows, and audit-ready utilization logs.",
    myRole: "Designed the relational database schema in MySQL, authored RESTful backend endpoints, and built mobile-responsive interface views with modern vanilla web technologies.",
    processType: "engineering",
    process: [
      {
        title: "1. Requirements Gathering & Stakeholder Use Cases",
        description: "Interviewed campus department coordinators and student representatives to delineate role permissions (Students, Faculty, System Administrators).",
        deliverables: ["Software Requirements Specification (SRS)", "Use-case diagrams"]
      },
      {
        title: "2. Relational Schema & API Architecture",
        description: "Designed 3NF relational schemas in MySQL covering user roles, facility inventories, reservation time-slots, and audit logs.",
        deliverables: ["Entity-Relationship (ER) Diagram", "RESTful API endpoint documentation"]
      },
      {
        title: "3. Frontend Interface & Form Implementation",
        description: "Crafted accessible, mobile-first responsive components allowing users to filter rooms by equipment specifications (projectors, workstations) and check schedule grids.",
        deliverables: ["Interactive booking calendar", "Administrative approval panel", "Responsive layout styles"]
      },
      {
        title: "4. Validation, Testing & Conflict Prevention",
        description: "Implemented transactional database safeguards to prevent double-booking collisions and audited input sanitization across all request forms.",
        deliverables: ["Concurrency test cases", "Input validation modules"]
      }
    ],
    gallery: [
      {
        title: "Facility Availability & Reservation Calendar",
        caption: "Visual timetable overview showing open time slots, current reservations, and room capacities.",
        type: "desktop"
      },
      {
        title: "Administrative Resource Management Portal",
        caption: "Pending approval queue for laboratory allocations with equipment inventory tracking.",
        type: "desktop"
      }
    ],
    outcome: "Successfully deployed a functional academic prototype that simplified campus lab scheduling. Highlighted core software engineering practices including relational schema design, concurrent booking resolution, and responsive cross-browser layout development.",
    featured: true,
    githubUrl: "https://github.com/placeholder-zuha/smart-campus-resource-management-system"
  },
  {
    slug: "workflow-automation-pipeline",
    title: "Workflow Automation & Analysis Pipeline",
    category: "Automation",
    secondaryCategory: "AI Automation",
    year: "2025",
    description: "Automated business logic workflows connecting disparate data streams, parsing unstructured documents, and synchronizing operational databases.",
    role: "Automation Engineer & Analyst",
    technologies: ["AI Automation", "Python", "Workflow Optimization", "API Integrations", "Error Debugging"],
    thumbnail: "/assets/auto-thumb.svg",
    heroImage: "/assets/auto-hero.svg",
    problem: "Operational teams spend hundreds of manual hours per quarter copying information across spreadsheet reports, email notifications, and internal tracking databases, resulting in data entry discrepancies and notification delays.",
    goal: "Construct resilient, automated end-to-end event-driven pipelines that validate incoming records, extract key fields, trigger notifications, and maintain clean audit records without manual intervention.",
    myRole: "Mapped existing business processes, designed automation flows, configured error-handling branches, and debugged data translation edge cases.",
    processType: "engineering",
    process: [
      {
        title: "1. Bottleneck & Process Mapping",
        description: "Cataloged repetitive data ingestion touchpoints and documented failure modes in legacy manual handoffs.",
        deliverables: ["Process flowcharts", "Data mapping dictionary"]
      },
      {
        title: "2. Trigger & Action Architecture",
        description: "Structured asynchronous automation logic, integrating webhooks and API payloads with robust fallback queues.",
        deliverables: ["Workflow dependency graphs", "API connector routines"]
      },
      {
        title: "3. Error Handling & Exception Alerting",
        description: "Engineered automatic retry mechanics for transient network hiccups and instant alert pings for invalid payload schemas.",
        deliverables: ["Error handling state machine", "Audit log format"]
      },
      {
        title: "4. Optimization & Throughput Verification",
        description: "Benchmarked execution latency and reduced execution time per record through batched payload processing.",
        deliverables: ["Throughput benchmark logs", "Operational handover guide"]
      }
    ],
    gallery: [
      {
        title: "Automated Pipeline Orchestration Canvas",
        caption: "Multi-branch workflow displaying triggers, conditional filters, error fallbacks, and payload delivery.",
        type: "desktop"
      }
    ],
    outcome: "Eliminated repetitive manual synchronization steps across targeted workflows, cutting turnaround time and demonstrating the impact of pragmatic automation and structured error debugging.",
    featured: false
  },
  {
    slug: "student-learning-companion-uiux",
    title: "Student Academic Companion — UI/UX Case Study",
    category: "UI/UX",
    secondaryCategory: "Product Design",
    year: "2026",
    description: "A thoughtful, accessibility-centered mobile & desktop interface designed to help university students track coursework, organize study schedules, and collaborate with peers.",
    role: "Lead UI/UX Designer & Researcher",
    technologies: ["UI/UX Design", "User Research", "Wireframing", "Prototyping", "User Flows", "Journey Mapping", "Accessibility"],
    thumbnail: "/assets/uiux-thumb.svg",
    heroImage: "/assets/uiux-hero.svg",
    problem: "University students frequently navigate 4–5 disconnected platforms (LMS, messaging apps, personal calendars, course drives), leading to missed assignment deadlines, cognitive overload, and fractured communication during group projects.",
    goal: "Design an integrated, calming, and highly accessible study companion application that streamlines deadlines, visualizes daily workloads, and simplifies collaborative study groups.",
    myRole: "Conducted 12 qualitative student interviews, mapped user personas and end-to-end journey maps, produced wireframe iterations, and designed a high-fidelity design system in lavender/neutral tones adhering to WCAG AA accessibility standards.",
    processType: "design",
    isUiUxCaseStudy: true,
    process: [
      {
        title: "1. User Research & Discovery",
        description: "Interviewed undergraduate students across multiple academic semesters to pinpoint time-management friction points, syllabus tracking challenges, and notification fatigue.",
        deliverables: ["Qualitative interview transcripts", "Affinity diagram mapping", "Empathy synthesis matrix"]
      },
      {
        title: "2. Persona & Journey Mapping",
        description: "Synthesized core behavioral archetypes into a relatable primary persona and charted their weekly academic emotional peaks and valleys.",
        deliverables: ["Primary Student Persona (Amina)", "Weekly Exam Week Journey Map", "Key Pain Point Definitions"]
      },
      {
        title: "3. Information Architecture & User Flows",
        description: "Defined navigation taxonomy and plotted step-by-step task flows for logging an assignment, creating a study sprint, and sharing class notes.",
        deliverables: ["Site map structure", "Assignment submission user flow", "Collaborative sprint user flow"]
      },
      {
        title: "4. Low-Fidelity Wireframes",
        description: "Explored multiple structural dashboard layouts to balance glanceable daily schedules with detailed multi-course progress tracking without visual clutter.",
        deliverables: ["Paper sketches", "18 structural wireframe screens", "Early paper usability test findings"]
      },
      {
        title: "5. Visual Design System & Component Library",
        description: "Created a soothing lavender and cool-neutral design system featuring high-contrast typography, generous negative space, and clear tactile button affordances.",
        deliverables: ["Color token spec", "Typographic hierarchy matrix", "Component state library (buttons, cards, badges)"]
      },
      {
        title: "6. Interactive Prototype & Usability Testing",
        description: "Tested interactive Figma prototype across 8 students; validated task completion speed for adding assignments and adjusted contrast ratios on task status tags.",
        deliverables: ["Interactive high-fidelity prototype", "Usability test benchmark report", "Iterated screen components"]
      }
    ],
    persona: {
      name: "Amina Tariq",
      role: "3rd-Year Computer Science Undergraduate",
      bio: "Balancing 5 intensive technical courses, lab assignments, and a student club leadership role. Constantly on the move between lecture halls and study groups.",
      goals: [
        "See all upcoming deadlines across courses in one unified chronological view",
        "Block out focused study intervals without feeling overwhelmed",
        "Coordinate group project milestones without messy group chat threads"
      ],
      painPoints: [
        "LMS notification alerts are clunky and lack mobile readability",
        "Constant context switching between calendar, messaging apps, and file drives",
        "Difficulty prioritizing tasks when multiple project deadlines coincide"
      ],
      avatarSeed: "amina"
    },
    userJourney: [
      {
        stage: "Discovery & Planning",
        userAction: "Opens app on Monday morning to review weekly course requirements",
        touchpoint: "Glanceable Weekly Digest Dashboard",
        emotion: "Cautious but motivated"
      },
      {
        stage: "Assignment Intake",
        userAction: "Logs a newly announced Operating Systems project deadline",
        touchpoint: "Quick-Add Modal with auto-tagging",
        emotion: "Relieved by speed of entry"
      },
      {
        stage: "Study Sprint",
        userAction: "Initiates a 45-minute focused study block with grouped course materials",
        touchpoint: "Minimalist Focus Mode Screen",
        emotion: "Focused, minimal distraction"
      },
      {
        stage: "Group Sync",
        userAction: "Shares lab milestone progress with project partners",
        touchpoint: "Collaborative Study Group Space",
        emotion: "Confident and aligned"
      }
    ],
    colorPalette: [
      { name: "Primary Lavender", hex: "#8B5CF6" },
      { name: "Soft Lavender", hex: "#DDD6FE" },
      { name: "Lavender Canvas", hex: "#FAF8FF" },
      { name: "Accent Sky Blue", hex: "#60A5FA" },
      { name: "Deep Charcoal", hex: "#1F1B2D" },
      { name: "Card Surface", hex: "#FFFFFF" }
    ],
    typographySpec: [
      { role: "Display Headings", family: "Plus Jakarta Sans", weight: "Bold (700)" },
      { role: "Section Headers", family: "Plus Jakarta Sans", weight: "SemiBold (600)" },
      { role: "Body Copy & Labels", family: "Plus Jakarta Sans", weight: "Regular / Medium (400/500)" },
      { role: "Metadata & Tags", family: "Plus Jakarta Sans", weight: "Medium (500) — All-Caps tracking" }
    ],
    gallery: [
      {
        title: "Daily Academic Overview & Course Hub",
        caption: "Glanceable schedule cards, upcoming submission timelines, and quick-access course repositories.",
        type: "desktop"
      },
      {
        title: "Mobile Task Priority & Study Sprint View",
        caption: "Thumb-friendly mobile interface with tactile completion checkmarks and focused sprint timer.",
        type: "mobile"
      },
      {
        title: "Collaborative Group Project Workspace",
        caption: "Shared task board with milestone progress bars, member assignments, and direct resource links.",
        type: "desktop"
      }
    ],
    outcome: "Produced a comprehensive, human-centered UI/UX case study demonstrating complete mastery of the product design lifecycle: from qualitative user research and journey mapping to design system architecture and accessible high-fidelity prototyping.",
    keyLearnings: [
      "Simplicity over feature bloat: Students preferred one unified calendar view over four separate sub-tools.",
      "Micro-contrast matters: Ensuring WCAG AA compliance on soft pastel backgrounds requires careful value balancing for text readability.",
      "Emotional design in productivity tools: Soft lavender and generous white space significantly lowered perceived user stress compared to dense red deadline alerts."
    ],
    featured: true
  }
];
