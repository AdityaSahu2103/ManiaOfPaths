// projectsData.js
export const projects = [
  {
    id: 1,
    title: "TrackTime",
    description: "A React-based web app to track tasks.",
    skills: ["React", "CSS", "JavaScript", "Node.js", "MongoDB", "Netlify"],
    team: [
      { name: "Yash", profileLink: "https://github.com/yashpatel7025" },
      { name: "Dhruva", profileLink: "https://github.com/dhruvasagar" }
    ],
    rating: 4.5,
    type: "Hackathon",
    tags: ["Web Development", "Frontend"],
    imageUrl: "/projectA1.png", // Update path to image
    technologies: ["React", "CSS", "JavaScript", "Node.js", "MongoDB", "Netlify"],
    journey: [
      { title: "Idea Phase", description: "Conceptualized the task tracker app", date: "2023-01-01" },
      { title: "Development", description: "Developed core features using React", date: "2023-02-01" },
      { title: "Testing", description: "Tested the application for bugs", date: "2023-03-01" },
      { title: "Launch", description: "Deployed the application", date: "2023-04-01" }
    ],
    achievements: "Winner of AdobeGenSolve 2023",
    relatedProjects: [
      { id: 2, title: "FraudShield", description: "A Python ML project for fraud detection." }
    ],
    githubLink: "https://github.com/dhruvasagar/vim-dotoo",
    contact: "yash@example.com",
    images: [
      "/projectA1.png",
      "/projectA2.png",
      "/projectA3.png"
    ], // New field for ImageGallery
    comments: [], // New field for Comment section
    downloadLink: "https://www.researchgate.net/publication/341121118_National_Conference_DREFT-2020", // New field for DownloadSection
    contributors: [
      {
        name: "Yash",
        profileLink: "https://github.com/yashpatel7025",
        background: "Computer Science graduate with a passion for web development.",
        inspiration: "I wanted to create something meaningful that can help the philately community.",
        contributions: [
          "Developed the user interface for the product detail page.",
          "Implemented the download section and comments functionality."
        ],
        techStack: ["React", "CSS", "JavaScript"],
        timeline: [
          { date: "January 2023", milestone: "Joined the team." },
          { date: "February 2023", milestone: "Completed the product detail page." }
        ],
        resources: [
          { name: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
          { name: "MDN Web Docs", link: "https://developer.mozilla.org/en-US/" },
          { name: "React Documentation", link: "https://reactjs.org/docs/getting-started.html" }
        ],
        aspirations: "To become a full-stack developer and contribute to open-source projects.",
        quote: "Collaboration is the key to innovation."
      },
      {
        name: "Dhruva",
        profileLink: "https://github.com/dhruvasagar",
        background: "Software engineer with experience in backend development.",
        inspiration: "I wanted to enhance my skills in full-stack development.",
        contributions: [
          "Worked on backend APIs and database integration.",
          "Assisted in deploying the application on Netlify."
        ],
        techStack: ["Node.js", "MongoDB"],
        timeline: [
          { date: "January 2023", milestone: "Joined the team." },
          { date: "March 2023", milestone: "Finished backend development." }
        ],
        resources: [
          { name: "Node.js Documentation", link: "https://nodejs.org/en/docs/" },
          { name: "MongoDB Atlas Guide", link: "https://www.mongodb.com/docs/atlas/" }
        ],
        aspirations: "To lead a team of developers in building impactful applications.",
        quote: "Every line of code is a step towards creating something bigger."
      }
    ]
  },
  {
    id: 2,
    title: "FraudShield",
    description: "A Python ML project for fraud detection.",
    skills: ["Python", "Machine Learning", "Pandas", "NumPy","TensorFlow", "Scikit-learn"],
    team: [
      { name: "Pramod", profileLink: "https://github.com/pramoddatamantra" },
      { name: "Sagnik", profileLink: "https://github.com/sagnikghoshcr7" }
    ],
    rating: 4.8,
    type: "Academic",
    tags: ["Machine Learning", "AI"],
    imageUrl: "/assets/images/projectB.jpg", // Update path to image
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy","TensorFlow", "Scikit-learn"],
    journey: [
      { title: "Research Phase", description: "Researched fraud detection techniques", date: "2022-06-01" },
      { title: "Model Development", description: "Built fraud detection model", date: "2022-07-01" },
      { title: "Testing", description: "Tested the model on various datasets", date: "2022-08-01" },
      { title: "Final Submission", description: "Submitted project for academic review", date: "2022-09-01" }
    ],
    achievements: "Top project in AI Conference 2022",
    relatedProjects: [
      { id: 1, title: "TrackTime", description: "A React-based web app to track tasks." }
    ],
    githubLink: "https://github.com/pramoddatamantra/FraudDetection",
    contact: "pramod@example.com",
    images: [
      "/projectB1.png",
      "/projectB2.png",
      "/projectB3.png"
    ], // New field for ImageGallery
    comments: [], // New field for Comment section
    downloadLink: "https://github.com/jpg-130/Credit-Card-Fraud-Detection/blob/master/Report.pdf", // New field for DownloadSection
    contributors: [
      {
        name: "Pramod",
        profileLink: "https://github.com/pramoddatamantra",
        background: "Data Scientist with a focus on machine learning.",
        inspiration: "I wanted to apply machine learning to real-world problems.",
        contributions: [
          "Developed the machine learning model for fraud detection.",
          "Performed data preprocessing and analysis."
        ],
        techStack: ["Python", "Machine Learning", "Pandas"],
        timeline: [
          { date: "June 2022", milestone: "Joined the team." },
          { date: "August 2022", milestone: "Completed model testing." }
        ],
        resources: [
          { name: "Kaggle Datasets", link: "https://www.kaggle.com/datasets" },
          { name: "Machine Learning Crash Course by Google", link: "https://developers.google.com/machine-learning/crash-course" }
        ],
        aspirations: "To become a leading expert in machine learning.",
        quote: "Data is the new oil."
      },
      {
        name: "Sagnik",
        profileLink: "https://github.com/sagnikghoshcr7",
        background: "Software Engineer with expertise in backend systems.",
        inspiration: "I wanted to deepen my understanding of AI applications.",
        contributions: [
          "Assisted in model development and evaluation.",
          "Worked on integrating the model with a web service."
        ],
        techStack: ["Python", "Flask"],
        timeline: [
          { date: "June 2022", milestone: "Joined the team." },
          { date: "September 2022", milestone: "Finalized project submission." }
        ],
        resources: [
          { name: "Flask Documentation", link: "https://flask.palletsprojects.com/" },
          { name: "Machine Learning Mastery", link: "https://machinelearningmastery.com/" }
        ],
        aspirations: "To create scalable AI solutions for businesses.",
        quote: "Innovate or die."
      }
    ]
  }
  // Add more projects here if needed
];
