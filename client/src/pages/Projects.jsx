import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
    {
        title: 'APJ Furniture Site',
        description: 'A modern furniture e-commerce landing page featuring product showcases, interior design categories, and a sleek responsive layout.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Vishnuraj2005/APJ-Furniture-Site',
        live: 'https://vishnuraj2005.github.io/APJ-Furniture-Site/',
        image: '/images/apj-furniture.png'
    },
    {
        title: 'Makaan - Real Estate',
        description: 'A full-featured real estate web application built with React and Bootstrap, offering property listings, search functionality, and a modern UI.',
        tech: ['React', 'Bootstrap', 'CSS', 'JavaScript'],
        github: 'https://github.com/Vishnuraj2005/Makaan',
        live: 'https://vishnuraj2005.github.io/Makaan/',
        image: '/images/makaan.png'
    },
    {
        title: 'Blockchain Landing Page',
        description: 'A visually striking blockchain & crypto landing page with sections for NFTs, staking, DAO, launchpad, and seed funding.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Vishnuraj2005/Blockchain-Landing-page',
        live: 'https://vishnuraj2005.github.io/Blockchain-Landing-page/',
        image: '/images/blockchain.png'
    },
    {
        title: 'Fonicy Construction Site',
        description: 'A professional construction company website featuring services, project showcases, testimonials, and a contact section with clean animations.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Vishnuraj2005/Fonicy-Construction-site',
        live: 'https://vishnuraj2005.github.io/Fonicy-Construction-site/',
        image: '/images/fonicy-construction.png'
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
