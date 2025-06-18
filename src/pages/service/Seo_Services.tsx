import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Seo_Services = () => {
  // Initialize expandedSections for all sections (0–4) and FAQs
  const initialExpandedSections = {};
  for (let i = 0; i <= 10; i++) {
    initialExpandedSections[i] = false;
  }
  const [expandedSections, setExpandedSections] = useState(
    initialExpandedSections
  );

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  const [heroRef, heroInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Define all sections
  const sections = [
    {
      title: "What Are Google SEO Services?",
      content: (
        <>
          Google SEO Services encompass strategies to improve your website's
          visibility on search engines, driving organic traffic and enhancing
          user experience. These services include Website Audit Reports, On-Page
          SEO, Off-Page SEO, and Technical SEO to ensure your site ranks higher.
          <br />
          At Jaikvik Technology, we provide comprehensive SEO solutions tailored
          to your business needs. Our audits identify performance gaps, while
          our SEO strategies optimize content, backlinks, and technical aspects
          to boost rankings.
          <br />
          Our approach ensures long-term success by aligning with Google's
          algorithms and best practices.
          {expandedSections[0] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              We combine keyword research, content optimization, and technical
              fixes to enhance your site's authority. Our team uses tools like
              Google Analytics and Search Console to monitor performance and
              adapt strategies for maximum ROI.
              <br />
              For example, an e-commerce site could see a 50% increase in
              organic traffic within months through our targeted SEO campaigns,
              while a local business might improve local search rankings with
              optimized Google My Business profiles.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/magnifying-glass-with-seo-concepts_1134-81.jpg",
      alt: "SEO Services Overview",
    },
    {
      title: "What Is a Website Audit Report?",
      content: (
        <>
          A Website Audit Report is a detailed analysis of your website's
          performance, identifying issues affecting SEO, usability, and speed.
          It covers:
          <br />
          <strong>Technical Issues</strong>
          <br />
          Broken links, slow loading times, and mobile responsiveness.
          <br />
          <strong>Content Gaps</strong>
          <br />
          Missing keywords, duplicate content, and thin pages.
          {expandedSections[1] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Security Concerns</strong>
              <br />
              SSL issues, outdated plugins, and vulnerable code.
              <br />
              Jaikvik Technology's audits provide actionable recommendations to
              fix issues and improve rankings. Our reports include prioritized
              tasks, such as optimizing meta tags or fixing crawl errors, to
              enhance your site's performance.
              <br />
              For instance, a client reduced bounce rates by 30% after
              implementing our audit recommendations, leading to higher
              engagement and conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/seo-website-development-data-network-concept_53876-127578.jpg",
      alt: "Website Audit Report",
      reverse: true,
      id: "website-audit",
    },
    {
      title: "On-Page SEO: Optimizing Content",
      content: (
        <>
          On-Page SEO focuses on optimizing individual web pages to rank higher.
          Key elements include:
          <br />
          <strong>Keyword Optimization:</strong> Using relevant keywords in
          titles, headers, and content.
          <br />
          <strong>Content Quality:</strong> Creating engaging, informative
          content that meets user intent.
          <br />
          <strong>Meta Tags:</strong> Crafting compelling meta titles and
          descriptions.
          {expandedSections[2] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Image Optimization:</strong> Using alt text and compressed
              images for faster load times.
              <br />
              <strong>Internal Linking:</strong> Connecting related pages to
              improve navigation and dwell time.
              <br />
              Jaikvik Technology's On-Page SEO services ensure your content is
              user-friendly and search-engine optimized. Our clients have seen
              up to a 40% increase in click-through rates after optimizing meta
              descriptions and headers.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/seo-word-written-computer_192941-1129.jpg",
      alt: "On-Page SEO",
      id: "on-page-seo",
    },
    {
      title: "Off-Page SEO: Building Authority",
      content: (
        <>
          Off-Page SEO enhances your website's authority through external
          factors:
          <br />
          <strong>Backlink Building:</strong> Acquiring high-quality backlinks
          from reputable sites.
          <br />
          <strong>Social Signals:</strong> Leveraging social media to boost
          brand visibility.
          {expandedSections[3] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Guest Posting:</strong> Publishing content on
              authoritative blogs to drive traffic.
              <br />
              <strong>Local Citations:</strong> Listing your business on
              directories like Yelp and Google My Business.
              <br />
              Jaikvik Technology's Off-Page SEO strategies focus on ethical
              link-building and brand mentions, resulting in a 25% increase in
              domain authority for clients within six months.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-63120.jpg",
      alt: "Off-Page SEO",
      reverse: true,
      id: "off-page-seo",
    },
    {
      title: "Technical SEO: Enhancing Performance",
      content: (
        <>
          Technical SEO optimizes your website's infrastructure for better
          crawling and indexing:
          <br />
          <strong>Site Speed:</strong> Reducing load times with caching and
          compression.
          <br />
          <strong>Mobile Optimization:</strong> Ensuring responsive design for
          all devices.
          <br />
          <strong>XML Sitemaps:</strong> Helping search engines navigate your
          site.
          {expandedSections[4] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Schema Markup:</strong> Adding structured data to improve
              rich snippets.
              <br />
              <strong>Security:</strong> Implementing HTTPS and fixing
              vulnerabilities.
              <br />
              Jaikvik Technology's Technical SEO services improve site
              performance, with clients reporting a 35% reduction in page load
              times and higher rankings after fixes.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-46392.jpg",
      alt: "Technical SEO",
      id: "technical-seo",
    },
  ];

  // Initialize sectionRefs for sections
  const sectionRefs = sections.map(() =>
    useInView({ threshold: 0.2, triggerOnce: true })
  );
  const contactRef = useInView({ threshold: 0.2, triggerOnce: true });

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
          backgroundImage: `url('https://img.freepik.com/free-photo/magnifying-glass-with-seo-concepts_1134-81.jpg')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="SEO Services Hero"
        id="seo-hero"
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
            Boost Your Rankings with Google SEO Services
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Optimize your website with Jaikvik Technology's SEO and Audit
            Solutions
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("seo-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore SEO Services"
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
        id="seo-overview"
      >
        <div className="mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              ref={sectionRefs[index][0]}
              id={section.id}
              className={`flex flex-col ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 items-center bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12 hover:shadow-lg hover:shadow-blue-900/20`}
              initial="hidden"
              animate={sectionRefs[index][1] ? "visible" : "hidden"}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex-1"
                variants={staggerContainer}
                initial="hidden"
                animate={sectionRefs[index][1] ? "visible" : "hidden"}
              >
                <motion.h2
                  variants={staggerItem}
                  className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  variants={staggerItem}
                  className="text-gray-300 leading-relaxed mb-4"
                >
                  {section.content}
                </motion.div>
                <motion.button
                  onClick={() => toggleSection(index)}
                  className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                  aria-label={`Toggle ${section.title}`}
                >
                  {expandedSections[index] ? "Show Less" : "Read More"}
                  <FaArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      expandedSections[index] ? "transform rotate-90" : ""
                    }`}
                  />
                </motion.button>
              </motion.div>
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ x: section.reverse ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={section.image}
                  alt={section.alt}
                  className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seo_Services;
