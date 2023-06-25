import "./Main.css";
import { AiFillGithub,AiOutlineFolderOpen} from "react-icons/ai";
import { FaExternalLinkAlt} from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import Typewriter from "typewriter-effect";
export default function Main(){
    return(
        <>
        <div>
            <main className="main">
                <section className="MyName">
                    <h1>Hello, my name is</h1>
                    <h2>Kaushik.</h2>
                    <h3> <Typewriter
                            options={{
                            strings: ["Welcome to my Portfolio","Software Development Engineer in Test (SDET)", "Cypress | Selenium | Postman | JMeter | And-More","Continuously learning new things"],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50
                            }}
                        /></h3>
                    <div className="paragraph">
                        <p>As a <a href="https://masaischool.com/">Masai School</a> graduate, I possess a unique set of skills and knowledge that enable me to innovate new idea's. I have developed a strong foundation in programming languages and technologies, allowing me to review high-quality products.</p>
                        <p>I enjoy learning new skills and implementing them in real life!</p>
                    </div>
                    <div className="Getintouch">
                        <a href="mailto:kaubis368@gmail.com">Get In Touch</a>
                    </div>
                </section>
                <section className="Aboutme" id="about">
                    <h3>About Me</h3>
                    <div className="AboutPara">
                        <div className="AboutPara1">
                            <div>
                                <p>Hello! I'm <span>Kaushik</span>, from <span>Shimla</span>, is known for its weather and tourist attraction.</p>
                                <p>I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.</p>
                                <p></p>
                                <p>I have successfully achieved <span>63.98%</span> in <span>B.tech</span> (Mechanical)(<span>2021</span>), paving the way for a <span>bright future</span>.</p>
                                <p>Here are few of the activities that <span>I love to do</span>!</p>
                            </div>
                            <ul>
                                <li>Coding</li>
                                <li>Problem Solving</li>
                                <li>Team Management</li>
                                <li>Discipline</li>
                                <li>Creativity</li>
                                <li>Decision Making</li>
                                <li>Communication</li>
                            </ul>
                        </div>
                        <div className="AboutPara2">
                            <a href="https://github.com/Kaushik368">
                                <div>
                                    <img src="https://avatars.githubusercontent.com/u/110032657?v=4" alt=""></img>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="Experence" id="Journy">
                    <h3>My Journy</h3>
                    <div className="myjourny">
                        <div className="myjournydiv">
                            <h4>My Journey towards Becoming an SDET</h4>
                            <h5>June 16, 2023</h5>
                            <ul>
                                <li>Today, I sit down to reflect upon my journey so far, who aspires to become a <span>Software Development Engineer in Test (SDET)</span>. It has been a transformative path filled with challenges, learning, and growth.</li>
                                <li>Looking back, it's all began in 2021 when I successfully completed my <span>B.tech examinations</span>. I dedicated myself to further studies, aiming to build a promising future.</li>
                                <li>In 2021, after clearing my <span>B.tech examinations</span>, I felt a strong inclination on advice of my parents. I took a leap of faith and started preperation for government Exams. This decision marked the beginning of a new chapter in my life.</li>
                                <li>In January 2023, I made a pivotal decision by joining the <span>SDET</span> batch offered by Masai. The <span>Software Development Engineer in Test</span> role fascinated me, as it combined my passion for coding with my desire to ensure software quality and reliability. I realized that as an SDET, I could contribute to the development process by writing effective <span>test cases</span>, <span>automating tests</span>, and identifying and resolving <span>software defects</span>.</li>
                                <li>Since then, my days have been filled with engaging lessons, <span>hands-on projects</span>, and <span>collaborative work</span> with fellow students. I've learned various programming languages, honed my <span>problem-solving</span> skills. Each step has brought me closer to <span>my goal of becoming an SDET</span>.</li>
                                <li>While my journey is far from over, I am excited about the road ahead. I look forward to continuing my learning, exploring <span>new technologies</span>, and eventually making a positive impact in the software development industry as an SDET. With each passing day, I grow more confident in my abilities and more inspired to reach <span>new heights</span>.</li>
                                <li>Now I can say , I can achieve my dreams and make a meaningful contribution to <span>the world of software testing</span>.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="Projects" id="projects">
                    <h3>My Projects.</h3>
                    <div>
                        <div>
                            <a href="https://github.com/Kaushik368/API_Testing_Projects">
                                <img src="https://user-images.githubusercontent.com/113350806/236556146-ea476d1a-954e-4aa0-ac13-3b88b90b87db.png" alt="" />
                            </a>
                            <div>
                                <h4>API Testing Project.</h4>
                                <h5>
                                    <a href="/">Github API Testing Project</a>
                                </h5>
                                <div className="float">
                                    <p>Streamline your GitHub API testing and integration by leveraging powerful GitHub APIs. Enhance collaboration, automate workflows, and unlock the full potential of your projects with seamless API interactions.</p>
                                    <p>Tested all the <span>API requests</span> of GitHub</p>
                                </div>
                                <ul>
                                    <li>Postman</li>
                                    <li>Cypress</li>
                                    <li>REST Assured</li>
                                </ul>
                                <div>
                                <a href="https://github.com/Kaushik368/API_Testing_Projects" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                        </div>
                        <div className="Projects2">
                            <div>
                                <h4>Mobile App Testing </h4>
                                <h5>
                                    <a href="/">Hybrid App Testing Project</a>
                                </h5>
                                <div className="float-left">
                                    <p>Mobile app testing is important to ensure app functionality, usability, and reliability. It involves testing features, performance, security, and compatibility across devices for a smooth user experience.</p>
                                    <p>Tested all the <span>necessary features</span> of the app</p>
                                </div>
                                <ul>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Appium</li>
                                    <li>WebdriverIO</li>
                                </ul>
                                <div>
                                <a href="https://github.com/Kaushik368/Mobile_testing_project" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                            <a href="https://github.com/Kaushik368/Mobile_testing_project">
                                <img src="https://user-images.githubusercontent.com/113350806/241374678-2def7547-304c-4b24-a295-421fdf068e58.png" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Kaushik368/performance_Testing_using_JMeter">
                                <img src="https://user-images.githubusercontent.com/113350806/243560914-176e6ce8-c50f-41e3-944f-6e061fe78594.png" alt="" />
                            </a>
                            <div>
                                <h4>Performance Testing Project.</h4>
                                <h5>
                                    <a href="/">Performance Testing Using JMeter</a>
                                </h5>
                                <div className="float">
                                    <p>As This Project was related to Performance testing, We need to test JPetStore Demo and Github API using JMeter.</p>
                                    <p>Tested all the <span>API requests</span> using JMeter</p>
                                </div>
                                <ul>
                                    <li>JMeter</li>
                                    <li>MySQL</li>
                                    <li>Grafana</li>
                                </ul>
                                <div>
                                <a href="https://github.com/Kaushik368/performance_Testing_using_JMeter" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                        </div>
                        <div className="Projects2">
                            <div>
                                <h4>Cypress Project.</h4>
                                <h5>
                                    <a href="/">Thesouledstore with Cypress , Project</a>
                                </h5>
                                <div className="float-left">
                                    <p>I used Cypress to test the login and navigation functions of Thesouledstore. The tests were successful, ensuring that users can log in to the website and navigate through its pages without any issues.</p>
                                    <p>Tested two modules of <span>Thesouledstore</span> with Cypress</p>
                                </div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Cypress</li>
                                </ul>
                                <div>
                                <a href="https://github.com/Kaushik368/thesouledstore" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                            <a href="https://github.com/Kaushik368/thesouledstore">
                                <img src="https://user-images.githubusercontent.com/113350806/247505686-b7d07041-c3f7-480b-aa07-f44cbfc86cd3.png" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
               
                <GitHubCalendar style={{width:"100%"}} username="Kaushik368" blockSize={17} blockMargin={8} fontSize={16}/>
                <section className="contactinfo" id="contact">
                    <h3>Contact Info.</h3>
                    <h4>Get In Touch</h4>
                    <div>Feel free to reach out to me anytime. I'm here to help and will do my best to respond. Feel confident to send me any inquiries, job updates, or simply say hello. I look forward to hearing from you!</div>
                    <a href="mailto:kaubis368@gmail.com">Mail Me</a>
                </section>
            </main>
            <footer>
                <a href="https://github.com/Kaushik368">Made with <span style={{color:"red",margin:"0 5px"}}>❤</span> By Kaushik</a>
            </footer>
        </div>
        </>
    );
}
