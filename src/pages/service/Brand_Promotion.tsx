import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Brand_Promotion = () => {
  // Initialize expandedSections for all sections (0–3) and FAQs
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
      title: "What Is Brand Promotion?",
      content: (
        <>
          Brand promotion encompasses strategies and tactics designed to
          increase brand awareness, enhance brand perception, and drive customer
          loyalty. It integrates creative campaigns, digital marketing, and
          data-driven insights to position a brand effectively in the market.
          <br />
          Brand promotion goes beyond advertising—it's about crafting a
          compelling narrative that resonates with your audience. This involves
          storytelling, consistent messaging across channels, and engaging with
          customers through social media, content marketing, and influencer
          partnerships.
          <br />
          At Jaikvik Technology, our brand promotion solutions leverage advanced
          analytics and creative tools to ensure your brand stands out. From
          startups to established enterprises, we tailor strategies to amplify
          your brand's voice and connect with your target audience.
          {expandedSections[0] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Our approach combines SEO, social media campaigns, and targeted
              advertising to maximize reach and engagement. We focus on building
              emotional connections with customers, fostering trust, and
              creating memorable experiences that drive long-term loyalty.
              <br />
              Effective brand promotion also involves monitoring brand sentiment
              and adapting strategies based on real-time feedback. By analyzing
              customer interactions, we help businesses refine their messaging
              and optimize campaigns for better ROI. For example, a retail brand
              might use our solutions to increase online engagement by 40%
              through personalized social media content, while a B2B company
              could enhance its industry reputation with thought leadership
              articles.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/diverse-people-thinking-planning-marketing-brand-concept_53876-64952.jpg",
      alt: "Brand Promotion Solutions",
    },
    {
      title: "What Does Brand Promotion Do?",
      content: (
        <>
          Brand promotion is designed to build and sustain a strong brand
          identity. Here's how it works:
          <br />
          <strong>Enhancing Brand Visibility</strong>
          <br />
          Through targeted campaigns, brand promotion ensures your brand reaches
          the right audience via social media, search engines, and traditional
          media. This increases recognition and recall.
          <br />
          <strong>Building Customer Trust</strong>
          <br />
          Consistent messaging and authentic storytelling foster trust, making
          customers more likely to choose your brand over competitors.
          {expandedSections[1] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Driving Engagement</strong>
              <br />
              Interactive campaigns, such as social media contests or influencer
              collaborations, encourage customers to engage with your brand,
              boosting loyalty and advocacy.
              <br />
              <strong>Optimizing Marketing ROI</strong>
              <br />
              By leveraging data analytics, brand promotion ensures campaigns
              are cost-effective, targeting high-value audiences with precision.
              <br />
              Jaikvik Technology's solutions include AI-driven insights to
              predict campaign performance, cross-platform integration for
              seamless messaging, and real-time analytics to track engagement.
              Whether you're launching a new product or rebranding, our tools
              help you achieve measurable results.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-vector/businesspeople-develop-marketing-brand-strategy_81534-2982.jpg",
      alt: "Brand Promotion Strategies",
      reverse: true,
    },
    {
      title: "Why Should Businesses Invest in Brand Promotion?",
      content: (
        <>
          Brand promotion offers numerous benefits for businesses aiming to
          grow:
          <br />
          <strong>Increased Brand Awareness:</strong> Effective campaigns ensure
          your brand is top-of-mind for consumers.
          <br />
          <strong>Improved Customer Loyalty:</strong> Engaging content and
          personalized experiences foster long-term relationships.
          <br />
          <strong>Competitive Advantage:</strong> A strong brand identity
          differentiates you in crowded markets.
          <br />
          <strong>Measurable Results:</strong> Data-driven strategies provide
          insights into campaign performance, enabling continuous improvement.
          {expandedSections[2] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Cost Efficiency:</strong> Targeted campaigns reduce wasted
              ad spend, maximizing ROI.
              <br />
              <strong>Key Components of Brand Promotion</strong>
              <br />
              <strong>Social Media Marketing:</strong> Engaging audiences on
              platforms like Instagram and LinkedIn.
              <br />
              <strong>Content Creation:</strong> Producing blogs, videos, and
              infographics to tell your brand's story.
              <br />
              <strong>SEO Optimization:</strong> Improving search engine
              rankings to drive organic traffic.
              <br />
              <strong>Influencer Partnerships:</strong> Collaborating with
              influencers to expand reach.
              <br />
              <strong>Analytics and Reporting:</strong> Tracking campaign
              performance to refine strategies.
              <br />
              Businesses using Jaikvik Technology's solutions can see up to a
              200% increase in brand engagement and a 25% boost in customer
              retention. Our secure platforms, 24/7 support, and regular updates
              ensure your brand stays ahead of trends.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/influencer-marketing-job-concept_23-2150410537.jpg",
      alt: "Brand Promotion Benefits",
    },
    {
      title: "Brand Promotion Across Industries",
      content: (
        <>
          Brand promotion adapts to the unique needs of various industries:
          <br />
          <strong>1. Retail and E-commerce</strong>
          <br />
          ● Social media campaigns and personalized ads drive online sales and
          customer loyalty.
          <br />
          ● Influencer collaborations showcase products to targeted audiences.
          <br />
          <strong>2. Healthcare</strong>
          <br />● Educational content and community engagement build trust in
          healthcare providers.
          {expandedSections[3] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              ● Email campaigns promote wellness programs and patient services.
              <br />
              <strong>3. Real Estate</strong>
              <br />
              ● Virtual tours and targeted ads highlight property listings.
              <br />
              ● SEO strategies improve visibility for real estate agencies.
              <br />
              <strong>4. Nonprofits</strong>
              <br />
              ● Storytelling campaigns inspire donations and volunteer
              engagement.
              <br />
              ● Social media amplifies mission-driven messages.
              <br />
              <strong>5. B2B Enterprises</strong>
              <br />
              ● Thought leadership content establishes industry authority.
              <br />
              ● LinkedIn campaigns generate high-value leads.
              <br />
              <strong>6. Education</strong>
              <br />
              ● Digital ads promote courses and attract students.
              <br />
              ● Alumni engagement campaigns strengthen community ties.
              <br />
              <strong>7. Hospitality</strong>
              <br />
              ● Social media showcases guest experiences and promotions.
              <br />
              ● Review management enhances brand reputation.
              <br />
              Jaikvik Technology's solutions deliver results like a 30% increase
              in social media engagement for retailers or a 20% boost in lead
              generation for B2B firms. Our tools are scalable, making them
              ideal for businesses of all sizes.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/sales-branding-with-marketing-strategy-concepts-with-taxt-paper-worker-hand-work-management_254791-2032.jpg",
      alt: "Brand Promotion Use Cases",
      reverse: true,
    },
  ];

  // Initialize sectionRefs for sections
  const sectionRefs = sections.map(() =>
    useInView({ threshold: 0.2, triggerOnce: true })
  );
  const integrationRef = useInView({ threshold: 0.2, triggerOnce: true });
  const statsRef = useInView({ threshold: 0.2, triggerOnce: true });
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
          backgroundImage: `url('https://img.freepik.com/free-photo/diverse-people-thinking-planning-marketing-brand-concept_53876-64952.jpg')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="Brand Promotion Hero"
        id="brand-hero"
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
            Elevate Your Brand with Strategic Promotion
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Amplify your presence with Jaikvik Technology's Brand Promotion
            Solutions
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("brand-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore Brand Promotion Solutions"
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
        id="brand-overview"
      >
        <div className="mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              ref={sectionRefs[index][0]}
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

export default Brand_Promotion;
