// projectsData.js
export const projects = [
    {
      id: 1,
      title: "Project A",
      description: "A React-based web app to track tasks.",
      skills: ["React", "JavaScript", "CSS"],
      team: [
        { name: "Alice", profileLink: "https://github.com/alice" },
        { name: "Bob", profileLink: "https://github.com/bob" }
      ],
      rating: 4.5,
      type: "Hackathon",
      tags: ["Web Development", "Frontend"],
      imageUrl: "/assets/images/projectA.jpg", // Update path to image
      technologies: ["React", "CSS", "JavaScript"],
      journey: [
        { title: "Idea Phase", description: "Conceptualized the task tracker app", date: "2023-01-01" },
        { title: "Development", description: "Developed core features using React", date: "2023-02-01" },
        { title: "Testing", description: "Tested the application for bugs", date: "2023-03-01" },
        { title: "Launch", description: "Deployed the application", date: "2023-04-01" }
      ],
      achievements: "Winner of XYZ Hackathon 2023",
      relatedProjects: [
        { id: 2, title: "Project B", description: "A Python ML project for fraud detection." }
      ],
      githubLink: "https://github.com/alice/project-a",
      contact: "alice@example.com"
    },
    {
      id: 2,
      title: "Project B",
      description: "A Python ML project for fraud detection.",
      skills: ["Python", "Machine Learning", "Pandas"],
      team: [
        { name: "Charlie", profileLink: "https://github.com/charlie" },
        { name: "Dave", profileLink: "https://github.com/dave" }
      ],
      rating: 4.8,
      type: "Academic",
      tags: ["Machine Learning", "AI"],
      imageUrl: "/assets/images/projectB.jpg", // Update path to image
      technologies: ["Python", "Machine Learning", "Pandas"],
      journey: [
        { title: "Research Phase", description: "Researched fraud detection techniques", date: "2022-06-01" },
        { title: "Model Development", description: "Built fraud detection model", date: "2022-07-01" },
        { title: "Testing", description: "Tested the model on various datasets", date: "2022-08-01" },
        { title: "Final Submission", description: "Submitted project for academic review", date: "2022-09-01" }
      ],
      achievements: "Top project in AI Conference 2022",
      relatedProjects: [
        { id: 1, title: "Project A", description: "A React-based web app to track tasks." }
      ],
      githubLink: "https://github.com/charlie/project-b",
      contact: "charlie@example.com"
    }
    // Add more projects here if needed
  ];
  