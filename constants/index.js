import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Primary",
    company_name: "H.M.M ENGLISH MEDIUM PRIMARY SCHOOL KUNDAPURA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Till 2014",
    points: [
      "Successfully completed primary education with a focus on fundamental subjects such as mathematics, English, science, and social studies.",
      "Developed a solid academic foundation through rigorous coursework and active participation in classroom activities, fostering critical thinking, problem-solving, and communication skills.",
      " Actively participated in various co-curricular activities, including sports, cultural events, and clubs, enhancing teamwork, leadership, and time management abilities.",
      "Received accolades and recognition for exemplary academic performance, demonstrating consistent dedication, discipline, and a strong work ethic.",
    ],
  },
  {
    title: "High School",
    company_name: "V.K.R Acharya Memorial English Medium High School Kundapura",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2014 - Mar 2017",
    points: [
      "I graduated X class on 2017 with a an outstanding academic results.",
      "X percentage-84%",
      "Achieved an impressive result of 84% in the tenth-grade examinations, showcasing strong subject knowledge, effective study habits, and consistent academic performance.",
    ],
  },
  {
    title: "Pre-University",
    company_name: "R.N.S PU College Kundapura",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2017 - Mar 2019",
    points: [
      "I graduated XII class on 2019 with an outstanding academic results",
      "XII percentage-81.33%",
      "Achieved an impressive result of 81.33% in the 2-Puc examinations, showcasing strong subject knowledge, effective study habits, and consistent academic performance.",
    ],
  },
  {
    title: "Engineering",
    company_name: "M.V.J College Of Engineering,Channasandra,Banglore",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2019 - june 2023",
    points: [
      "I got overall 8.3 cgpa in my Engineering",
      "In my engineering day i studied various programming languages and made projects",
      "Also participated in sports and i represented my class in badminton ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce Plateform",
    description:
      "The ecommerce web application I created is a user-friendly platform designed to facilitate online shopping. It offers a wide range of products from various categories, allowing customers to browse and purchase items with ease, the application provides a seamless and convenient shopping experience for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://poetic-heliotrope-409348.netlify.app/",
  },
  {
    name: "Banking Website",
    description:
      "Created a beautiful banking website with functionalities by using javascript.For styling i used css ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "Mapty",
    description:
      "Developed and launched Mapty, a web application that combines mapping functionality with a unique writing feature, allowing users to create personalized notes and annotations directly on interactive maps.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
