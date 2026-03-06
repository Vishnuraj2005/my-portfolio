import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss } from 'react-icons/si';
import '../styles/Skills.css';

const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f' },
    { name: 'React', icon: <FaReact />, color: '#61dbfb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d' },
    { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
];

const Skills = () => {
    return (
        <motion.div
            className="skills-page section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{
                                scale: 1.1,
                                rotateY: 10,
                                rotateX: -10,
                                z: 50,
                                boxShadow: `0 20px 30px -10px ${skill.color}66`
                            }}
                            style={{ borderBottom: `3px solid ${skill.color}` }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
