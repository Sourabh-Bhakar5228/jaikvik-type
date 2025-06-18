import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Youtube_Meta_Ads = () => {
  // Initialize expandedSections for all sections (0–16) and FAQs (17–26)
  const initialExpandedSections = {};
  for (let i = 0; i <= 26; i++) {
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

  // Define all sections (0–16)
  const sections = [
    {
      title: "Understanding Digital Advertising",
      content: (
        <>
          Digital advertising revolutionizes brand outreach with precise
          targeting and real-time analytics. PPC, Meta, and YouTube Ads enable
          businesses to connect via search, social media, and video, tailoring
          messages to user behavior and preferences.
          <br />
          This ecosystem supports multi-channel strategies, delivering
          measurable results.
          {expandedSections[0] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology designs integrated campaigns across these
              platforms, optimizing performance to achieve your business goals
              and maximize ROI.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Digital Advertising Overview",
    },
    {
      title: "Why PPC, Meta, and YouTube Ads Matter",
      content: (
        <>
          These platforms are vital for digital success:
          <br />• <strong>PPC:</strong> Targets high-intent users on search
          engines for immediate traffic.
          <br />• <strong>Meta:</strong> Reaches billions on Facebook and
          Instagram with precise segmentation.
          <br />• <strong>YouTube:</strong> Engages via compelling video
          content, boosting visibility.
          <br />
          They cover awareness, engagement, and conversion.
          {expandedSections[1] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology leverages their strengths to create cohesive
              campaigns, maximizing reach and conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2b6e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Role of PPC, Meta, YouTube",
      reverse: true,
    },
    {
      title: "What is PPC Advertising?",
      content: (
        <>
          PPC (Pay-Per-Click) is a model where advertisers pay only when their
          ad is clicked, ideal for targeted traffic. It uses keyword bidding and
          ad auctions on platforms like Google Ads.
          <br />• <strong>Features:</strong> Instant traffic, measurable
          results, flexible budgets.
          <br />• <strong>Platforms:</strong> Google Ads, Bing Ads, social media
          PPC.
          {expandedSections[2] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology optimizes PPC campaigns with strategic keyword
              selection and ad creation for cost-effective results.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "PPC Overview",
    },
    {
      title: "Benefits of PPC Ads",
      content: (
        <>
          PPC offers:
          <br />
          1. <strong>Targeted Reach:</strong> Connect with users via keywords,
          location, interests.
          <br />
          2. <strong>Cost Control:</strong> Pay only for clicks, adjustable
          budgets.
          <br />
          3. <strong>Fast Results:</strong> Instant traffic for promotions.
          <br />
          4. <strong>Trackable ROI:</strong> Monitor clicks, conversions, costs.
          {expandedSections[3] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology ensures PPC campaigns deliver high-intent
              traffic and measurable outcomes.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "PPC Benefits",
      reverse: true,
    },
    {
      title: "Components of a PPC Campaign",
      content: (
        <>
          Effective PPC campaigns include:
          <br />• <strong>Keywords:</strong> Target high-intent terms using
          Google Keyword Planner.
          <br />• <strong>Ad Copy:</strong> Craft compelling headlines, CTAs.
          <br />• <strong>Landing Pages:</strong> Design conversion-focused
          pages.
          <br />• <strong>Bidding:</strong> Optimize for cost and performance.
          {expandedSections[4] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology fine-tunes each component to drive quality
              traffic and conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1551288049-b1f3a0a9c3d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "PPC Components",
    },
    {
      title: "Types of PPC Ads",
      content: (
        <>
          PPC ad formats:
          <br />• <strong>Search Ads:</strong> Text ads on search results.
          <br />• <strong>Display Ads:</strong> Visual banners on websites.
          <br />• <strong>Shopping Ads:</strong> Product listings for
          e-commerce.
          <br />• <strong>Remarketing Ads:</strong> Re-engage past visitors.
          {expandedSections[5] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology selects optimal ad types for your goals,
              ensuring engagement and conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "PPC Ad Types",
      reverse: true,
    },
    {
      title: "Strategies for PPC Success",
      content: (
        <>
          Maximize PPC with:
          <br />
          1. <strong>Keyword Research:</strong> Identify high-value terms.
          <br />
          2. <strong>Ad Testing:</strong> A/B test creatives.
          <br />
          3. <strong>Analytics:</strong> Monitor CPC, CTR, conversions.
          <br />
          4. <strong>Optimization:</strong> Adjust bids, targeting.
          {expandedSections[6] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology uses data-driven strategies to enhance PPC
              performance and ROI.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "PPC Strategies",
    },
    {
      title: "Introduction to Meta Ads",
      content: (
        <>
          Meta Ads reach billions on Facebook and Instagram, offering:
          <br />• <strong>Targeting:</strong> Segment by demographics,
          interests.
          <br />• <strong>Formats:</strong> Images, videos, Stories, carousels.
          <br />• <strong>Analytics:</strong> Real-time tracking.
          <br />• <strong>Management:</strong> Meta Ads Manager.
          {expandedSections[7] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology creates Meta Ads campaigns that drive
              engagement and conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Meta Ads Introduction",
      reverse: true,
    },
    {
      title: "Meta Ad Formats",
      content: (
        <>
          Meta provides:
          <br />• <strong>Image/Video Ads:</strong> Engaging visuals, videos.
          <br />• <strong>Carousel Ads:</strong> Multiple products.
          <br />• <strong>Stories Ads:</strong> Immersive experiences.
          <br />• <strong>Lead Ads:</strong> Capture user info.
          {expandedSections[8] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology optimizes formats for campaign objectives,
              boosting results.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1551288049-b1f3a0a9c3d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Meta Ad Formats",
    },
    {
      title: "Meta Audience Targeting",
      content: (
        <>
          Meta's targeting:
          <br />• <strong>Demographics:</strong> Age, gender, location.
          <br />• <strong>Interests:</strong> Hobbies, preferences.
          <br />• <strong>Custom Audiences:</strong> Retarget users.
          <br />• <strong>Lookalike Audiences:</strong> Find similar users.
          {expandedSections[9] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology reaches the right audiences for high relevance
              and success.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Meta Audience Targeting",
      reverse: true,
    },
    {
      title: "Creating Meta Ads",
      content: (
        <>
          Steps for Meta Ads:
          <br />
          1. <strong>Define Goals:</strong> Awareness, leads, sales.
          <br />
          2. <strong>Design Creatives:</strong> Quality visuals, copy.
          <br />
          3. <strong>Set Parameters:</strong> Budget, audience, schedule.
          {expandedSections[10] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology crafts ads that resonate and deliver results.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Meta Ad Creation",
    },
    {
      title: "Why Choose YouTube Ads?",
      content: (
        <>
          YouTube Ads offer:
          <br />• <strong>Reach:</strong> 2 billion+ monthly users.
          <br />• <strong>Engagement:</strong> Video captivates.
          <br />• <strong>Targeting:</strong> Demographics, interests.
          <br />• <strong>Formats:</strong> Skippable, non-skippable, bumper.
          {expandedSections[11] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology creates YouTube campaigns for brand impact and
              conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1551288049-b1f3a0a9c3d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "YouTube Ads",
      reverse: true,
    },
    {
      title: "Types of YouTube Ads",
      content: (
        <>
          YouTube ad formats:
          <br />• <strong>Skippable In-Stream:</strong> Skip after 5 seconds.
          <br />• <strong>Non-Skippable In-Stream:</strong> 15-20 seconds.
          <br />• <strong>Bumper Ads:</strong> 6-second messages.
          <br />• <strong>Discovery Ads:</strong> Search, recommendations.
          {expandedSections[12] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology selects formats for engagement and efficiency.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "YouTube Ad Types",
    },
    {
      title: "Avoiding PPC Mistakes",
      content: (
        <>
          Common PPC errors:
          <br />
          1. <strong>Ignoring Negative Keywords:</strong> Irrelevant clicks.
          <br />
          2. <strong>Weak Landing Pages:</strong> High bounce rates.
          <br />
          3. <strong>No Mobile Optimization:</strong> Misses mobile users.
          <br />
          4. <strong>Lack of Monitoring:</strong> Needs adjustments.
          {expandedSections[13] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology avoids pitfalls with strategic planning and
              optimization.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "PPC Mistakes",
      reverse: true,
    },
    {
      title: "PPC vs. Meta vs. YouTube Ads",
      content: (
        <>
          Platform strengths:
          <br />• <strong>PPC:</strong> High-intent, quick traffic, costly
          keywords.
          <br />• <strong>Meta:</strong> Precise targeting, privacy challenges.
          <br />• <strong>YouTube:</strong> Video storytelling, production
          costs.
          {expandedSections[14] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology integrates platforms for effective advertising.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Ads Comparison",
    },
    {
      title: "Success Stories",
      content: (
        <>
          • <strong>PPC:</strong> E-commerce client saw 50% conversion increase.
          <br />• <strong>Meta:</strong> Local business gained 30% more traffic.
          <br />• <strong>YouTube:</strong> SaaS boosted sign-ups by 25%.
          {expandedSections[15] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology delivers results with tailored campaigns.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1551288049-b1f3a0a9c3d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Success Stories",
      reverse: true,
    },
    {
      title: "The Power of PPC, Meta, and YouTube Ads",
      content: (
        <>
          These platforms excel at:
          <br />• <strong>PPC:</strong> Instant, targeted traffic.
          <br />• <strong>Meta:</strong> Engaging audiences.
          <br />• <strong>YouTube:</strong> Storytelling.
          <br />
          Combine for comprehensive strategy.
          {expandedSections[16] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Jaikvik Technology ensures campaigns achieve visibility and
              conversions.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Conclusion",
    },
  ];

  // Initialize sectionRefs for sections plus FAQ
  const sectionRefs = sections.map(() =>
    useInView({ threshold: 0.2, triggerOnce: true })
  );
  const faqRef = useInView({ threshold: 0.2, triggerOnce: true });

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
        aria-label="PPC Hero"
        id="ppc-hero"
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
            Master PPC, Meta, and YouTube Ads with Jaikvik Technology
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Unlock the power of PPC, Meta, and YouTube Ads to drive targeted
            traffic, engage audiences, and boost conversions with expert
            strategies from Jaikvik Technology.
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("ppc-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore PPC Strategies"
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
        id="ppc-overview"
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

          <motion.div
            ref={faqRef[0]}
            className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm mb-12"
            initial="hidden"
            animate={faqRef[1] ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.h2
              variants={staggerItem}
              className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6 text-center"
            >
              FAQs About PPC, Meta, and YouTube Ads
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  question:
                    "What's the ideal budget for PPC, Meta, or YouTube Ads?",
                  answer:
                    "Budgets vary:\n• PPC: $20-$50/day to start.\n• Meta: $10-$30/day for testing.\n• YouTube: $50-$100/day, considering video costs.",
                },
                {
                  question: "What ad formats can I use?",
                  answer:
                    "Formats include:\n• PPC: Search, display, shopping ads.\n• Meta: Image, video, carousel, Stories.\n• YouTube: Skippable, non-skippable, bumper ads.",
                },
                {
                  question: "How can I optimize my campaigns?",
                  answer:
                    "Enhance performance by:\n• A/B testing creatives.\n• Refining audience targeting.\n• Retargeting engaged users.\n• Adjusting budgets dynamically.",
                },
                {
                  question: "How do I track ad performance?",
                  answer:
                    "Use:\n• PPC: Google Ads, platform analytics.\n• Meta: Meta Ads Manager, Pixel.\n• YouTube: YouTube Studio for CTR, conversions.",
                },
                {
                  question: "Can I use all three platforms together?",
                  answer:
                    "Yes, for a multi-channel approach:\n• PPC: Drives clicks.\n• Meta: Boosts engagement.\n• YouTube: Builds awareness.\nIntegrate analytics for insights.",
                },
                {
                  question: "Do I need experts to manage ads?",
                  answer:
                    "Self-service is possible, but professionals offer:\n• Advanced strategies.\n• Time efficiency.\n• Higher ROI.",
                },
                {
                  question: "How soon will I see results?",
                  answer:
                    "Timelines:\n• PPC: Days with optimization.\n• Meta: 1-2 weeks for audience refinement.\n• YouTube: Longer for video engagement.",
                },
                {
                  question: "What mistakes should I avoid?",
                  answer:
                    "Avoid:\n• Vague goals.\n• Poor targeting.\n• Low-quality creatives.\n• Infrequent monitoring.",
                },
                {
                  question: "How do I keep up with ad trends?",
                  answer:
                    "Stay informed via industry blogs, forums, competitor analysis, and platform updates.",
                },
                {
                  question: "Why partner with Jaikvik Technology?",
                  answer:
                    "Jaikvik Technology provides expert management, tailored strategies, and data-driven optimization for PPC, Meta, and YouTube Ads success.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg"
                  open={expandedSections[sections.length + index]}
                  onToggle={() => toggleSection(sections.length + index)}
                >
                  <summary className="text-blue-400 font-medium cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="text-gray-300 mt-2 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
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
            Ready to Elevate Your Advertising Strategy?
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our PPC, Meta, and YouTube Ads strategies can boost
            your brand's visibility, engagement, and conversions.
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

export default Youtube_Meta_Ads;
