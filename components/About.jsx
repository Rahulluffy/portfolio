import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

//tilt
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
//

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a ReactJS developer, I possess a deep understanding of the React
        library and its core principles. I am skilled in building interactive
        user interfaces and crafting seamless user experiences. With expertise
        in front-end web development, I have a solid grasp of HTML, CSS, and
        JavaScript, which enables me to create dynamic and responsive
        applications. I am experienced in developing single-page applications
        (SPAs) using React Router for efficient routing and navigation. I excel
        at component-based development, employing reusable and modular
        components to enhance code maintainability and scalability. Through the
        use of React hooks, I am proficient in managing state and side effects,
        ensuring optimal performance and seamless data flow within the
        application. I am well-versed in leveraging external APIs and
        integrating them seamlessly into React applications using tools like
        Axios or the built-in fetch API. Additionally, I have hands-on
        experience with state management libraries such as Redux , enabling me
        to efficiently manage complex application states.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
