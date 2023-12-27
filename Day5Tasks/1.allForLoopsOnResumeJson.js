// My resume as a JSON object
// Contact details are kept Vanilla for privacy.
const resume = {
    "name": "Gaurav Chaubey",
    "contact": {
      "email": "xyz@gmail.com",
      "phone": "9999911111",
      "address": "123 Main Street, Sunset Boulevard, Spain, 789123"
    },
    "summary": "Enthusiastic, detail oriented Sales and Business Development Professional with 2+ years of experience, looking to transition into a full-stack Web developer.",
    "education": [
      {
        "degree": "Bachelor of Technology in Computer Science and Engineering",
        "school": "School of Technology, Assam Don Bosco University",
        "graduationYear": 2017
      }
    ],
    "experience": [
      {
        "position": "Proprietor",
        "company": "Neonbuddy",
        "startDate": "01-04-2023",
        "endDate": "Present",
        "responsibilities": [
          "Founded and managing a custom neon sign and home decor business.",
          "Overseeing all aspects of operations including design, prodcution, marketing and customer relations."
        ]
      },
      {
        "position": "Business Development Manager",
        "company": "Nexgenow",
        "startDate": "01-10-2022",
        "endDate": "01-04-2023",
        "responsibilities": [
          "Conducted market research and analysis, providing valuable isights for strategic decision-making.",
          "Implemented Social Media Marketing strategies that led to a 20% increase in client acquisition.",
          "Collaborated with cross-functional teams to ensure the successful execution of digital marketing campaigns."
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
    ],
    "languages": [
      "English (Fluent)",
      "Assamese (Fluent)",
      "Hindi (Intermediate)",      
    ]
}

// A for loop that displays the last two positions held by the candidate
for (let i=0; i<resume.experience.length;i++){
  console.log("Position:", resume.experience[i].position);
}


// A for in loop that displays the educational qualification of the candidate
for (let key in resume.education[0]){
  console.log(key+": ", resume.education[0][key]);
}


// A for of loop that displays the entire responsibilities held by the candidate in the current job
for (let responsibilities of resume.experience[0].responsibilities){
  console.log("*", responsibilities);
}


// A usage of forEach method to display the Skills of the candidate
resume.skills.forEach((skill) => console.log(skill));
