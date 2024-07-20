import project1 from "../assets/projects/messanger.jpg";
import project2 from "../assets/projects/TravelAgency.jpg";
import project3 from "../assets/projects/Yoga.jpg";
import project4 from "../assets/projects/Solana.png";

export const HERO_CONTENT = `Hello, I’m Hayk Avagyan, a frontend developer with 2 years of experience. My expertise lies in building responsive and dynamic web applications using the following technologies:

HTML5: Crafting well-structured, semantic markup for modern web applications.
CSS3: Styling and creating visually appealing, user-friendly interfaces.
SCSS: Writing maintainable and scalable styles with advanced features like variables, nesting, and mixins.
JavaScript (JS): Adding interactivity and functionality to web pages.
React JS: Developing efficient and scalable user interfaces with a component-based approach.
Redux: Managing state effectively in complex applications.
Bootstrap: Utilizing the popular framework for responsive design and rapid development.
I am passionate about staying updated with the latest trends and best practices in frontend development to deliver high-quality web solutions.`;

export const links = ['https://www.linkedin.com/in/hayk-avagyan-5b5a5429a/', 'https://github.com/HaykAvagyann/haykportfolio', 'https://x.com/hayk_avagyan07', 'https://www.instagram.com/_.hayk.avagyan._/']

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including HTML5, CSS3, SCSS, JavaScript, React JS, Redux, and Bootstrap. My journey in frontend development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Home",
    description: `In 2023, I independently developed a messenger application at home. This project involved building a comprehensive messaging platform with the following key features: Implementing robust login and registration logic to ensure secure user authentication. Designing and developing functionality to facilitate display and interactions with other users. Enabling users to initiate and engage in real-time conversations with others on the platform. Ensuring a smooth and responsive user experience across devices. This project demonstrated my ability to manage complex application logic and deliver a fully functional, user-friendly messaging system.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "SmartCode",
    description: `In 2023, I collaborated with a team at SmartCode to develop a website dedicated to traveling. My primary responsibilities included: Working extensively on the styling to ensure a visually appealing and cohesive design. Implementing the login and registration logic to provide a secure and user-friendly authentication process. Developing the user page, focusing on delivering a seamless and intuitive user experience.`,
    technologies: ["HTML", "CSS", "JS", "React/Redux"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "SmartCode",
    description: `In 2023, I worked at SmartCode, where I developed a website dedicated to yoga. This project allowed me to apply my expertise in HTML5, CSS3, and SCSS to create a visually serene and user-friendly online presence for the yoga community`,
    technologies: ["HTML5", "CSS3", "SCSS"],
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "TUMO Center for Creative Technologies",
    description: `At TUMO Center for Creative Technologies, I worked on a project where I leveraged my skills in HTML5, CSS3, and SCSS to develop a beautifully styled and fully responsive website. This project required me to focus on creating a visually appealing user interface while ensuring optimal performance across various devices.`,
    technologies: ["HTML5", "CSS3", "SCSS"],
  },
];

export const PROJECTS = [
  {
    title: "Web Messanger",
    image: project1,
    description:
      "Implementing robust login and registration logic to ensure secure user authentication. Designing and developing functionality to facilitate display and interactions with other users. Enabling users to initiate and engage in real-time conversations with others on the platform. Ensuring a smooth and responsive user experience across devices.",
    technologies: ["HTML", "CSS", "React", "Next", "MongoDB"],
  },
  {
    title: "Web Travel Agency",
    image: project2,
    description:
      "A Website for travelling",
    technologies: ["HTML", "CSS", "JS", "React/Redux"],
  },
  {
    title: "Yoga Website",
    image: project3,
    description:
      "A Website about Yoga",
    technologies: ["HTML", "CSS", "SCSS"],
  },
  {
    title: "solana",
    image: project4,
    description:
      "Solana supports experiences for power users, new consumers, and everyone in between.",
    technologies: ["HTML", "CSS", "SCSS"],
  },
];

export const CONTACT = {
  address: "Azatutyan 2, Yerevan",
  phoneNo: "+37455344410",
  email: "hayk.avagyan07@gmail.com",
};
