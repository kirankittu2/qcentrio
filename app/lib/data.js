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
import service1 from "@/public/sub-offerings-1.png";
import service2 from "@/public/sub-offerings-2.jpeg";
import service3 from "@/public/sub-offerings-3.jpeg";
import service4 from "@/public/sub-offerings-4.jpeg";
import service5 from "@/public/sub-offerings-5.jpg";
import healthcare from "@/public/heart-beat.svg";
import finace from "@/public/trend.svg";
import manufacturing from "@/public/factory.svg";
import engineering from "@/public/engineering.svg";
import aerospace from "@/public/aerospace.svg";
import travel from "@/public/suitcase.svg";
import eCommerce from "@/public/web-trolley.svg";
import realEstate from "@/public/building.svg";
import softwareTechnology from "@/public/software-engineer.svg";
import whyChooseImg1 from "@/public/sub-service-why-choose-1.png";
import whyChooseImg2 from "@/public/sub-service-why-choose-2.png";
import whyChooseImg3 from "@/public/sub-service-why-choose-3.png";

const blogs = {
  children: [
    {
      image: "/cloud-security.jpg",
      title:
        "7 effective ways to maximize your cloud security for enhanced protection",
      content:
        "In the cloud revolution, securing data against breaches is crucial for the 94% of enterprises using cloud services, as this blog will explore.",
      link: "/perspectives/7-ways-to-maximize-your-cloud-security",
    },
    {
      image: "/robotic-process.jpg",
      title: "Boost your enterprise innovation with robotic process automation",
      content:
        "In today's digital environment, innovation and robotic process automation are essential for streamlining procedures and driving growth.",
      link: "/perspectives/boost-your-enterprise-innovation-with-robotic-process-automation",
    },
    {
      image: "/block-chain-banking.jpg",
      title: "How blockchain redefines business and banking",
      content:
        "Since Satoshi Nakamoto introduced Blockchain, the term emphasizes its unalterable nature, offering security to financial moguls.",
      link: "/perspectives/how-blockchain-redefines-business-and-banking",
    },
    {
      image: "/cloud-computing.jpg",
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
      image: "/enhancing-patient-care.jpg",
      title: "Enhancing patient care with BI and SQL analytics at qcentrio",
      content:
        "The client aimed to enhance their Java app for better population health analytics and healthcare insights.",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },

    {
      image: "/land-management.jpg",
      title:
        "Land Management in India Leading State with a Blockchain Platform",
      content:
        "Leading Indian state transforms land management with innovative Blockchain platform for streamlined processes and transparency.",
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
    },
    {
      image: "/automatic-vehicle.jpg",
      title:
        "Automating Vehicle Aerodynamics Simulations for Automotive Company",
      content:
        "Automotive company automates vehicle aerodynamics simulations for enhanced efficiency and performance in product development.",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: "/sharepoint-ecosystem.jpg",
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
          link: "advanced-technology-solutions/erp-solutions-support",
          content:
            "Empower your modern-day enterprise with ERP solutions support for integrating and managing core business processes. Streamline your business operations, enhance efficiency, and gain critical insights with our ERP solutions support to ensure your organization stays competitive and agile.",
        },
        {
          image: salesforce,
          heading: "Comprehensive SAP Services",
          link: "advanced-technology-solutions/comprehensive-sap-services",
          content:
            "Unlock the full potential of your business with our portfolio of SAP services, including implementation, migration, and support. Our focus on SAP S/4HANA, SAP CRM & Customer Experience, and SAP Analytics ensures you leverage the most advanced tools in the market.",
        },
        {
          image: azure,
          heading: "Product Engineering Services",
          link: "advanced-technology-solutions/product-engineering-services",
          content:
            "Lift your software solutions with Qcentrio's product engineering services, which are born from our commitment to innovation and modern technology trends. We cater to the evolving needs of businesses and consumers by creating and enhancing software that stays ahead of the curve.",
        },
        {
          image: gcp,
          heading: "Custom Software / Application Development ",
          link: "advanced-technology-solutions/custom-software-application-development",
          content:
            "Specializing in JAVA, MEAN Stack, and Full Stack development, we deliver bespoke software solutions to meet your unique business requirements. Enhance your operations with our tailored expertise in custom software development.",
        },
        {
          image: cybersecurity,
          heading: "Internet of Things (IoT) Solutions",
          link: "advanced-technology-solutions/internet-of-things-solutions",
          content:
            "Lead the future with Qcentrio's advanced IoT solutions. Seamlessly integrate advanced IoT technology into your operations to enhance performance and operational efficiency. Stay ahead with us, your partner in driving innovation and success through IoT.",
        },
        {
          image: cybersecurity,
          heading: "Big Data Services and Solutions",
          link: "advanced-technology-solutions/big-data-services-and-solutions",
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
          link: "advisory-and-strategic-services/epic-advisory-services",
          content:
            "Integrate and efficiently manage patient health data with expert EPIC advisory services. Our experts navigate the complexities of compliance, data standards, and programming languages to optimize your Epic solutions. ",
        },
        {
          image: salesforce,
          heading: "Oracle Cerner Advisory Services",
          link: "advisory-and-strategic-services/oracle-cerner-advisory-services",
          content:
            "Seamlessly integrate Oracle Cerner's advanced EHR systems with your hospital's diverse information systems to overcome the challenges of data standard variability and programming language differences.",
        },
        {
          image: azure,
          heading: "Audit and Assurance Services",
          link: "advisory-and-strategic-services/audit-and-assurance-services",
          content:
            "Ensure your digital systems' security, compliance, and reliability with our comprehensive audit and assurance services. Our team employs advanced tools, specialized skills, and robust software to safeguard your digital infrastructure, giving you peace of mind and fostering stakeholder trust.",
        },
        {
          image: gcp,
          heading: "Risk Advisory Services",
          link: "advisory-and-strategic-services/risk-advisory-services",
          content:
            "Protect your organization from digital threats with our expert risk advisory services. Our team specializes in identifying, analyzing, and mitigating digital risks, utilizing advanced tools, skills, and software to provide strategic advice and solutions.",
        },
        {
          image: cybersecurity,
          heading: "Specialty Services",
          link: "advisory-and-strategic-services/specialty-services",
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
          link: "blockchain-advisory-and-offerings/blockchain-strategy-and-advisory",
          content:
            "Discover blockchain's potential for your business and develop a strategic implementation plan. Collaborate with our team to identify and validate impactful use cases for blockchain in your organization. Further, assess your blockchain project's technical and economic viability with our thorough feasibility studies.",
        },
        {
          image: salesforce,
          heading: "Blockchain Solution Development",
          link: "blockchain-advisory-and-offerings/blockchain-solution-development",
          content:
            "Design and develop scalable, secure, and interoperable blockchain solutions, including decentralized applications (DApps) that offer enhanced transparency, security, and user experience.",
        },
        {
          image: azure,
          heading: "Blockchain Integration and Deployment",
          link: "blockchain-advisory-and-offerings/blockchain-integration-and-deployment",
          content:
            "Seamlessly integrate blockchain technology into your existing systems and processes, ensuring smooth operation and minimal disruption. Our team deploys and rigorously tests your blockchain solution for optimal performance.",
        },
        {
          image: gcp,
          heading: "Blockchain Security and Compliance",
          link: "blockchain-advisory-and-offerings/blockchain-security-and-compliance",
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
          link: "/business-optimization-and-analytics-services/data-analytics-and-business-intelligence",
          content:
            "Leverage our extensive expertise in Microsoft Power BI, Google Analytics, and Tableau, and integrate your enterprise data with platforms like SQL Server and Hadoop to enhance your analytics capabilities.",
        },
        {
          image: salesforce,
          heading: "Collaboration and Productivity Solutions",
          link: "/business-optimization-and-analytics-services/collaboration-and-productivity-solutions",
          content:
            "Integrate collaboration and productivity tools like Microsoft Teams, Asana, and Slack to enhance your digital workspace. Our services boost project management, output, and communication.",
        },
        {
          image: azure,
          heading: "CRM System Solutions",
          link: "/business-optimization-and-analytics-services/crm-system-solutions",
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
          link: "business-value-enhancement-services/generative-ai-solutions-and-offerings",
          content:
            "Partner with Qcentrio to harness Generative AI's transformative power, overcome challenges, and unlock unprecedented productivity and innovation in your operations. Transform your business with our bespoke GenAI solutions.",
        },
        {
          image: salesforce,
          heading: "Artificial Intelligence/Machine Learning Offerings",
          link: "business-value-enhancement-services/artificial-intelligence-machine-learning-offerings",
          content:
            "Experience excellence with our AI and ML solutions, specializing in process automation, personalized customer experiences, and predictive/prescriptive insights to drive your business forward.",
        },
        {
          image: azure,
          heading: "Robotic Process Automation Services",
          link: "business-value-enhancement-services/robotic-process-automation-services",
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
          link: "cloud-infra-and-security-services/cloud-infrastructure-services",
          content:
            "Modernize your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major cloud platforms, offering AWS, Azure, and GCP expertise.",
        },
        {
          image: salesforce,
          heading: "Salesforce Services",
          link: "cloud-infra-and-security-services/salesforce-services",
          content:
            "Get custom Salesforce services/solutions that align perfectly with your business needs. Whether you’re in finance, healthcare, or retail, we ensure that Salesforce fits into your unique operational framework.",
        },
        {
          image: azure,
          heading: "Azure Services and Offerings",
          link: "cloud-infra-and-security-services/azure-services-and-offerings",
          content:
            "Transform your data infrastructure into an agile, future-proof, scalable environment optimized for Microsoft Azure. We ensure that the transition to Azure is seamless, ensuring your business capitalizes on the robust capabilities of cloud computing.",
        },
        {
          image: aws,
          heading: "AWS Services and Offerings",
          link: "cloud-infra-and-security-services/aws-services-and-offerings",
          content:
            "Transition your systems to a robust, future-ready, and scalable AWS infrastructure with our AWS migration and optimization expertise. Get seamless, scalable solutions tailored for future-readiness and power-packed performance on AWS.",
        },
        {
          image: gcp,
          heading: "GCP Services and Offerings",
          link: "cloud-infra-and-security-services/gcp-services-and-offerings",
          content:
            "Lift your technological infrastructure with our specialized Google Cloud Platform (GCP) services. Our ability in GCP's diverse toolset and applications is designed to optimize your cloud presence, ensuring a scalable, secure, and high-performance ecosystem that propels your business forward.",
        },
        {
          image: cybersecurity,
          heading: "Cybersecurity Solutions",
          link: "cloud-infra-and-security-services/cybersecurity-solutions",
          content:
            "Get complete cybersecurity solutions and support, from comprehensive assessments and custom solutions to continuous monitoring for enterprise safety. We also use tools and services from leading providers to protect your digital infrastructure. ",
        },
        {
          image: itsupport,
          heading: "Continuous IT Support and Managed Services",
          link: "cloud-infra-and-security-services/continuous-it-support-and-managed-services",
          content:
            "Optimize your IT with our Managed Services—proactive support, system monitoring, timely updates, and expert troubleshooting for peak performance and uptime.",
        },
        {
          image: offshore,
          heading: "Offshore Development Centre (ODC) Services",
          link: "cloud-infra-and-security-services/offshore-development-centre-services",
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

const subServicePagesContent = {
  serviceOne: {
    1: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    5: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    6: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
  },
  serviceTwo: {
    1: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    5: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
  },
  serviceThree: {
    1: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
  },
  serviceFour: {
    1: {
      heroSectionData: {
        heading:
          "BREAK DOWN SILOS AND ENABLE SEAMLESS COMMUNICATION WITH COLLABORATION AND PRODUCTIVITY SOLUTIONS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Craft Your Path to Enhanced Collaboration and Productivity with Qcentrio",
        content1:
          "Today, staying ahead means keeping pace with technological advancements and leveraging them to redefine how we work. At the core of this transformation is the need for robust Collaboration and Productivity Solutions that enhance efficiency and foster a culture of innovation and teamwork.",
        content2:
          "At Qcentrio, we seamlessly integrate productivity tools such as Microsoft Teams, Asana, and Slack, ensuring a highly efficient digital workspace that enhances project management, productivity, and communication.",
      },
      offeringsSetion: {
        mainHeading:
          "OUR COLLABORATION AND PRODUCTIVITY SOLUTIONS OFFERINGS: TAKE YOUR BUSINESS TO THE NEXT LEVEL",
        images: [
          service1,
          service2,
          service3,
          service4,
          service5,
          service3,
          service4,
        ],
        list: [
          {
            num: "01",
            heading: "Integrated Communication Platforms",
            content:
              "Streamline your internal and external communications with platforms that combine messaging, video conferencing, and project management capabilities.",
          },
          {
            num: "02",
            heading: "Collaborative Workspaces",
            content:
              "Foster a collaborative culture with digital workspaces that allow teams to share ideas, files, and feedback in real time.",
          },
          {
            num: "03",
            heading: "Productivity Tracking and Analytics",
            content:
              "Gain insights into team productivity and collaboration patterns with advanced analytics, enabling you to make data-driven decisions that boost efficiency.",
          },
          {
            num: "04",
            heading: "Team Communication Tools",
            content:
              "Improve team communication with instant messaging, shared calendars, and real-time notifications to keep everyone on the same page.",
          },
          {
            num: "05",
            heading: "Project Management Solutions",
            content:
              "Enhance project management with our comprehensive project management solutions support. Assign tasks, track progress, manage resources, meet deadlines, and encourage collaboration for success.",
          },
          {
            num: "06",
            heading: "Integrated Workspaces",
            content:
              "Improve your team's collaboration, communication, and task management by integrating tools and applications of your choice into a unified platform.",
          },
          {
            num: "07",
            heading: "Dynamic Scheduling and Resource Allocation Tools",
            content:
              "Use dynamic scheduling and resource allocation tools to optimize team productivity by allocating tasks based on skills and workload, reducing burnout risk.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "TAILORED COLLABORATION AND PRODUCTIVITY SOLUTIONS SUPPORT ACROSS DIFFERENT INDUSTRIES",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Secure, efficient communication and resource management for improved patient care.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Precision and security in decision-making and compliance through streamlined operations.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Enhance production efficiency and supply chain logistics with integrated communication.",
          },
          {
            icon: engineering,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "Accelerate innovation with tools that support agile development and team synchronization.",
          },
          {
            icon: aerospace,
            heading: "EDUCATION",
            content:
              "Enrich learning through collaborative platforms and administrative efficiency.",
          },
          {
            icon: travel,
            heading: "RETAIL",
            content:
              "Optimize operations and customer service with real-time analytics and communication.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Collaboration and Productivity Solutions Support?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Deep Industry Knowledge",
            content:
              "Our solutions support is built on a foundation of deep industry knowledge, ensuring they address the specific challenges and leverage the unique opportunities of each sector.",
          },
          {
            image: whyChooseImg2,
            heading: "Customizable and Scalable",
            content:
              "Tailored to meet your specific needs, we can customize and scale according to your requirements, thus matching the speed of your business.",
          },
          {
            image: whyChooseImg3,
            heading: "Secure and Compliant",
            content:
              "We prioritize security and compliance, ensuring that the solutions meet the stringent standards required by industries like healthcare and finance.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "OPTIMIZE YOUR DIGITAL TOUCHPOINTS FOR SEAMLESS CUSTOMER JOURNEY WITH ROBUST CRM SYSTEMS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Revolutionize Customer Management with Qcentrio’s CRM System Solutions",
        content1:
          "In a world where customer relationships dictate business success, Qcentrio reimagines CRM system solutions to empower companies to manage and nurture these connections effectively. By integrating industry-leading tools like Salesforce, Microsoft Dynamics, and SAP CRM, we elevate your customer interactions to new heights, ensuring that every touchpoint is an opportunity for growth and engagement.",
        content2: "",
      },
      offeringsSetion: {
        mainHeading:
          "OUR CRM SYSTEM SOLUTIONS OFFERINGS: CREATE LASTING RELATIONSHIPS WITH YOUR CUSTOMERS",
        images: [service1, service2, service3, service4, service5, service3],
        list: [
          {
            num: "01",
            heading: "Salesforce Implementation",
            content:
              "With our end-to-end implementation services, you can tap into Salesforce's full potential for comprehensive customer relationship management and marketing automation.",
          },
          {
            num: "02",
            heading: "Microsoft Dynamics CRM",
            content:
              "Experience versatility with Microsoft Dynamics CRM, tailored to enhance customer engagement and business processes through customization and seamless integration.",
          },
          {
            num: "03",
            heading: "SAP CRM Services",
            content:
              "Utilize the robust functionality of SAP CRM to gain deep customer insights and streamline operations, personalized to fit your business model.",
          },
          {
            num: "04",
            heading: "CRM Optimization and Analytics",
            content:
              "Maximize your CRM's performance with our optimization strategies and analytics insights, ensuring you capture and utilize every piece of customer data effectively.",
          },
          {
            num: "05",
            heading: "Custom CRM Development",
            content:
              "Get a CRM solution built from the ground up to address your specific business needs, with custom features that fit your company's workflow.",
          },
          {
            num: "06",
            heading: "CRM Migration Services",
            content:
              "Transition to a more efficient system with our seamless CRM migration services, ensuring no data is lost and every team member is up to speed with new tools.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "CUSTOM CRM SOLUTIONS CATERED TO INDUSTRY DEMANDS",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Manage patient relationships with secure and HIPAA-compliant CRM systems.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Secure CRM solutions for precision in client management and compliance.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Streamlined sales processes and customer service in manufacturing CRM.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Engage shoppers with CRM analytics that drive sales and loyalty.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Partner with Qcentrio for Your CRM Solutions?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Extensive CRM Expertise",
            content:
              "Qcentrio brings a wealth of knowledge and experience with CRM systems like Salesforce, Dynamics 365, and SAP, allowing us to provide tailored support.",
          },
          {
            image: whyChooseImg2,
            heading: "Customization and Integration",
            content:
              "Your unique business demands are met with our custom CRM designs, ensuring seamless integration into your existing workflows.",
          },
          {
            image: whyChooseImg3,
            heading: "Enduring Support and Advancement",
            content:
              "We enhance CRM system proficiency and user adoption by providing your team with the necessary skills. Our experts are available to ensure peak performance, even beyond launch.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "MAXIMIZE YOUR DATA'S POTENTIAL AND DRIVE INFORMED BUSINESS DECISIONS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Harness the Power of Data Analytics and Business Intelligence with Qcentrio",
        content1:
          "Data is a pivotal asset for businesses seeking a competitive edge in the digital age. To make it happen, enterprises need comprehensive data analytics and business intelligence capabilities to translate vast amounts of data into actionable insights.",
        content2:
          "At Qcentrio, we stand at the forefront of this domain, offering unparalleled expertise in data analytics and business intelligence services. With our advanced skills in Microsoft Power BI, Google Analytics, Tableau, and integration with platforms like SQL Server and Hadoop, we empower businesses to make strategic decisions informed by data.",
      },
      offeringsSetion: {
        mainHeading: "OUR DATA ANALYTICS AND BUSINESS INTELLIGENCE OFFERINGS",
        images: [service1, service2, service3, service4, service5, service3],
        list: [
          {
            num: "01",
            heading: "Comprehensive Data Solutions",
            content:
              "Leverage our expertise in data warehousing with technologies like Amazon Redshift and Microsoft Azure SQL database, paired with in-depth analysis using Tableau and Power BI.",
          },
          {
            num: "02",
            heading: "Specialized Analytics Tools",
            content:
              "Utilize specialized tools, such as Tableau for interactive data visualizations, Microsoft Power BI for dynamic reports, and Google Analytics for web traffic insights.",
          },
          {
            num: "03",
            heading: "Customized BI Solutions",
            content:
              "At Qcentrio, we recognize that each business has unique needs. We deliver custom BI solutions molded to your requirements, integrating robust tools like Apache Spark for real-time data processing.",
          },
          {
            num: "04",
            heading: "Data Integration and Management",
            content:
              "Streamline the collection and integration of data from various sources, ensuring accuracy and accessibility for analysis. Implement management practices that maintain the integrity and security of your data across the board.",
          },
          {
            num: "05",
            heading: "Predictive Analytics and Machine Learning",
            content:
              "Employ advanced predictive models and machine learning algorithms to forecast trends, customer behavior, and business outcomes, turning data into a predictive tool for strategic planning.",
          },
          {
            num: "06",
            heading: "Real-Time Analytics and Reporting",
            content:
              "Access insights as they happen with real-time analytics. Create comprehensive, up-to-the-minute reports that allow for agile decision-making and immediate action in response to market changes..",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "DATA ANALYTICS AND BUSINESS INTELLIGENCE TAILORED TO YOUR INDUSTRY NEEDS",
        list: [
          {
            icon: healthcare,
            heading: "MANUFACTURING",
            content:
              "Leverage data to make informed decisions, improve patient outcomes, streamline operations, and support clinical decisions.",
          },
          {
            icon: finace,
            heading: "HEALTHCARE",
            content:
              "Leverage data to make informed decisions, improve patient outcomes, streamline operations, and support clinical decisions.",
          },
          {
            icon: manufacturing,
            heading: "FINANCE",
            content:
              "Gain insights into financial trends, customer behavior, and market movements to strategic investments and operational improvements.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Harness the power of data to personalize customer experiences, forecast market trends, and optimize inventory management for increased sales and customer loyalty.",
          },
          {
            icon: aerospace,
            heading: "ENERGY",
            content:
              "Deploy data analytics for efficient energy management, from demand forecasting to distribution optimization, reducing costs and conserving resources.",
          },
          {
            icon: travel,
            heading: "TRANSPORTATION AND LOGISTICS",
            content:
              "Enhance route optimization, freight management, and operational efficiency with data-driven insights. Predict and respond swiftly to logistical challenges.",
          },
          {
            icon: eCommerce,
            heading: "TELECOMMUNICATIONS",
            content:
              "Utilize data analytics to manage vast networks efficiently, predict maintenance needs, understand customer usage patterns, and develop competitive pricing strategies.",
          },
          {
            icon: realEstate,
            heading: "E-COMMERCE",
            content:
              "Boost your online retail strategy with analytics that fine-tune customer journeys, optimize inventory management, and personalized shopping experiences to drive sales and customer loyalty.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Data Analytics and Business Intelligence?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise Across Diverse Tools",
            content:
              "Our team is proficient in various data analytics and BI tools, ensuring you have the right technology to extract maximum value from your data.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions Tailored to Your Needs",
            content:
              "We go beyond off-the-shelf solutions, providing customized strategies that align with your business goals and industry-specific challenges.",
          },
          {
            image: whyChooseImg3,
            heading: "Continuous Support for Sustained Success",
            content:
              "Our relationship with clients doesn't end with implementation. We offer continuous support and guidance to ensure your success in data-driven strategies.",
          },
        ],
      },
    },
  },
  serviceFive: {
    1: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
  },
  serviceSix: {
    1: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    5: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    6: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    7: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
    8: {
      heroSectionData: {
        heading:
          "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
        content1:
          "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
        content2:
          " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Empower Your Business with Open AI / ChatGPT Integration",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "02",
            heading: "Advanced Analytics and AI for Insightful Decisions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "03",
            heading: "Strategic AI Implementation for Industry-Specific Needs",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "04",
            heading: "Boost Productivity with Automation Solutions",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
          {
            num: "05",
            heading: "End-to-End Generative AI Integration for Business Growth",
            content:
              "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
          },
          {
            icon: engineering,
            heading: "HEAVY ENGINEERING",
            content:
              "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
          },
          {
            icon: aerospace,
            heading: "AEROSPACE",
            content:
              "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "E-COMMERCE",
            content:
              "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
          },
          {
            icon: realEstate,
            heading: "REAL ESTATE",
            content:
              "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
          },
          {
            icon: softwareTechnology,
            heading: "SOFTWARE TECHNOLOGY",
            content:
              "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Generative AI",
            content:
              "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem",
            content:
              "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
          },
        ],
      },
    },
  },
};

export function getSubServicePageContent(main, sub) {
  if (main == "advanced-technology-solutions") {
    if (sub == "erp-solutions-support") {
      return subServicePagesContent.serviceOne[1];
    } else if (sub == "big-data-services-and-solutions") {
      return subServicePagesContent.serviceOne[2];
    } else if (sub == "comprehensive-sap-services") {
      return subServicePagesContent.serviceOne[3];
    } else if (sub == "custom-software-application-development") {
      return subServicePagesContent.serviceOne[4];
    } else if (sub == "internet-of-things-solutions") {
      return subServicePagesContent.serviceOne[5];
    } else if (sub == "product-engineering-services") {
      return subServicePagesContent.serviceOne[6];
    }
  } else if (main == "advisory-and-strategic-services") {
    if (sub == "audit-and-assurance-services") {
      return subServicePagesContent.serviceTwo[1];
    } else if (sub == "epic-advisory-services") {
      return subServicePagesContent.serviceTwo[2];
    } else if (sub == "oracle-cerner-advisory-services") {
      return subServicePagesContent.serviceTwo[3];
    } else if (sub == "risk-advisory-services") {
      return subServicePagesContent.serviceTwo[4];
    } else if (sub == "specialty-services") {
      return subServicePagesContent.serviceTwo[5];
    }
  } else if (main == "blockchain-advisory-and-offerings") {
    if (sub == "blockchain-integration-and-deployment") {
      return subServicePagesContent.serviceThree[1];
    } else if (sub == "blockchain-security-and-compliance") {
      return subServicePagesContent.serviceThree[2];
    } else if (sub == "blockchain-solution-development") {
      return subServicePagesContent.serviceThree[3];
    } else if (sub == "blockchain-strategy-and-advisory") {
      return subServicePagesContent.serviceThree[4];
    }
  } else if (main == "business-optimization-and-analytics-services") {
    if (sub == "collaboration-and-productivity-solutions") {
      return subServicePagesContent.serviceFour[1];
    } else if (sub == "crm-system-solutions") {
      return subServicePagesContent.serviceFour[2];
    } else if (sub == "data-analytics-and-business-intelligence") {
      return subServicePagesContent.serviceFour[3];
    }
  } else if (main == "business-value-enhancement-services") {
    if (sub == "artificial-intelligence-machine-learning-offerings") {
      return subServicePagesContent.serviceFive[1];
    } else if (sub == "generative-ai-solutions-and-offerings") {
      return subServicePagesContent.serviceFive[2];
    } else if (sub == "robotic-process-automation-services") {
      return subServicePagesContent.serviceFive[3];
    }
  } else if (main == "cloud-infra-and-security-services") {
    if (sub == "aws-services-and-offerings") {
      return subServicePagesContent.serviceSix[1];
    } else if (sub == "azure-services-and-offerings") {
      return subServicePagesContent.serviceSix[2];
    } else if (sub == "cloud-infrastructure-services") {
      return subServicePagesContent.serviceSix[3];
    } else if (sub == "continuous-it-support-and-managed-services") {
      return subServicePagesContent.serviceSix[4];
    } else if (sub == "cybersecurity-solutions") {
      return subServicePagesContent.serviceSix[5];
    } else if (sub == "gcp-services-and-offerings") {
      return subServicePagesContent.serviceSix[6];
    } else if (sub == "offshore-development-centre-services") {
      return subServicePagesContent.serviceSix[7];
    } else if (sub == "salesforce-services") {
      return subServicePagesContent.serviceSix[8];
    }
  }
}
