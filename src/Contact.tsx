import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, ArrowLeft } from 'lucide-react';

function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          className="max-w-2xl mx-auto"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-12"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <motion.h1 
            variants={fadeIn}
            className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Get in Touch
          </motion.h1>

          <div className="space-y-8">
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl flex items-center"
            >
              <Mail className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a 
                  href="mailto:malandkar.sarvesh1@gmail.com" 
                  className="text-gray-300 hover:text-white"
                >
                  malandkar.sarvesh1@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 p-6 rounded-xl flex items-center"
            >
              <Phone className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a 
                  href="tel:+917045784283" 
                  className="text-gray-300 hover:text-white"
                >
                  +91 7045784283
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-xl flex items-center"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/Sarvesh213" 
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  linkedin.com/in/Sarvesh213
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 p-6 rounded-xl flex items-center"
            >
              <Github className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <a 
                  href="https://github.com/Codeenk" 
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  https://github.com/Codeenk
                </a>
              </div>
            </motion.div>
          </div>

          <motion.p 
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="mt-12 text-gray-300 text-center"
          >
            I'm always excited to connect with fellow developers and potential collaborators. 
            Feel free to reach out through any of the channels above!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;