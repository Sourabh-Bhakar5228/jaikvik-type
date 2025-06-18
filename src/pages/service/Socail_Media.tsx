import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Socail_Media = () => {
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
      title:
        "Social Media Marketing Introduction: Connecting Brands with Audience",
      content: (
        <>
          Social Media Marketing (SMM) involves using social media networks
          strategically in the promotion of a brand, product, or service. Its
          activities include producing and sharing marketing content, running
          targeted advertisements, and interacting directly with audiences
          towards achieving business objectives.
          <br />
          The experience of social media takes it to another level in digital
          marketing in the form of real-time communication, brand loyalty, and
          measurable outcomes—perhaps its most significant, but hardly solo,
          feature, as it complements, extends, and emulates other strategies
          like SEO, e-mail marketing, and content marketing, providing that
          straightforward access to its audience where much of their time is
          spent online.
          {expandedSections[0] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              SMM leverages platforms like Facebook, Instagram, LinkedIn, and
              Twitter to create meaningful connections. By combining creativity
              with analytics, businesses can craft campaigns that resonate
              deeply with their target audience, driving engagement and
              conversions. At Jaikvik Technology, we specialize in creating
              tailored SMM strategies that align with your business goals,
              ensuring maximum impact and measurable results.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Social Media Marketing Introduction",
    },
    {
      title: "Social Media Marketing Importance in the Digital Age",
      content: (
        <>
          It is used in everyday activities today since the birth of the modern
          age called social media. These social media platforms like Facebook,
          Instagram, LinkedIn, and Twitter have millions into billions of
          opportunities for business.
          <br />• <strong>Increase Brand Awareness:</strong> It is through the
          social media channel that the brand can reach out to a massive public
          in a diverse audience all across the globe.
          <br />• <strong>Boost Engagement:</strong> The good thing about
          businesses is that they can create their connections with people
          outside through likes, comments, and shares.
          <br />• <strong>Customer Relationship Insights:</strong> The
          analytical tools on the social platforms give a really clear-cut open
          door into the deep presentation of audience behaviour and preferences
          by brands.
          <br />• <strong>
            More Traffic and Higher Conversion Rates:
          </strong>{" "}
          Some scintillating posts and advertisements can tempt users directly
          on their way to visiting a website or e-commerce.
          <br />• <strong>Drive Brand Loyalty:</strong> Consistent audience
          engagement helps to build trust and relationships for the long term.
          {expandedSections[1] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Social media's role in the digital age is pivotal, offering
              businesses unparalleled opportunities to connect with global
              audiences. By leveraging targeted campaigns and real-time
              analytics, brands can optimize their strategies, ensuring every
              post, ad, or interaction contributes to measurable business
              growth. Jaikvik Technology's SMM solutions help you harness these
              benefits to stay competitive in a digital-first world.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2b6e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "SMM Importance",
      reverse: true,
    },
    {
      title: "Overview of Social Media Platforms",
      content: (
        <>
          Each of them would have a different audience, and it would be
          important to know what these are:
          <br />• <strong>Facebook</strong>
          <br />
          <strong>Target Audience:</strong> Young teenagers all the way to
          seniors.
          <br />
          <strong>Features:</strong> Business pages, groups, live videos,
          marketplace, and the most targeted ads.
          <br />
          <strong>Use Cases:</strong> Brand storytelling, community building,
          and also lead generation.
          <br />• <strong>Instagram</strong>
          <br />
          <strong>Target Audience:</strong> Image-centric millennials and Gen Z.
          <br />
          <strong>Features:</strong> Stories, reels, IGTV, and shopping options.
          <br />
          <strong>Use Cases:</strong> Visual storytelling, influencer marketing,
          showcasing products.
          <br />• <strong>LinkedIn</strong>
          <br />
          <strong>Target Audience:</strong> Professionals and B2B businesses.
          <br />
          <strong>Features:</strong> These include company pages, applying for
          jobs, networking with professionals, and content leading from thought.
          <br />
          <strong>Use Cases:</strong> Employer branding, lead generation, and
          industry insights.
          <br />• <strong>Twitter</strong>
          <br />
          <strong>Target Audience:</strong> For those who want to know the news,
          tech-savvy, and generally interested in what is trending.
          <br />
          <strong>Features:</strong> The real-time update, use of hashtags,
          polls, and short messaging.
          <br />
          <strong>Applications:</strong> Customer service, establishing brand
          voice, and crisis communication.
          {expandedSections[2] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Understanding the unique strengths of each platform allows
              businesses to tailor their strategies effectively. For example,
              Instagram's visual focus is ideal for lifestyle brands, while
              LinkedIn's professional network suits B2B companies. Jaikvik
              Technology helps you select and optimize platforms to align with
              your audience and goals, ensuring maximum reach and engagement.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "Social Media Platforms",
    },
    {
      title: "Social Media Marketing Strategy Development",
      content: (
        <>
          Developing an effective SMM strategy requires careful planning and
          execution:
          <br />• <strong>Set Clear Objectives:</strong> Define what you want to
          achieve (brand awareness, lead generation, sales).
          <br />• <strong>Know Your Audience:</strong> Research demographics,
          interests, and online behavior.
          <br />• <strong>Choose the Right Platforms:</strong> Focus on
          platforms where your target audience is most active.
          <br />• <strong>Content Planning:</strong> Create a content calendar
          with diverse post types.
          <br />• <strong>Engagement Strategy:</strong> Plan how you'll interact
          with your audience.
          {expandedSections[3] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />A well-crafted SMM strategy aligns with your overall
              marketing goals while leveraging the unique features of each
              platform. At Jaikvik Technology, we develop customized strategies
              that consider your brand voice, audience preferences, and business
              objectives to deliver measurable results.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80",
      alt: "SMM Strategy Development",
      reverse: true,
    },
    // Continue with all remaining sections (4-16) following the same pattern
    // ...
    {
      title: "The Power of Social Media Marketing",
      content: (
        <>
          The social media marketing has made such a large impact in the field
          of SMM on digital marketing that it has almost become a must for
          connecting with businesses to audiences, making it stick a brand
          within a consumer's mind, and growing achieving business growth. Its
          dynamic mode keeps businesses relevant and competitive in an
          ever-changing digital world.
          <br />
          <strong>
            Recap: Significance of SMM and its role for Digital Marketing
          </strong>
          <br />• <strong>Social Media Marketing Wider Reach:</strong> Social
          media marketing has given SMM the power of to outreach and create or
          amplify brand awareness.
          <br />• <strong>Direct Engagement:</strong> Social Media Marketing
          drives fosters deeper engagement directly with customers directly,
          resulting in trust and stronger relationships.
          <br />• <strong>Cost-Effective Paid Ads:</strong> Social platforms
          offer significant SMM a high ROI through targeted ad options and with
          measurable results.
          <br />• <strong>Real-Time Feedback:</strong> Through social media
          instantly, SMM allows organizations to receive instant feedback for
          actionable adjustments.
          <br />
          <strong>Call to Action: Elevate Your SMM Strategy</strong>
          <br />
          • It's time to act. Businesses prioritizing SMM strategies and
          refining their efforts through campaigns will excel in the digital
          era.
          <br />• <strong>Embrace SMM:</strong> Start on platforms where your
          target audience is active.
          <br />• <strong>Refine Campaigns:</strong> Continuously optimize using
          performance data and staying updated with trends.
          <br />• <strong>Maintain Consistency:</strong> Build trust with
          regular posting and consistent branding.
          <br />• <strong>Partner with Experts:</strong> Collaborate with
          agencies to maximize social media impact.
          {expandedSections[16] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <br />
              Social media marketing is a transformative tool for modern
              businesses. Jaikvik Technology's expertise ensures your SMM
              strategy delivers campaigns that enhance visibility, engagement,
              and measurable growth, aligning with your business objectives.
            </motion.div>
          )}
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1516321315098-34e857adf62b?ixlib=rb-4.0.3&auto=format&fit=crop&w=740",
      alt: "Conclusion: The Power of SMM",
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
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center z-10 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=740&q=80')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="SMM Hero"
        id="smm-hero"
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
            Social Media Marketing: Strategies for Success
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover how Social Media Marketing can transform your brand's
            online presence with Jaikvik Technology.
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("smm-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore SMM Strategies"
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
              FAQ's
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  question: "What's social media marketing?",
                  answer:
                    "It's using platforms like Instagram, Twitter, and LinkedIn to promote brands, engage audiences, and achieve goals like driving traffic or boosting sales.",
                },
                {
                  question: "Why's SMM crucial for businesses?",
                  answer:
                    "SMM enhances brand visibility, fosters customer relationships, drives targeted traffic, provides audience insights, and offers cost-effective advertising.",
                },
                // Include all FAQ items here...
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
                  <p className="text-gray-300 mt-2">{faq.answer}</p>
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
            Ready to Elevate Your Brand with SMM?
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our SMM strategies can boost your brand's visibility,
            engagement, and growth.
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

export default Socail_Media;
