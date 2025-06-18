import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ErpPage = () => {
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
    threshold: 0.1,
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
          backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379505.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740')`,
        }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        aria-label="ERP Solutions Hero"
        id="erp-hero"
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
            Transform Your Business with ERP
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Unlock the power of enterprise resource planning with Jaikvik
            Technology
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("erp-overview")}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            aria-label="Explore ERP Solutions"
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
        id="erp-overview"
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
                What Is ERP?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                ERP, which stands for Enterprise Resource Planning, refers to a
                strategic method of managing and integrating the core business
                processes of a company. It combines technology, processes, and
                data to efficiently operate finance, supply chain,
                manufacturing, human resources, and other business functions.
                <br />
                ERP systems act as a central hub for businesses to manage vital
                operational data: inventory levels, production schedules,
                financial records, employee information, etc. It is not merely a
                large database but the operational backbone of an organization,
                facilitating collaboration across departments, automating
                routine tasks, and providing real-time visibility into business
                performance.
                <br />
                Modern ERP systems feature artificial intelligence insights,
                advanced analytics, and integration capabilities that help
                businesses make data-driven decisions and improve operational
                efficiency. ERP solutions are essential for businesses of all
                sizes and across all industries, helping them streamline
                operations and drive growth.
                {expandedSections[0] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <br />
                    At Jaikvik Technology, our ERP solutions are designed to
                    empower businesses by integrating seamlessly with existing
                    systems, offering customizable workflows, and providing
                    real-time insights. Whether you're a small startup or a
                    large enterprise, our ERP adapts to your needs, ensuring you
                    have complete control over your business processes. From
                    inventory management to financial reporting, ERP transforms
                    how businesses operate and compete in today's digital
                    economy.
                    <br />
                    In today's fast-paced business environment, companies must
                    optimize their operations to stay competitive. An ERP system
                    is not just a tool but a strategic asset that helps
                    organizations automate processes, reduce costs, and improve
                    decision-making. By leveraging ERP, businesses can enhance
                    productivity, improve customer service, and gain a
                    competitive edge. For instance, a manufacturing company
                    using ERP can optimize production schedules based on
                    real-time demand, while a retail business can use it to
                    manage inventory across multiple locations, reducing
                    stockouts and overstock situations.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(0)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ x: 5 }}
                aria-label="Toggle ERP Description"
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
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379505.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="ERP Solutions"
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
                What Does ERP Do?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                At its core, an ERP system is designed to integrate and automate
                core business processes. Here is the rundown on its
                functionality:
                <br />
                <strong className="text-blue-300">
                  Centralizing Business Data
                </strong>
                <br />
                ERP systems consolidate data from various departments into a
                single database. This includes financial records, inventory
                levels, production schedules, and human resources information.
                This ensures data consistency and provides real-time visibility
                across the organization.
                <br />
                <strong className="text-blue-300">
                  Streamlining Operations
                </strong>
                <br />
                An ERP system connects different business functions, eliminating
                data silos and improving workflow efficiency. This enables
                departments to work together more effectively and reduces manual
                data entry.
                <br />
                {expandedSections[1] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <strong className="text-blue-300">
                      Automation of Business Processes
                    </strong>
                    <br />
                    ERP systems automate routine tasks such as order processing,
                    inventory updates, payroll calculations, and financial
                    reporting. This reduces errors, saves time, and allows
                    employees to focus on higher-value activities.
                    <br />
                    <strong className="text-blue-300">
                      Financial Management
                    </strong>
                    <br />
                    ERP provides comprehensive financial tools including general
                    ledger, accounts payable/receivable, budgeting, and
                    financial reporting. This gives businesses better control
                    over their finances and improves regulatory compliance.
                    <br />
                    <strong className="text-blue-300">
                      Supply Chain Management
                    </strong>
                    <br />
                    ERP helps manage the entire supply chain from procurement to
                    delivery, optimizing inventory levels, reducing lead times,
                    and improving supplier relationships.
                    <br />
                    Beyond these essentials, Jaikvik Technology's ERP offers
                    advanced features like AI-driven demand forecasting, mobile
                    access for remote management, and integration with tools
                    like e-commerce platforms, CRM systems, and business
                    intelligence software. This ensures your business stays
                    agile and competitive in today's dynamic market.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(1)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                aria-label="Toggle ERP Functionality"
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
                src="https://img.freepik.com/free-photo/enterprise-resource-planning-holographic-interface_23-2149092251.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="ERP Features"
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
                Why Should Enterprises Opt for ERP?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                There are so many reasons why ERP systems are essential:
                <br />
                <strong className="text-blue-300">
                  Operational Efficiency:
                </strong>{" "}
                ERP eliminates redundant processes and automates routine tasks,
                significantly improving productivity.
                <br />
                <strong className="text-blue-300">Data Visibility:</strong> With
                real-time reporting and analytics, ERP provides actionable
                insights that help businesses make informed decisions.
                <br />
                <strong className="text-blue-300">Scalability:</strong> ERP
                systems grow with your business, adapting to changing needs and
                supporting expansion.
                <br />
                <strong className="text-blue-300">Cost Reduction:</strong> By
                improving efficiency and reducing errors, ERP systems help lower
                operational costs.
                <br />
                {expandedSections[2] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    <strong className="text-blue-300">
                      Regulatory Compliance:
                    </strong>{" "}
                    ERP systems help maintain accurate records and generate
                    reports needed for compliance with industry regulations.
                    <br />
                    <strong className="text-blue-300">
                      Core Components Of ERP
                    </strong>
                    <br />
                    A comprehensive ERP system typically includes these key
                    modules:
                    <br />
                    <strong className="text-blue-300">
                      Financial Management
                    </strong>
                    <br />
                    The foundation of any ERP system, managing accounting,
                    budgeting, and financial reporting.
                    <br />
                    <strong className="text-blue-300">
                      Supply Chain Management
                    </strong>
                    <br />
                    Tools for procurement, inventory control, order management,
                    and logistics.
                    <br />
                    <strong className="text-blue-300">Manufacturing</strong>
                    <br />
                    Production planning, scheduling, quality control, and shop
                    floor management.
                    <br />
                    <strong className="text-blue-300">Human Resources</strong>
                    <br />
                    Employee records, payroll, benefits administration, and
                    talent management.
                    <br />
                    <strong className="text-blue-300">
                      Customer Relationship Management
                    </strong>
                    <br />
                    Sales automation, customer service, and marketing tools
                    (often integrated with standalone CRM systems).
                    <br />
                    <strong className="text-blue-300">
                      Business Intelligence
                    </strong>
                    <br />
                    Advanced reporting, analytics, and data visualization
                    capabilities.
                    <br />
                    Enterprises choosing Jaikvik Technology's ERP also benefit
                    from enhanced security with role-based access controls, 24/7
                    support, and regular updates that keep your system aligned
                    with industry best practices. Studies show businesses using
                    ERP can see up to a 40% reduction in operational costs and a
                    30% improvement in order fulfillment times—proof that ERP is
                    a strategic investment in business success.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(2)}
                className="flex items-center text-blue-400 font-medium mt-4 transition-colors duration-300 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle ERP Benefits"
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
                src="https://img.freepik.com/premium-vector/enterprise-resource-planning-erp-modules-finance-procurement-manufacturing-inventory_518018-2415.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="ERP Benefits"
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
                ERP for Different Industries
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-gray-300 leading-relaxed mb-4"
              >
                The use of ERP has expanded across many industries today,
                providing tailored solutions for specific operational needs.
                Here's how various sectors leverage ERP to improve efficiency
                and drive growth:
                <br />
                <strong className="text-blue-300">1. Manufacturing</strong>
                <br />
                ● ERP helps manufacturers optimize production schedules, manage
                inventory, and maintain quality control.
                <br />
                ● It provides real-time visibility into shop floor operations
                and helps coordinate supply chain activities.
                <br />
                <strong className="text-blue-300">2. Retail</strong>
                <br />
                ● Retailers use ERP to manage inventory across multiple
                locations, analyze sales trends, and streamline purchasing.
                <br />
                {expandedSections[3] && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="block mt-4"
                  >
                    ● It integrates with e-commerce platforms to provide a
                    unified view of online and in-store sales.
                    <br />
                    <strong className="text-blue-300">3. Healthcare</strong>
                    <br />
                    ● Healthcare providers use ERP to manage patient records,
                    schedule appointments, and track medical supplies.
                    <br />
                    ● It helps maintain compliance with healthcare regulations
                    and improves billing accuracy.
                    <br />
                    <strong className="text-blue-300">4. Construction</strong>
                    <br />
                    ● ERP systems help construction firms manage projects, track
                    equipment, and control costs.
                    <br />
                    ● They provide tools for job costing, subcontractor
                    management, and resource allocation.
                    <br />
                    <strong className="text-blue-300">
                      5. Professional Services
                    </strong>
                    <br />
                    ● Consulting firms and agencies use ERP to track projects,
                    manage resources, and invoice clients.
                    <br />
                    ● It helps optimize utilization rates and improve project
                    profitability.
                    <br />
                    ERP solutions can be customized to meet the unique
                    requirements of virtually any industry, helping
                    organizations streamline operations, reduce costs, and
                    improve decision-making.
                    <br />
                    <strong className="text-blue-300">
                      Who Can Implement ERP?
                    </strong>
                    <br />
                    ERP systems are valuable for organizations of all sizes and
                    across all industries. Here's who can benefit from ERP
                    implementation:
                    <br />
                    <strong className="text-blue-300">
                      1. Small Businesses
                    </strong>
                    <br />
                    ● Small businesses use ERP to automate processes and gain
                    better visibility into their operations.
                    <br />
                    ● Cloud-based ERP solutions make it affordable for SMBs to
                    access enterprise-grade functionality.
                    <br />
                    <strong className="text-blue-300">
                      2. Mid-Sized Companies
                    </strong>
                    <br />
                    ● Growing companies use ERP to support expansion and manage
                    increasing complexity.
                    <br />
                    ● ERP helps them compete with larger enterprises by
                    improving efficiency and scalability.
                    <br />
                    <strong className="text-blue-300">
                      3. Large Enterprises
                    </strong>
                    <br />
                    ● Multinational corporations rely on ERP to standardize
                    processes across locations and business units.
                    <br />
                    ● Advanced ERP systems support global operations with
                    multi-currency and multi-language capabilities.
                    <br />
                    <strong className="text-blue-300">
                      4. Manufacturing Companies
                    </strong>
                    <br />
                    ● Manufacturers use ERP to optimize production, manage
                    supply chains, and maintain quality standards.
                    <br />
                    <strong className="text-blue-300">
                      5. Distribution Companies
                    </strong>
                    <br />
                    ● Wholesalers and distributors use ERP to manage inventory,
                    optimize logistics, and improve order fulfillment.
                    <br />
                    <strong className="text-blue-300">
                      6. Service Organizations
                    </strong>
                    <br />
                    ● Professional services firms use ERP to track projects,
                    manage resources, and bill clients accurately.
                    <br />
                    <strong className="text-blue-300">
                      7. Nonprofit Organizations
                    </strong>
                    <br />
                    ● Nonprofits use ERP to manage donations, track programs,
                    and ensure financial accountability.
                    <br />
                    <strong className="text-blue-300">
                      8. Government Agencies
                    </strong>
                    <br />
                    ● Public sector organizations use ERP to improve
                    transparency, manage budgets, and deliver services
                    efficiently.
                    <br />
                    <strong className="text-blue-300">
                      Benefits of Using an ERP
                    </strong>
                    <br />
                    Implementing an ERP system delivers numerous advantages that
                    can transform how a business operates:
                    <br />
                    <strong className="text-blue-300">
                      Improved Efficiency:
                    </strong>{" "}
                    By automating processes and eliminating redundant data
                    entry, ERP significantly increases productivity.
                    <br />
                    <strong className="text-blue-300">
                      Better Decision Making:
                    </strong>{" "}
                    Real-time data and analytics provide insights that help
                    managers make informed decisions.
                    <br />
                    <strong className="text-blue-300">
                      Enhanced Collaboration:
                    </strong>{" "}
                    ERP breaks down silos by providing a single source of truth
                    accessible across departments.
                    <br />
                    <strong className="text-blue-300">
                      Regulatory Compliance:
                    </strong>{" "}
                    Built-in controls and audit trails help businesses meet
                    industry and government regulations.
                    <br />
                    <strong className="text-blue-300">Scalability:</strong> ERP
                    systems grow with your business, supporting expansion into
                    new markets and product lines.
                    <br />
                    <strong className="text-blue-300">
                      Key Attributes of Modern ERP
                    </strong>
                    <br />
                    Today's ERP systems offer features designed to meet the
                    needs of modern businesses:
                    <br />
                    <strong className="text-blue-300">
                      Cloud Deployment:
                    </strong>{" "}
                    Accessible from anywhere with an internet connection, with
                    automatic updates.
                    <br />
                    <strong className="text-blue-300">
                      Mobile Access:
                    </strong>{" "}
                    Managers can approve workflows and view reports from
                    smartphones and tablets.
                    <br />
                    <strong className="text-blue-300">
                      AI and Machine Learning:
                    </strong>{" "}
                    Predictive analytics and intelligent automation improve
                    forecasting and decision-making.
                    <br />
                    <strong className="text-blue-300">
                      Integration Capabilities:
                    </strong>{" "}
                    ERP connects with other business systems like CRM,
                    e-commerce, and BI tools.
                    <br />
                    <strong className="text-blue-300">
                      Implementing an ERP Solution
                    </strong>
                    <br />
                    Successful ERP implementation requires careful planning and
                    execution. Here are the key steps:
                    <br />
                    <strong className="text-blue-300">
                      Define Business Requirements:
                    </strong>{" "}
                    Identify pain points and objectives to determine what you
                    need from an ERP system.
                    <br />
                    <strong className="text-blue-300">
                      Select the Right ERP:
                    </strong>{" "}
                    Choose a solution that fits your industry, size, and
                    specific business needs.
                    <br />
                    <strong className="text-blue-300">
                      Prepare Your Data:
                    </strong>{" "}
                    Cleanse and organize data before migration to ensure
                    accuracy in the new system.
                    <br />
                    <strong className="text-blue-300">
                      Train Your Team:
                    </strong>{" "}
                    Comprehensive training ensures users adopt the system and
                    leverage its full potential.
                    <br />
                    <strong className="text-blue-300">
                      Go Live and Optimize:
                    </strong>{" "}
                    Launch the system and continuously refine processes to
                    maximize benefits.
                    <br />
                    <strong className="text-blue-300">
                      Start Your ERP Journey with Jaikvik Technology
                    </strong>
                    <br />
                    Implementing ERP with Jaikvik Technology ensures your
                    business gets a solution tailored to your unique
                    requirements. We specialize in delivering innovative ERP
                    strategies that streamline operations, improve visibility,
                    and drive growth. Our team works closely with you to
                    understand your business processes and recommend the ideal
                    ERP solution that will transform your operations.
                    <br />
                    Jaikvik Technology is recognized as a leading provider of
                    ERP solutions in Delhi NCR. Our ERP systems are designed to
                    increase efficiency, reduce costs, and provide the
                    flexibility to adapt to your evolving business needs.
                    Whether you need to manage complex manufacturing processes,
                    optimize your supply chain, or gain better financial
                    control, our ERP solutions deliver the functionality and
                    user-friendly interface your team needs to succeed.
                    <br />
                    Partner with Jaikvik Technology to transform your business
                    operations with a powerful, integrated ERP system. Let us
                    help you achieve operational excellence and position your
                    company for sustainable growth!
                    <br />
                    <strong className="text-blue-300">
                      Here are 6 frequently asked questions (FAQs) for ERP:
                    </strong>
                    <br />
                    <strong className="text-blue-300">
                      1. What is ERP and why is it important for businesses?
                    </strong>
                    <br />
                    ERP (Enterprise Resource Planning) is software that
                    integrates and automates core business processes. It's
                    important because it improves efficiency, provides real-time
                    data visibility, reduces costs, and helps businesses scale
                    operations effectively.
                    <br />
                    <strong className="text-blue-300">
                      2. Is ERP suitable for small businesses?
                    </strong>
                    <br />
                    Yes, modern cloud-based ERP systems are affordable and
                    scalable, making them ideal for small businesses looking to
                    streamline operations and support growth.
                    <br />
                    <strong className="text-blue-300">
                      3. What are the key features to look for in an ERP system?
                    </strong>
                    <br />
                    Essential ERP features include:
                    <br />
                    ● Financial management
                    <br />
                    ● Inventory and supply chain management
                    <br />
                    ● Production planning (for manufacturers)
                    <br />
                    ● Reporting and analytics
                    <br />
                    ● Integration capabilities
                    <br />
                    ● User-friendly interface
                    <br />
                    <strong className="text-blue-300">
                      4. How long does ERP implementation typically take?
                    </strong>
                    <br />
                    Implementation timelines vary based on business size and
                    complexity. Small businesses might implement in 3-6 months,
                    while large enterprises may take 12-18 months for a full
                    rollout.
                    <br />
                    <strong className="text-blue-300">
                      5. What's the difference between ERP and accounting
                      software?
                    </strong>
                    <br />
                    While accounting software focuses only on financial
                    transactions, ERP integrates all business functions
                    including finance, operations, HR, and more, providing a
                    complete view of the organization.
                    <br />
                    <strong className="text-blue-300">
                      6. Can ERP integrate with other business systems?
                    </strong>
                    <br />
                    Yes, modern ERP systems can integrate with CRM, e-commerce
                    platforms, business intelligence tools, and other
                    specialized applications to create a unified business
                    management ecosystem.
                    <br />
                    Additionally, Jaikvik Technology's ERP supports industries
                    like education (for student information systems),
                    agriculture (for farm management), and logistics (for fleet
                    management). For example, a food processing company might
                    use our ERP to reduce inventory waste by 20% through better
                    demand forecasting, while a professional services firm could
                    improve billable utilization by 15% with resource management
                    tools. Whatever your industry, our ERP delivers measurable
                    results tailored to your specific challenges.
                  </motion.span>
                )}
              </motion.p>
              <motion.button
                onClick={() => toggleSection(3)}
                className="flex items-center justify-center w-full md:w-auto mx-auto text-blue-400 font-medium mt-6 px-6 py-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Toggle ERP Use Cases"
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
                src="https://img.freepik.com/free-vector/erp-infographic_23-2149371099.jpg?uid=R186472209&ga=GA1.1.455755995.1738954286&semt=ais_hybrid&w=740"
                alt="ERP Use Cases"
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
            Ready to Transform Your Business with ERP?
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our ERP solutions can streamline your operations,
            reduce costs, and enhance decision-making.
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

export default ErpPage;
