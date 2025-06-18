import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoustmisedSoftware = () => {
  const [expandedSections, setExpandedSections] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  const [heroRef, heroInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [section1Ref, section1InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section2Ref, section2InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section3Ref, section3InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section4Ref, section4InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-100 bg-gray-900 m-0 p-0 box-border relative z-0 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      </motion.div>

      <motion.section
        ref={heroRef}
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center z-10 overflow-hidden"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/man-hand-typing-keyboard-computer-with-software-testing-inscription-icon-vr-screen-business-modern-technology-internet-networking-concept_1296497-5284.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="Custom Software Solutions Hero"
        id="cs-hero"
      >
        <div className="absolute inset-0 bg-opacity-80 z-10"></div>
        <motion.div
          className="relative z-20 px-5 w-full max-w-7xl mx-auto"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your Business with Custom Software
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Unlock the power of tailored solutions with Jaikvik Technology
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("cs-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore Custom Software Solutions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explore Now
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaChevronDown className="ml-2" />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>

      <div
        className="w-full mx-auto px-5 py-12 md:py-16 relative z-20 bg-gray-900"
        id="cs-overview"
      >
        <div className="mx-auto">
          <motion.div
            ref={section1Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            variants={fadeIn}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                What Is Custom Software?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Custom Software refers to applications and systems developed
                specifically to meet the unique needs of a business or
                organization. Unlike off-the-shelf software, custom solutions
                are tailored to fit specific workflows, processes, and
                objectives, offering unparalleled flexibility and efficiency.
                <br />
                <br />
                Custom software acts as a digital backbone, integrating
                seamlessly with existing systems, automating complex tasks, and
                providing a platform for innovation. It can range from mobile
                apps to enterprise systems, designed to enhance productivity and
                solve industry-specific challenges.
                <br />
                <br />
                At Jaikvik Technology, our custom software solutions are built
                to empower businesses by aligning technology with their goals.
                Whether you're a startup or an enterprise, our solutions adapt
                to your requirements, ensuring scalability and performance.
                {expandedSections[0] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Our development process involves close collaboration with
                    clients to understand their needs, followed by designing,
                    building, and deploying software that drives results. From
                    streamlining operations to enhancing customer experiences,
                    custom software transforms how businesses operate in a
                    competitive digital landscape.
                    <br />
                    <br />
                    For example, a logistics company might use custom software
                    to optimize delivery routes, reducing fuel costs by 20%,
                    while a retail business could deploy a tailored e-commerce
                    platform to boost online sales by 30%. By leveraging custom
                    software, businesses can achieve operational excellence,
                    improve decision-making, and deliver exceptional value to
                    their customers.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(0)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ x: 5 }}
                aria-label="Toggle Custom Software Description"
              >
                {expandedSections[0] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[0] ? "transform rotate-90" : ""
                  }`}
                />
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://img.freepik.com/premium-photo/man-hand-typing-keyboard-computer-with-software-testing-inscription-icon-vr-screen-business-modern-technology-internet-networking-concept_1296497-5284.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="Custom Software Solutions"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section2Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                What Does Custom Software Do?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Custom software is designed to address specific business
                challenges by providing tailored functionality. Here's how it
                works:
                <br />
                <br />
                <strong className="text-blue-300">Process Optimization</strong>
                <br />
                Custom software streamlines workflows by automating repetitive
                tasks, reducing manual errors, and integrating with existing
                tools, ensuring smooth operations.
                <br />
                <strong className="text-blue-300">Data Management</strong>
                <br />
                It centralizes data, offering real-time access to critical
                information, which enables faster decision-making and improved
                business insights.
                <br />
                {expandedSections[1] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <strong className="text-blue-300">
                      Scalable Solutions
                    </strong>
                    <br />
                    Custom software grows with your business, allowing for
                    updates and new features as your needs evolve, ensuring
                    long-term relevance.
                    <br />
                    <br />
                    <strong className="text-blue-300">
                      Enhanced User Experience
                    </strong>
                    <br />
                    By focusing on user-centric design, custom software provides
                    intuitive interfaces that improve employee productivity and
                    customer satisfaction.
                    <br />
                    <br />
                    Jaikvik Technology's custom software includes features like
                    AI-driven analytics, cloud integration, and mobile
                    accessibility. For instance, a healthcare provider could use
                    our software to manage patient records securely, while a
                    manufacturing firm might deploy it to monitor production in
                    real time, reducing downtime by 15%.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(1)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                aria-label="Toggle Custom Software Functionality"
              >
                {expandedSections[1] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[1] ? "transform rotate-90" : ""
                  }`}
                />
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://img.freepik.com/premium-vector/customizable-flat-illustration-code-optimization_203633-8821.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="Custom Software Features"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section3Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Why Should Enterprises Opt for Custom Software?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Custom software offers distinct advantages over generic
                solutions:
                <br />
                <br />
                <strong className="text-blue-300">Tailored Fit:</strong> Built
                to match your specific processes, ensuring maximum efficiency
                and minimal disruption.
                <br />
                <strong className="text-blue-300">
                  Competitive Edge:
                </strong>{" "}
                Unique features give businesses an advantage by addressing niche
                requirements that off-the-shelf software can't.
                <br />
                <strong className="text-blue-300">Cost Efficiency:</strong>{" "}
                While initial costs may be higher, custom software reduces
                long-term expenses by eliminating unused features and licensing
                fees.
                <br />
                <strong className="text-blue-300">Security:</strong> Custom
                solutions can include robust, industry-specific security
                measures, protecting sensitive data.
                <br />
                {expandedSections[2] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <strong className="text-blue-300">Integration:</strong>{" "}
                    Seamlessly connects with existing systems, reducing silos
                    and improving data flow across departments.
                    <br />
                    <br />
                    <strong className="text-blue-300">
                      Core Components of Custom Software
                    </strong>
                    <br />
                    A robust custom software solution typically includes:
                    <br />
                    <strong className="text-blue-300">Custom APIs</strong>
                    <br />
                    Enable integration with third-party tools and platforms for
                    enhanced functionality.
                    <br />
                    <strong className="text-blue-300">
                      Workflow Automation
                    </strong>
                    <br />
                    Automates repetitive tasks, freeing up resources for
                    strategic initiatives.
                    <br />
                    <strong className="text-blue-300">
                      Analytics Dashboards
                    </strong>
                    <br />
                    Provide real-time insights into performance, helping
                    businesses make data-driven decisions.
                    <br />
                    <strong className="text-blue-300">User Management</strong>
                    <br />
                    Controls access and permissions, ensuring data security and
                    compliance.
                    <br />
                    <br />
                    Enterprises choosing Jaikvik Technology's custom software
                    benefit from end-to-end support, from ideation to
                    maintenance. Our solutions have helped businesses achieve up
                    to a 40% increase in operational efficiency and a 25%
                    reduction in costs, proving that custom software is a
                    strategic investment.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(2)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Custom Software Benefits"
              >
                {expandedSections[2] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[2] ? "transform rotate-90" : ""
                  }`}
                />
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ rotate: -5, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="https://img.freepik.com/premium-vector/application-programming-interface_773186-1533.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="Custom Software Benefits"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section4Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section4InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section4InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Custom Software for Different Industries
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Custom software is versatile, serving various industries with
                tailored solutions:
                <br />
                <strong className="text-blue-300">
                  1. Retail and E-commerce
                </strong>
                <br />
                ● Custom software creates personalized shopping experiences,
                optimizes inventory, and automates order processing.
                <br />
                ● E-commerce platforms use custom solutions to enhance checkout
                processes and integrate with payment gateways.
                <br />
                <strong className="text-blue-300">2. Healthcare</strong>
                <br />
                ● Manages patient records, automates appointment scheduling, and
                ensures compliance with regulations like HIPAA.
                <br />
                {expandedSections[3] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    ● Enables telemedicine platforms and integrates with medical
                    devices for real-time monitoring.
                    <br />
                    <br />
                    <strong className="text-blue-300">3. Real Estate</strong>
                    <br />
                    ● Streamlines property management, automates client
                    communications, and integrates with listing platforms.
                    <br />
                    ● Provides virtual tour capabilities and market analysis
                    tools.
                    <br />
                    <br />
                    <strong className="text-blue-300">
                      4. Nonprofit Organizations
                    </strong>
                    <br />
                    ● Manages donor databases, automates fundraising campaigns,
                    and tracks volunteer activities.
                    <br />
                    ● Enhances outreach with tailored communication tools.
                    <br />
                    <br />
                    <strong className="text-blue-300">5. Manufacturing</strong>
                    <br />
                    ● Optimizes supply chain management, monitors production in
                    real time, and automates quality control.
                    <br />
                    ● Integrates with IoT devices for predictive maintenance.
                    <br />
                    <br />
                    Jaikvik Technology's custom software delivers measurable
                    results. For example, a retail client reduced inventory
                    costs by 20% with our stock management system, while a
                    healthcare provider improved patient satisfaction by 30%
                    through automated reminders. Our solutions are designed to
                    meet the unique challenges of each industry, ensuring
                    maximum impact.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(3)}
                className="flex items-center justify-center w-full md:w-auto mx-auto text-blue-400 font-medium mt-6 px-6 py-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Toggle Custom Software Use Cases"
              >
                {expandedSections[3] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[3] ? "transform rotate-90" : ""
                  }`}
                />
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ rotate: 5, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="Custom Software Use Cases"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-gray-900 py-16 px-5 text-center relative overflow-hidden"
        style={{ y: useTransform(scrollYProgress, [0.8, 1], [0, -100]) }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our custom software solutions can streamline
            operations, enhance efficiency, and drive growth.
          </motion.p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 hover:shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get Started Today
          </motion.button>
        </div>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(56, 182, 255, 0.1) 0%, transparent 70%)",
            opacity: useTransform(scrollYProgress, [0.8, 1], [0, 0.3]),
          }}
        />
      </motion.div>
    </div>
  );
};

export default CoustmisedSoftware;
