import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Digital_Marketing = () => {
  const [expandedSections, setExpandedSections] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
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
  const [section5Ref, section5InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section6Ref, section6InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section7Ref, section7InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section8Ref, section8InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section9Ref, section9InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section10Ref, section10InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section11Ref, section11InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section12Ref, section12InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section13Ref, section13InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section14Ref, section14InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section15Ref, section15InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section16Ref, section16InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [section17Ref, section17InView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });

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
          backgroundImage: `url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="Digital Marketing Hero"
        id="smm-hero-section"
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
            Unlock the Power of Digital <br /> Marketing with Jaikvik Technology
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transform your business with expert digital marketing strategies,
            from SEO and social media to PPC and content creation, designed to
            boost visibility and conversions.
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("smm-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore Digital Marketing Solutions"
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
        id="smm-overview"
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
                Introduction to Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Digital marketing promotes businesses online using strategies
                like SEO, social media, PPC, and content creation. It offers
                real-time performance tracking and cost-effective reach,
                enabling businesses to target specific audiences and maximize
                ROI.
                <br />
                <br />
                Unlike traditional methods, it’s measurable and adaptable, ideal
                for businesses of all sizes.
                {expandedSections[0] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology helps you harness digital marketing to
                    expand brand reach, engage customers, and stay competitive
                    in the digital world.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(0)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ x: 5 }}
                aria-label="Toggle Digital Marketing Introduction"
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
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80"
                alt="Digital Marketing Overview"
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
                Evolution of Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Digital marketing began in the ‘90s with email campaigns,
                evolving into SEO and PPC in the 2000s with Google’s rise.
                Social media platforms like Facebook and YouTube introduced
                interactive ads, followed by mobile marketing. Today, AI,
                automation, and analytics drive personalized strategies.
                <br />
                <br />
                It’s a dynamic field reflecting technological advancements.
                {expandedSections[1] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology leverages these innovations to craft
                    cutting-edge campaigns tailored to your business needs.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(1)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                aria-label="Toggle Evolution of Digital Marketing"
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
                src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Evolution of Digital Marketing"
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
                Significance of Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Digital marketing matters:
                <br />• <strong>Wider Reach:</strong> Connects globally via
                social media, search engines.
                <br />• <strong>Cost-Effective:</strong> Budget-friendly with
                high ROI compared to traditional ads.
                <br />• <strong>Targeted Ads:</strong> Reaches specific
                demographics via ads.
                <br />• <strong>Measurable Results:</strong> Provides real-time
                campaign insights.
                <br />
                It levels the playing field.
                {expandedSections[2] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology ensures your business thrives in the
                    digital-first world with strategic campaigns.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(2)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Significance of Digital Marketing"
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
                src="https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Significance of Digital Marketing"
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
                Basics of Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Digital marketing uses online channels like websites, search
                engines, and social media to promote products. It differs from
                traditional marketing with interactive, targeted, and measurable
                campaigns, fostering two-way communication with customers.
                <br />
                <br />
                Key elements include creativity and data-driven strategies.
                {expandedSections[3] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology guides you through these basics to build
                    effective, engaging campaigns.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(3)}
                className="flex items-center justify-center w-full md:w-auto mx-auto text-blue-400 font-medium mt-6 px-6 py-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Toggle Basics of Digital Marketing"
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
                src="https://img.freepik.com/premium-vector/rocket-boosting-digital-marketing-social-media-with-smartphone_112255-1435.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Basics of Digital Marketing"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section5Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section5InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section5InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Key Components of Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Core components include:
                <br />• <strong>Content Marketing:</strong> Creates valuable
                content to attract audiences.
                <br />• <strong>SEO:</strong> Optimizes websites for search
                rankings.
                <br />• <strong>SMM:</strong> Engages via social platforms.
                <br />• <strong>PPC:</strong> Drives targeted traffic through
                paid ads.
                <br />• <strong>Email Marketing:</strong> Nurtures leads with
                personalized campaigns.
                {expandedSections[4] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology integrates these tools for cohesive
                    marketing success.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(4)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Components of Digital Marketing"
              >
                {expandedSections[4] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[4] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Components of Digital Marketing"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section6Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section6InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section6InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                LinkedIn Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                LinkedIn is a B2B powerhouse with 950M+ users, ideal for
                reaching professionals, generating leads, and establishing
                thought leadership. Use optimized profiles, consistent posts,
                and LinkedIn Ads for impact.
                <br />
                <br />
                It’s perfect for networking and credibility.
                {expandedSections[5] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology maximizes LinkedIn’s potential to connect
                    your brand with decision-makers.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(5)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle LinkedIn Marketing"
              >
                {expandedSections[5] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[5] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-vector/flat-design-linkedin-mockup_23-2149217511.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="LinkedIn Marketing"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section7Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section7InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section7InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Benefits of Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Benefits include:
                <br />
                1. <strong>Cost-Effectiveness:</strong> Affordable compared to
                traditional ads.
                <br />
                2. <strong>Global Reach:</strong> Connects with audiences
                worldwide.
                <br />
                3. <strong>Targeted Marketing:</strong> Reaches specific
                demographics.
                <br />
                4. <strong>Measurable Results:</strong> Tracks performance in
                real-time.
                <br />
                5. <strong>Engagement:</strong> Builds customer relationships.
                {expandedSections[6] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology leverages these advantages for scalable
                    business growth.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(6)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Benefits of Digital Marketing"
              >
                {expandedSections[6] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[6] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-photo/man-suit-standing-office-with-clipboard-pointing-poster-with-words_1098-17121.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Benefits of Digital Marketing"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section8Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section8InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section8InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Digital Marketing Trends
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Current trends:
                <br />• <strong>Personalization:</strong> Tailored content via
                AI.
                <br />• <strong>Voice Search:</strong> Optimizing for
                conversational queries.
                <br />• <strong>Social Commerce:</strong> In-app purchases on
                platforms.
                <br />• <strong>Privacy-Centric:</strong> Ethical data
                practices.
                <br />
                These shape modern strategies.
                {expandedSections[7] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology keeps your campaigns ahead with these
                    trends.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(7)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Digital Marketing Trends"
              >
                {expandedSections[7] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[7] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-photo/creative-monitor-tech-digitally-generated-desk_1134-719.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Digital Marketing Trends"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section9Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section9InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section9InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Strategies for Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Effective strategies:
                <br />
                1. <strong>Define Audience:</strong> Use personas and
                segmentation.
                <br />
                2. <strong>Set Goals:</strong> Align SMART objectives with KPIs.
                <br />
                3. <strong>Create Content:</strong> Plan valuable, SEO-optimized
                content.
                <br />
                4. <strong>Multi-Channel:</strong> Use diverse platforms for
                reach.
                {expandedSections[8] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology crafts strategic campaigns for maximum
                    impact.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(8)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Digital Marketing Strategies"
              >
                {expandedSections[8] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[8] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-photo/creative-monitor-tech-digitally-generated-desk_1134-719.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Digital Marketing Strategies"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section10Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section10InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section10InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                SEO Techniques
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                SEO essentials:
                <br />• <strong>Keyword Research:</strong> Target high-value,
                long-tail keywords.
                <br />• <strong>On-Page:</strong> Optimize titles, meta tags,
                content.
                <br />• <strong>Off-Page:</strong> Build quality backlinks.
                <br />• <strong>Mobile-First:</strong> Ensure responsive design.
                {expandedSections[9] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology boosts your search rankings with proven
                    SEO methods.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(9)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle SEO Techniques"
              >
                {expandedSections[9] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[9] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-vector/female-multitasking-work_23-2148390868.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="SEO Techniques"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section11Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section11InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section11InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Social Media Marketing Strategies
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                SMM tips:
                <br />• <strong>Choose Platforms:</strong> Target where your
                audience is active.
                <br />• <strong>Brand Voice:</strong> Maintain consistency.
                <br />• <strong>Paid vs. Organic:</strong> Balance for reach and
                loyalty.
                <br />• <strong>Trends:</strong> Use AR, live streaming,
                short-form videos.
                {expandedSections[10] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology drives engagement with strategic SMM.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(10)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle SMM Strategies"
              >
                {expandedSections[10] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[10] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/premium-vector/social-media-marketing_773186-810.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="SMM Strategies"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section12Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section12InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section12InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                SEO vs. SMM Balance
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                SEO drives organic traffic; SMM offers instant engagement.
                Combine them by:
                <br />
                • Sharing SEO content on social platforms.
                <br />
                • Using social trends for keyword ideas.
                <br />
                Prioritize based on goals.
                {expandedSections[11] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology optimizes both for a balanced strategy.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(11)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle SEO vs. SMM"
              >
                {expandedSections[11] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[11] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/premium-vector/social-media-marketing_773186-810.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="SEO vs. SMM"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section13Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section13InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section13InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Role of Data and Analytics
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Data drives decisions with:
                <br />• <strong>Tools:</strong> Google Analytics, SEMrush.
                <br />• <strong>Metrics:</strong> Traffic, engagement,
                conversions, ROI.
                <br />• <strong>Benefits:</strong> Optimizes campaigns, predicts
                trends.
                {expandedSections[12] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology uses analytics for data-driven success.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(12)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Data and Analytics"
              >
                {expandedSections[12] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[12] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-photo/business-achievement-improvement-success-result.jpg?uid=R186472209&ga=GA1.2.455755710.1738954285&semt=ais_image_boost&w=740"
                alt="Data and Analytics"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section14Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section14InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section14InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Digital Marketing Challenges
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Challenges include:
                <br />• <strong>Competition:</strong> Saturated digital spaces.
                <br />• <strong>Ad Fatigue:</strong> Declining engagement.
                <br />• <strong>Privacy:</strong> GDPR, CCPA compliance.
                <br />• <strong>Algorithm Changes:</strong> Impact visibility.
                {expandedSections[13] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology navigates these challenges with
                    innovative solutions.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(13)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Challenges"
              >
                {expandedSections[13] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[13] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/premium-photo/creative-idea-png-sticker-mixed-media-transparent-background_53876-1038065.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Digital Marketing Challenges"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section15Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section15InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section15InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Future of Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Future trends:
                <br />• <strong>AR/VR:</strong> Immersive experiences.
                <br />• <strong>Blockchain:</strong> Transparent ad systems.
                <br />• <strong>AI/ML:</strong> Personalized campaigns.
                <br />• <strong>Sustainability:</strong> Ethical marketing.
                {expandedSections[14] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology prepares your brand for these
                    innovations.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(14)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Future Trends"
              >
                {expandedSections[14] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[14] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-vector/marketing-conversion-flat-background_23-2148002911.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Future Trends"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section16Ref}
            className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0 }}
            animate={section16InView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section16InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Actionable Tips for Beginners
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Start with:
                <br />• <strong>Free Tools:</strong> Canva, Google Analytics,
                Mailchimp.
                <br />• <strong>Learning:</strong> Google Digital Garage,
                HubSpot Academy.
                <br />• <strong>Practice:</strong> Small projects, experiments.
                <br />• <strong>Routine:</strong> Consistent learning schedule.
                {expandedSections[15] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology supports beginners with tailored
                    guidance.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(15)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Beginner Tips"
              >
                {expandedSections[15] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[15] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/free-vector/marketing-conversion-flat-background_23-2148002911.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Beginner Tips"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={section17Ref}
            className="flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={section17InView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate={section17InView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={staggerItem}
                className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              >
                Embrace Digital Marketing
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                Digital marketing offers endless opportunities for growth. Stay
                updated, use free tools, keep learning, and experiment to
                succeed. Start today to transform your business.
                <br />
                <br />
                Connect with us to explore more!
                {expandedSections[16] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    Jaikvik Technology is your partner in navigating this
                    dynamic field for lasting success.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(16)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Conclusion"
              >
                {expandedSections[16] ? "Show Less" : "Read More"}
                <FaArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    expandedSections[16] ? "transform rotate-90" : ""
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
                src="https://img.freepik.com/premium-vector/digital-marketing-illustration_112255-2905.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_items_boosted&w=740"
                alt="Conclusion"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={faqRef}
            className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20"
            initial={{ opacity: 0, y: 50 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring" }}
          >
            <motion.h2
              variants={staggerItem}
              className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
            >
              FAQs About Digital Marketing
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              {[
                {
                  question: "What is digital marketing?",
                  answer:
                    "Digital marketing uses online channels like search engines, social media, email, and websites to promote products or services, leveraging strategies like SEO, PPC, and content marketing.",
                },
                {
                  question:
                    "Why is digital marketing important for businesses?",
                  answer:
                    "It offers global reach, cost-efficiency, targeted ads, measurable results, and enhanced brand visibility, making it essential for growth and competitiveness.",
                },
                {
                  question:
                    "Which industries benefit most from digital marketing?",
                  answer:
                    "E-commerce, healthcare, education, travel, real estate, and technology sectors gain significantly due to targeted reach and online consumer behavior.",
                },
                {
                  question: "What skills are needed for digital marketing?",
                  answer:
                    "Key skills include SEO, analytics, copywriting, social media management, email marketing, basic design, and adaptability to new trends.",
                },
                {
                  question: "How does digital marketing benefit professionals?",
                  answer:
                    "It enhances skills, supports entrepreneurship, boosts networking, and meets high industry demand across various fields.",
                },
                {
                  question: "What is the future of digital marketing?",
                  answer:
                    "Trends include AI-driven personalization, voice search optimization, video marketing, influencer strategies, and sustainable marketing practices.",
                },
                {
                  question: "How can I start learning digital marketing?",
                  answer:
                    "Take online courses (Coursera, HubSpot), earn certifications (Google Ads, Facebook Blueprint), practice with projects, and follow industry blogs.",
                },
                {
                  question: "How is ROI measured in digital marketing?",
                  answer:
                    "Track conversion rates, cost-per-lead, customer lifetime value, website traffic, engagement, and revenue vs. ad spend.",
                },
                {
                  question: "What tools are essential for digital marketing?",
                  answer:
                    "Use Google Analytics, SEMrush, Canva, Mailchimp, and Hootsuite for analytics, content creation, and campaign management.",
                },
                {
                  question:
                    "Why choose Jaikvik Technology for digital marketing?",
                  answer:
                    "Jaikvik Technology offers expert strategies, data-driven campaigns, and tailored solutions to drive your business’s digital success.",
                },
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  variants={staggerItem}
                  className="border-b border-gray-700 py-4"
                >
                  <summary className="text-lg font-medium text-gray-100 cursor-pointer hover:text-blue-400 transition-colors duration-300">
                    {faq.question}
                  </summary>
                  <p className="text-gray-300 mt-2">{faq.answer}</p>
                </motion.details>
              ))}
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
            Ready to Transform Your Business with Digital Marketing?
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our expert strategies can boost your visibility, engage
            your audience, and drive conversions.
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

export default Digital_Marketing;
