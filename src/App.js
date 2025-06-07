import Navbar from "./Components/Navbar";
import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaCode, FaMedal,FaTrophy,FaUnity,FaUserSecret,FaBrain,FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDatabase, FaGitAlt, FaAndroid, FaCloud, FaTools, FaUserCog, FaLightbulb, FaChalkboardTeacher, FaUserGraduate, FaCertificate } from 'react-icons/fa';


// Color palette variables
const COLORS = {
  primary: "#576cbc",
  secondary: "#19376d",
  dark: "#0b2447",
  bg: "#04152d",
};

function Home() {
  return (
    <div
      style={{
        ...styles.container,
        background: `linear-gradient(135deg, ${COLORS.bg} 60%, ${COLORS.secondary} 100%)`,
        minHeight: "100vh",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
     
      <div
        style={{
          flex: "1 1 50%",
          maxWidth: "600px",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            color: COLORS.primary,
            marginBottom: "1rem",
            letterSpacing: "1px",
          }}
        >
          Hi all <span style={{ fontSize: "2.5rem" }}>👋</span> I'm{" "}
          <span style={{ color: COLORS.secondary }}>Shraddha Rai</span>
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#e0e6f7",
            lineHeight: "1.7",
            marginBottom: "2rem",
            background: "rgba(25, 55, 109, 0.15)",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
          }}
        >
          A passionate Computer Science student and Full Stack Developer with hands-on experience in building scalable and user-friendly web and mobile applications. Skilled in ReactJS, Java, Android, and AWS Cloud, I love crafting impactful digital solutions and continuously learning new technologies.
        </p>

       
          <div style={{ ...styles.socials, color: COLORS.primary }}>
            <a href="https://github.com/Shraddharai412" target="_blank" rel="noreferrer" style={{ color: COLORS.primary }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shraddha-rai-a7576229a/" target="_blank" rel="noreferrer" style={{ color: "#0a66c2" }}>
              <FaLinkedin />
            </a>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="UPdateResume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.resumeBtn,
                background: COLORS.primary,
                color: "#fff",
                border: `2px solid ${COLORS.secondary}`,
                boxShadow: "0 2px 8px 0 rgba(87,108,188,0.15)",
                transition: "background 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = COLORS.secondary)}
              onMouseOut={e => (e.currentTarget.style.background = COLORS.primary)}
            >
              SEE MY RESUME
            </a>
          </div>
              </div>
              <div
          style={{
            flex: "1 1 40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
              >
          <div
            
              >
                <img
                  style={{
                  boxShadow: "0 12px 24px rgba(31, 81, 217, 0.1)",
                    borderRadius: "16px",
                    border: "4px solid #576cbc",
                    display: "block",
                    margin: "0 auto",
                    width: "375px",
                    height: "375px",
                    objectFit: "cover",
                    objectPosition: "center 10%",  
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    filter: "brightness(1.05) contrast(1.05)",
                  }}
                  src="logo1.png"
                  alt="Me sitting with laptop"
                  onMouseOver={e => {
                    e.currentTarget.style.transform = "scale(1.04)";
                    e.currentTarget.style.boxShadow = "0 16px 48px 0 rgba(87,108,188,0.35)";
                    e.currentTarget.style.filter = "grayscale(0%) brightness(1.12)";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(87,108,188,0.25)";
                    e.currentTarget.style.filter = "grayscale(10%) brightness(1.08)";
                  }}
                />
                
            
          </div>
         
        </div>
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "300px",
          height: "300px",
          background: COLORS.primary,
          opacity: 0.18,
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "220px",
          height: "220px",
          background: COLORS.secondary,
          opacity: 0.14,
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </div>
  );
}
const styles = {
          container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "60px 8vw 40px 8vw",
            gap: "40px",
            position: "relative",
          },
          socials: {
            display: "flex",
            gap: "1.2rem",
            fontSize: "2.1rem",
            marginBottom: "2.2rem",
            marginTop: "0.5rem",
          },
          resumeBtn: {
            padding: "0.85rem 2.2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            textDecoration: "none",
            letterSpacing: "1px",
            outline: "none",
            border: "none",
            display: "inline-block",
          },
        };

        function About() {
          return (
            <div style={{
              background: `linear-gradient(135deg, ${COLORS.bg} 60%, ${COLORS.secondary} 100%)`,
              padding: "3.5rem 0",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                background: "rgba(84, 132, 223, 0.16)",
                color: "white",
                borderRadius: "22px",
                padding: "2.8rem 2.5rem",
                margin: "0 auto",
                maxWidth: "950px",
                boxShadow: "0 8px 40px 0 rgba(25,55,109,0.16)",
                fontSize: "1.13rem",
                lineHeight: "1.7",
                border: `2.5px solid ${COLORS.primary}`,
                zIndex: 2
              }}>
                <h2 style={{ color: COLORS.primary, fontWeight: "bold", marginBottom: "1.2rem" }}>About Me</h2>
                <p>
                  I am Shraddha Rai, a passionate Computer Science student at Vardhaman College of Engineering (2022-26), with a CGPA of 9.83. My expertise spans Software Development, Cloud Computing, and Data Structures & Algorithms. I have hands-on experience in Web and Android Development, and a keen interest in AI and scalable, secure applications.
                </p>
                <p>
                  I thrive on learning new technologies and building impactful projects. My technical toolkit includes ReactJS, Java, C, JavaScript, HTML, CSS, Node.js, MySQL, and AWS Cloud. I am driven by curiosity, adaptability, and a desire to innovate and contribute to meaningful solutions.
                </p>
                <ul style={{ marginTop: "1.5rem", marginBottom: 0 }}>
                  <li><strong>Education:</strong> B.Tech in Computer Science & Engineering, Vardhaman College of Engineering (2022-26)</li>
                  <li><strong>Email:</strong> shraddharai@gmail.com</li>
                  <li><strong>Contact:</strong> +91-8688263627</li>
                  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shraddha-rai-a7576229a/" target="_blank" rel="noreferrer" style={{ color: COLORS.primary }}>shraddha-rai-a7576229a</a></li>
                  <li><strong>GitHub:</strong> <a href="https://github.com/Shraddharai412" target="_blank" rel="noreferrer" style={{ color: COLORS.primary }}>Shraddharai412</a></li>
                </ul>
              </div>
            </div>
          );
        }

        function Contact() {
          return (
             <div style={{
              background: `linear-gradient(135deg, ${COLORS.bg} 60%, ${COLORS.secondary} 100%)`,
              padding: "3.5rem 0",
              height:'600px',
              display: "flex",
              
              
            }}>
            <div style={{
              background: `linear-gradient(135deg, ${COLORS.secondary} 60%, ${COLORS.bg} 100%)`,
              color: "#fff",
              borderRadius: "18px",
              padding: "2.5rem 2rem",
              margin: "2rem auto",
              maxWidth: "600px",
              boxShadow: "0 4px 32px 0 rgba(25,55,109,0.12)",
              fontSize: "1.1rem",
              height:'300px'
            }}>
              <h2 style={{ color: COLORS.primary, fontWeight: "bold", marginBottom: "1.2rem" }}>Contact</h2>
              <p>You can reach out to me for collaboration, project opportunities, or just to connect!</p>
              <div style={{ marginTop: "1.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Email:</strong> <a href="mailto:shraddharai@gmail.com" style={{ color: COLORS.primary }}>shraddharai@gmail.com</a>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Phone:</strong> <span style={{ color: "#e0e6f7" }}>+91-8688263627</span>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shraddha-rai-a7576229a/" target="_blank" rel="noreferrer" style={{ color: "#0a66c2" }}>shraddha-rai-a7576229a</a>
                </div>
                <div>
                  <strong>GitHub:</strong> <a href="https://github.com/Shraddharai412" target="_blank" rel="noreferrer" style={{ color: COLORS.primary }}>Shraddharai412</a>
                </div>
              </div>
            </div>
            </div>
          );
        }

        function Skills() {
          
            const skillIcons = {
            C: <FaCode style={{ color: "#5e97d0" }} />,
            Python: <FaPython style={{ color: "#3776ab" }} />,
            Java: <FaJava style={{ color: "#e76f00" }} />,
            JavaScript: <FaJs style={{ color: "#f7df1e" }} />,
            "HTML & CSS": (
              <>
              <FaHtml5 style={{ color: "#e34c26", marginRight: 4 }} />
              <FaCss3Alt style={{ color: "#1572b6" }} />
              </>
            ),
            ReactJS: <FaReact style={{ color: "#61dafb" }} />,
            "Node.js": <FaNodeJs style={{ color: "#3c873a" }} />,
            "VS Code": <FaTools style={{ color: "#007acc" }} />,
            "Git & GitHub": (
              <>
              <FaGitAlt style={{ color: "#f34f29", marginRight: 4 }} />
              <FaGithub style={{ color: "#fff" }} />
              </>
            ),
            "Android Studio": <FaAndroid style={{ color: "#3ddc84" }} />,
            "AWS Cloud": <FaAws style={{ color: "#ff9900" }} />,
            MySQL: <FaDatabase style={{ color: "#00758f" }} />,
            Oracle: <FaDatabase style={{ color: "#f80000" }} />,
            "Problem Solving": <FaLightbulb style={{ color: "#ffe066" }} />,
            "Self-learning": <FaUserGraduate style={{ color: "#6c63ff" }} />,
            Presentation: <FaChalkboardTeacher style={{ color: "#00b894" }} />,
            Adaptability: <FaUserCog style={{ color: "#00cec9" }} />,
            };
             const skillsData = [
            {
              title: "Languages",
              items: ["C", "Python", "Java", "JavaScript", "HTML & CSS"],
            },
            {
              title: "Frameworks & Libraries",
              items: ["ReactJS", "Node.js"],
            },
            {
              title: "Dev Tools",
              items: ["VS Code", "Git & GitHub", "Android Studio"],
            },
            {
              title: "Cloud & Databases",
              items: ["AWS Cloud", "MySQL", "Oracle"],
            },
            {
              title: "Soft Skills",
              items: ["Problem Solving", "Self-learning", "Presentation", "Adaptability"],
            },
          ];

            
            return (
              <div style={{
              background: `linear-gradient(135deg, ${COLORS.bg} 60%, ${COLORS.secondary} 100%)`,
              padding: "3.5rem 0",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
            <div style={{
              background: `linear-gradient(135deg, ${COLORS.secondary} 60%, ${COLORS.bg} 100%)`,
              color: "#fff",
              borderRadius: "18px",
              padding: "2.5rem 2rem",
              margin: "2rem auto",
              maxWidth: "900px",
              boxShadow: "0 4px 32px 0 rgba(25,55,109,0.12)",
              fontSize: "1.1rem"
            }}>
              <h2 style={{ color: COLORS.primary, fontWeight: "bold", marginBottom: "1.2rem" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
              {skillsData.map((section) => (
                <div key={section.title} style={{ minWidth: 180, flex: "1 1 200px" }}>
                <h4 style={{ color: COLORS.primary, marginBottom: "0.7rem" }}>{section.title}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", marginBottom: "0.7rem", fontSize: "1.08rem" }}>
                    <span style={{ marginRight: 10, fontSize: "1.4em", display: "flex", alignItems: "center" }}>
                    {skillIcons[item] || <FaCertificate style={{ color: "#fff" }} />}
                    </span>
                    {item}
                  </li>
                  ))}
                </ul>
                </div>
              ))}
              </div>
            </div>
            </div>
             
          );
        }

        
          const projectList = [
            {
              title: "Clair Vue",
              date: "Feb-April 2025",
              description: [
                "AI-powered diagnostic tool for classifying retinal diseases from fundus images",
                "Automated preprocessing, deep feature extraction (RA-EfficientNet), and disease classification",
                "Integrated Grad-CAM for heatmap visualization",
              ],
              tech: "Python, TensorFlow, OpenCV, Matplotlib",
              // github: "https://github.com/Shraddharai412/clair-vue",
              image: "https://img.icons8.com/color/96/000000/artificial-intelligence.png",
            },
             {
              title: "Insurance Management System",
              date: "May-Oct 2024",
              description: [
                "Full-stack system built as part of Mass Mutual MOU Program as FrontEndDeveloper",
                "Responsive UI (ReactJS), backend (Spring Boot), SQL database",
                
              ],
              tech: "ReactJS, Spring Boot, MySQL, Java",
              // github: "https://github.com/Shraddharai412/insurance-management",
              image: "https://projectsforeveryone.com/wp-content/uploads/2021/12/insurance.webp",
            },
            {
              title: "CloudJourney",
              date: "May-Jul 2024",
              description: [
                "Airline management system for staff and passengers",
                "Efficient management of flight bookings, customer data, and schedules",
                "3-tier architecture, runs on local XAMPP server",
              ],
              tech: "PHP, HTML, CSS",
              github: "https://github.com/Shraddharai412/CloudJourney.git",
              image: "https://www.savethestudent.org/uploads/flights.jpg",
            },
           
          ];

          const internships = [
            {
              title: "Android Development, Intrainz Online",
              date: "Nov 2024 – Jan 2025",
              description: "Developed and optimized Android apps with industry mentors.",
            },
            {
              title: "AWS Cloud Computing, NIELIT",
              date: "Aug - Oct 2024",
              description: "8-week program on AWS fundamentals and practical implementations.",
            },
          ];

          const achievements = [
            'Published research paper "ClairVue – Diabetic Retinopathy Detection using EfficientNet and Grad-CAM" at ICCSCE-2025',
            'Published "THREDDLE – Online Tailoring Service" in IEEE ICAITPR, Dec 2024',
            "Cash Prize Winner, Project Expo, Vardhaman College of Engineering, June 2024",
          ];

          function Projects() {
            const [selected, setSelected] = useState(null);

            return (
              <div style={{
                background: `linear-gradient(135deg, ${COLORS.bg} 60%, ${COLORS.secondary} 100%)`,
                padding: "3.5rem 0",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.secondary} 60%, ${COLORS.bg} 100%)`,
                    color: "#fff",
                    borderRadius: "18px",
                    padding: "2.5rem 2rem",
                    margin: "2rem auto",
                    maxWidth: "900px",
                    boxShadow: "0 4px 32px 0 rgba(25,55,109,0.12)",
                    fontSize: "1.1rem",
                  }}
                >
                  <h2 style={{ color: COLORS.primary, fontWeight: "bold", marginBottom: "1.2rem" }}>
                    Projects & Experience
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      flexWrap: "wrap",
                      marginBottom: "2.5rem",
                    }}
                  >
                    {projectList.map((proj, idx) => (
                      <div
                        key={proj.title}
                        onClick={() => setSelected(idx)}
                        style={{
                          cursor: "pointer",
                          background: selected === idx ? "rgba(87,108,188,0.18)" : "rgba(25,55,109,0.10)",
                          border: selected === idx ? `2.5px solid ${COLORS.primary}` : `2px solid white`,
                          borderRadius: "14px",
                          padding: "1.2rem 1rem",
                          minWidth: 220,
                          flex: "1 1 240px",
                          boxShadow: selected === idx ? "0 4px 24px 0 rgba(87,108,188,0.18)" : "none",
                          transition: "all 0.2s",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          style={{
                            width: 64,
                            height: 64,
                            marginBottom: 12,
                            filter: selected === idx ? "none" : "grayscale(30%)",
                            transition: "filter 0.2s",
                          }}
                        />
                        <h4 style={{ color: COLORS.primary, marginBottom: 4 }}>{proj.title}</h4>
                        <div style={{ color: "#e0e6f7", fontWeight: "normal", fontSize: "0.95em" }}>{proj.date}</div>
                        <div style={{ marginTop: 8 }}>
                          {/* Optionally add more info */}
                        </div>
                      </div>
                    ))}
                  </div>
                  {selected !== null && (
                    <div
                      style={{
                        background: "rgba(84, 132, 223, 0.13)",
                        borderRadius: "14px",
                        padding: "1.5rem 1.2rem",
                        marginBottom: "2rem",
                        boxShadow: "0 2px 16px 0 rgba(87,108,188,0.10)",
                        border: `2px solid white`,
                      }}
                    >
                      <h3 style={{ color: COLORS.primary, marginBottom: 8 }}>
                        {projectList[selected].title} <span style={{ color: "#e0e6f7", fontWeight: "normal", fontSize: "0.9em" }}>{projectList[selected].date}</span>
                      </h3>
                      <ul>
                        {projectList[selected].description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                        <li>
                          <strong>Tech:</strong> {projectList[selected].tech}
                        </li>
                      </ul>
                      <div style={{ marginTop: 8 }}>
                        {/* Optionally add links or more */}
                      </div>
                    </div>
                  )}
                  <div style={{ marginBottom: "2rem" }}>
                    <h4 style={{ color: COLORS.primary }}>Internships</h4>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                      {internships.map((intern, i) => (
                        <div
                          key={i}
                          style={{
                            background: "rgba(25,55,109,0.10)",
                            border: `2px solid white`,
                            borderRadius: "12px",
                            padding: "1rem",
                            minWidth: 180,
                            flex: "1 1 200px",
                            boxShadow: "0 2px 12px 0 rgba(87,108,188,0.08)",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={
                              i === 0
                                ? "https://img.icons8.com/color/96/000000/android-os.png"
                                : "https://img.icons8.com/color/96/000000/amazon-web-services.png"
                            }
                            alt={intern.title}
                            style={{
                              width: 48,
                              height: 48,
                              marginBottom: 10,
                              borderRadius: 8,
                              background: "#fff",
                              objectFit: "contain",
                            }}
                          />
                          <div style={{ fontWeight: "bold", color: COLORS.primary }}>{intern.title}</div>
                          <div style={{ color: "#e0e6f7", fontSize: "0.97em", marginBottom: 4 }}>{intern.date}</div>
                          <div style={{ fontSize: "0.98em" }}>{intern.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h4 style={{ color: COLORS.primary, marginTop: "2.5rem" }}>Achievements </h4>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {achievements.map((ach, i) => (
                      <div
                        key={i}
                        style={{
                          background: "rgba(25,55,109,0.10)",
                          border: `2px solid white`,
                          borderRadius: "12px",
                          padding: "1rem",
                          minWidth: 180,
                          flex: "1 1 200px",
                          boxShadow: "0 2px 12px 0 rgba(87,108,188,0.08)",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center"
                        }}
                      >
                        <img
                          src={
                            i === 0
                              ? "https://img.icons8.com/color/96/000000/medal2--v2.png"
                              : i === 1
                              ? "https://img.icons8.com/color/96/000000/certificate.png"
                              : "https://img.icons8.com/color/96/000000/trophy.png"
                          }
                          alt="Achievement"
                          style={{
                            width: 48,
                            height: 48,
                            marginBottom: 10,
                            borderRadius: 8,
                            background: "#fff",
                            objectFit: "contain",
                          }}
                        />
                        <div style={{ fontSize: "1em", color: "#e0e6f7" }}>{ach}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          function Certificate() {
            return (
              <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.bg} 60%, ${COLORS.secondary} 100%)`,
                padding: "3.5rem 0",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              >
              <div
                style={{
                background: `linear-gradient(135deg, ${COLORS.secondary} 60%, ${COLORS.bg} 100%)`,
                color: "#fff",
                borderRadius: "18px",
                padding: "2.5rem 2rem",
                margin: "2rem auto",
                maxWidth: "900px",
                boxShadow: "0 4px 32px 0 rgba(25,55,109,0.12)",
                fontSize: "1.1rem"
                }}
              >
               
                <div style={{
                background: "rgba(242, 242, 242, 0.1)",
                borderRadius: "14px",
                padding: "1.5rem 1rem",
                marginBottom: "2rem"
                }}>
                <h3 style={{ color: COLORS.primary, marginBottom: "1rem" }}>Technical Certifications</h3>
                <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(228, 227, 240, 0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/react-native.png"
                    alt="Front End Web Development"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Front End Web Development, Infosys SpringBoard</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(231, 233, 243, 0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/amazon-web-services.png"
                    alt="AWS Academy Cloud Foundations"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>AWS Academy Cloud Foundations Badge</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(205, 208, 224, 0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/unity.png"
                    alt="Unity Essentials Pathway"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Unity Essentials Pathway Badge</span>
                  </div>
                </div>
                </div>

                {/* Section 2: NPTEL Certifications */}
                <div style={{
                background: "rgba(87,108,188,0.10)",
                borderRadius: "14px",
                padding: "1.5rem 1rem",
                marginBottom: "2rem"
                }}>
                <h3 style={{ color: COLORS.primary, marginBottom: "1rem" }}>NPTEL Certifications</h3>
                <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
                    alt="Programming in Java"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Programming in Java, Swayam, NPTEL</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
                    alt="DSA using Java"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Data Structures and Algorithms using Java, Swayam, NPTEL</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/python.png"
                    alt="Joy of Computing using Python"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>The Joy Of Computing using Python, Swayam, NPTEL</span>
                  </div>
                </div>
                </div>

                {/* Section 3: Extracurricular Activities */}
                <div style={{
                background: "rgba(87,108,188,0.10)",
                borderRadius: "14px",
                padding: "1.5rem 1rem",
                marginBottom: "2rem"
                }}>
                <h3 style={{ color: COLORS.primary, marginBottom: "1rem" }}>Extracurricular Activities</h3>
                <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/html-5--v1.png"
                    alt="Front-End Web Development"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Front-End Web Development Certification Drive</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/unity.png"
                    alt="Unity Workshop"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Unity Real-Time 3D Fundamentals Workshop</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/teacher.png"
                    alt="IEEE YESIST12"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>IEEE YESIST12 Project Demonstration</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://attila.id/wp-content/uploads/2025/05/Cyber-Security.png"
                    alt="Cyber Security Workshop"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Cyber Espionage and Cyber Crimes Workshop</span>
                  </div>
                  <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid white",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)"
                  }}>
                  <img
                    src="https://img.icons8.com/color/96/000000/artificial-intelligence.png"
                    alt="Deep Learning Workshop"
                    style={{ width: 80, height: 80, borderRadius: 12, background: "#fff", objectFit: "contain", boxShadow: "0 2px 12px 0 rgba(87,108,188,0.10)" }}
                  />
                  <span style={{ marginTop: 8 }}>Deep Learning Applications Workshop</span>
                  </div>
                </div>
                </div>
              </div>
              </div>
            );
          }
                
                 
      
          




function App()
{ 

  

   return (
    <div >
 <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
   
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/certificate"element={<Certificate/>}/>
    

  </Routes>
 
 </Router>
 </div>
   )
}
export default App;