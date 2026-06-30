export type Project = {
  /** URL-safe id used for the /projects/:slug route */
  slug: string;
  title: string;
  blurb: string;
  /** Longer write-up shown on the project's detail page. Falls back to `blurb` if omitted. */
  fullDescription?: string;
  /** Bullet-point feature/highlight list shown on the detail page. */
  features?: string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  accent: string;
  metric: string;
  /**
   * Optional screenshot/cover image (e.g. "/projects/eye-lab.png").
   * If unset, a generated gradient banner using `accent` is used instead.
   */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "eye-lab",
    title: "EYE LAB — Eye Disease Classifier",
    blurb:
      "Real-time fundus image classification using VGG19 and MobileNetV2. Transfer learning + augmentation, deployed as a Flask REST service for clinical use.",
    fullDescription:
      "EYE LAB classifies retinal fundus images into common eye disease categories to support faster, earlier screening. Two backbones — VGG19 and MobileNetV2 — were fine-tuned via transfer learning so the system can trade off accuracy against inference speed depending on where it's deployed (clinic workstation vs. lightweight edge device). The model is wrapped behind a REST API so it can be dropped into existing clinical workflows without a full front-end rebuild.",
    features: [
      "Transfer learning on VGG19 and MobileNetV2, fine-tuned for fundus imagery",
      "Image augmentation pipeline to offset limited and imbalanced medical data",
      "REST API (FastAPI/Flask) for real-time inference from other clinical tools",
      "Evaluation suite tracking accuracy, precision/recall, and confusion matrices per class",
    ],
    tags: ["TensorFlow", "VGG19", "MobileNetV2", "FastAPI", "Transfer Learning"],
    github: "https://github.com/Umarali8627/Eye_disease_Classifier_VGG",
    featured: true,
    accent: "from-blue-500/30 to-violet-500/30",
    metric: "94% accuracy",
    image:"/projects/Eyelab.png"
  },
  {
    slug: "admission-rag-chatbot",
    title: "University Admission RAG Chatbot",
    blurb:
      "RAG chatbot for admissions inquiries built with LangChain + LangGraph. Custom preprocessing pipeline lifted retrieval accuracy by 35%, sub-2s response.",
    fullDescription:
      "An admissions assistant that answers prospective-student questions by retrieving from the university's own policy and program documents instead of relying on a model's general knowledge. Built with LangChain and LangGraph to orchestrate multi-step retrieval and response generation, with a custom document preprocessing pipeline (chunking, cleaning, metadata tagging) that meaningfully improved how often the right source was retrieved.",
    features: [
      "LangGraph-orchestrated RAG pipeline over university admissions documents",
      "Custom chunking/preprocessing pipeline that lifted retrieval accuracy by 35%",
      "Vector database for semantic search with sub-2s end-to-end response time",
      "Conversation-aware prompting so follow-up questions stay in context",
    ],
    tags: ["LangChain", "LangGraph", "RAG", "Vector DB", "LLM"],
    github: "https://github.com/Umarali8627/admission-chatbot",
    featured: true,
    accent: "from-violet-500/30 to-fuchsia-500/30",
    metric: "+35% retrieval",
    image: "/projects/Admissionchatbot.png"
  },
  {
    slug: "chatbot-memory",
    title: "Conversational Chatbot with Memory",
    blurb:
      "Intelligent chatbot with persistent multi-turn memory using LangChain memory modules. Live on Streamlit with real-time response generation.",
    fullDescription:
      "A general-purpose conversational assistant focused on one problem most chatbot demos skip: remembering what was already said. Using LangChain's memory modules, the bot keeps track of multi-turn context so conversations feel continuous rather than stateless, and it's deployed live on Streamlit for anyone to try.",
    features: [
      "Persistent multi-turn memory via LangChain memory modules",
      "Streamlit front end with real-time, streamed response generation",
      "Context window management to keep long conversations coherent",
      "Deployed and publicly accessible as a live demo",
    ],
    tags: ["LangChain", "Memory", "Streamlit", "LLM"],
    github: "https://github.com/Umarali8627/chatbot-memory",
    demo: "https://chatbot-with-memory.streamlit.app",
    accent: "from-cyan-500/30 to-blue-500/30",
    metric: "Live demo",
    image:"/projects/Chatbot.png"
  },
  {
    slug: "smart-ai-notes",
    title: "Smart AI Notes System",
    blurb:
      "AI-powered note-taking with auto-summarization, tag generation, and context-aware organization. FastAPI backend, real-time processing.",
    fullDescription:
      "A note-taking tool that does the organizing for you: notes are auto-summarized, auto-tagged, and grouped by context as they're written, instead of relying on the user to file everything manually. The backend is built on FastAPI so summarization and tagging happen close to real time as notes are created or edited.",
    features: [
      "Automatic summarization of long-form notes via LLM pipeline",
      "Context-aware auto-tagging for organization without manual filing",
      "FastAPI backend built for real-time processing",
      "Designed to scale to larger personal knowledge bases over time",
    ],
    tags: ["LangChain", "FastAPI", "NLP", "Python"],
    github: "https://github.com/Umarali8627/smart-ai-notes",
    accent: "from-emerald-500/30 to-cyan-500/30",
    metric: "AI summarization",
    image:"/projects/SmartAI.png"
  },
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    blurb:
      "Ensemble ML (Random Forest + XGBoost) for cardiovascular risk on the UCI heart dataset. Tuned pipeline with deep EDA and visual interpretability.",
    fullDescription:
      "A cardiovascular risk model trained on the UCI heart disease dataset, combining Random Forest and XGBoost in an ensemble to balance interpretability against raw predictive power. Heavy emphasis went into exploratory data analysis up front — understanding which clinical features actually drive risk — before any tuning, so the final pipeline's decisions are explainable rather than a black box.",
    features: [
      "Ensemble of Random Forest and XGBoost for cardiovascular risk scoring",
      "Deep exploratory data analysis to surface the strongest risk indicators",
      "Hyperparameter-tuned pipeline with cross-validation",
      "Visual interpretability (feature importance, ROC/AUC) for clinical trust",
    ],
    tags: ["XGBoost", "Random Forest", "Scikit-Learn", "EDA"],
    github: "https://github.com/Umarali8627/Cardio-Project",
    accent: "from-rose-500/30 to-violet-500/30",
    metric: "88% accuracy",
    image:"/projects/Heart.png"
  },
  {
    slug: "movie-recommendation-system",
    title: "Movie Recommendation System",
    blurb:
      "Collaborative + content-based filtering over the TMDB 5000 dataset. Deployed full-stack on Railway with Streamlit frontend and GitHub CI/CD.",
    fullDescription:
      "A hybrid recommendation engine over the TMDB 5000 dataset, blending collaborative filtering (what similar users liked) with content-based filtering (what's similar about the movies themselves) so recommendations hold up even for titles with little interaction history. Shipped as a full-stack app on Railway with a Streamlit front end and a CI/CD pipeline through GitHub for repeatable deploys.",
    features: [
      "Hybrid collaborative + content-based filtering over TMDB 5000",
      "Cold-start handling via content similarity for under-rated titles",
      "Streamlit front end deployed full-stack on Railway",
      "GitHub Actions CI/CD for automated, repeatable deployments",
    ],
    tags: ["Scikit-Learn", "Streamlit", "Railway", "CI/CD"],
    github: "https://github.com/Umarali8627/Movie-Recommendation-System",
    accent: "from-amber-500/30 to-rose-500/30",
    metric: "Full-stack deploy",
    image:"/projects/Movie.png"
  },
  {
    slug: "email-spam-detection",
    title: "Email Spam Detection",
    blurb:
      "Multinomial Naive Bayes with TF-IDF for text classification. Full NLP preprocessing pipeline — tokenization, stop-words, feature extraction.",
    fullDescription:
      "A classic but carefully built text classifier that flags spam emails using TF-IDF features and a Multinomial Naive Bayes model. The bulk of the engineering effort is in the NLP preprocessing pipeline — tokenization, stop-word removal, and feature extraction — since clean inputs matter as much as the model choice for a problem like this.",
    features: [
      "Full NLP preprocessing pipeline: tokenization, stop-word removal, normalization",
      "TF-IDF feature extraction tuned for short, noisy email text",
      "Multinomial Naive Bayes classifier optimized for precision on spam class",
      "Evaluated against a held-out test set with confusion matrix analysis",
    ],
    tags: ["NLP", "Naive Bayes", "TF-IDF", "Scikit-Learn"],
    github: "https://github.com/Umarali8627/spam_Detection",
    accent: "from-sky-500/30 to-indigo-500/30",
    metric: "96% accuracy",
    image:"/projects/Email.png"
  },
];