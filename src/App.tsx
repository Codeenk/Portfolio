import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Phone } from 'lucide-react';
import Contact from './Contact';
import mcdonaldsImage from "./assets/McD_Mockup.png";
import contentForgeImage from "./assets/content_forge_ai.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Sarvesh Malandkar
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
            Web Developer & UI/UX Designer
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a 
              href="https://github.com/Codeenk"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/Sarvesh213" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:malandkar.sarvesh1@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Mail size={24} />
            </motion.a>
          </div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </header>

      {/* Summary Section */}
      <AnimatePresence>
        <motion.section 
          className="py-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
              viewport={{ once: false }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed"
              variants={fadeInUp}
            >
              Passionate Full-Stack Web Developer and UI/UX Designer skilled in building intuitive, responsive web applications using React.js, TypeScript, Node.js, and MySQL. Experienced in designing user-friendly interfaces with Figma and implementing scalable backends with RESTful APIs. Currently pursuing a Bachelor's degree in Information Technology at Atharva College of Engineering, with an expected graduation in 2027.
            </motion.p>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Experience Section */}
      <AnimatePresence>
        <motion.section 
          className="py-20 bg-gray-800/50"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
              viewport={{ once: false }}
            >
              Experience & Education
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-gray-700/50 p-8 rounded-xl"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-4">Previous Roles</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-blue-400">Webmaster Volunteer</h4>
                  <p className="text-gray-300">IEEE Techithon College Fest</p>
                  <p className="text-gray-400 mt-2">Managing and maintaining the official website for IEEE Techithon, implementing responsive design principles and ensuring optimal user experience.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">Digital Creative Volunteer</h4>
                  <p className="text-gray-300">Rhythm Ember 2024, College Fest</p>
                  <p className="text-gray-400 mt-2">Creating digital assets and maintaining web presence for the college's annual cultural festival.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-700/50 p-8 rounded-xl"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-blue-400">Bachelor of Engineering in Information Technology</h4>
                  <p className="text-gray-300">Atharva College of Engineering, Malad</p>
                  <p className="text-gray-400">Expected Graduation: 2027</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">Certifications</h4>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>AWS APAC Solutions Architecture Virtual Experience</li>
                    <li>UI/UX Design (Figma, Adobe XD)</li>
                    <li>Advanced Web Development</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Projects Section */}
      <AnimatePresence>
        <motion.section 
          className="py-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
              viewport={{ once: false }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="McDonald's HomePage Redesign"
                description="A fresh, modern redesign of the McDonald's homepage with improved navigation, UI/UX enhancements, and a Desktop-first approach."
                image={mcdonaldsImage}
                link="https://www.figma.com/proto/ZU07y5MjWMnrSnKjiMmxPa/Untitled?node-id=0-1&p=f&t=5oVdv5LluJSAB41y-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=46%3A4&show-proto-sidebar=1"
                delay={0.2}
                className="h-150"
              />
              <ProjectCard 
                title="BillBuddy"
                description="A Java-powered smart expense manager that simplifies bill splitting, group expense tracking, and settlements effortlessly."
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800"
                link="#"
                delay={0.4}
              />
              <ProjectCard 
                title="Content Forge AI"
                description="AI-powered tools for effortless content creation, helping you craft engaging copy, blogs, and social media posts with ease"
                image={contentForgeImage}
                link="https://project1212.vercel.app/"
                delay={0.6}
                className="h-150"
              />
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Skills Section */}
      <AnimatePresence>
        <motion.section 
          className="py-20 bg-gray-800/50"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
              viewport={{ once: false }}
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard 
                title="Front-End Development"
                skills={['React.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']}
                delay={0.2}
              />
              <SkillCard 
                title="Back-End Development"
                skills={['Node.js', 'Authentication', 'MySQL', 'RESTful APIs']}
                delay={0.4}
              />
              <SkillCard 
                title="UI/UX Design"
                skills={['Figma', 'Canva', 'Wireframing', 'Prototyping']}
                delay={0.6}
              />
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Sarvesh Malandkar. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, image, link, delay, className }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className={`bg-gray-700/50 rounded-xl overflow-hidden ${className}`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
}

function SkillCard({ title, skills, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay }}
      className="bg-gray-700/50 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-gray-300"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default App;