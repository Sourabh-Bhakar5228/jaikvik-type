import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Film_Production = () => {
  // Initialize expandedSections for all sections (0-8)
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
      title: "What Is Film Production?",
      content: (
        <>
          Film production involves the creation of high-quality visual content,
          including corporate videos, product explainers, TV commercials,
          YouTube ads, photoshoots, model shoots, and interviews. It combines
          creative storytelling, advanced technology, and professional expertise
          to deliver compelling narratives that resonate with audiences.
          <br />
          At Jaikvik Technology, we provide end-to-end film production services,
          from concept development to post-production. Our team uses
          state-of-the-art equipment and editing software to ensure your content
          stands out in a crowded digital landscape.
          <br />
          Whether you're launching a product, building a corporate brand, or
          creating engaging ads, our solutions are tailored to meet your needs.
          {expandedSections[0] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Our process includes scriptwriting, storyboarding, filming,
              editing, and distribution, ensuring a seamless experience. We
              focus on creating emotionally engaging content that drives
              audience interaction and achieves your business goals.
              <br />
              For example, a retail brand might use our product explainer videos
              to boost online sales by 30%, while a corporate client could
              enhance their reputation with a professionally crafted
              presentation video. Our analytics tools also help track viewer
              engagement to optimize future projects.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/close-up-camera_1048944-3803309.jpg",
      alt: "Film Production Services",
    },
    {
      title: "Corporate Video Presentation",
      content: (
        <>
          Corporate video presentations are powerful tools for communicating
          your brand's story, values, and services. They are ideal for investor
          pitches, employee training, or showcasing company milestones.
          <br />
          <strong>Professional Quality</strong>
          <br />
          High-definition visuals and clear audio ensure a polished,
          professional look.
          <br />
          <strong>Custom Storytelling</strong>
          <br />
          Tailored scripts highlight your brand's unique strengths and goals.
          {expandedSections[1] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Wide Applications</strong>
              <br />
              Use corporate videos for internal communications, client pitches,
              or marketing campaigns.
              <br />
              Jaikvik Technology's corporate video services include on-site
              filming, voiceovers, and motion graphics to create engaging
              content. Our clients have reported a 25% increase in stakeholder
              engagement after using our videos in presentations.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/arrangement-cinema-elements-blue-background-with-copy-space_23-2148416775.jpg",
      alt: "Corporate Video Presentation",
      reverse: true,
      id: "corporate-video",
    },
    {
      title: "Product Explainer Videos",
      content: (
        <>
          Product explainer videos simplify complex products or services, making
          them easy for customers to understand. They are perfect for
          e-commerce, SaaS, or tech startups.
          <br />
          <strong>Clear Messaging</strong>
          <br />
          Concise scripts and visuals highlight key features and benefits.
          <br />
          <strong>Engaging Formats</strong>
          <br />
          Animated or live-action videos capture audience attention.
          {expandedSections[2] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Increased Conversions</strong>
              <br />
              Explainer videos can boost conversion rates by up to 20% by
              addressing customer pain points.
              <br />
              Our team at Jaikvik Technology creates explainer videos that align
              with your brand identity, using 2D/3D animation or live footage.
              We also optimize videos for platforms like YouTube and social
              media to maximize reach.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/video-production-backstage-scenes-creating-video-content-professional-team_124865-39894.jpg",
      alt: "Product Explainer Videos",
      id: "product-explainer",
    },
    {
      title: "TV Commercial Ads",
      content: (
        <>
          TV commercial ads deliver high-impact messages to a broad audience,
          ideal for brand launches or product promotions.
          <br />
          <strong>Broadcast Quality</strong>
          <br />
          Shot with professional cameras and edited for TV standards.
          <br />
          <strong>Creative Concepts</strong>
          <br />
          Memorable storylines that resonate with viewers.
          {expandedSections[3] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Wide Reach</strong>
              <br />
              Commercials can be adapted for regional or national broadcasts.
              <br />
              Jaikvik Technology handles everything from casting to
              post-production, ensuring your ad meets industry standards. Our TV
              ads have helped clients achieve a 15% increase in brand recall.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/press-reporter-fallowing-leads-case_23-2149579746.jpg",
      alt: "TV Commercial Ads",
      reverse: true,
      id: "tv-commercial",
    },
    {
      title: "YouTube Ads",
      content: (
        <>
          YouTube ads are a cost-effective way to reach targeted audiences on
          the world's largest video platform.
          <br />
          <strong>Targeted Campaigns</strong>
          <br />
          Precise audience targeting based on demographics and interests.
          <br />
          <strong>Engaging Formats</strong>
          <br />
          Skippable, non-skippable, or bumper ads tailored to your goals.
          {expandedSections[4] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>High ROI</strong>
              <br />
              Optimized ads can achieve up to 10% higher click-through rates.
              <br />
              Our team creates YouTube ads with compelling visuals and
              calls-to-action, optimized for mobile and desktop. We also provide
              analytics to track ad performance and refine strategies.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/man-filming-with-professional-camera_23-2149066342.jpg",
      alt: "YouTube Ads",
      id: "youtube-ads",
    },
    {
      title: "Photoshoot Services",
      content: (
        <>
          Professional photoshoots capture stunning visuals for marketing,
          e-commerce, or branding.
          <br />
          <strong>High-Quality Images</strong>
          <br />
          Shot with professional lighting and edited for perfection.
          <br />
          <strong>Versatile Applications</strong>
          <br />
          Ideal for product catalogs, social media, or websites.
          {expandedSections[5] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Custom Styling</strong>
              <br />
              Tailored to your brand's aesthetic and goals.
              <br />
              Jaikvik Technology's photoshoot services include location
              scouting, styling, and post-processing. Our clients have seen a
              20% increase in social media engagement with our high-quality
              images.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/cinema-camera-film-set-scenes-background-film-crew-production_1048944-12611948.jpg",
      alt: "Photoshoot Services",
      reverse: true,
      id: "photoshoot",
    },
    {
      title: "Model Shoot",
      content: (
        <>
          Model shoots create captivating visuals for fashion, lifestyle, or
          product campaigns.
          <br />
          <strong>Professional Talent</strong>
          <br />
          Work with experienced models and photographers.
          <br />
          <strong>Creative Direction</strong>
          <br />
          Concepts that align with your brand's vision.
          {expandedSections[6] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Dynamic Results</strong>
              <br />
              Perfect for advertising, lookbooks, or social media.
              <br />
              Our model shoot services include casting, makeup, and styling to
              ensure flawless results. Clients have reported a 30% boost in
              campaign engagement with our model shoot visuals.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/photographer-developing-film-darkroom-red-light_1280275-61227.jpg",
      alt: "Model Shoot Services",
      id: "model-shoot",
    },
    {
      title: "Interview Videos",
      content: (
        <>
          Interview videos showcase thought leadership, customer testimonials,
          or employee stories.
          <br />
          <strong>Authentic Storytelling</strong>
          <br />
          Capture genuine moments with professional filming.
          <br />
          <strong>Versatile Use</strong>
          <br />
          Ideal for corporate websites, social media, or events.
          {expandedSections[7] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Engaging Content</strong>
              <br />
              Builds trust and credibility with audiences.
              <br />
              Jaikvik Technology's interview video services include multi-camera
              setups, lighting, and editing to create polished content. Our
              clients have used interview videos to increase audience trust by
              25%.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/premium-photo/silhouette-production-crew-team-working-photo-shooting-studio-lighting-flash-led-headligh_258335-2020.jpg",
      alt: "Interview Videos",
      reverse: true,
      id: "interview-videos",
    },
    {
      title: "Production Packages",
      content: (
        <>
          Our production packages offer comprehensive solutions for businesses
          of all sizes.
          <br />
          <strong>Customizable Plans</strong>
          <br />
          Choose from basic, standard, or premium packages.
          <br />
          <strong>End-to-End Services</strong>
          <br />
          Includes filming, editing, and distribution.
          {expandedSections[8] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              <strong>Cost-Effective</strong>
              <br />
              Bundled services save time and budget.
              <br />
              Jaikvik Technology's packages are designed to meet diverse needs,
              from small businesses needing a single video to enterprises
              requiring full-scale campaigns. Our packages have helped clients
              reduce production costs by 15% while maintaining high quality.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://img.freepik.com/free-photo/flat-lay-film-elements-white-background_23-2148416833.jpg",
      alt: "Production Packages",
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
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center z-10 overflow-hidden "
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/close-up-camera_1048944-3803309.jpg')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="Film Production Hero"
        id="film-hero"
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
            Create Impactful Stories with Film Production
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Bring your vision to life with Jaikvik Technology's Film and Media
            Production Services
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("film-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore Film Production Services"
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
        id="film-overview"
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

export default Film_Production;
