import cloud from "@/public/cloud-service.svg";
import salesforce from "@/public/salesforce.svg";
import azure from "@/public/azure.svg";
import gcp from "@/public/gcp.svg";
import cybersecurity from "@/public/cyber-security.svg";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import secure from "@/public/secure.svg";
import aws from "@/public/aws.svg";
import itsupport from "@/public/it-support.svg";
import offshore from "@/public/offshore-dev.svg";

const blogs = {
  children: [
    {
      image: "http://localhost:3000/cloud-security.jpg",
      title:
        "7 effective ways to maximize your cloud security for enhanced protection",
      content:
        "In the cloud revolution, securing data against breaches is crucial for the 94% of enterprises using cloud services, as this blog will explore.",
      link: "/perspectives/7-ways-to-maximize-your-cloud-security",
    },
    {
      image: "http://localhost:3000/robotic-process.jpg",
      title: "Boost your enterprise innovation with robotic process automation",
      content:
        "In today's digital environment, innovation and robotic process automation are essential for streamlining procedures and driving growth.",
      link: "/perspectives/boost-your-enterprise-innovation-with-robotic-process-automation",
    },
    {
      image: "http://localhost:3000/block-chain-banking.jpg",
      title: "How blockchain redefines business and banking",
      content:
        "Since Satoshi Nakamoto introduced Blockchain, the term emphasizes its unalterable nature, offering security to financial moguls.",
      link: "/perspectives/how-blockchain-redefines-business-and-banking",
    },
    {
      image: "http://localhost:3000/cloud-computing.jpg",
      title:
        "Navigating the cloud landscape: 5 key strategies for effective cloud assessment",
      content: "Content",
      link: "/perspectives/navigating-the-cloud-landscape",
    },
  ],
  pageNumber: 0,
};

const caseStudies = {
  children: [
    {
      image: "http://localhost:3000/enhancing-patient-care.jpg",
      title: "Enhancing patient care with BI and SQL analytics at qcentrio",
      content:
        "The client aimed to enhance their Java app for better population health analytics and healthcare insights.",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },

    {
      image: "http://localhost:3000/land-management.jpg",
      title:
        "Land Management in India Leading State with a Blockchain Platform",
      content:
        "Leading Indian state transforms land management with innovative Blockchain platform for streamlined processes and transparency.",
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
    },
    {
      image: "http://localhost:3000/automatic-vehicle.jpg",
      title:
        "Automating Vehicle Aerodynamics Simulations for Automotive Company",
      content:
        "Automotive company automates vehicle aerodynamics simulations for enhanced efficiency and performance in product development.",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: "http://localhost:3000/sharepoint-ecosystem.jpg",
      title:
        "Transforming pharmaceutical major’s sharepoint ecosystem with azure",
      content: "Content",
      link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
    },
  ],
  pageNumber: 0,
};

const thoughtLeadership = {
  children: [
    {
      title: "Enhancing patient care with bi and sql analytics at qcentrio",
      content: "Content",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },
    {
      title:
        "Transforming pharmaceutical major’s sharepoint ecosystem with azure migration",
      content: "Content",
      link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
    },
  ],
  pageNumber: 0,
};

export async function search(type, item, page) {
  if (type == "perspectives") {
    if (item != "") {
      const data = prepareDataWithItem(blogs, item, page);
      return data;
    } else {
      const data = prepareData(blogs, page);
      return data;
    }
  } else if (type == "case-study") {
    if (item != "") {
      const data = prepareDataWithItem(caseStudies, item, page);
      return data;
    } else {
      const data = prepareData(caseStudies, page);
      return data;
    }
  } else if (type == "thought-leadership") {
    if (item != "") {
      const data = prepareDataWithItem(thoughtLeadership, item, page);
      return data;
    } else {
      const data = prepareData(thoughtLeadership, page);
      return data;
    }
  }
}

function prepareDataWithItem(type, item, page) {
  const startIndex = (page - 1) * 3;

  const results = type.children.filter((element) =>
    element.title.toLowerCase().includes(item.toLowerCase())
  );
  const sortedData = results.slice(startIndex, startIndex + 3);
  const pageNumber = Math.ceil(results.length / 3);
  const newData = {
    children: [...sortedData],
    pageNumber: pageNumber,
  };
  return newData;
}

function prepareData(type, page) {
  const startIndex = (page - 1) * 3;

  const pageNumber = Math.ceil(type.children.length / 3);
  const sortedData = type.children.slice(startIndex, startIndex + 3);
  const newData = {
    children: [...sortedData],
    pageNumber: pageNumber,
  };

  return newData;
}

//Main Service Pages data
const mainServicesContent = {
  0: {
    banner: "../../advanced-technology-solutions.png",
    breadCrump: "ADVANCED TECHNOLOGY SOLUTIONS",
    mainHeading:
      "DRIVE ENTERPRISE-WIDE EFFICIENCY, INNOVATION, AND GROWTH WITH ADVANCED TECHNOLOGY SOLUTIONS",
    glimpseContent: {
      heading1: "Transform Your Business and Operations with Qcentrio",
      heading2: "Here's how we've helped our <span>customers win</span>",
      content1:
        "Business operations that drive growth require a mix of tailored, innovative, advanced technology solutions that propel professionals who can steer it forward.",
      content2:
        "At Qcentrio, we cater to various industries, including Consumer Electronics, Automotive, Aerospace, Medical Devices, Telecom, Servers/storage, and Semiconductors. Our bespoke technology solutions are created to address your unique business challenges, enabling improved decision-making and heightened operational efficiency. Designed for agility and scalability, our solutions evolve with your business needs. And with round-the-clock support from certified professionals, you can rest assured of smooth operation and maintenance of your systems.",
      subheading:
        "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
    },
    servicesContent: {
      heading: "NAVIGATE THE FUTURE CONFIDENTLY",
      subheading:
        "With Bespoke Technology Solutions For <span>Business Growth</span> And <span>Operational Excellence</span>",
      children: [
        {
          image: cloud,
          heading: "ERP Solutions Support",
          content:
            "Empower your modern-day enterprise with ERP solutions support for integrating and managing core business processes. Streamline your business operations, enhance efficiency, and gain critical insights with our ERP solutions support to ensure your organization stays competitive and agile.",
        },
        {
          image: salesforce,
          heading: "Comprehensive SAP Services",
          content:
            "Unlock the full potential of your business with our portfolio of SAP services, including implementation, migration, and support. Our focus on SAP S/4HANA, SAP CRM & Customer Experience, and SAP Analytics ensures you leverage the most advanced tools in the market.",
        },
        {
          image: azure,
          heading: "Product Engineering Services",
          content:
            "Lift your software solutions with Qcentrio's product engineering services, which are born from our commitment to innovation and modern technology trends. We cater to the evolving needs of businesses and consumers by creating and enhancing software that stays ahead of the curve.",
        },
        {
          image: gcp,
          heading: "Custom Software / Application Development ",
          content:
            "Specializing in JAVA, MEAN Stack, and Full Stack development, we deliver bespoke software solutions to meet your unique business requirements. Enhance your operations with our tailored expertise in custom software development.",
        },
        {
          image: cybersecurity,
          heading: "Internet of Things (IoT) Solutions",
          content:
            "Lead the future with Qcentrio's advanced IoT solutions. Seamlessly integrate advanced IoT technology into your operations to enhance performance and operational efficiency. Stay ahead with us, your partner in driving innovation and success through IoT.",
        },
        {
          image: cybersecurity,
          heading: "Big Data Services and Solutions",
          content:
            "Harness the power of your data with our big data services. Our expertise in handling large data sets allows you to extract meaningful insights and make informed decisions that drive growth and innovation. Transform complex data into actionable intelligence with our big data solutions.",
        },
      ],
    },
    strategicPathContent: {
      upperheading: "QCENTRIO’S",
      heading:
        "Strategic Digital Roadmap to Providing Advisory and Strategic Services",
      accordation1: [
        {
          index: 1,
          title: "Transformation Strategies",
          content:
            "Creating bespoke transformation strategies aligning with your core business goals.",
        },
        {
          index: 2,
          title: "Domain Leadership",
          content:
            "Customizing digital services and solutions, enabling you to lead in your domain.",
        },
        {
          index: 3,
          title: "Success Stories",
          content:
            "Highlighting success stories where our digital strategies have significantly improved business operations.",
        },
      ],
      accordation2: [
        {
          index: 4,
          title: "Streamlined Operations",
          content:
            "Implementing custom solutions to streamline your business processes and operations.",
        },
        {
          index: 5,
          title: "Risk Mitigation",
          content:
            "Introducing strategic measures to minimize digital adoption risks, ensuring a smooth transition.",
        },
        {
          index: 6,
          title: "Strategic Timelines",
          content:
            "Setting strategic timelines for agile, phased rollouts, prioritizing quick wins and scalable, long-term growth.",
        },
      ],
    },
    successpathContent: {
      heading1:
        "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
      cards1: [
        {
          number: 1,
          heading: "People-First Approach",
          content:
            "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
          percentage: "90%",
          highlight: "NPS Across Engagements",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
          percentage: "50%",
          highlight: "YoY Growth",
        },
      ],
      heading2: "Category-Leading Advanced Technology Solutions Expertise",
      cards2: [
        {
          image: settings,
          title: "Flexible and Agile Team",
          content:
            "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
        },
        {
          image: strategy,
          title: "End-to-End Execution",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Round the Clock Support",
          content:
            "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
        },
        {
          image: cloud,
          title: "Data-Driven Decision Making",
          content:
            "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
        },
      ],
    },
  },
  1: {
    banner: "../../advisory-and-strategic-services.png",
    breadCrump: "ADVISORY AND STRATEGIC SERVICES",
    mainHeading:
      "EMPOWER YOUR DIGITAL STRATEGY WITH CATEGORY-LEADING ADVISORY AND STRATEGIC SERVICES",
    glimpseContent: {
      heading1: "Transform Your Digital Strategy into a Competitive Advantage",
      heading2: "Here's how we've helped our <span>customers win</span>",
      content1:
        "Enterprises constantly seek agility and strategic positioning to sustain and propel growth in the increasingly data-compliant market.",
      content2:
        "Qcentrio, a significant provider of advisory and strategic services, offers expert guidance to navigate these critical transformations. We specialize in EHR integration, like EPIC and Oracle Cerner, which ensures seamless digital alignment with your health IT systems. Our Audit and Assurance experts uphold your digital integrity while our risk advisory navigates cybersecurity and compliance challenges. For M&As, we offer strategic guidance for digital due diligence and integration, maximizing value and efficiency.",
      subheading: "Enhancing Patient Care with BI and SQL Analytics",
    },
    servicesContent: {
      heading: "NAVIGATE THE FUTURE CONFIDENTLY",
      subheading:
        "With Bespoke Technology Solutions For <span>Business Growth</span> And <span>Operational Excellence</span>",
      children: [
        {
          image: cloud,
          heading: "EPIC Advisory Services",
          content:
            "Integrate and efficiently manage patient health data with expert EPIC advisory services. Our experts navigate the complexities of compliance, data standards, and programming languages to optimize your Epic solutions. ",
        },
        {
          image: salesforce,
          heading: "Oracle Cerner Advisory Services",
          content:
            "Seamlessly integrate Oracle Cerner's advanced EHR systems with your hospital's diverse information systems to overcome the challenges of data standard variability and programming language differences.",
        },
        {
          image: azure,
          heading: "Audit and Assurance Services",
          content:
            "Ensure your digital systems' security, compliance, and reliability with our comprehensive audit and assurance services. Our team employs advanced tools, specialized skills, and robust software to safeguard your digital infrastructure, giving you peace of mind and fostering stakeholder trust.",
        },
        {
          image: gcp,
          heading: "Risk Advisory Services",
          content:
            "Protect your organization from digital threats with our expert risk advisory services. Our team specializes in identifying, analyzing, and mitigating digital risks, utilizing advanced tools, skills, and software to provide strategic advice and solutions.",
        },
        {
          image: cybersecurity,
          heading: "Specialty Services",
          content:
            "Ensure your digital products meet the highest standards with our Quality Assurance (QA) services. Our team leverages advanced tools, specialized skills, and robust software to enhance the quality and performance of your digital offerings.",
        },
      ],
    },
    strategicPathContent: {
      upperheading: "QCENTRIO’S",
      heading:
        "Strategic Digital Roadmap to Providing Advisory and Strategic Services",
      accordation1: [
        {
          index: 1,
          title: "Transformation Strategies",
          content:
            "Creating bespoke transformation strategies aligning with your core business goals.",
        },
        {
          index: 2,
          title: "Domain Leadership",
          content:
            "Customizing digital services and solutions, enabling you to lead in your domain.",
        },
        {
          index: 3,
          title: "Success Stories",
          content:
            "Highlighting success stories where our digital strategies have significantly improved business operations.",
        },
      ],
      accordation2: [
        {
          index: 4,
          title: "Streamlined Operations",
          content:
            "Implementing custom solutions to streamline your business processes and operations.",
        },
        {
          index: 5,
          title: "Risk Mitigation",
          content:
            "Introducing strategic measures to minimize digital adoption risks, ensuring a smooth transition.",
        },
        {
          index: 6,
          title: "Strategic Timelines",
          content:
            "Setting strategic timelines for agile, phased rollouts, prioritizing quick wins and scalable, long-term growth.",
        },
      ],
    },
    successpathContent: {
      heading1:
        "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
      cards1: [
        {
          number: 1,
          heading: "People-First Approach",
          content:
            "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
          percentage: "90%",
          highlight: "NPS Across Engagements",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
          percentage: "50%",
          highlight: "YoY Growth",
        },
      ],
      heading2: "Category-Leading Advanced Technology Solutions Expertise",
      cards2: [
        {
          image: settings,
          title: "Flexible and Agile Team",
          content:
            "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
        },
        {
          image: strategy,
          title: "End-to-End Execution",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Round the Clock Support",
          content:
            "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
        },
        {
          image: cloud,
          title: "Data-Driven Decision Making",
          content:
            "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
        },
      ],
    },
  },
  2: {
    banner: "../../blockchain-advisory-and-offerings.png",
    breadCrump: "BLOCKCHAIN ADVISORY AND OFFERINGS",
    mainHeading:
      "CREATE A RELIABLE, TRUSTED, AND SUSTAINABLE ECOSYSTEM FOR YOUR ENTERPRISE WITH BLOCKCHAIN ADVISORY AND OFFERINGS",
    glimpseContent: {
      heading1: "Embrace a Future of Security, Efficiency, and Innovation",
      heading2: "Here's how we've helped our <span>customers win</span>",
      content1:
        "Blockchain technology holds the key to transforming your enterprise operations. From enhancing supply chain transparency to streamlining financial transactions, blockchain's distributed database can revolutionize various business and public-sector applications.",
      content2:
        "At Qcentrio, we specialize in accelerating enterprise blockchain adoption. We guide you toward a future where your operations are more secure, efficient, and limitless. Our blockchain advisory and solutions empower businesses to harness the full potential of blockchain technology, transforming their operations and setting new benchmarks in their respective industries.",
      subheading:
        "Transforming Land Management in India’s Leading State with a Blockchain Platform",
    },
    servicesContent: {
      heading: "ESTABLISH DATA TRUST AND TRANSPARENCY",
      subheading: "Empowering Numerous <span>Impactful Applications</span>",
      children: [
        {
          image: cloud,
          heading: "Blockchain Strategy and Advisory",
          content:
            "Discover blockchain's potential for your business and develop a strategic implementation plan. Collaborate with our team to identify and validate impactful use cases for blockchain in your organization. Further, assess your blockchain project's technical and economic viability with our thorough feasibility studies.",
        },
        {
          image: salesforce,
          heading: "Blockchain Solution Development",
          content:
            "Design and develop scalable, secure, and interoperable blockchain solutions, including decentralized applications (DApps) that offer enhanced transparency, security, and user experience.",
        },
        {
          image: azure,
          heading: "Blockchain Integration and Deployment",
          content:
            "Seamlessly integrate blockchain technology into your existing systems and processes, ensuring smooth operation and minimal disruption. Our team deploys and rigorously tests your blockchain solution for optimal performance.",
        },
        {
          image: gcp,
          heading: "Blockchain Security and Compliance",
          content:
            "Ensure the integrity and safety of your blockchain solution by conducting audits to identify and address any potential vulnerabilities. We ensure your blockchain solution adheres to the latest regulations and industry standards, minimizing legal and operational risks.",
        },
      ],
    },
    strategicPathContent: {
      upperheading: "QCENTRIO’S",
      heading: "Strategic Path to Blockchain Advisory and Offerings",
      accordation1: [
        {
          index: 1,
          title: "Stakeholder Engagement",
          content:
            "Collaborate closely with stakeholders to understand their needs and challenges.",
        },
        {
          index: 2,
          title: "Design and Development",
          content: "Create blockchain solutions per the client's needs.",
        },
        {
          index: 3,
          title: "Pilot Testing",
          content:
            "Test the solution in real-world scenarios and gather feedback.",
        },
      ],
      accordation2: [
        {
          index: 4,
          title: "Evaluation and Refinement",
          content:
            "Improve the solution based on feedback and technical assessments.",
        },
        {
          index: 5,
          title: "Rollout and Training",
          content:
            "Implement the solution across the organization and provide comprehensive training.",
        },
      ],
    },
    successpathContent: {
      heading1:
        "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
      cards1: [
        {
          number: 1,
          heading: "People-First Approach",
          content:
            "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
          percentage: "90%",
          highlight: "NPS Across Engagements",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
          percentage: "50%",
          highlight: "YoY Growth",
        },
      ],
      heading2: "Category-Leading Blockchain Advisory and Offerings",
      cards2: [
        {
          image: settings,
          title: "Flexible and Agile Team",
          content:
            "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
        },
        {
          image: strategy,
          title: "End-to-End Execution",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Round the Clock Support",
          content:
            "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
        },
        {
          image: cloud,
          title: "Data-Driven Decision Making",
          content:
            "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
        },
      ],
    },
  },
  3: {
    banner: "../../business-optimization-and-analytics-services.png",
    breadCrump: "BUSINESS OPTIMIZATION AND ANALYTICS SERVICES",
    mainHeading:
      "ACHIEVE OPERATIONAL EXCELLENCE AND GROWTH WITH BUSINESS OPTIMIZATION AND ANALYTICS SERVICES",
    glimpseContent: {
      heading1:
        "Unlock Top-Line and Bottom-Line Growth by Optimizing Your Business",
      heading2: "Here's how we've helped our <span>customers win</span>",
      content1:
        "Enterprises always seek new approaches and expertise to optimize their operations, productivity, and products to drive top-line and bottom-line growth.",
      content2:
        "At Qcentrio, our business optimization and analytics services enhance your operations by reviewing and improving processes, instilling best practices, and providing a clear roadmap for optimized processes. We support change management for a smooth transition and identify inefficiencies to save time and effort. Our comprehensive data solutions, custom CRM implementations, and integrated workspace approach streamline team coordination. Partner with us to unlock your business's full potential.",
      subheading:
        "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
    },
    servicesContent: {
      heading: "OPTIMIZE CORE BUSINESS PROCESSES",
      subheading:
        "And operations for <span>short-Term</span> and <span>long-Term</span> tangible benefits",
      children: [
        {
          image: cloud,
          heading: "Data Analytics and Business Intelligence",
          content:
            "Leverage our extensive expertise in Microsoft Power BI, Google Analytics, and Tableau, and integrate your enterprise data with platforms like SQL Server and Hadoop to enhance your analytics capabilities.",
        },
        {
          image: salesforce,
          heading: "Collaboration and Productivity Solutions",
          content:
            "Integrate collaboration and productivity tools like Microsoft Teams, Asana, and Slack to enhance your digital workspace. Our services boost project management, output, and communication.",
        },
        {
          image: azure,
          heading: "CRM System Solutions",
          content:
            "Maximize CRM potential with Salesforce, MS Dynamics, and SAP for sales efficiency. Enhance customer experiences with tailored Salesforce, HubSpot, and Zoho implementations for campaigns.",
        },
      ],
    },
    strategicPathContent: {
      upperheading: "QCENTRIO’S",
      heading: "Strategic Path to Business Optimization and Analytics",
      accordation1: [
        {
          index: 1,
          title: "Initial Assessment",
          content:
            "Evaluate current business processes and analytics capabilities.",
        },
        {
          index: 2,
          title: "Strategy Development",
          content:
            "Define a strategy for integrating analytics tools and platforms.",
        },
        {
          index: 3,
          title: "Custom Solution Design",
          content:
            "Craft tailored analytics solutions, including data warehousing and BI tools.",
        },
        {
          index: 4,
          title: "Implementation and Integration",
          content:
            "Deploy and integrate analytics solutions with existing systems.",
        },
      ],
      accordation2: [
        {
          index: 5,
          title: "Training and Adoption",
          content:
            "Train staff on new tools and promote adoption across the organization.",
        },
        {
          index: 6,
          title: "Continuous Improvement",
          content:
            "Measure performance, gather insights, and refine analytics solutions.",
        },
        {
          index: 7,
          title: "Ongoing Support",
          content:
            "Provide expert ongoing support and iterative enhancements to the analytics systems.",
        },
      ],
    },
    successpathContent: {
      heading1:
        "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
      cards1: [
        {
          number: 1,
          heading: "People-First Approach",
          content:
            "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
          percentage: "90%",
          highlight: "NPS Across Engagements",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
          percentage: "50%",
          highlight: "YoY Growth",
        },
      ],
      heading2: "Category-Leading Business Optimization and Analytics Services",
      cards2: [
        {
          image: settings,
          title: "Flexible and Agile Team",
          content:
            "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
        },
        {
          image: strategy,
          title: "End-to-End Execution",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Round the Clock Support",
          content:
            "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
        },
        {
          image: cloud,
          title: "Data-Driven Decision Making",
          content:
            "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
        },
      ],
    },
  },
  4: {
    banner: "../../business-value-enhancement-services.png",
    breadCrump: "BUSINESS VALUE ENHANCEMENT SERVICES",
    mainHeading:
      "FUEL GROWTH AND SCALE TIME TO INSIGHTS WITH BUSINESS VALUE ENHANCEMENT SERVICES",
    glimpseContent: {
      heading1: "Operationalize Next Gen Tech-Stack to Drive Rapid Insights",
      heading2: "Here's how we've helped our <span>customers win</span>",
      content1:
        "Globally, enterprises are investing heavily in building GenAI, AI/ML, and automation capabilities, but practice and maturity remain stagnant. Even as businesses plunge into quick adoption, they lack the proper framework and know-how to take advantage of it fully.",
      content2:
        "As a leading provider of business value enhancement services, Qcentrio leverages its extensive domain experience to help you unlock the full potential of GenAI, AI/ML, and RPA. Our strategic approach ensures long-term business transformation while delivering immediate wins, enabling you to stay ahead in the digital age.",
      subheading:
        "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
    },
    servicesContent: {
      heading: "DEFINE YOUR FUTURE TRAJECTORY",
      subheading:
        "With Advanced <span>Business Value Enhancement</span> Services",
      children: [
        {
          image: cloud,
          heading: "Generative AI Solutions and Offerings",
          content:
            "Partner with Qcentrio to harness Generative AI's transformative power, overcome challenges, and unlock unprecedented productivity and innovation in your operations. Transform your business with our bespoke GenAI solutions.",
        },
        {
          image: salesforce,
          heading: "Artificial Intelligence/Machine Learning Offerings",
          content:
            "Experience excellence with our AI and ML solutions, specializing in process automation, personalized customer experiences, and predictive/prescriptive insights to drive your business forward.",
        },
        {
          image: azure,
          heading: "Robotic Process Automation Services",
          content:
            "Leverage our Robotic Process Automation (RPA) expertise to automate routine tasks and enhance process efficiency. With advanced tools and experienced professionals, we ensure smooth integration of RPA technology.",
        },
      ],
    },
    strategicPathContent: {
      upperheading: "QCENTRIO’S",
      heading:
        "Strategic Path to Providing Business Value Enhancement Services",
      accordation1: [
        {
          index: 1,
          title: "Discovery & Analysis",
          content:
            "Understand your business needs, existing systems, and process workflows.",
        },
        {
          index: 2,
          title: "Strategy Development",
          content:
            "Outline a strategic plan that includes AI/ML and RPA objectives, timeline, and expected outcomes.",
        },
        {
          index: 3,
          title: "Development and Integration",
          content:
            "Develop the AI/ML and RPA solutions and integrate them with existing business processes and systems.",
        },
        {
          index: 4,
          title: "Solution Designing",
          content:
            "Design AI/ML models and RPA bots tailored to the business needs identified in the discovery phase.",
        },
      ],
      accordation2: [
        {
          index: 5,
          title: "Testing and Training",
          content:
            " Test the integrated solutions for functionality and accuracy and train the end-users.",
        },
        {
          index: 6,
          title: "Deployment",
          content:
            "Roll out the AI/ML and RPA solutions in a controlled environment.",
        },
        {
          index: 7,
          title: "Monitoring and Optimization",
          content:
            "Continuously monitor the performance of AI/ML and RPA solutions.",
        },
        {
          index: 8,
          title: "Support and Evolution",
          content: "Provide ongoing support and update the solutions.",
        },
      ],
    },
    successpathContent: {
      heading1:
        "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
      cards1: [
        {
          number: 1,
          heading: "People-First Approach",
          content:
            "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
          percentage: "90%",
          highlight: "NPS Across Engagements",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
          percentage: "50%",
          highlight: "YoY Growth",
        },
      ],
      heading2: "Category-Leading Business Value Enhancement Services",
      cards2: [
        {
          image: settings,
          title: "Flexible and Agile Team",
          content:
            "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
        },
        {
          image: strategy,
          title: "End-to-End Execution",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Round the Clock Support",
          content:
            "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
        },
        {
          image: cloud,
          title: "Data-Driven Decision Making",
          content:
            "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
        },
      ],
    },
  },
  5: {
    banner: "../../cloud-infra-and-security-services.png",
    breadCrump: "CLOUD INFRA AND SECURITY SERVICES",
    mainHeading:
      "MODERNIZE YOUR DATA ESTATE TO A CLOUD-READY, FUTURE-FIT, SCALABLE ECOSYSTEM",
    glimpseContent: {
      heading1: "Transform Into a Data Powerhouse with Qcentrio",
      heading2: "Here's how we've helped our <span>customers win</span>",
      content1:
        "Transforming into a data-driven powerhouse is the key to excel in today's competitive market. Unlocking real-time insights requires a modern, cloud-ready data estate that is scalable, agile, secure and built for the future.",
      content2:
        "Qcentrio leverages its cloud infrastructure and security expertise to provide services and solutions with native cloud components. We fast-track data modernization for clients, seamlessly integrating them with the latest cloud platforms. Our services maximize data value with automation tools and platform operations, boosting ROI and value realization, all while cutting costs.",
      subheading:
        "Transforming Pharmaceutical Major’s Sharepoint Ecosystem with Azure Migration",
    },
    servicesContent: {
      heading: "EMPOWER YOUR DIGITAL SHIFT",
      subheading:
        "With Our <span>Cloud Infrastructure</span> And <span>Security Services</span>, Offering Tangible, Measurable Business Impacts",
      children: [
        {
          image: cloud,
          heading: "Cloud Infrastructure Services",
          content:
            "Modernize your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major cloud platforms, offering AWS, Azure, and GCP expertise.",
        },
        {
          image: salesforce,
          heading: "Salesforce Services",
          content:
            "Get custom Salesforce services/solutions that align perfectly with your business needs. Whether you’re in finance, healthcare, or retail, we ensure that Salesforce fits into your unique operational framework.",
        },
        {
          image: azure,
          heading: "Azure Services and Offerings",
          content:
            "Transform your data infrastructure into an agile, future-proof, scalable environment optimized for Microsoft Azure. We ensure that the transition to Azure is seamless, ensuring your business capitalizes on the robust capabilities of cloud computing.",
        },
        {
          image: aws,
          heading: "AWS Services and Offerings",
          content:
            "Transition your systems to a robust, future-ready, and scalable AWS infrastructure with our AWS migration and optimization expertise. Get seamless, scalable solutions tailored for future-readiness and power-packed performance on AWS.",
        },
        {
          image: gcp,
          heading: "GCP Services and Offerings",
          content:
            "Lift your technological infrastructure with our specialized Google Cloud Platform (GCP) services. Our ability in GCP's diverse toolset and applications is designed to optimize your cloud presence, ensuring a scalable, secure, and high-performance ecosystem that propels your business forward.",
        },
        {
          image: cybersecurity,
          heading: "Cybersecurity Solutions",
          content:
            "Get complete cybersecurity solutions and support, from comprehensive assessments and custom solutions to continuous monitoring for enterprise safety. We also use tools and services from leading providers to protect your digital infrastructure. ",
        },
        {
          image: itsupport,
          heading: "Continuous IT Support and Managed Services",
          content:
            "Optimize your IT with our Managed Services—proactive support, system monitoring, timely updates, and expert troubleshooting for peak performance and uptime.",
        },
        {
          image: offshore,
          heading: "Offshore Development Centre (ODC) Services",
          content:
            "Set up ODCs and get custom teams, state-of-the-art infrastructure, and full-scale development, ensuring seamless integration with your business and continuous support for robust software solutions.",
        },
      ],
    },
    strategicPathContent: {
      upperheading: "QCENTRIO’S",
      heading: "Strategic Path to Robust Cloud Infrastructure and Security",
      accordation1: [
        {
          index: 1,
          title: "Assessment",
          content: "Evaluate existing IT infrastructure and security posture.",
        },
        {
          index: 2,
          title: "Design",
          content:
            "Architect a cloud infrastructure tailored to business needs, emphasizing security.",
        },
        {
          index: 3,
          title: "Implementation",
          content: "Build the cloud environment with robust security measures.",
        },
        {
          index: 4,
          title: "Migration",
          content: "Move data and applications to the cloud securely.",
        },
      ],
      accordation2: [
        {
          index: 5,
          title: "Optimization",
          content:
            "Fine-tune performance and cost-efficiency of cloud resources.",
        },
        {
          index: 6,
          title: "Security Enhancement",
          content:
            "Implement advanced security protocols and compliance measures.",
        },
        {
          index: 7,
          title: "Monitoring & Management",
          content:
            "Continuously monitor for threats and optimize resource utilization.",
        },
        {
          index: 8,
          title: "Evolution",
          content:
            "Adapt and upgrade infrastructure to meet emerging tech and security trends.",
        },
      ],
    },
    successpathContent: {
      heading1:
        "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
      cards1: [
        {
          number: 1,
          heading: "People-First Approach",
          content:
            "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
          percentage: "90%",
          highlight: "NPS Across Engagements",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
          percentage: "50%",
          highlight: "YoY Growth",
        },
      ],
      heading2: "Category-Leading Cloud Infra and Security Practice ",
      cards2: [
        {
          image: settings,
          title: "Flexible and Agile Team",
          content:
            "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
        },
        {
          image: strategy,
          title: "End-to-End Execution",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Round the Clock Support",
          content:
            "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
        },
        {
          image: cloud,
          title: "Data-Driven Decision Making",
          content:
            "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
        },
      ],
    },
  },
};

export function getServicePageData(title) {
  if (title == "advanced-technology-solutions") {
    return mainServicesContent[0];
  } else if (title == "advisory-and-strategic-services") {
    return mainServicesContent[1];
  } else if (title == "blockchain-advisory-and-offerings") {
    return mainServicesContent[2];
  } else if (title == "business-optimization-and-analytics-services") {
    return mainServicesContent[3];
  } else if (title == "business-value-enhancement-services") {
    return mainServicesContent[4];
  } else if (title == "cloud-infra-and-security-services") {
    return mainServicesContent[5];
  }
}
