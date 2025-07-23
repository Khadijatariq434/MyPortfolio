import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import {  FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 max-w-6xl mx-auto bg-blue-50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Email</h4>
                <a href="mailto:hello@khadeejatariq.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Khadijatariq434@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Phone</h4>
                <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +91 9389579936
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Location</h4>
                <p className="text-gray-600">Budaun, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <h4 className="font-medium text-gray-700 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a 
            href="https://github.com/Khadijatariq434"
            target='_blank'
                className="p-3 bg-white rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-100 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                 href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target='_blank' 
                className="p-3 bg-white rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-100 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                  href="https://www.instagram.com/me.khadijatariq/"
                  target='_blank' 
                className="p-3 bg-white rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-100 transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
         <form 
  action="https://formsubmit.co/khadijatariq434@gmail.com"
  method="POST"
  className="bg-white p-6 md:p-8 rounded-xl shadow-md"
>
   {/* <input type="hidden" name="_next" value="https://localhost:5173.com/#contact" />
  <input type="hidden" name="_captcha" value="false" /> */}

  <div className="mb-6">
    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
    <input 
      type="text" 
      id="name" 
      name="name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter your name"
      required
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter your email"
      required
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
    <input 
      type="text" 
      id="subject" 
      name="subject"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter subject"
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
    <textarea 
      id="message" 
      name="message"
      rows="4" 
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter your message"
      required
    ></textarea>
  </div>
  
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
  >
    <FiSend size={18} />
    Send Message
  </motion.button>
</form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;