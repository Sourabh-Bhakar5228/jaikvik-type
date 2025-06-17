import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExpandedSections {
  [key: number]: boolean;
}

const CRMPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  // InView animations
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
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-100 bg-gray-900 m-0 p-0 box-border relative z-0 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      </motion.div>

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center z-10 overflow-hidden"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/arrange-white-letters-as-crm_1384-19.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="CRM Solutions Hero"
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
            Transform Your Business with CRM
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Unlock the power of customer relationships with Jaikvik Technology
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("jt-crm-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore CRM Solutions"
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

      {/* Main Content */}
      <div
        className="w-full mx-auto px-5 py-12 md:py-16 relative z-20 bg-gray-900"
        id="jt-crm-overview"
      >
        <div className=" mx-auto">
          {/* What is CRM Section */}
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
                What Is CRM?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                CRM, which stands for Customer Relationship Management, refers
                to a strategic method of interacting with a company and its
                present and potential customers. It combines technology,
                processes, and data to efficiently operate sales, marketing, and
                consumer care.
                <br />
                CRMs act as a central house for businesses to keep some vital
                information on their customers: contact information, sales
                history, communication logs, etc. It is not merely a large
                database but a business operation backbone encouraging staff
                collaboration, automation of mundane tasks, and the construction
                of a genuine camaraderie with its clientele.
                <br />
                Modern CRMs feature artificial Intelligence insights as well as
                the possibility of integrating more advanced ways for
                achievement purposes, which help a business significantly
                forward its capacity to make clear, goal-aligning decisions. In
                the end, it is a principle of a customer strategy applicable to
                businesses in all territories, regardless of their size or
                industry.
                {expandedSections[0] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    At Jaikvik Technology, our CRM solutions are designed to
                    empower businesses by integrating seamlessly with existing
                    systems, offering customizable workflows, and providing
                    real-time insights. Whether you're a small startup or a
                    large enterprise, our CRM adapts to your needs, ensuring you
                    stay connected with your audience at every touchpoint. From
                    lead generation to post-sale support, CRM transforms how
                    businesses nurture relationships and drive growth.
                    <br />
                    In today's fast-paced digital landscape, businesses must
                    prioritize customer relationships to stay competitive. A CRM
                    system is not just a tool but a strategic asset that helps
                    companies understand their customers better, anticipate
                    their needs, and deliver exceptional experiences. By
                    leveraging CRM, businesses can foster long-term loyalty,
                    drive repeat sales, and build a strong brand reputation. For
                    instance, a retail business using CRM can analyze customer
                    purchase patterns to offer personalized discounts, while a
                    healthcare provider can use it to send timely reminders for
                    appointments, reducing no-shows and improving patient
                    satisfaction.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(0)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ x: 5 }}
                aria-label="Toggle CRM Description"
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
                src="https://img.freepik.com/free-vector/flat-design-crm-illustration_23-2149364431.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="CRM Solutions"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* What Does CRM Do Section */}
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
                What Does CRM Do?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                At its core, a CRM is designed to aid businesses in organizing,
                tracking, and enhancing their interactions with customers. Here
                is the rundown on its functionality:
                <br />
                <strong className="text-blue-300">
                  Centralizing Customer Data
                </strong>
                <br />
                Every detail concerning a customer is to be managed by the CRM
                in a single database. This embraces such insightful facts as
                contact details, sales history, preferences, and communication
                threads. This in turn guarantees that information does not get
                lost or overlooked and is instantly available to responsible
                units.
                <br />
                <strong className="text-blue-300">
                  Administering Sales Pipelines
                </strong>
                <br />A CRM system is able to monitor leads along several stages
                of the sales process. This empowers salespeople to see who is
                most likely to convert and where efforts should be concentrated.
                {expandedSections[1] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    <strong className="text-blue-300">
                      Automation of Repetitive Tasks
                    </strong>
                    <br />
                    In essence, an application that is CRM-based can automate
                    tasks. Such tasks include email follow-ups, reminders,
                    invoicing, and many others. Democratizing workflow could
                    streamline operations while reducing error margin and time
                    needed while maintaining overall quality control.
                    <br />
                    <strong className="text-blue-300">Marketing Tools</strong>
                    <br />
                    Built-in the same system, CRM provides marketing automation
                    with a program automatizing campaign preparation, audience
                    segments, and an overarching view on one's marketing ROI.
                    <br />
                    <strong className="text-blue-300">Customer Support</strong>
                    <br />
                    CRM can be useful in solving helpdesk inquiries, complaints,
                    and service requests to make sure that every single customer
                    experiences the best disposition in a commensurate and
                    timely response.
                    <br />
                    Beyond these essentials, Jaikvik Technology's CRM offers
                    advanced features like AI-driven predictive analytics to
                    forecast customer behavior, mobile app access for on-the-go
                    management, and integration with tools like Slack, Google
                    Workspace, and accounting software. This ensures your team
                    stays productive and your customers stay engaged, no matter
                    where business takes you.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(1)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                aria-label="Toggle CRM Functionality"
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
                src="https://img.freepik.com/free-vector/hand-drawn-crm-infographic_23-2149388654.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="CRM Features"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Why Should Enterprises Opt for CRMs Section */}
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
                Why Should Enterprises Opt for CRMs?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                There are so many reasons why CRM systems are essential:
                <br />
                <strong className="text-blue-300">
                  Customer-Centric:
                </strong>{" "}
                This is vital in creating and sustaining strong customer
                satisfaction through personalized care.
                <br />
                <strong className="text-blue-300">
                  Insight into Data:
                </strong>{" "}
                Harnessing analytical functionalities, a CRM makes it possible
                to comport data into palatable, relevant understandings that can
                guide forecasting, measurement, and opportunity identification
                accurately.
                <br />
                <strong className="text-blue-300">Scalability:</strong> It is
                good to note that CRMs are adaptable to businesses of any size,
                growing with the organization.
                <br />
                <strong className="text-blue-300">
                  Increased Efficiency:
                </strong>{" "}
                By allowing hands-free attention to lower priorities during the
                progress of tasks, CRM brings higher efficiency to the business.
                {expandedSections[2] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    <strong className="text-blue-300">
                      Savings in Cost:
                    </strong>{" "}
                    Removing manual effort and thus improving productivity while
                    helping eliminate potential errors offers far-reaching
                    resource savings for the business.
                    <br />
                    <strong className="text-blue-300">
                      Essential Blocks Of CRM
                    </strong>
                    <br />
                    A fully functional CRM system generally consists of the
                    following core components:
                    <br />
                    <strong className="text-blue-300">
                      Contact Management
                    </strong>
                    <br />
                    Base-structured entities of all CRM. It forever seeks to
                    arrange all customer information into manageable forms for
                    easy retrieval and use.
                    <br />
                    <strong className="text-blue-300">Sales Automation</strong>
                    <br />
                    Sales aggregation tool for leads, deals, and tracking
                    activities at each stage of a sales cycle.
                    <br />
                    <strong className="text-blue-300">
                      Marketing Integration
                    </strong>
                    <br />
                    Email or campaign track worsens with audience segmentation;
                    Marketing tools form part of CRM for many companies.
                    <br />
                    <strong className="text-blue-300">
                      Customer Service Desk
                    </strong>
                    <br />
                    Manifold interweaving with customer service would mean
                    dealing with service tickets and inquiries into pertinent
                    information concerning various CRM modules.
                    <br />
                    <strong className="text-blue-300">
                      Analytics and Reports
                    </strong>
                    <br />
                    Mitigate in-depth business analytics from reporting tools;
                    it shows performance with clients, customer behavior, and
                    market trends.
                    <br />
                    <strong className="text-blue-300">
                      Collaboration Tools
                    </strong>
                    <br />
                    Occupy unique calendars amongst others, which encourage
                    teamwork, be in task management, unified communication, or
                    discussion mode.
                    <br />
                    Enterprises choosing Jaikvik Technology's CRM also benefit
                    from enhanced security with encrypted data storage, 24/7
                    customer support, and regular updates that keep your system
                    ahead of industry trends. Studies show businesses using CRM
                    can see up to a 300% increase in lead conversion rates and a
                    30% reduction in operational costs—proof that CRM isn't just
                    a tool, it's a competitive advantage.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(2)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle CRM Benefits"
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
                src="https://img.freepik.com/free-vector/gradient-crm-illustration_23-2149379653.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="CRM Benefits"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* CRM for Different Ventures Section */}
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
                CRM for Different Ventures
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                The use of CRMs has advanced in many industries today. It allows
                the provision of tailor-made solutions for meeting specified
                operational needs. An overview is now presented for how various
                industries employ CRM for increased efficiency and to better
                customer relationships:
                <br />
                <strong className="text-blue-300">
                  1. Retail and E-commerce
                </strong>
                <br />
                ● CRMs help retailers to track customer preferences, monitor
                customer habits of purchase, and produce custom marketing
                promotions.
                <br />
                ● For their part, e-commerce platforms utilize CRM information
                to serve customer requirements better with custom offers or deal
                with loyalty programs and cases optimized for convenient
                shopping.
                <br />
                <strong className="text-blue-300">2. Healthcare</strong>
                <br />● Where patient details, appointments for checkups, and
                medication refill notices are concerned, CRMs help keep an
                updated patient index.
                {expandedSections[3] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    ● On further reflection, they resume a digitized treatment
                    history and provide a bridge for seamless interaction
                    between medical staff and clients.
                    <br />
                    <strong className="text-blue-300">3. Real Estate</strong>
                    <br />
                    ● CRM helps real estate agents manage property listings,
                    monitor customer inquiries, and track the sales cycle.
                    <br />
                    ● Agents use the CRM for follow-ups and also to supply
                    timely updates to clients on properties.
                    <br />
                    <strong className="text-blue-300">
                      4. Nonprofit Organizations
                    </strong>
                    <br />
                    ● CRM has empowered nonprofit organizations to develop
                    strategies of fundraising besides administering campaigns to
                    reach their governing bodies and donors.
                    <br />
                    ● CRM-based key performance indicators support donor
                    development immensely.
                    <br />
                    ● The crux of CRM, as a tool, is to enable impactful donor
                    engagement.
                    <br />
                    <strong className="text-blue-300">
                      5. B2B Enterprises
                    </strong>
                    <br />
                    CRMs for B2B businesses are considered handy for generating
                    leads, nurturing relationships, and making sales forecasts.
                    Their common application includes the management of
                    long-term contracts and for effective execution of
                    inter-divisional coordination.
                    <br />
                    <strong className="text-blue-300">6. Education</strong>
                    <br />
                    ● CRMs are used by schools, colleges, and training centers
                    to manage student applications, monitor enrollment data, and
                    maintain alumni relationships.
                    <br />
                    ● They help enhance interdepartmental communication, staff
                    communication, and communication with guardians.
                    <br />
                    <strong className="text-blue-300">7. Hospitality</strong>
                    <br />
                    ● Hoteliers and F&B providers are very popular users. CRM
                    tools allow the tracking of preferences of guests concerning
                    hospitality, reservations, and other similar services.
                    <br />
                    ● They can also keep channelized promotional messages to
                    retain loyal customers.
                    <br />
                    ● CRMs remain very adaptable to specific industry
                    requirements, assisting organizations in literally anything
                    when it comes to operational excellence and building
                    long-term relationships with their clients.
                    <br />
                    <strong className="text-blue-300">
                      Business-to-Business Contacts
                    </strong>
                    <br />
                    CRM is a source of lead generation capacity, which might
                    lead to nurturing a 10-15-year partnership, far longer than
                    what most people right now could envisage. For B2B, one
                    additional service involves collaboration within internal
                    teams to ascertain their customer/deal-follow issues faster
                    than everyone else arduous, time-saving efforts with
                    positive outcomes like improving profit expectations for
                    forecasting sales revenues, service and consultation
                    processes, etc.
                    <br />
                    <strong className="text-blue-300">
                      Who Can Implement CRM?
                    </strong>
                    <br />
                    The use of CRMs is not reserved for a particular industry or
                    business size. Their versatility and adaptability have led
                    to them serving users in a broad variety of areas. The
                    following is a breakdown of some CRM users:
                    <br />
                    <strong className="text-blue-300">
                      1. Small Businesses
                    </strong>
                    <br />
                    ● Most small businesses do not have the resources to boast
                    about more complicated procedures hence the importance of
                    CRM in pushing the consolidation of their work.
                    <br />
                    ● It helps in tracking leads, automating follow-up, and
                    managing data entry until you have a large team to help.
                    <br />
                    <strong className="text-blue-300">
                      2. Big Enterprises
                    </strong>
                    <br />
                    ● Large organizations are bound to have distributions of
                    CRMs to control their vast client bases as well as employ
                    huge numbers of sales pipelines and an array of complex
                    layers of marketing systems.
                    <br />
                    ● With advanced analytics and integration capabilities, this
                    tool brings together data for various departments, leading
                    to efficiency and collaboration.
                    <br />
                    <strong className="text-blue-300">3. Sales Teams</strong>
                    <br />
                    ● Sales executives need CRM to be the hub of their lead
                    tracking, deal management as well as automating routine work
                    like follow-ups and data entry.
                    <br />
                    ● This system provides visibility over a sales pipeline with
                    a more solid support to forecasting and performance
                    tracking.
                    <br />
                    <strong className="text-blue-300">
                      4. Marketing Teams
                    </strong>
                    <br />
                    ● CRM gives marketing people the ability to segment their
                    market, craft personalized campaigns, and measure the impact
                    on ROI.
                    <br />
                    ● It is indispensable for old-fashioned digital marketing
                    with its email automation, social media tracking, and
                    campaign analytics.
                    <br />
                    <strong className="text-blue-300">
                      5. Customer Service Teams
                    </strong>
                    <br />
                    CRMs make the ticket resolution quicker and more efficient
                    for service representatives and retain for them the files on
                    what interaction each customer has had with them. So it is
                    about customer happiness and retention.
                    <br />
                    <strong className="text-blue-300">
                      6. Freelancers and Consultants
                    </strong>
                    <br />
                    ● Freelancers and independent consultants turn to CRMs to
                    manage their client base, track project deadlines, and
                    schedule follow-ups.
                    <br />
                    ● Invoicing and reporting have been simplified by CRMs so
                    that they can lighten their focus on their real services.
                    <br />
                    <strong className="text-blue-300">
                      7. Nonprofit Organizations
                    </strong>
                    <br />
                    ● CRMs have empowered nonprofits to manage donor
                    relationships, plan fundraising campaigns, and track
                    volunteer activities.
                    <br />
                    ● They foster optimization of outreach strategies to
                    maximize impact.
                    <br />
                    <strong className="text-blue-300">
                      8. Educational Institutions
                    </strong>
                    <br />
                    ● Universities and schools use CRM to streamline enrollment,
                    manage student information, and create alumni relations.
                    <br />
                    ● They also tie staff, students, and parents for enhanced
                    communication.
                    <br />
                    <strong className="text-blue-300">
                      9. Healthcare Providers
                    </strong>
                    <br />
                    ● Healthcare service providers use CRMs for patient record
                    management, appointment organization, and treatment plan
                    management.
                    <br />
                    ● This improves the patient's care and operational
                    efficiency.
                    <br />
                    <strong className="text-blue-300">
                      10. E-commerce Platforms
                    </strong>
                    <br />
                    ● CRMs are vital to tracking customer activities and
                    interactions for e-commerce businesses, managing stimulus
                    programs, or simply making product suggestions via
                    recommendations.
                    <br />
                    ● They also increase retention by allowing for solid
                    personalized shopping experiences.
                    <br />
                    <strong className="text-blue-300">
                      11. Real Estate Agents
                    </strong>
                    <br />
                    ● Real estate practitioners capitalize on CRMs to manage
                    property listings, customize email campaign activities for
                    each client's interest, and make appointments with their
                    clients.
                    <br />
                    ● It helps in building a good client relationship in the
                    long run.
                    <br />
                    A definable feature of CRMs is that it presents numerous
                    possibilities and scalability making them ideal for anyone
                    needing effective customer relationship management,
                    increased efficiency, and better business growth. Whichever
                    level you are on, solo entrepreneur to multinational
                    corporation, CRM will be the change that turns all the
                    events for you by nurturing the success and growth of
                    managing your interactions.
                    <br />
                    <strong className="text-blue-300">
                      Benefits of Using a CRM
                    </strong>
                    <br />
                    A CRM system is not just like any ordinary software
                    available in the market. Instead, it is considered to be
                    very influential at changing the way business is conducted.
                    They help businesses in their levels of automation and
                    data-driven marketing acceleration.
                    <br />
                    <strong className="text-blue-300">
                      Improved Business-Customer Relationships:
                    </strong>{" "}
                    This implies a more specialized customer service experience,
                    hence an immediate leap in customer satisfaction and
                    loyalty.
                    <br />
                    <strong className="text-blue-300">
                      Streamline Business Processes:
                    </strong>{" "}
                    Automation in streamlining processes gives its user's
                    businesses an invaluable relief from burden.
                    <br />
                    <strong className="text-blue-300">
                      Enhanced Sales Performance:
                    </strong>{" "}
                    Data-based information provided within CRMs could sooner
                    than later help the sales/ISP to push through leads driving
                    into winners for the company.
                    <br />
                    <strong className="text-blue-300">
                      Improved Collaboration:
                    </strong>{" "}
                    Since it facilitates fast and efficient data accessibility;
                    much expectantly this fosters good teamwork.
                    <br />
                    <strong className="text-blue-300">Reduced Costs:</strong> By
                    doing away with manual administrative activities, CRMs can
                    cut down operational costs caused by inefficiencies and
                    incomplete projects, meaning CRMs serve as cost-effective
                    machines.
                    <br />
                    <strong className="text-blue-300">
                      Key Attributes of CRM
                    </strong>
                    <br />
                    Modern CRMs feature capabilities designed specifically
                    around recent business-centric needs:
                    <br />
                    <strong className="text-blue-300">
                      Personalized Dashboards
                    </strong>
                    <br />
                    As one would find with a wide variety of applications, these
                    usually grant the user a deep-level, personal view of
                    his/her tasks, priorities, and other carefully mapped
                    metrics across real-time-competitive levels.
                    <br />
                    <strong className="text-blue-300">Mobile Access</strong>
                    <br />
                    Access through a mobile device has lately turned into an
                    essential means for productivity.
                    <br />
                    <strong className="text-blue-300">AI Insights</strong>
                    <br />
                    Using the ever-popular term, it is generally "big data"-CRM
                    insight cycles that lead to forecasting, as well as
                    directing correct data, at scalable levels of pace and
                    capacity using AI logic.
                    <br />
                    <strong className="text-blue-300">
                      Automation of Tasks
                    </strong>
                    <br />
                    Sequencing through the workflow to automate post-task
                    activities to leverage resources.
                    <br />
                    <strong className="text-blue-300">
                      Implementing a CRM
                    </strong>
                    <br />
                    The CRM application should be able to connect with an email
                    application, e-commerce platform, or an accounting program.
                    <br />
                    <strong className="text-blue-300">
                      Implementing a CRM Solution
                    </strong>
                    <br />
                    The step on which everything else relies—PREPARE YOURSELF
                    and be prepared. And to dazzle on all fronts, CRM changeover
                    wants to be:
                    <br />
                    <strong className="text-blue-300">Set Goals</strong>
                    <br />
                    Define the reason for purchasing your system, for instance,
                    better customer service, streamlining of sales, or
                    simplification of processes.
                    <br />
                    <strong className="text-blue-300">
                      Choose a CRM Platform
                    </strong>
                    <br />
                    Review different CRM solutions until you find one that fits
                    your goals.
                    <br />
                    <strong className="text-blue-300">Train Your Team</strong>
                    <br />
                    Help your team become familiar with the software.
                    <br />
                    <strong className="text-blue-300">Migrating Data</strong>
                    <br />
                    Get the current customer data into the new CRM with good
                    diligence enforced for accuracy and timeliness.
                    <br />
                    <strong className="text-blue-300">
                      Monitor and Evaluate
                    </strong>
                    <br />
                    Define these benchmarks to monitor: user adoption, task
                    completion time, and customer response to CRM functions
                    should be reasonable and based on the time remaining.
                    <br />
                    <strong className="text-blue-300">
                      Embark Your CRM Journey with Jaikvik Technology
                    </strong>
                    <br />
                    Undertaking your CRM travel with Jaikvik Technology will
                    carefully encompass the needs of your business. We dedicate
                    several forces in creating innovative CRM strategies that
                    will facilitate broader networking, enhance efficiency, and
                    bring about business growth. The team of professionals works
                    together with you in a very close embrace to seek an
                    understanding of all of your specific business requirements
                    and to suggest the ideal CRM strategy and tools that would
                    inject commerce elixir into your business model.
                    <br />
                    Jaikvik Technology is considered one of the best software
                    companies in Delhi NCR that provides CRM solutions. Tailored
                    exclusively to lift customer satisfaction levels, streamline
                    sales channels, and enhance productivity, Jaikvik's CRM
                    Solutions can be custom-fitted to the needs of any buyer.
                    CRM solutions offer 100% flexibility, range, and
                    user-friendliness to facilitate easy interaction with your
                    existing systems to enable you to cater to your customer
                    data management, track today's interactions in your customer
                    life, and automate the best possible business process.
                    <br />
                    Get into Jaikvik Technology for an all-inclusive,
                    customer-generating environment with a huge competitive
                    advantage. Allow us to redefine customer engagement
                    capabilities and grow your business beyond that level!
                    <br />
                    <strong className="text-blue-300">
                      Here are 6 frequently asked questions (FAQs) for CRM:
                    </strong>
                    <br />
                    <strong className="text-blue-300">
                      1. Define CRM and how it is significant for a Business.
                    </strong>
                    <br />
                    CRM stands for Customer Relationship Management. It is a
                    tool used to also further manage operations, streamline
                    processes, and increase important customer relationships. It
                    is important for centralizing information, which improves
                    customer satisfaction, enhances team collaboration, and
                    culminates in increased sales and profitability as workflows
                    are automated and useful insights help in decision-making.
                    <br />
                    <strong className="text-blue-300">
                      2. Is CRM useful for small businesses?
                    </strong>
                    <br />
                    Yes, small businesses can benefit from using CRM. However,
                    it's not just for large corporations.
                    <br />
                    CRMs organize customer data automate it, or even personalize
                    communication. This would lead to streamlined efficiencies,
                    time management, and positive customer experiences without
                    spending too much money on resources.
                    <br />
                    <strong className="text-blue-300">
                      3. What are the primary features to be looked at in a CRM?
                    </strong>
                    <br />
                    The CRM provides some key features to these following:
                    <br />
                    ● Contact and lead management
                    <br />
                    ● Sales pipeline tracking
                    <br />
                    ● Marketing automation
                    <br />
                    ● Reporting and analytics
                    <br />
                    ● Integration with other tools (Email, Calendars, etc.)
                    <br />
                    ● Mobile Accessibility
                    <br />
                    The functionalities above increase productivity and
                    decision-making.
                    <br />
                    <strong className="text-blue-300">
                      4. How can CRM contribute to customer satisfaction?
                    </strong>
                    <br />
                    Well, CRM provides user data, interaction records, and
                    insight into customer preferences. This allows businesses to
                    deliver personalized services, stretch a hand in responding
                    promptly to concerns, and waste their time on issues to
                    achieve a higher degree of satisfaction and loyalty from the
                    customer.
                    <br />
                    <strong className="text-blue-300">
                      5. How difficult is it to implement a CRM?
                    </strong>
                    <br />
                    The implementation of CRM varies case by case depending on
                    the complexity of the system and the size of the business.
                    However, several CRMs offer interfaces that are easy to use
                    and onboarding support for training and tutorials. Going
                    forward, working with a CRM implementation team will
                    simplify the process.
                    <br />
                    <strong className="text-blue-300">
                      6. Can CRM integrate with other tools and software?
                    </strong>
                    <br />
                    In short, yes. Most of the modern and latest CRM versions
                    easily integrate with lots of other tools and software,
                    mainly emails, project management, e-commerce storefronts,
                    and accounting software. Such integrations facilitate smooth
                    workflows and harmonized data sync between each of your
                    business systems.
                    <br />
                    Additionally, Jaikvik Technology's CRM supports industries
                    like manufacturing (for supply chain management),
                    hospitality (for guest experience tracking), and finance
                    (for client portfolio management). For example, a retail
                    business might use our CRM to reduce cart abandonment by 25%
                    through automated reminders, while a healthcare provider
                    could cut appointment no-shows by 15% with SMS
                    notifications. Whatever your sector, our CRM delivers
                    measurable results tailored to your unique challenges.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(3)}
                className="flex items-center justify-center w-full md:w-auto mx-auto text-blue-400 font-medium mt-6 px-6 py-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Toggle CRM Use Cases"
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
                src="https://img.freepik.com/free-vector/gradient-crm-infographic_23-2149379654.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="CRM Use Cases"
                className="w-full h-96 rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section with Parallax Effect */}
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
            Ready to Transform Your Customer Relationships?
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our CRM solutions can streamline your operations, boost
            sales, and enhance customer satisfaction.
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
export default CRMPage;
