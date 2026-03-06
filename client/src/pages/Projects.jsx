import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive admin dashboard for managing products, orders, and users. Includes chart visualizations and data tables.',
        tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        github: 'https://github.com',
        live: 'https://example.com',
        image: 'https://via.placeholder.com/400x250/1e293b/38bdf8?text=E-Commerce'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task manager with drag-and-drop functionality, user authentication, and real-time updates.',
        tech: ['React', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com',
        live: 'https://example.com',
        image: 'https://via.placeholder.com/400x250/1e293b/38bdf8?text=Task+Manager'
    },
    {
        title: 'Weather Forecast',
        description: 'A clean and responsive weather application fetching real-time data from OpenWeatherMap API with location detection.',
        tech: ['JavaScript', 'HTML/CSS', 'API'],
        github: 'https://github.com',
        live: 'https://example.com',
        image: 'https://via.placeholder.com/400x250/1e293b/38bdf8?text=Weather+App'
    },
    {
        title: 'Portfolio V1',
        description: 'My first portfolio website built with vanilla HTML, CSS and JavaScript. Showcasing my early progress.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com',
        live: 'https://example.com',
        image: 'https://via.placeholder.com/400x250/1e293b/38bdf8?text=Portfolio'
    }
];

const Projects = () => {
    return (
        <motion.div
            className="projects-page section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
