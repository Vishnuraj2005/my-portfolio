import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import profileImg from '../assets/images/profileImg.png';
import '../styles/Home.css';

const Home = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
            .fromTo(".hero-text-item",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
                "-=0.5"
            );
    }, []);

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="hero-section" ref={heroRef}>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h2 className="hero-subtitle hero-text-item">Hello, I'm</h2>
                        <h1 className="hero-title hero-text-item">Vishnu Raj</h1>
                        <h3 className="hero-role hero-text-item">Full Stack Web Developer</h3>
                        <p className="hero-desc hero-text-item">
                            Passionate about building seamless web experiences with modern technologies.
                            Turning ideas into reality through clean code and creative design.
                        </p>
                        <div className="hero-btns hero-text-item">
                            <Link to="/projects" className="btn btn-primary">View Work</Link>
                            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-img-container">
                            <div className="circle-bg"></div>
                            <img src={profileImg} alt="Vishnu Raj" className="hero-img" />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
