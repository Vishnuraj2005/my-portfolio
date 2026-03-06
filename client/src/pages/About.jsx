import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.div
            className="about-page section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container about-container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className="about-text" variants={itemVariants}>
                        <h3>Who I am</h3>
                        <p>
                            I am a motivated <strong>Fresher Full Stack Web Developer</strong> with a strong foundation in the MERN stack.
                            My journey into web development started with a curiosity for how websites work, which quickly turned into a passion for building them myself.
                        </p>
                        <p>
                            I enjoy solving complex problems and creating intuitive, user-friendly interfaces.
                            Currently, I am focused on mastering React and Node.js to build scalable web applications.
                        </p>
                    </motion.div>

                    <motion.div className="about-goal" variants={itemVariants}>
                        <h3>My Goal</h3>
                        <p>
                            As a fresher, my goal is to join a dynamic team where I can contribute my skills, learn from experienced developers,
                            and grow into a proficient Full Stack Developer. I am eager to tackle real-world challenges and deliver high-quality solutions.
                        </p>
                    </motion.div>

                    <motion.div className="about-tech-summary" variants={itemVariants}>
                        <h3>Technological Reach</h3>
                        <p>
                            I have hands-on experience with modern web technologies including <strong>HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</strong>.
                            I am also familiar with MySQL and constantly learning new tools to stay updated with industry trends.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
