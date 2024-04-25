import cloud from "@/public/cloud.svg";
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
      content1:
        "In the cloud revolution, securing data against breaches is crucial for the 94% of enterprises using cloud services, as this blog will explore.",
      link: "/perspectives/7-ways-to-maximize-your-cloud-security",
    },
    {
      image: "/robotic-process.jpg",
      title: "Boost your enterprise innovation with robotic process automation",
      content1:
        "In today's digital environment, innovation and robotic process automation are essential for streamlining procedures and driving growth.",
      link: "/perspectives/boost-your-enterprise-innovation-with-robotic-process-automation",
    },
    {
      image: "/block-chain-banking.jpg",
      title: "How blockchain redefines business and banking",
      content1:
        "Since Satoshi Nakamoto introduced Blockchain, the term emphasizes its unalterable nature, offering security to financial moguls.",
      link: "/perspectives/how-blockchain-redefines-business-and-banking",
    },
    {
      image: "/cloud-computing.jpg",
      title:
        "The cloud landscape: 5 key strategies for effective cloud assessment",
      content1:
        "Cloud assessments guide businesses in selecting optimal solutions to enhance innovation, agility, and efficiency.",
      link: "/perspectives/navigating-the-cloud-landscape",
    },
    {
      image: "/communication-unified-system.jpg",
      title:
        "Chaos to Clarity: How Unified Platforms Transform Communication Strategy",
      content1:
        "Discover how unified communication platforms can streamline your team's workflow, enhance collaboration, and increase productivity.",
      link: "/perspectives/chaos-to-clarity-how-unified-platforms-transform-communication-strategy",
    },
    {
      image: "/big-data-services.jpg",
      title:
        "Data Management - Success Key in Epic and Oracle Cerner EHR Integration",
      content1:
        "Explore data management's role in seamless Epic and Oracle Cerner EHR integration, enhancing healthcare efficiency.",
      link: "/perspectives/data-management-success-key-in-epic-and-oracle-cerner-ehr-integration",
    },
  ],
  pageNumber: 0,
};

const caseStudies = {
  children: [
    {
      image: "/enhancing-patient-care.jpg",
      homeImage: "/patient-care-with-bi.jpg",
      title: "Enhancing patient care with BI and SQL analytics at qcentrio",
      content1:
        "The client sought to refine their Java application to deliver superior population health analytics and more insightful healthcare data.",
      content2:
        "With the streamlined company data processing and improved accuracy of reporting that Qcentrio provided, actionable insights were offered in patient care and operational efficiency across the health network improvement.",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },

    {
      homeImage: "/land-management.jpg",
      image: "/land-management-cs.jpg",
      title: "Land Management in India Leading with a Blockchain Platform",
      content1:
        "Pioneering Indian state is revolutionizing land management by implementing an blockchain platform to enhancing security.",
      content2:
        "With the streamlined company data processing and improved accuracy of reporting that Qcentrio provided, actionable insights were offered in patient care and operational efficiency across the health network improvement.",
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
    },
    {
      image: "/automatic-vehicle.jpg",
      homeImage: "/vehicle-aerodynamics.jpg",
      title: "Vehicle Aerodynamics Simulations for Automotive Company",
      content1:
        "Vehicle aerodynamics simulations enhance efficiency in automotive product development improve road handling and fuel economy.",
      content2:
        "By using advanced computational fluid dynamics (CFD) tools, automotive companies can simulate real-world conditions, assess performance impacts, and make informed decisions about design modifications before any physical prototype is built.",
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
    },
    {
      image: "/sharepoint-ecosystem.jpg",
      homeImage: "/pharma-tech.jpg",
      title: "Transforming a pharmaceutical major’s sharepoint ecosystem",
      content1:
        "A Leading pharmaceutical company embarked on a strategic journey to comprehensively overhaul its SharePoint ecosystem for enhanced collaboration.",
      content2:
        "By integrating Azure's robust cloud capabilities with their existing SharePoint infrastructure, the company not only streamlined workflows but also set a new standard for innovation in pharmaceutical information management.",
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
  const startIndex = (page - 1) * 6;

  const pageNumber = Math.ceil(type.children.length / 6);
  const sortedData = type.children.slice(startIndex, startIndex + 6);
  const newData = {
    children: [...sortedData],
    pageNumber: pageNumber,
  };

  return newData;
}

export function getAllBlogs() {
  return blogs.children;
}

export function getAllCaseStudies() {
  return caseStudies.children;
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
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
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
            "Customizing digital services and solutions, enabling you to lead in your domain.",
        },
        {
          index: 3,
          title: "Implementation",
          content:
            "Highlighting success stories where our digital strategies have significantly improved business operations.",
        },
        {
          index: 4,
          title: "Migration",
          content:
            "Highlighting success stories where our digital strategies have significantly improved business operations.",
        },
      ],
      accordation2: [
        {
          index: 5,
          title: "Optimization",
          content:
            "Implementing custom solutions to streamline your business processes and operations.",
        },
        {
          index: 6,
          title: "Security Enhancement",
          content:
            "Introducing strategic measures to minimize digital adoption risks, ensuring a smooth transition.",
        },
        {
          index: 7,
          title: "Monitoring & Management",
          content:
            "Setting strategic timelines for agile, phased rollouts, prioritizing quick wins and scalable, long-term growth.",
        },
        {
          index: 8,
          title: "Monitoring & Management",
          content: "Evolution",
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
            "We are experts in modernizing your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major offering AWS, Azure, and GCP expertise.",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "That's what we deliver: solutions adapted to your business requirements and, at the same time, adhering to your goal of making quick decisions and adding value.",
          percentage: "50%",
          highlight: "Faster Time to Insights",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our commitment to sustainable development involves leveraging technologies and insights to foster adaptable business models, ensuring long-term success in a dynamic market.",
          percentage: "30%",
          highlight: "Increase in Operational Efficiency",
        },
      ],
      heading2: "Boost Your Business with Advanced Technology Solutions",
      cards2: [
        {
          image: settings,
          title: "Comprehensive Technology Audit",
          content:
            "Conduct a thorough audit of your infrastructure to identify enhancement opportunities.",
        },
        {
          image: strategy,
          title: "Innovative Technology Integration",
          content:
            "Integrate cutting-edge technologies to drive efficiency and fuel growth.",
        },
        {
          image: support,
          title: "Scalable Technology Solutions",
          content:
            "Implement solutions that adapt to your evolving needs and support growth.",
        },
        {
          image: cloud,
          title: "Enhanced Data Security",
          content:
            "Implement robust measures to protect data and ensure compliance.",
        },
        {
          image: secure,
          title: "Continuous Advancements",
          content:
            "Stay ahead with ongoing technology advancements for efficiency and growth.",
        },
      ],
    },
    contact: {
      heading: "Transform your business and operations with Qcentrio",
      subheading:
        "Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation.",
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
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
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
        // {
        //   image: cybersecurity,
        //   heading: "Mergers & Acquisitions Advisory Services",
        //   link: "advisory-and-strategic-services/mergers-and-acquisitions-advisory-services",
        //   content:
        //     "Ensure your digital products meet the highest standards with our Quality Assurance (QA) services. Our team leverages advanced tools, specialized skills, and robust software to enhance the quality and performance of your digital offerings.",
        // },
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
            "We are experts in modernizing your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major offering AWS, Azure, and GCP expertise.",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "That's what we deliver: solutions adapted to your business requirements and, at the same time, adhering to your goal of making quick decisions and adding value.",
          percentage: "50%",
          highlight: "Faster Time to Insights",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our commitment to sustainable development involves leveraging technologies and insights to foster adaptable business models, ensuring long-term success in a dynamic market.",
          percentage: "30%",
          highlight: "Increase in Operational Efficiency",
        },
      ],
      heading2:
        "Transform Your Business with Leading Advisory and Strategic Services",
      cards2: [
        {
          image: settings,
          title: "Visionary Leadership Consultation",
          content:
            "Collaborate with seasoned experts to craft visionary leadership strategies that drive transformation.",
        },
        {
          image: strategy,
          title: "Innovative Strategy Formulation",
          content:
            "Design groundbreaking strategies that align with core objectives and market dynamics.",
        },
        {
          image: support,
          title: "Tailored Advisory Services",
          content:
            "Receive customized advice to navigate complex landscapes and steer your business towards success.",
        },
        {
          image: cloud,
          title: "Strategic Business Roadmaps",
          content:
            "Develop comprehensive plans that outline step-by-step pathways to achieve your goals.",
        },
        {
          image: secure,
          title: "Continuous Strategy Evolution",
          content:
            "Stay ahead with adaptive strategies that evolve with advancements and market trends.",
        },
      ],
    },
    contact: {
      heading:
        "Tap into our expertise in EHR integration,cybersecurity, and M&A strategy",
      subheading:
        "Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation.",
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
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
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
    contact: {
      heading: "Unlocking the Potential of Blockchain for Your Business",
      subheading:
        "Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation.",
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
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
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
            "We are experts in modernizing your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major offering AWS, Azure, and GCP expertise.",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "That's what we deliver: solutions adapted to your business requirements and, at the same time, adhering to your goal of making quick decisions and adding value.",
          percentage: "50%",
          highlight: "Faster Time to Insights",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our commitment to sustainable development involves leveraging technologies and insights to foster adaptable business models, ensuring long-term success in a dynamic market.",
          percentage: "30%",
          highlight: "Increase in Operational Efficiency",
        },
      ],
      heading2: "Innovative Business Optimization and Analytics",
      cards2: [
        {
          image: settings,
          title: "Strategic Insights",
          content:
            "Derive actionable intelligence from data to drive decision-making and competitive edge.",
        },
        {
          image: strategy,
          title: "Process Innovation",
          content:
            "Streamline workflows to enhance efficiency and accelerate performance.",
        },
        {
          image: support,
          title: "Performance Metrics",
          content:
            "Track key indicators to measure progress and improve continuously.",
        },
        {
          image: cloud,
          title: "Business Modeling",
          content:
            "Use analytics for forecasting and seizing growth opportunities.",
        },
        {
          image: secure,
          title: "Tech Productivity",
          content:
            "Employ automation to improve accuracy and optimize resources.",
        },
      ],
    },
    contact: {
      heading: "Transform Your Data into Strategic Business Decisions",
      subheading:
        "Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation.",
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
      link: "/case-study/automating-vehicle-aerodynamics-simulations-for-a-major-automotive-design-company",
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
            "We are experts in modernizing your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major offering AWS, Azure, and GCP expertise.",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "That's what we deliver: solutions adapted to your business requirements and, at the same time, adhering to your goal of making quick decisions and adding value.",
          percentage: "50%",
          highlight: "Faster Time to Insights",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our commitment to sustainable development involves leveraging technologies and insights to foster adaptable business models, ensuring long-term success in a dynamic market.",
          percentage: "30%",
          highlight: "Increase in Operational Efficiency",
        },
      ],
      heading2:
        "Drive Growth and Accelerate Insights with Business Value Enhancement Services",
      cards2: [
        {
          image: settings,
          title: "Holistic Business Assessment",
          content:
            "A flexible and agile cloud team that can ramp up and down as needed to adapt to project demands.",
        },
        {
          image: strategy,
          title: "Data-Driven Business Insights",
          content:
            "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
        },
        {
          image: support,
          title: "Optimized Operational Efficiency",
          content:
            "24/7 support from certified professionals to ensure smooth system operation and maintenance.",
        },
        {
          image: cloud,
          title: "Strategic Technology Integration",
          content:
            "Leverage optimization and analytics to drive decision-making and enhance operational efficiency.",
        },
        {
          image: secure,
          title: "Culture Continuous Improvement",
          content:
            "Advanced security protocols safeguard infrastructure and data, ensuring compliance and trust.",
        },
      ],
    },
    contact: {
      heading: "Transform your business decisions with next-gen capabilities",
      subheading:
        "Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation.",
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
      link: "/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration",
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
            "We are experts in modernizing your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major offering AWS, Azure, and GCP expertise.",
          percentage: "85%",
          highlight: "Employee Trust Index Score",
        },
        {
          number: 2,
          heading: "Customer Centricity",
          content:
            "That's what we deliver: solutions adapted to your business requirements and, at the same time, adhering to your goal of making quick decisions and adding value.",
          percentage: "50%",
          highlight: "Faster Time to Insights",
        },
        {
          number: 3,
          heading: "Sustainable Growth",
          content:
            "Our commitment to sustainable development involves leveraging technologies and insights to foster adaptable business models, ensuring long-term success in a dynamic market.",
          percentage: "30%",
          highlight: "Increase in Operational Efficiency",
        },
      ],
      heading2: "Category-Leading Cloud Infra and Security Practice ",
      cards2: [
        {
          image: settings,
          title: "Flexible Team",
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
          title: "Robust Security",
          content:
            "Advanced security protocols safeguard infrastructure and data, ensuring compliance and trust.",
        },
      ],
    },
    contact: {
      heading: "Transform your business decisions with next-gen capabilities",
      subheading:
        "Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation.",
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
          "TRANSFORM YOUR ORGANIZATIONAL CAPABILITIES AND SUSTAIN YOUR COMPETITIVE ADVANTAGE ",
      },
      metaData: {
        title: "Comprehensive ERP Solutions Support | Qcentrio",

        description:
          "Qcentrio's ERP Solutions Support enhances your operational agility and efficiency. Experience our tailored ERP advisory and round-the-clock service.",
      },
      breadCrump: {
        main: "ADVANCED TECHNOLOGY SOLUTIONS",
        link: "/offerings/advanced-technology-solutions",
        current: "ERP Solutions Support",
      },
      contactHead:
        "Transform your core business processes and operations with expert ERP Solutions Support",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Enhance Business Agility with Qcentrio’s ERP Solutions Support",
        content1:
          "Enterprise Resource Planning (ERP) systems are pivotal as the operational backbone of modern enterprises, streamlining various business functions to enhance efficiency and provide deep insights into core operations. Today, agility and the capacity for informed decision-making are indispensable and can distinguish industry leaders from their competitors.",
        content2:
          "At Qcentrio, we stand at the forefront of ERP solutions, offering unmatched support that propels businesses forward by at least 50% faster. Our ERP services ensure your enterprise remains a step ahead by expertly integrating, managing, and optimizing your critical business processes through state-of-the-art ERP systems.",
      },
      offeringsSetion: {
        mainHeading: "QCENTRIO’S TAILORED ERP SOLUTIONS SUPPORT SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "QAD Advisory & Support Services",
            content:
              "Specializing in QAD ERP solutions, we deliver end-to-end support, including application management, system enhancements, and strategic upgrade paths for global operations.",
          },
          {
            num: "02",
            heading: "Epicor Advisory & Support Services",
            content:
              ": Enhance operational efficiency across manufacturing, distribution, and retail with our deep tech and business expertise in Epicor ERP solutions, optimizing your enterprise's processes.",
          },
          {
            num: "03",
            heading: "Infor Advisory & Support Services",
            content:
              "Utilize Infor's flexible cloud-based ERP software and its flexible, scalable cloud-based platform with customized support services designed to adapt to your unique business demands.",
          },
          {
            num: "04",
            heading: "NetSuite Advisory & Support Services",
            content:
              ": Leverage NetSuite's comprehensive capabilities for ERP, CRM, and e-commerce with our strategic advisory, servicing a wide range of business scales and needs.",
          },
          {
            num: "05",
            heading: "Custom ERP Developmen",
            content:
              "Build bespoke ERP solutions from the ground up, tailored to fit your enterprise’s unique processes, operations, and needs, ensuring a perfect fit for your operational model.",
          },
          {
            num: "06",
            heading: "ERP Training and User Adoption",
            content:
              "Equip your team with the knowledge, know-how, and skills to completely leverage your ERP system through comprehensive training programs and change management strategies.",
          },
          {
            num: "07",
            heading: "Legacy System Migration",
            content:
              "Safely transition from outdated and conventional systems to modern ERP platforms with minimal downtown and disruption while preserving data integrity and business continuity.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "EMPOWERING VARIOUS INDUSTRIES WITH SPECIALIZED ERP SUPPORT",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Coordinate patient care, manage resources efficiently, and maintain compliance with healthcare-specific ERP systems.",
          },
          {
            icon: finace,
            heading: "FINANCIAL SERVICES",
            content:
              "Implement ERP systems to manage complex financial operations, ensuring real-time reporting, compliance, and effective risk management.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Streamline production workflows, supply chain management, and inventory control with integrated ERP solutions.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Synchronize point of sale, e-commerce, and inventory management to provide seamless customer experiences.",
          },
          {
            icon: aerospace,
            heading: "SUPPLY CHAIN AND LOGISTICS",
            content:
              "Optimize supply chain visibility and logistics management, reducing costs and improving delivery timelines with an integrated ERP suite.",
          },
          {
            icon: travel,
            heading: "HOSPITALITY",
            content:
              "Manage property operations, customer relations, and back-office activities seamlessly, delivering exceptional guest experiences and operational excellence.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Partner with Qcentrio for ERP Solutions Support?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Customized ERP Strategies",
            content:
              "Receive personalized ERP assessments and demonstrations created to align with your business objectives.",
          },
          {
            image: whyChooseImg2,
            heading: "Certified Professionals",
            content:
              "Our team of accredited tech and business professionals is committed to providing you with expertise and insights that drive success.",
          },
          {
            image: whyChooseImg3,
            heading: "24/7 Support",
            content:
              "We offer scalable solutions with round-the-clock support, ensuring your ERP systems operate flawlessly and continuously evolve with your business.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading: "Harness the Power of Big Data for Informed Decision-Making",
      },
      metaData: {
        title: "Expert Big Data Analytics Services and Solutions | Qcentrio",
        description:
          "Unlock actionable insights and enhance operational efficiency with Qcentrio's big data services, featuring custom solutions and predictive analytics.",
      },
      breadCrump: {
        main: "ADVANCED TECHNOLOGY SOLUTIONS",
        link: "/offerings/advanced-technology-solutions",
        current: "Big Data Services and Solutions",
      },
      contactHead:
        "Transform your business with data-driven insights and advanced analytics",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Transform Your Data into Strategic Assets with Qcentrio’s Big Data Services",
        content1:
          "Harnessing vast datasets effectively is a critical differentiator for businesses poised to lead and innovate. Enterprises looking for long-term success need to navigate the data-led transformation confidently and maintain a competitive edge in their industry.",
        content2:
          "Qcentrio, as your premier partner in big data services, can enable your organization to unlock significant value through actionable insights and data-driven decisions. Our approach assesses and enhances your analytics maturity to exceed industry standards, integrating advanced data monetization and value-creation strategies. With a focus on decision science, design thinking, and data storytelling, we ensure analytics are deeply embedded in your processes, optimizing every business outcome.",
      },
      offeringsSetion: {
        mainHeading: "Qcentrio’s Big Data Services and Solutions Include",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Data Analytics and Interpretation",
            content:
              "Develop a robust infrastructure to harness and decipher vast data sets using advanced tools like Apache Hadoop and NoSQL databases, enabling deep insights into your business dynamics.",
          },
          {
            num: "02",
            heading: "Custom Big Data Solutions",
            content:
              "Develop bespoke solutions for comprehensive data management, collecting, processing, analyzing, and visualizing data with state-of-the-art technologies such as Apache Spark, Python, and R. These solutions empower you with actionable insights for informed decision-making.",
          },
          {
            num: "03",
            heading: "Data Management and Integration",
            content:
              "Ensure the integrity, security, and seamless integration of your data with existing systems, facilitating streamlined operations and enhanced business process efficiency.",
          },
          {
            num: "04",
            heading: "Predictive Analytics and Modeling",
            content:
              "Employ predictive analytics to anticipate market trends, decode customer behaviors, and strategize proactively, giving you a competitive edge in your industry.",
          },
          {
            num: "05",
            heading: "Real-Time Data Processing",
            content:
              "Adopt systems that support instantaneous data analysis and decision-making. This will enable you to respond adeptly to market dynamics and capitalize on emerging opportunities swiftly.",
          },
          {
            num: "06",
            heading: "Data Visualization and Reporting",
            content:
              "Transform complex datasets into intuitive visual representations, simplifying the interpretation of insights for stakeholders and enhancing decision-making processes across your organization.",
          },
          {
            num: "07",
            heading: "Big Data Consulting",
            content:
              "Tap into our expertise to craft a tailored big data strategy, architecture, and deployment plan that aligns with your operational goals and maximizes efficiency.",
          },
          {
            num: "08",
            heading: "Machine Learning and AI Integration",
            content:
              "Enhance your significant data initiatives with AI and machine learning, discovering patterns and predictive insights beyond human analytical capabilities to secure a strategic advantage.",
          },
          {
            num: "09",
            heading: "Cloud Data Solutions",
            content:
              "Optimize your data storage and processing in the cloud, leveraging cutting-edge cloud analytics tools for scalable, cost-effective data management solutions that enhance operational efficiency and reduce overhead.",
          },
          {
            num: "10",
            heading: "Cloud Data Solutions",
            content:
              "Optimize your data storage and processing in the cloud, leveraging cutting-edge cloud analytics tools for scalable, cost-effective data management solutions that enhance operational efficiency and reduce overhead.",
          },
          {
            num: "11",
            heading: "Internet of Things (IoT) Data Integration",
            content:
              "Integrate IoT data to gain real-time insights into user interactions and machine performance, enriching your analytics landscape and providing a deeper understanding of customer needs and product performance.",
          },
          {
            num: "12",
            heading: "Data Governance and Compliance",
            content:
              "Establish robust frameworks to uphold standards, manage policies, and ensure compliance with international regulations, safeguarding your data assets and reinforcing business integrity.",
          },
          {
            num: "13",
            heading: "Sentiment Analysis and Social Media Analytics",
            content:
              "Utilize big data tools to analyze customer sentiment across social platforms, refining your marketing strategies and product developments to boost customer satisfaction and loyalty.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Industries Benefiting from Qcentrio’s Big Data Solutions",
        list: [
          {
            icon: healthcare,
            heading: "Healthcare",
            content:
              "Manage patient data, improve treatments, and enhance healthcare operations with data-driven insights.",
          },
          {
            icon: finace,
            heading: "Retail",
            content:
              "Personalize shopping experiences and optimize supply chains with actionable data.",
          },
          {
            icon: manufacturing,
            heading: "Financial Services",
            content:
              "Detect fraud, manage risks, and personalize financial products based on big data analytics.",
          },
          {
            icon: engineering,
            heading: "Telecommunications",
            content:
              "Optimize network performance and customer experience using insights from big data.",
          },
          {
            icon: aerospace,
            heading: "Manufacturing",
            content:
              "Streamline manufacturing processes and predictive maintenance using real-time data analytics.",
          },
          {
            icon: travel,
            heading: "Transportation",
            content:
              "Enhance route optimization and logistics planning through big data solutions.",
          },
          {
            icon: eCommerce,
            heading: "Energy",
            content:
              ": Make informed decisions on energy production, distribution, and consumption with data analytics.",
          },
          {
            icon: realEstate,
            heading: "Media and Entertainment",
            content:
              "Analyze viewer preferences and media consumption patterns to create targeted content and advertising strategies.",
          },
          {
            icon: softwareTechnology,
            heading: "Supply Chain Management",
            content:
              "Integrate big data analytics to enhance supply chain visibility, demand forecasting, and inventory optimization.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Qcentrio is Your Choice for Big Data Services",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expert Data Team",
            content:
              "We harness the collective intelligence of our skilled data scientists and analysts to ensure that your big data challenges are met and transcended.",
          },
          {
            image: whyChooseImg2,
            heading: "Customization",
            content:
              "Our big data solutions are not off-the-shelf; they align perfectly with your business's objectives, making your big data initiatives as singular as your brand.",
          },
          {
            image: whyChooseImg3,
            heading: "Compliance",
            content:
              "We are committed to ensuring that all big data services meet and exceed industry standards, providing you with peace of mind and safeguarding your reputation.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "MAXIMIZE ENTERPRISE AGILITY AND INNOVATION WITH ADVANCED SAP SERVICES SUPPORT",
      },
      metaData: {
        title: "Expert SAP Services and Support | Qcentrio",
        description:
          "Lift your business with Qcentrio's SAP services. Our SAP S/4HANA, CRM, and Analytics solutions ensure your operations are streamlined and future-proof.",
      },
      breadCrump: {
        main: "ADVANCED TECHNOLOGY SOLUTIONS",
        link: "/offerings/advanced-technology-solutions",
        current: "Comprehensive SAP Services",
      },
      contactHead:
        "Redefine your operational capabilities with specialized SAP Services",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Transform Your Business Operations with Qcentrio's Tailored SAP Services",
        content1:
          "SAP systems characterize a critical infrastructure today for enterprises aiming to consolidate and enhance their operational processes. As businesses face the twofold challenges of adapting quickly to market changes and making decisions based on real-time data, the need for robust technological support is a constraint that they need. ",
        content2:
          "At Qcentrio, we offer specialized SAP services that cater to this demand, including SAP S/4HANA for next-generation business suite capabilities, SAP CRM & Customer Experience to advance client interactions, SAP Analytics for deeper insights, and more. Our offerings are designed to empower your enterprise with the agility to respond promptly, the intelligence to make informed decisions, and the innovation to drive growth and efficiency. With Qcentrio’s SAP expertise, your business is not just equipped to operate efficiently—it’s set to lead and transform in its sector.",
      },
      offeringsSetion: {
        mainHeading: "DISCOVER QCENTRIO’S COMPREHENSIVE SAP SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "SAP Implementation and Migration",
            content:
              "Execute a seamless transition to advanced SAP platforms, with a focus on minimizing disruption and maximizing business value.",
          },
          {
            num: "02",
            heading: "SAP S/4HANA Solutions",
            content:
              "Leverage the next generation of SAP business suite for faster, simpler, and more efficient business processes that propel decision-making.",
          },
          {
            num: "03",
            heading: "SAP CRM & Customer Experience",
            content:
              "Transform customer interactions and bolster sales growth by harnessing SAP CRM to deepen customer relationships and engagement..",
          },
          {
            num: "04",
            heading: "SAP Analytics Solutions",
            content:
              "Turn data into a strategic advantage with SAP Analytics, obtaining critical insights that drive better business outcomes.",
          },
          {
            num: "05",
            heading: "Continuous SAP Support",
            content:
              "Benefit from uninterrupted SAP service excellence, ensuring your systems stay current, secure, and highly functional.",
          },
          {
            num: "06",
            heading: "SAP Cloud Platform Services",
            content:
              "Harness the full power of cloud computing with SAP's cloud platform, ensuring flexible scalability and innovation in a secure cloud environment.",
          },
          {
            num: "07",
            heading: "SAP Custom Development",
            content:
              "Tailor your SAP environment with custom-developed applications that meet your unique business processes and workflows for a competitive edge.",
          },
          {
            num: "08",
            heading: "SAP Training and Enablement",
            content:
              "Equip your workforce with the necessary skills to maximize the use of SAP solutions through comprehensive training modules and user enablement programs.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "CUSTOMIZE YOUR SAP EXPERIENCE ACROSS VARIOUS INDUSTRIES",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Manage patient care, services, and operations with SAP's healthcare solutions, maintaining compliance and operational excellence.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Optimize financial operations and risk management while ensuring regulatory compliance with SAP's financial management solutions.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate and automate core production and supply chain processes with SAP’s robust suite of manufacturing solutions.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Leverage SAP to unify commerce processes, from inventory management to omnichannel sales, providing exceptional customer experiences.",
          },
          {
            icon: aerospace,
            heading: "AUTOMOTIVE",
            content:
              "Utilize SAP to streamline supply chain management, production planning, and customer experiences in the automotive industry for greater efficiency and innovation.",
          },
          {
            icon: travel,
            heading: "PUBLIC SECTOR",
            content:
              "Deploy SAP solutions to enhance public services delivery, improve stakeholder engagement, and drive digital transformation in government operations.",
          },
          {
            icon: eCommerce,
            heading: "UTILITIES",
            content:
              "Leverage SAP for utilities to manage asset lifecycles, customer service, and regulatory compliance more effectively, optimizing resource distribution and consumption.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Choose Qcentrio for Your SAP Service Needs?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Deep SAP Expertise",
            content:
              "Our team brings extensive knowledge and experience across the full range of SAP services.",
          },
          {
            image: whyChooseImg2,
            heading: "Deep SAP Expertise",
            content:
              "We deliver personalized SAP strategies tailored to meet your specific business requirements.",
          },
          {
            image: whyChooseImg3,
            heading: "Efficient Migration and Support",
            content:
              "Our approach ensures a smooth transition to SAP systems, continuous improvement, and dedicated support.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading: "CONVERT YOUR IDEAS INTO LEADING SOFTWARE PRODUCTS",
      },
      metaData: {
        title: "Tailored Software and Application Development | Qcentrio",
        description:
          "With Qcentrio’s custom application development services, bring your software vision to life. Our agile and dedicated team ensures your product meets the highest standards.",
      },
      breadCrump: {
        main: "ADVANCED TECHNOLOGY SOLUTIONS",
        link: "/offerings/advanced-technology-solutions",
        current: "Custom Software Application Development",
      },
      contactHead: "Transform your software ideas with Qcentrio",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Turn Your Vision into Reality with Qcentrio’s Custom Software Development",
        content1:
          "Custom software applications, platforms, or solutions are the cornerstone of innovation for any enterprise, propelling its businesses toward future success. It helps companies to meet and exceed the dynamic demands of modern markets, ensuring they stay ahead of the curve.",
        content2:
          "Qcentrio is one of the leading providers of custom software and application development services, offering a comprehensive range of services from JAVA to MEAN and full-stack development. Our methodology is deeply rooted in understanding your business needs, ensuring we deliver functional and practical software solutions that embody your vision.",
      },
      offeringsSetion: {
        mainHeading:
          "QCENTRIO’S EXPERTISE IN CUSTOM SOFTWARE/APPLICATION DEVELOPMENT",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "JAVA",
            content:
              "Using the latest Java technologies and frameworks, develop scalable, secure, high-performance applications tailored to various business needs, from web applications to complex enterprise solutions.",
          },
          {
            num: "02",
            heading: "MEAN Stack",
            content:
              "Leverage the entire stack of MEAN technologies to create efficient and modern web applications, providing dynamic and responsive user experiences with Node.js, Angular, MongoDB, and Express.",
          },
          {
            num: "03",
            heading: "Full Stack",
            content:
              "Experience comprehensive development covering front-end and back-end needs, ensuring seamless integration across all application layers using modern web development tools and techniques.",
          },
          {
            num: "04",
            heading: "Custom Application Development",
            content:
              "Build applications that precisely fit your business specifications and enhance your operations with a user-centric approach, agile methodologies, and cutting-edge technologies.",
          },
          {
            num: "05",
            heading: "Mobile Development",
            content:
              "Create intuitive and engaging mobile applications optimized for performance across all devices using native or cross-platform development frameworks.",
          },
          {
            num: "06",
            heading: "API Development and Integration",
            content:
              "Design and implement APIs with RESTful, SOAP, or GraphQL protocols for robust integration and seamless operation between different software systems.",
          },
          {
            num: "07",
            heading: "Cloud Application Development",
            content:
              "Utilize cloud platforms for developing scalable, flexible, and secure cloud-native applications using AWS, Azure, or Google Cloud.",
          },
          {
            num: "08",
            heading: "Legacy System Modernization",
            content:
              "Upgrade legacy systems to current technologies, improving efficiency and reducing maintenance overhead with minimal business disruption.",
          },
          {
            num: "09",
            heading: "User Experience (UX) Design",
            content:
              "Develop a user-focused design strategy that enhances interaction and user satisfaction with your custom software application, leveraging the latest UX design principles and tools.",
          },
          {
            num: "10",
            heading: "eCommerce Development",
            content:
              "Tailor-made eCommerce solutions that drive sales, enhance customer engagement, and integrate seamlessly with your business operations, powered by popular eCommerce platforms such as Magento, Shopify, or WooCommerce.",
          },
          {
            num: "11",
            heading: "Enterprise Resource Planning (ERP) Solutions",
            content:
              "Custom ERP software that streamlines your business processes, enhances productivity and integrates various organizational functions using open-source or commercial ERP systems.",
          },
          {
            num: "11",
            heading: "Software as a Service (SaaS) Development",
            content:
              "Build cloud-based SaaS platforms that are scalable, accessible, and designed to meet the needs of your customers and business model using modern SaaS development frameworks and tools.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "INDUSTRIES WE SPECIALIZE IN",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Develop compliant and patient-centric applications to streamline healthcare operations.",
          },
          {
            icon: finace,
            heading: "FINTECH",
            content:
              "Craft secure and innovative fintech solutions that revolutionize financial transactions and services.",
          },
          {
            icon: manufacturing,
            heading: "EDUCATION",
            content:
              "Enhance the learning experience with custom educational software, from e-learning platforms to management systems.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Deliver a personalized shopping experience with custom retail software, from point-of-sale systems to inventory management.",
          },
          {
            icon: aerospace,
            heading: "LOGISTICS",
            content:
              "Optimize supply chain and logistics operations with custom software solutions for real-time tracking and efficiency.",
          },
          {
            icon: travel,
            heading: "HOSPITALITY",
            content:
              "Create software that elevates the guest experience, from reservation systems to customer relationship management.",
          },
          {
            icon: eCommerce,
            heading: "REAL ESTATE",
            content:
              "Build comprehensive platforms for property listings, client interactions, and operations management.",
          },
          {
            icon: realEstate,
            heading: "MANUFACTURING",
            content:
              "Implement tailored software solutions to streamline manufacturing processes and increase productivity.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Custom Software / Application Development?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Tailored Solutions",
            content:
              "Our bespoke software is crafted to align perfectly with your business needs and industry nuances.",
          },
          {
            image: whyChooseImg2,
            heading: "Advanced Technology Expertise",
            content:
              "We use cutting-edge technologies to build your ideal solution from JAVA to MEAN and Full Stack.",
          },
          {
            image: whyChooseImg3,
            heading: "Quality and Reliability",
            content:
              "We prioritize high software quality and reliability standards to ensure your applications stand the test of time.",
          },
        ],
      },
    },
    5: {
      heroSectionData: {
        heading: "Navigate the Future with Smart IoT Integration",
      },
      metaData: {
        title: "Advanced IoT Solutions for Smart Business | Qcentrio",
        description:
          "Qcentrio's IoT solutions enhance business operations with smart device connectivity, custom integration, and insightful data analytics for operational excellence.",
      },
      breadCrump: {
        main: "ADVANCED TECHNOLOGY SOLUTIONS",
        link: "/offerings/advanced-technology-solutions",
        current: "Internet of Things Solutions",
      },
      contactHead: "Propel your business forward with new-age IoT capabilities",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Transform Your Business Operations with Qcentrio's IoT Solutions",
        content1:
          "As enterprises struggle with the complexities of digital transformation, the need for cohesive integration across digital technologies becomes crucial. The Internet of Things (IoT) is a pivotal technology, transforming industries by linking interconnected processes and systems. However, challenges like piecemeal automation and siloed operations often hinder full potential realization, leading to unintegrated data and diminished system-wide visibility and control. ",
        content2:
          "At Qcentrio, we address these critical issues by providing advanced IoT solutions and services support that seamlessly integrate into your business operations, enhancing performance and operational efficiency. We help unify and leverage cyber-physical systems across your value chain, empowering your enterprise to fully realize the value of supply chain transformation investments and lead impactful Industry X.0 initiatives.",
      },
      offeringsSetion: {
        mainHeading:
          "Qcentrio's IoT Services Enable Smart, Efficient Operations",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Custom IoT Integration",
            content:
              "Tailor IoT solutions to your unique business needs across industries like manufacturing, retail, and healthcare, enhancing process efficiency and operational fluidity.",
          },
          {
            num: "02",
            heading: "Smart Device Connectivity",
            content:
              "Facilitate seamless real-time data exchange and control with interconnected devices, empowering you to make informed decisions swiftly.",
          },
          {
            num: "03",
            heading: "Data Analytics and Insights",
            content:
              "Harness the power of IoT-generated data for detailed analytics and insights, driving strategic decisions that keep you competitive and proactive in spotting new opportunities.",
          },
          {
            num: "04",
            heading: "Predictive Maintenance and Monitoring",
            content:
              "Leverage IoT for continuous equipment monitoring to minimize downtime and maintenance costs, thereby extending asset longevity and optimizing resource utilization.",
          },
          {
            num: "05",
            heading: "IoT Security Solutions",
            content:
              "Secure your IoT ecosystem with advanced protocols to shield against cyber threats and ensure data integrity, maintaining uninterrupted operations.",
          },
          {
            num: "06",
            heading: "User Interface for IoT Devices",
            content:
              "Design intuitive user interfaces for your IoT solutions to boost usability and accessibility, increasing productivity and enhancing user engagement.",
          },
          {
            num: "07",
            heading: "IoT for Supply Chain Management",
            content:
              "Revolutionize your supply chain with IoT-enabled real-time tracking, inventory management, and logistics optimization, reducing costs and elevating customer satisfaction.",
          },
          {
            num: "08",
            heading: "Energy Management with IoT",
            content:
              "Implement smart IoT solutions for energy monitoring and management to cut costs and reduce your carbon footprint, supporting your sustainability goals.",
          },
          {
            num: "09",
            heading: "IoT Asset Tracking Solutions",
            content:
              "Deploy sophisticated tracking systems to monitor assets in real-time, minimizing loss risks and enhancing asset utilization, thereby cutting unnecessary expenditures.",
          },
          {
            num: "10",
            heading: "IoT-Enabled Wearable Devices",
            content:
              "Create custom wearable devices focused on health, fitness, and personal security. These devices provide vital connectivity and insights on the move, thus improving employee wellness and safety.",
          },
          {
            num: "11",
            heading: "Industrial IoT (IIoT) Solutions",
            content:
              "Utilize IoT in industrial settings to boost machine-to-machine communication, enhance operational efficiency, and facilitate predictive maintenance, streamlining your industrial operations.",
          },
          {
            num: "12",
            heading: "IoT for Smart Cities",
            content:
              "Develop innovative IoT solutions for urban management, enhancing public services, resource management, and overall urban quality of life, paving the way for sustainable and thriving smart cities.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Industries Transforming with Qcentrio’s IoT Solutions",
        list: [
          {
            icon: healthcare,
            heading: "Automotive",
            content:
              "Advance vehicle telematics and smart manufacturing processes with integrated IoT solutions.",
          },
          {
            icon: finace,
            heading: "Smart Home & Building",
            content:
              "IoT can enhance home and building automation for improved security, energy management, and convenience.",
          },
          {
            icon: manufacturing,
            heading: "Agriculture",
            content:
              ": Deploy IoT for precision farming, enabling smarter resource management and crop monitoring.",
          },
          {
            icon: engineering,
            heading: "Retail",
            content:
              "Revolutionize the retail experience with IoT for inventory management, customer engagement, and personalized shopping experiences.",
          },
          {
            icon: aerospace,
            heading: "Healthcare",
            content:
              ": Improve patient care and healthcare operations with IoT devices that monitor health data and manage hospital resources.",
          },
          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
          },
          {
            icon: eCommerce,
            heading: "Logistics",
            content:
              "Transform logistics with IoT for enhanced tracking, efficient routing, and fleet management.",
          },
          {
            icon: realEstate,
            heading: "Utilities",
            content:
              "Utilize IoT for smart grid management and real-time utility service monitoring.",
          },
          {
            icon: softwareTechnology,
            heading: "Manufacturing",
            content:
              "Increase production efficiency and safety with IoT-powered industrial automation and real-time analytics.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Leverage Qcentrio for Your IoT Solutions?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Customization and Expertise",
            content:
              ": Get custom-developed IoT solutions to fit your industry's needs, crafted by experts with deep technological proficiency.",
          },
          {
            image: whyChooseImg2,
            heading: "Scalable and Seamless Integration",
            content:
              "Our IoT solutions promise seamless integration into your current systems, providing scalability to grow with your business.",
          },
          {
            image: whyChooseImg3,
            heading: "Continuous Support",
            content:
              "Benefit from Qcentrio's round-the-clock support, ensuring your IoT solutions perform optimally at all times.",
          },
        ],
      },
    },
    6: {
      heroSectionData: {
        heading: "BRING YOUR SOFTWARE VISION TO LIFE",
      },
      metaData: {
        title: "Innovative Product Engineering Services | Qcentrio",
        description:
          "Transform your ideas into market-leading software with Qcentrio's product engineering services. We provide end-to-end development, QA, and optimization for your digital products.",
      },
      breadCrump: {
        main: "ADVANCED TECHNOLOGY SOLUTIONS",
        link: "/offerings/advanced-technology-solutions",
        current: "Product Engineering Services",
      },
      contactHead: "Partner with Qcentrio for Exceptional Product Engineering",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Embrace Advanced Software Engineering with Qcentrio",
        content1:
          "Navigating the journey from an initial concept to a fully operational software product demands a nuanced approach that keeps pace with evolving technology trends. It requires accelerating the software development process and enhancing product performance.",
        content2:
          "At Qcentrio, we specialize in comprehensive product engineering services that do more than develop software; we ensure continual refinement and advancement of your solutions. Our strategic focus on innovation allows us to align your software offerings precisely with business objectives and consumer expectations. By integrating new-age technology and forward-thinking design, we help ensure that your products meet the current market demands and set new benchmarks in your industry.",
      },
      offeringsSetion: {
        mainHeading: "QCENTRIO'S PRODUCT ENGINEERING SERVICES OFFER",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Software Development and Design",
            content:
              "Create software solutions with a strong foundation in robust architecture, user-centric design, and seamless functionality, utilizing languages like Java, Python, C#, and PHP. Further, we develop customized software solutions that cater to your business needs with our support.",
          },
          {
            num: "02",
            heading: "Agile and DevOps Integration",
            content:
              "Integrate agile methodologies and DevOps practices for efficient and rapid development cycles with tools like Jenkins, Docker, and Kubernetes, ensuring continuous integration and delivery to improve software quality and reduce time to market.",
          },
          {
            num: "03",
            heading: "Quality Assurance and Testing",
            content:
              "Ensure your products meet high-quality standards with comprehensive QA and testing processes. Automated and manual testing is conducted to detect and resolve issues early in development.",
          },
          {
            num: "04",
            heading: "Product Lifecycle Management",
            content:
              "We oversee the entire product journey, from ideation through launch and updates, adapting to changes and opportunities. Furthermore, get end-to-end product management services support to ensure the successful delivery of your product.",
          },
          {
            num: "05",
            heading: "Product Modernization and Optimization",
            content:
              "Update and refine your software to stay ahead of the latest technology trends and performance standards. Implement modernization strategies to improve software performance, scalability, and user experience.",
          },
          {
            num: "06",
            heading: "UI/UX Design Services",
            content:
              "We deliver intuitive and engaging user experiences that drive customer satisfaction and engagement. We conduct user research and usability testing to design user-friendly interfaces that enhance the user experience.",
          },
          {
            num: "07",
            heading: "Cloud Engineering",
            content:
              "Leverage the power of cloud technologies to build scalable and resilient software architectures, get active cloud migration services support, and design cloud-native applications that are secure, scalable, and cost-effective.",
          },
          {
            num: "08",
            heading: "Data Engineering and Analytics",
            content:
              "Transform data into actionable insights to inform strategic decisions throughout product engineering. Build data pipelines, design data warehouses, and get data analysis services to help your businesses make informed decisions.",
          },
          {
            num: "09",
            heading: "Embedded Systems Development",
            content:
              "We specialize in developing and integrating embedded software for hardware devices and IoT applications, ensuring high performance and reliability. Our E2E services, including prototyping, hardware design, firmware development, and testing, take your business up a notch.",
          },
          {
            num: "10",
            heading: "Blockchain Solutions",
            content:
              "Implement blockchain technology to enhance security, transparency, and efficiency across various applications, including smart contracts and decentralized systems. Design and implement blockchain-based solutions that are secure, transparent, and tamper-proof.",
          },
          {
            num: "11",
            heading: "Artificial Intelligence Integration",
            content:
              "Integrate AI algorithms and machine learning models to add intelligence to your products, improving user experience and operational efficiency. With our AI consulting and development services, you can unlock the power of AI for best-in-class insights.",
          },
          {
            num: "12",
            heading: "Cybersecurity Implementation",
            content:
              "Incorporate advanced cybersecurity features into your software to protect user data and comply with the latest security standards. Conduct security assessments, implement security controls, and provide ongoing security monitoring to ensure the security of your software.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "INDUSTRIES QCENTRIO SERVES IN PRODUCT ENGINEERING",
        list: [
          {
            icon: healthcare,
            heading: "Consumer Electronics",
            content:
              "Design intuitive software that powers the latest consumer technology devices, enhancing user experience and enabling seamless connectivity. ",
          },
          {
            icon: finace,
            heading: "Automotive",
            content:
              "Develop advanced automotive software solutions for connected cars and automation, improving safety, efficiency, and user convenience. ",
          },
          {
            icon: manufacturing,
            heading: "Aerospace",
            content:
              "Engineer complex software systems that meet the rigorous demands of the aerospace industry, ensuring high reliability, safety, and performance.",
          },
          {
            icon: engineering,
            heading: "Medical Devices",
            content:
              "Create compliant and reliable software that enhances functionality while maintaining data privacy and security.",
          },
          {
            icon: aerospace,
            heading: "Telecom",
            content:
              "Innovate telecommunications software for better connectivity and user experiences, catering to the ever-evolving user needs and industry trends.",
          },
          {
            icon: travel,
            heading: "Servers/Storage",
            content:
              "Build robust software for server and storage solutions that manage vast amounts of data, ensuring scalability, flexibility, and faster time to market.",
          },
          {
            icon: eCommerce,
            heading: "Semiconductors",
            content:
              "Craft precise software to control and monitor semiconductor manufacturing processes, increasing efficiency, accuracy, and quality.",
          },
          {
            icon: realEstate,
            heading: "Independent Software Vendors (ISVs)",
            content:
              "Support ISVs with comprehensive product engineering to bring new software solutions to market, helping them stay ahead in the competitive market.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Choose Qcentrio for Product Engineering Services?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Customized Engineering Excellence",
            content:
              "Our services are personalized to your project's needs, aligning with your strategic vision and market demands.",
          },
          {
            image: whyChooseImg2,
            heading: "Comprehensive Support",
            content:
              "From design to post-launch, Qcentrio offers a full spectrum of product engineering services to ensure your product's success.",
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
      metaData: {
        title: "Comprehensive Audit and Assurance Services | Qcentrio",
        description:
          "Ensure the integrity of your digital systems with Qcentrio's Audit and Assurance Services. Our expert audits provide security, compliance, and peace of mind.",
      },
      breadCrump: {
        main: "ADVISORY AND STRATEGIC SERVICES",
        link: "/offerings/advisory-and-strategic-services",
        current: "Audit and Assurance Services",
      },
      contactHead:
        "Strengthen the integrity of your digital systems with custom audits ",
      heroSectionData: {
        heading: "SECURE YOUR DIGITAL FOOTPRINT, FOCUS ON GROWTH",
      },
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Maximize Security and Compliance with Qcentrio's Audit and Assurance Services",
        content1:
          "With the increasing reliance on digital systems for every aspect of operations, it is more important than ever to ensure that these systems are secure, compliant, and functioning correctly.",
        content2:
          "At Qcentrio, our Audit and Assurance Services protect your digital infrastructure from potential threats and vulnerabilities. With our team of experts conducting thorough audits of your systems, you can identify weaknesses and areas of improvement. Our services cover internal controls, risk management, cybersecurity, and compliance. We use the latest tools and continuously monitor your systems for suspicious activity.",
      },
      offeringsSetion: {
        mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Digital Systems Auditing",
            content:
              "Utilize advanced tools like ACL and IDEA for in-depth audits of your digital systems and evaluate their effectiveness, security, and compliance with prevailing standards.",
          },
          {
            num: "02",
            heading: "Risk Management and Compliance",
            content:
              "Leverage our expertise in risk assessment frameworks to identify potential risks and safeguard your organization against potential legal and financial liabilities.",
          },
          {
            num: "03",
            heading: "Cybersecurity Assessment",
            content:
              "Leverage our expertise in cybersecurity tools, including Nessus and Nmap, to dive deep into your systems to uncover and reinforce potential vulnerabilities.",
          },
          {
            num: "04",
            heading: "Process Verification and Validation",
            content:
              "Implement process mapping and analysis tools to scrutinize every step of your workflows, verifying system integrity and operational excellence.",
          },
          {
            num: "05",
            heading: "Data Integrity and Quality Assurance",
            content:
              "Vigilantly monitor and manage your data to prevent inaccuracies and inconsistencies, ensuring that decision-makers have access to reliable and precise information.",
          },
          {
            num: "06",
            heading: "IT Governance Evaluation",
            content:
              "Structure your IT governance framework around best practices like COBIT and ITIL to ensure your IT strategies support your business goals.",
          },
          {
            num: "07",
            heading: "Compliance Strategy Development",
            content:
              "Create & implement robust compliance strategies that align with industry standards and regulations, reducing risk and fostering a culture of compliance.",
          },
          {
            num: "08",
            heading: "Performance Auditing",
            content:
              "Evaluate the efficiency and effectiveness of operations, providing recommendations to improve performance and optimize resource utilization.",
          },
          {
            num: "09",
            heading: "Technology Assurance",
            content:
              "Stay ahead with technology assurance services that evaluate your IT infrastructure's resilience and future readiness against evolving tech trends.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "CUSTOMIZED AUDIT AND ASSURANCE FOR EVERY INDUSTRY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Implement rigorous auditing to protect patient information and comply with health regulations.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Ensure accuracy and compliance in financial reporting with stringent audit protocols.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Audit supply chain and operational systems to prevent disruptions and maintain productivity.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Protect consumer data and ensure transactional integrity with comprehensive retail auditing.",
          },
          {
            icon: aerospace,
            heading: "TECH AND IT",
            content:
              "Get customized audit services for the tech & IT industry, addressing IP protection and software licensing compliance.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Trust Qcentrio with Your Audit and Assurance Needs?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise and Precision",
            content:
              "Our team of auditors brings unparalleled precision to each engagement, ensuring your systems are thoroughly evaluated.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions",
            content:
              "We provide auditing solutions tailored to your unique operational needs, delivering actionable insights.",
          },
          {
            image: whyChooseImg3,
            heading: "Ethical Standards",
            content:
              "Integrity is at the core of our services, and we are committed to upholding the highest ethical standards in all our audits.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading: "TRANSFORMING HEALTHCARE WITH EXPERT EPIC INTEGRATION",
      },
      metaData: {
        title: "Expert EPIC Advisory Services | Qcentrio",
        description:
          "Enhance your healthcare operations with Qcentrio's EPIC Advisory Services, offering EHR integration, data migration, and comprehensive support.",
      },
      breadCrump: {
        main: "ADVISORY AND STRATEGIC SERVICES",
        link: "/offerings/advisory-and-strategic-services",
        current: "EPIC Advisory Services",
      },
      contactHead:
        "Enhance your healthcare services with E2E EPIC Advisory services",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Streamline Your Healthcare Data Management with Qcentrio's EPIC Advisory Services",
        content1:
          "As healthcare continues to advance, the need for cohesive and streamlined Electronic Health Record (EHR) systems becomes crucial.",
        content2:
          "At Qcentrio, we offer expert EPIC Advisory Services to simplify the integration of EPIC's leading medical software into existing hospital information systems. Our services ensure that healthcare providers can focus on what matters most — patient care, by seamlessly integrating EPIC's top-tier medical software into existing hospital information systems despite the complexity of varying data standards and programming languages.",
      },
      offeringsSetion: {
        mainHeading:
          "EXPLORE THE CORE COMPONENTS OF QCENTRIO'S EPIC ADVISORY SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "EHR Integration Expertise",
            content:
              "Optimize your workflows for patient data management by ensuring HIPAA-compliant storage and efficient data collection through custom API development.",
          },
          {
            num: "02",
            heading: "Data Migration",
            content:
              "Migrate your enterprise data to EPIC platforms by ensuring data integrity and continuity of your care throughout the entire process.",
          },
          {
            num: "03",
            heading: "Go-Live Solutions",
            content:
              "Our seasoned project managers provide comprehensive support for operational readiness, ensuring a smooth transition to EPIC systems.",
          },
          {
            num: "04",
            heading: "Healthcare Ecosystem Expansion",
            content:
              "Enhance the patient experience by integrating telehealth, pharmacy management, and other medical software solutions into the EPIC ecosystem.",
          },
          {
            num: "05",
            heading: "Compliance and Security Consulting",
            content:
              "Navigate the complex landscape of healthcare regulations with our expert consulting on compliance and security within the EPIC framework.",
          },
          {
            num: "06",
            heading: "Interoperability Solutions",
            content:
              "Bridge the gap between various healthcare systems and devices, ensuring seamless data exchange and interoperability within the EPIC ecosystem for comprehensive patient care.",
          },
          {
            num: "07",
            heading: "Custom Workflow Design",
            content:
              "Design custom workflows within the EPIC system to enhance clinical productivity, reduce administrative burden, and improve patient outcomes through tailored EHR functionalities.",
          },
          {
            num: "08",
            heading: "Training and Education",
            content:
              "Get extensive training and educational programs to ensure your healthcare professionals are fully equipped to utilize the EPIC system's capabilities, providing a proficient and confident workforce.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "QCENTRIO'S EPIC ADVISORY SERVICES ACROSS HEALTHCARE SECTORS",
        list: [
          {
            icon: healthcare,
            heading: "HOSPITALS AND CLINICS",
            content:
              "Elevate patient care with integrated EHR solutions tailored for fast-paced hospital environments and specialized clinics.",
          },
          {
            icon: finace,
            heading: "TELEMEDICINE",
            content:
              "Adapt to the growing demands of telehealth with integrated EPIC solutions that support remote care delivery.",
          },
          {
            icon: engineering,
            heading: "PHARMACY MANAGEMENT",
            content:
              "Streamline pharmacy operations with EPIC integration, ensuring precise medication tracking and patient safety.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Qcentrio for Your EPIC Advisory Needs?",
        list: [
          {
            image: whyChooseImg1,
            heading: "UNMATCHED EXPERTISE",
            content:
              "Qcentrio's team deeply understands EPIC systems, enabling us to provide top-quality advisory services.",
          },
          {
            image: whyChooseImg2,
            heading: "TAILORED INTEGRATION",
            content:
              "We offer customized solutions that fit your unique healthcare setting and meet the specific needs of your patients and staff.",
          },
          {
            image: whyChooseImg3,
            heading: "PATIENT-CENTRIC APPROACH",
            content:
              "We focus on improving scalability, technology adoption, and patient care, ensuring the best outcomes for your healthcare services.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "SEAMLESS INTEGRATION WITH EHR SYSTEM FOR ENHANCED CLINICAL, OPERATIONAL, AND FINANCIAL EFFICIENCIES",
      },
      metaData: {
        title: "Expert Oracle Cerner Advisory Services | Qcentrio",
        description:
          "Tap into Qcentrio's Oracle Cerner Advisory Services for comprehensive EHR implementation, ensuring streamlined healthcare operations and compliance.",
      },
      breadCrump: {
        main: "ADVISORY AND STRATEGIC SERVICES",
        link: "/offerings/advisory-and-strategic-services",
        current: "Oracle Cerner Advisory Services",
      },
      contactHead:
        "Tap into Qcentrio's Oracle Cerner Advisory Services to transform your healthcare operations",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Lift Healthcare Efficiency with Qcentrio's Oracle Cerner Advisory Services",
        content1:
          "Healthcare institutions face the challenge of integrating next-gen EHR systems into their complex operational framework.",
        content2:
          "As a leading name in medical software, Oracle Cerner presents an opportunity for transformative efficiency. Qcentrio is at the forefront of this integration, simplifying the web of EHR system incorporation with expert-led Oracle Cerner Advisory Services, ensuring healthcare providers can achieve the peak of operational excellence and patient care.",
      },
      offeringsSetion: {
        mainHeading: "QCENTRIO'S ORACLE CERNER ADVISORY SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Oracle Cerner Implementation",
            content:
              "Implement Oracle Cerner's suite of solutions, tailoring the EHR system to streamline processes for increased efficiency.",
          },
          {
            num: "02",
            heading: "Customized Cerner Solutions",
            content:
              "Create bespoke Cerner solutions specifically designed to meet the multifaceted needs of your healthcare environment.",
          },
          {
            num: "03",
            heading: "Operational Excellence & Compliance",
            content:
              "Streamline patient data workflows, ensure security and privacy, and navigate regulatory compliance complexities.",
          },
          {
            num: "04",
            heading: "Continuous Improvement & Support",
            content:
              "Receive ongoing optimization and support to constantly elevate your Cerner EHR system performance.",
          },
          {
            num: "05",
            heading: "Healthcare Data Analytics",
            content:
              "Unlock your enterprise data's full potential to leverage actionable insights, improving clinical outcomes and operational efficiency.",
          },
          {
            num: "06",
            heading: "System Customization and Integration",
            content:
              "Extend the functionality of your Oracle Cerner platform with custom integrations that cater to your unique organizational needs.",
          },
          {
            num: "07",
            heading: "Training and User Adoption",
            content:
              "Get comprehensive training services to ensure high user adoption rates, maximizing the value of your EHR investment.",
          },
          {
            num: "08",
            heading: "Migration & Data Conversion",
            content:
              "Transition from legacy systems to the Oracle Cerner platform, ensuring no data loss and continuity in patient care.",
          },
          {
            num: "09",
            heading: "Interoperability Solutions",
            content:
              "Enhance patient care with custom interoperability solutions that enable Oracle Cerner to communicate effectively with other healthcare systems.",
          },
          {
            num: "10",
            heading: "Performance Optimization",
            content:
              "Maximize the efficiency and reliability of your Oracle Cerner EHR with our performance optimization services, ensuring your system operates at peak performance.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "INDUSTRY-SPECIFIC GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HOSPITALS",
            content:
              "Implement a fully integrated EHR system to coordinate patient care and optimize hospital workflows.",
          },
          {
            icon: finace,
            heading: "CLINICS",
            content:
              "Deploy Cerner's ambulatory solutions to enhance patient engagement and streamline clinic operations.",
          },
          {
            icon: manufacturing,
            heading: "SPECIALTY CARE",
            content:
              "Tailor Cerner's specialized functionalities to the unique requirements of various medical specialties.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Partner with Qcentrio for Oracle Cerner Advisory?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Unequalled Expertise",
            content:
              "Our team's deep expertise in Oracle Cerner ensures a superior advisory experience from start to finish.",
          },
          {
            image: whyChooseImg2,
            heading: "Comprehensive Support",
            content:
              "From the initial implementation to continuous system improvements, our full spectrum services are designed for your success.",
          },
          {
            image: whyChooseImg3,
            heading: "Commitment to Excellence",
            content:
              "We are dedicated to helping healthcare organizations achieve the highest standards in patient care through advanced technology solutions.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading: "NAVIGATE AND MITIGATE DIGITAL RISKS WITH CONFIDENCE",
      },
      metaData: {
        title:
          "Navigate Digital Risks with Expert Risk Advisory Services | Qcentrio",
        description:
          "Qcentrio's Risk Advisory Services empower your business to mitigate digital threats with strategic cybersecurity and compliance expertise.",
      },
      breadCrump: {
        main: "ADVISORY AND STRATEGIC SERVICES",
        link: "/offerings/advisory-and-strategic-services",
        current: "Risk Advisory Services",
      },
      contactHead: "Strengthen Your Business Against Digital Threats",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Secure Your Digital Horizon with Qcentrio's Risk Advisory Services",
        content1:
          "As we move towards a more digital world, the possibility of cyber threats looms larger than ever. With the risk of data breaches and compliance lapses, it's crucial for companies to be proactive and vigilant in safeguarding their operations. ",
        content2:
          "At Qcentrio, we provide expert Risk Advisory Services, focusing on identifying, analyzing, and mitigating digital risks. Our team of professionals utilizes advanced tools, seasoned expertise, and strategic software like RSA Archer and IBM OpenPages to ensure your enterprise stays secure and compliant.",
      },
      offeringsSetion: {
        mainHeading: "OUR COMPREHENSIVE RISK ADVISORY SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Digital Risk Assessment",
            content:
              "Uncover and evaluate potential digital risks to your operations with our comprehensive assessments using advanced analytics tools.",
          },
          {
            num: "02",
            heading: "Cybersecurity Strategy and Planning",
            content:
              "Develop robust cybersecurity strategies tailored to your unique digital infrastructure needs, leveraging platforms like Splunk and FireEye.",
          },
          {
            num: "03",
            heading: "Compliance and Regulatory Advisory",
            content:
              "Navigate the complex terrain of GDPR, HIPAA, and SOCC compliance with our expert advisory services, ensuring your practices are up to date.",
          },
          {
            num: "04",
            heading: "Threat Intelligence and Monitoring",
            content:
              "Stay ahead of potential threats with our cutting-edge monitoring tools, gaining the intelligence to take proactive security measures.",
          },
          {
            num: "05",
            heading: "Business Continuity and Disaster Recovery Planning",
            content:
              "Create solid business continuity and disaster recovery plans with our strategic guidance using tools like Veeam and Zerto.",
          },
          {
            num: "06",
            heading: "Data Protection and Privacy",
            content:
              "Ensure the integrity and confidentiality of your data with our data protection advisory, which leverages the latest encryption software.",
          },
          {
            num: "07",
            heading: "Risk Management Program Development",
            content:
              "Design and implement a structured risk management program that integrates seamlessly with your business operations, ensuring ongoing vigilance and response readiness.",
          },
          {
            num: "08",
            heading: "Vendor Risk Management",
            content:
              "Safeguard your supply chain with our vendor risk management services, assessing and mitigating risks associated with third-party providers.",
          },
          {
            num: "09",
            heading: "Incident Response and Readiness",
            content:
              "Prepare for and respond to cybersecurity incidents with our expert strategies, minimizing potential damage and recovery time for your business.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "INDUSTRY-SPECIFIC GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Protect patient data and healthcare systems with specialized risk advisory services tailored to the sector’s unique regulatory landscape.",
          },
          {
            icon: finace,
            heading: "FINANCE AND BANKING",
            content:
              "Safeguard financial data against cyber threats and ensure compliance with evolving financial regulations.",
          },
          {
            icon: manufacturing,
            heading: "E-COMMERCE",
            content:
              "Secure online transactions and customer data while navigating the complexities of digital retail risk management.",
          },
          {
            icon: engineering,
            heading: "TELECOMMUNICATIONS",
            content:
              "Address the complex security challenges inherent in the telecom sector, ensuring robust protection against fraud, data breaches, and infrastructure threats.",
          },
          {
            icon: aerospace,
            heading: "ENERGY AND UTILITIES",
            content:
              "Safeguard critical infrastructure and data, adapting to the energy sector's unique regulatory requirements and potential cyber-physical threats.",
          },
          {
            icon: travel,
            heading: "GOVERNMENT AND PUBLIC SERVICES",
            content:
              "Get expert risk advisory services for government and public entities to efficiently manage and mitigate risks associated with digital transformation, data security, etc.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Partner with Qcentrio for Risk Advisory?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Digital Risk Management",
            content:
              "Our team has the latest tools and knowledge to offer bespoke risk advisory services.",
          },
          {
            image: whyChooseImg2,
            heading: "Custom Solutions for Your Business",
            content:
              "We provide tailored strategies that align with your company's risk profile and business goals.",
          },
          {
            image: whyChooseImg3,
            heading: "Strategic and Actionable Advice",
            content:
              "Our recommendations are not just insightful but practical and designed for immediate implementation.",
          },
        ],
      },
    },
    5: {
      heroSectionData: {
        heading:
          "ENSURE SUPERIOR QUALITY AND PERFORMANCE IN YOUR DIGITAL SOLUTIONS",
      },
      metaData: {
        title: "Specialty QA and Development Services | Qcentrio",
        description:
          "Enhance your software's quality and performance with Qcentrio's specialized QA services. Our expertise ensures excellence in every aspect of your digital solutions.",
      },
      breadCrump: {
        main: "ADVISORY AND STRATEGIC SERVICES",
        link: "/offerings/advisory-and-strategic-services",
        current: "Specialty Services",
      },
      contactHead:
        "Enhance the value of your digital products and stay ahead of the competition",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Exemplify Digital Excellence with Qcentrio’s Specialty Services",
        content1:
          "Customers across the globe demand the best when it comes to digital products. For them quality and functionality are not just aspirations but basic expectations. ",
        content2:
          "At Qcentrio, we can amplify the standard of your digital products and ensure they perform at their best. With our Specialty Services, we deliver exceptional quality assurance services that uphold the integrity and performance of your digital offerings. Our commitment to quality and attention to detail make us the ideal partner to help you achieve your digital goals. ",
      },
      offeringsSetion: {
        mainHeading: "EXPERIENCE OUR COMPREHENSIVE SPECIALTY SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "E2E Quality Assurance",
            content:
              "Employing industry-leading tools like Selenium, TestComplete, and JIRA, our QA team performs extensive testing to identify and rectify software defects at every development stage.",
          },
          {
            num: "02",
            heading: "Automated Performance, Usability, and Security Testing",
            content:
              "We use sophisticated suites like Jenkins, Appium, LoadRunner, JMeter, OWASP ZAP, and Burp Suite to ensure your software excels in every metric.",
          },
          {
            num: "03",
            heading: "Continuous Integration and Deployment",
            content:
              "With CI/CD tools such as GitLab CI and CircleCI, we streamline development processes to deliver superior digital products rapidly.",
          },
          {
            num: "04",
            heading: "Accessibility Testing",
            content:
              "Ensure your digital solutions are accessible to all users, including those with disabilities. Our comprehensive accessibility audits help you meet and exceed ADA compliance.",
          },
          {
            num: "05",
            heading: "Mobile Application Testing",
            content:
              "Address the unique challenges of mobile platforms with our targeted testing strategies, ensuring your apps perform optimally on a wide range of devices and operating systems.",
          },
          {
            num: "06",
            heading: "API and Web Services Testing",
            content:
              "Verify your APIs and web services' functionality, reliability, and security to ensure seamless integration and data exchange within your software ecosystems.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "OUR SPECIALTY SERVICES CATER TO DIVERSE INDUSTRIES:",
        list: [
          {
            icon: healthcare,
            heading: "TECHNOLOGY AND SOFTWARE",
            content:
              "Tailor our services to technology firms looking for rigorous QA testing to support innovative software development.",
          },
          {
            icon: finace,
            heading: "E-COMMERCE",
            content:
              "For e-commerce platforms requiring robust performance and security testing to handle high traffic and sensitive customer data.",
          },
          {
            icon: manufacturing,
            heading: "HEALTHCARE",
            content:
              "Adapt our services for healthcare applications needing end-to-end quality assurance to ensure compliance and patient data protection.",
          },
          {
            icon: engineering,
            heading: "FINANCE AND BANKING",
            content:
              "Implement rigorous testing protocols for financial software to ensure secure transactions, regulatory compliance, and a seamless user experience.",
          },
          {
            icon: aerospace,
            heading: "EDUCATION TECHNOLOGY",
            content:
              "Customize testing services for educational platforms, ensuring reliability and user-friendliness to support learning at all levels.",
          },
          {
            icon: travel,
            heading: "AUTOMOTIVE",
            content:
              "Apply specialized testing for automotive software, from in-car entertainment systems to diagnostic and navigation tools, ensuring safety & peak performance.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Opt for Qcentrio for Specialty Services?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Tailored Expertise",
            content:
              "Our QA specialists bring precision and attention to detail, ensuring your software stands out for its quality and reliability.",
          },
          {
            image: whyChooseImg2,
            heading: "Advanced Methodologies",
            content:
              "We apply the latest testing methodologies that cover all facets of quality assurance to meet the dynamic needs of your digital products.",
          },
          {
            image: whyChooseImg3,
            heading: "Comprehensive Reports",
            content:
              "Benefit from transparent reporting throughout the QA process, fostering continuous improvement and excellence.",
          },
        ],
      },
    },
    6: {
      heroSectionData: {
        heading:
          "NAVIGATE COMPLEX MERGERS & ACQUISITIONS WITH STRATEGIC DIGITAL INSIGHT",
      },
      metaData: {
        title: "Expert Mergers & Acquisitions Advisory Services | Qcentrio",
        description:
          "Streamline your M&A journey with Qcentrio's expert advisory services. Ensure smooth digital transitions and capitalize on transformative business events for growth.",
      },
      breadCrump: {
        main: "ADVISORY AND STRATEGIC SERVICES",
        link: "/offerings/advisory-and-strategic-services",
        current: "Mergers & Acquisitions Advisory Services",
      },
      contactHead: "Transform your business with a well-executed M&A",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Master the M&A Landscape with Qcentrio's Digital Expertise",
        content1:
          "Mergers and acquisitions (M&As) are essential tools for enterprises to scale and grow. However, the process can be complicated, involving legal, financial, and operational challenges that can be overwhelming for businesses and hence require a robust strategy for digital integration and due diligence.",
        content2:
          "At Qcentrio, we offer bespoke advisory services that help simplify the complexities of M&A transactions. We provide expert guidance that ensures a smooth transition. Our services are designed to help businesses maximize value and minimize risks, enabling them to achieve their strategic objectives and gain a competitive advantage.",
      },
      offeringsSetion: {
        mainHeading: "QCENTRIO'S MERGERS & ACQUISITIONS ADVISORY SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Digital Due Diligence",
            content:
              "Execute detailed evaluations of digital capabilities and infrastructures, accurately identifying growth opportunities and mitigating risks.",
          },
          {
            num: "02",
            heading: "Integration Strategy Development",
            content:
              "Formulate strategic approaches for merging digital systems, processes, and cultures to achieve a unified and efficient post-merger landscape.",
          },
          {
            num: "03",
            heading: "Technology and Platform Harmonization",
            content:
              "Facilitate the smooth unification of differing technologies, ensuring system compatibility and post-merger operational efficiency.",
          },
          {
            num: "04",
            heading: "Data Consolidation and Management",
            content:
              "Address the regulatory demands of M&A activity by harmonizing policies and procedures to comply with legal standards across jurisdictions, reducing risk, and ensuring a smooth transition.",
          },
          {
            num: "05",
            heading: "Post-Merger IT Optimization",
            content:
              "Provide strategic frameworks for continuous IT enhancement, extracting maximum value and performance from combined technological resources.",
          },
          {
            num: "06",
            heading: "Cultural Integration Facilitation",
            content:
              "Acknowledge the human element by developing programs that align corporate cultures, nurture a unified workforce post-merger, ensure employee retention, and maintain productivity.",
          },
          {
            num: "07",
            heading: "Regulatory Compliance Alignment",
            content:
              "Address the regulatory demands of M&A activity by harmonizing policies and procedures to comply with legal standards across jurisdictions, reducing risk, and ensuring a smooth transition.",
          },
          {
            num: "08",
            heading: "Financial Systems Integration",
            content:
              "Expertly combine financial reporting and accounting systems to deliver a consolidated view of financial health, enabling informed decision-making and strategic financial planning post-merger.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "TAILOR M&A ADVISORY SERVICES TO SPECIFIC INDUSTRY DEMANDS",
        list: [
          {
            icon: manufacturing,
            heading: "HEALTHCARE",
            content:
              "Navigate the complexities of healthcare M&As, ensuring compliance and continuity in patient care systems.",
          },
          {
            icon: healthcare,
            heading: "TECHNOLOGY",
            content:
              "Merge technology platforms with precision, preserving innovation and market responsiveness.",
          },
          {
            icon: finace,
            heading: "RETAIL AND CONSUMER GOODS",
            content:
              "Seamlessly merge retail operations, align supply chains, and implement customer service strategies to maintain market share and consumer loyalty.",
          },

          {
            icon: engineering,
            heading: "FINANCE",
            content:
              "Align financial systems and data management practices to effectively consolidate assets and customer relations.",
          },
          {
            icon: aerospace,
            heading: "MEDIA AND ENTERTAINMENT",
            content:
              "Strategically consolidate media and entertainment assets, from IP to distribution networks, ensuring continuity and cross-platform opportunities.",
          },
          {
            icon: travel,
            heading: "ENERGY AND RESOURCES",
            content:
              "Navigate the complexities of M&A in the energy sector, ensuring asset valuation, regulatory compliance, and operational continuity.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Qcentrio for Your M&A Advisory Needs?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Dedicated Expertise",
            content:
              "Benefit from our team's deep experience guiding digital aspects of M&As, ensuring a strategic edge.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Approach",
            content:
              "Receive personalized service that respects the unique nuances of your corporate merger or acquisition.",
          },
          {
            image: whyChooseImg3,
            heading: "Strategic Value Addition",
            content:
              "Our services go beyond integration, aiming to add significant value and enhance growth opportunities post-M&A.",
          },
        ],
      },
    },
  },
  serviceThree: {
    1: {
      heroSectionData: {
        heading:
          "Experience Seamless Blockchain Integration for Business Excellence",
      },
      metaData: {
        title:
          "Expert Blockchain Integration and Deployment Services | Qcentrio",
        description:
          "Enhance your business infrastructure with Qcentrio’s blockchain integration and deployment services, ensuring high security, transparency, and efficiency.",
      },
      breadCrump: {
        main: "BLOCKCHAIN ADVISORY AND OFFERINGS",
        link: "/offerings/blockchain-advisory-and-offerings",
        current: "Blockchain Integration and Deployment Services",
      },
      contactHead:
        "Experience next-gen blockchain solutions for secured and seamless operation",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Discover Qcentrio’s Blockchain Integration and Deployment Services for Transformational Impact",
        content1:
          "Integrating and deploying blockchain technology presents significant challenges due to its complexity and the need for deep technical expertise. Organizations often struggle to realize their full potential, which can hinder the timely adoption and scalability of blockchain solutions within business operations. ",
        content2:
          "Qcentrio addresses these challenges by providing tailored blockchain integration and deployment services that align with your specific business requirements. Our team of experts ensures that blockchain technology enhances operational efficiency and security without disrupting existing workflows. By partnering with Qcentrio, your organization gains access to comprehensive blockchain solutions, from strategic planning through seamless implementation, enabling you to secure a competitive edge in your industry and stay ahead of the curve.",
      },
      offeringsSetion: {
        mainHeading:
          "Transform Your Operations with Qcentrio’s Blockchain Services  ",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Blockchain Strategy and Consultation",
            content:
              "Forge a distinct and impactful blockchain strategy specifically crafted to align with your business goals, positioning you to outpace competitors in the evolving digital landscape.",
          },
          {
            num: "02",
            heading: "Custom Blockchain Integration",
            content:
              "Seamlessly integrate blockchain technology into your existing systems, enhancing security and operational efficiency and streamlining business processes for improved agility without disrupting your operations.",
          },
          {
            num: "03",
            heading: "Blockchain Deployment",
            content:
              "Execute and deploy tailored blockchain solutions that are meticulously optimized for your specific business environment to meet your unique operational demands.",
          },
          {
            num: "04",
            heading: "Post-Deployment Support and Maintenance",
            content:
              "Get continuous support and maintenance for your blockchain solutions, ensuring they operate at peak performance, any issues are promptly resolved, and business continuity is assured.",
          },
          {
            num: "05",
            heading: "Blockchain Scalability Solutions",
            content:
              "Design your blockchain architecture to scale effortlessly with your business growth, managing increased transactions and data volumes without compromising performance.",
          },
          {
            num: "06",
            heading: "Smart Contract Auditing",
            content:
              "Conduct comprehensive audits of smart contracts to verify their security and functionality before deployment, minimizing potential risks and ensuring reliability.",
          },
          {
            num: "07",
            heading: "Decentralized Identity Solutions",
            content:
              "Implement advanced blockchain-based identity verification systems to bolster security and protect user privacy, ensuring the confidentiality of sensitive customer information.",
          },
          {
            num: "08",
            heading: "Cross-Chain Integration Services",
            content:
              "These services facilitate interoperability across different blockchain platforms, enhancing functionality and broadening the scope of potential applications while ensuring seamless data flow between systems.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Leverage Blockchain Across Various Industries",
        list: [
          {
            icon: healthcare,
            heading: "Finance",
            content:
              "Secure financial transactions and automate record-keeping, reducing fraud and enhancing compliance.",
          },
          {
            icon: finace,
            heading: "Healthcare",
            content:
              "Improve the security of patient records and enhance data sharing across providers with blockchain solutions.",
          },
          {
            icon: manufacturing,
            heading: "Supply Chain",
            content:
              "Increase transparency and traceability in supply chains, reducing delays and potential fraud.",
          },
          {
            icon: manufacturing,
            heading: "Government",
            content:
              "Enhance public sector transparency and trust by securely storing and managing sensitive data.",
          },
          {
            icon: manufacturing,
            heading: "Retail",
            content:
              "Streamline inventory management and enhance consumer trust through transparent supply chain verification.",
          },
          {
            icon: manufacturing,
            heading: "Manufacturing",
            content:
              "Ensure product authenticity and streamline operations with blockchain-based tracking systems.",
          },
          {
            icon: manufacturing,
            heading: "Insurance",
            content:
              "Reduce fraud and automate claims processing with immutable and transparent record-keeping.",
          },
          {
            icon: manufacturing,
            heading: "Telecommunications",
            content:
              "Enhance security and efficiency in billing systems and secure sensitive customer data.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Blockchain Integration and Deployment?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in Blockchain Technology",
            content:
              "Rely on our deep expertise to deliver blockchain solutions that drive real business results.",
          },
          {
            image: whyChooseImg2,
            heading: "Enhanced Security and Efficiency",
            content:
              "With blockchain, experience enhanced security and operational efficiency, safeguarding your transactions and data.",
          },
          {
            image: whyChooseImg3,
            heading: "Comprehensive Support",
            content:
              "From strategy to post-deployment, our team is with you every step, ensuring your blockchain solutions are always at peak performance.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "Confidently Deploy and Maintain Trustworthy Blockchain Systems",
      },
      metaData: {
        title: "Blockchain Security & Compliance Solutions Support | Qcentrio",
        description:
          "Qcentrio's blockchain services ensure blockchain technology's secure and compliant adoption, protecting your assets with cutting-edge security practices.",
      },
      breadCrump: {
        main: "BLOCKCHAIN ADVISORY AND OFFERINGS",
        link: "/offerings/blockchain-advisory-and-offerings",
        current: "Blockchain Security & Compliance Solutions",
      },
      contactHead: "Launch your blockchain strategy with confidence",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Secure Your Blockchain Infrastructure with Qcentrio's Blockchain Security & Compliance Solutions Support",
        content1:
          "Securing digital assets and maintaining compliance in the quickly evolving blockchain landscape are critical challenges. These challenges can impact the integrity and trust of your business operations. However, with Qcentrio's expert solutions, you can overcome these challenges. Our services are designed to simplify the complexity of regulatory requirements, which can vary significantly across different jurisdictions, and ensure the security and compliance of your blockchain infrastructure.",
        content2:
          "Qcentrio's Blockchain Security and Compliance services address these challenges head-on. We provide a fortified ecosystem for your blockchain applications, mitigating risks and ensuring adherence to the latest regulatory frameworks. Our unique approach safeguards your digital transactions and aligns seamlessly with global compliance standards, ensuring your blockchain initiatives are secure and compliant. Partner with us to empower your organization with robust security and compliance solutions that support sustainable business growth and innovation.",
      },
      offeringsSetion: {
        mainHeading:
          "Discover Qcentrio’s Blockchain Security & Compliance Support Services",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Smart Contract Auditing",
            content:
              "Conduct rigorous testing and security verification of smart contracts to identify vulnerabilities, ensure contractual integrity, safeguard against unauthorized modifications, and ensure the contract performs as intended.",
          },
          {
            num: "02",
            heading: "Compliance Strategy",
            content:
              "Develop and implement robust compliance frameworks tailored to meet KYC, AML, and other regulatory requirements within blockchain solutions, ensuring lawful operations and preventing misuse of illegal activities.",
          },
          {
            num: "03",
            heading: "Blockchain Data Security",
            content:
              "Employ advanced cryptographic techniques to protect the integrity and confidentiality of blockchain data across transactions, essential for maintaining trust and reliability in the data's security.",
          },
          {
            num: "04",
            heading: "Risk Management for Blockchain",
            content:
              "Craft and manage detailed risk profiles specific to blockchain assets and operations, incorporating threat modeling and mitigation strategies to secure blockchain operations against potential risks.",
          },
          {
            num: "05",
            heading: "Decentralized Application (DApp) Security",
            content:
              "Perform comprehensive security assessments for DApps to ensure secure user interactions and robust transaction processing and protect against vulnerabilities exploitable by malicious actors.",
          },
          {
            num: "06",
            heading: "Regulatory Compliance Audits",
            content:
              "Execute thorough audits to ensure that all facets of blockchain operations comply with current regulations and legal standards, maintaining operations within legal boundaries and safeguarding against illegal use.",
          },
          {
            num: "07",
            heading: "Blockchain Infrastructure Security",
            content:
              "Establish a secure blockchain network architecture to prevent unauthorized access and resist network attacks, crucial for maintaining the security and integrity of the blockchain network.",
          },
          {
            num: "08",
            heading: "Privacy Solutions for Blockchain",
            content:
              "Address data privacy concerns within blockchain systems by integrating personal data protection and privacy-by-design principles, ensuring operations comply with privacy laws and regulations.",
          },
          {
            num: "09",
            heading: "Incident Response Planning",
            content:
              "Develop proactive, blockchain-specific incident response plans for immediate action in the event of security breaches, crucial for minimizing impact and enabling swift recovery from disruptions.",
          },
          {
            num: "10",
            heading: "Blockchain Identity and Access Management",
            content:
              "Implement secure identity verification systems and robust access controls to prevent unauthorized operations and ensure user authenticity, critical for maintaining authorized access and operational security within blockchain ecosystems.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "Tailored Blockchain Security & Compliance Solutions Support for Diverse Markets",
        list: [
          {
            icon: healthcare,
            heading: "Fintech and Banking",
            content:
              "Secure transactions and safeguard sensitive financial data using blockchain to enhance customer trust and streamline compliance.",
          },
          {
            icon: finace,
            heading: "Healthcare",
            content:
              "Integrate blockchain for secure, decentralized records management to protect patient data and ensure regulatory compliance.",
          },
          {
            icon: manufacturing,
            heading: "Supply Chain",
            content:
              "Track products from origin to consumer with immutable records to reduce fraud and improve efficiency.",
          },
          {
            icon: engineering,
            heading: "Retail",
            content:
              "Verify product authenticity and origin and safeguard consumer data and transaction security.",
          },
          {
            icon: aerospace,
            heading: "Real Estate",
            content:
              "Get a transparent and immutable record of property transactions, enhancing trust among parties.",
          },
          {
            icon: travel,
            heading: "Government",
            content:
              "Enable transparent governance and foster trust by making governmental processes more accountable.",
          },
          {
            icon: eCommerce,
            heading: "Education",
            content:
              "Protect academic credentials and ensure verifiable data on the blockchain to prevent tampering and fraud.",
          },
          {
            icon: realEstate,
            heading: "Legal",
            content:
              "Automate and secure legal transactions to minimize disputes and ensure enforceability across parties involved.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Empower Your Blockchain Initiatives with Robust Security and Compliance",
        list: [
          {
            image: whyChooseImg1,
            heading: "Bespoke Blockchain Frameworks",
            content:
              "Create distinctive strategies that align with your visionary business goals and harness the full potential of blockchain technology.",
          },
          {
            image: whyChooseImg2,
            heading: "Strategic Expertise and Agile Execution",
            content:
              "From conceptualization to execution, our team delivers end-to-end support, ensuring your blockchain journey is seamless, robust, and effective.",
          },
          {
            image: whyChooseImg3,
            heading: "Rigorous Security and Regulatory Adherence",
            content:
              "We commit to safeguarding your blockchain ventures and encompass rigorous adherence to evolving regulations.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "Unlock Business Innovation with Blockchain-Driven Security and Transparency",
      },
      metaData: {
        title: "Comprehensive Blockchain Solution Development | Qcentrio",
        description:
          "Leverage Qcentrio's expertise in blockchain technology for secure, scalable, and customized blockchain solutions that propel your business into the future.",
      },
      breadCrump: {
        main: "BLOCKCHAIN ADVISORY AND OFFERINGS",
        link: "/offerings/blockchain-advisory-and-offerings",
        current: "Blockchain Solution Development",
      },
      contactHead:
        "Integrate blockchain into your business to unlock innovation and drive business success",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Secure Digital Transactions with Qcentrio's Blockchain Expertise",
        content1:
          "As enterprises gradually function in a digital-first environment, securing transactions and maintaining transparency becomes critical. They need to address this challenge head-on by leveraging a transformative solution like blockchain technology to enhance security, clarity, and transparency across all operations.",
        content2:
          "At Qcentrio, we recognize the strategic importance of blockchain in strengthening business innovation and security. Our comprehensive suite of blockchain services and our blockchain experts can help with your enterprise's unique challenges. Partnering with us ensures your organization fully capitalizes on blockchain's capabilities, enhancing operational efficiency and trust in every transaction.",
      },
      offeringsSetion: {
        mainHeading: "Explore Our Blockchain Solutions Development Services",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Blockchain Consultancy",
            content:
              "Navigate the complexities of blockchain technology with expert consultation that tailors strategic blockchain solutions to enhance business efficiency and security, aligning perfectly with specific enterprise needs.",
          },
          {
            num: "02",
            heading: "Smart Contract Development",
            content:
              "Automate and secure business agreements using advanced smart contracts on platforms like Ethereum and Hyperledger. These contracts are designed to be immutable, transparent, and self-executing, thus reducing fraud and errors and streamlining operations.",
          },
          {
            num: "03",
            heading: "Custom Blockchain Solutions",
            content:
              "Receive personalized blockchain services closely aligned with individual business goals through a collaborative approach that ensures each solution is precisely tailored to meet unique requirements.",
          },
          {
            num: "04",
            heading: "Ongoing Blockchain Support",
            content:
              "Benefit from continuous expert support and maintenance, ensuring blockchain systems are consistently updated, secure, and performing optimally.",
          },
          {
            num: "05",
            heading: "Blockchain Architecture Design",
            content:
              "Develop a robust and scalable blockchain infrastructure to meet unique business requirements, ensuring high performance and enhanced security through meticulously planned architecture.",
          },
          {
            num: "06",
            heading: "Blockchain Network Management",
            content:
              "Efficiently manage and deploy various types of blockchain networks—public, private, or consortium—to fit organizational needs, with comprehensive support ensuring smooth and efficient network operation.",
          },
          {
            num: "07",
            heading: "Decentralized Applications (DApps) Development",
            content:
              "Create custom decentralized applications built on blockchain technology to enhance security, user experience, and functionality, making each application decentralized, secure, and scalable.",
          },
          {
            num: "08",
            heading: "Blockchain Integration",
            content:
              "Enhance existing systems by seamlessly integrating blockchain technology to improve transparency, security, and operational efficiency with custom solutions that integrate smoothly without disrupting existing workflows.",
          },
          {
            num: "09",
            heading: "Tokenization Services",
            content:
              "Unlock new possibilities in asset management and value exchange with comprehensive tokenization strategies, offering secure, scalable, and compliant solutions that revolutionize asset utilization and accessibility.",
          },
          {
            num: "10",
            heading: "Blockchain Network Design",
            content:
              "Custom-design blockchain infrastructure that supports business goals with robust, scalable, and secure networks, tailored to include all aspects of network architecture, consensus mechanisms, and governance models.",
          },
          {
            num: "11",
            heading: "Blockchain for Supply Chain Management",
            content:
              "Transform supply chain operations with blockchain technology, enhancing traceability, reducing fraud, and improving efficiency through customized solutions tailored to specific supply chain challenges.",
          },
          {
            num: "12",
            heading: "Blockchain Security Solutions",
            content:
              "Protect blockchain infrastructures with advanced security protocols that ensure the integrity and trustworthiness of digital transactions. These protocols cover all security aspects, from crucial management to smart contract security.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Blockchain Solutions Tailored for Every Industry",
        list: [
          {
            icon: healthcare,
            heading: "Financial Services",
            content:
              "Secure transactions and automate compliance processes with blockchain to revolutionize financial operations.",
          },
          {
            icon: finace,
            heading: "Healthcare",
            content:
              ": Ensure patient data integrity and security while enabling transparent access with blockchain solutions.",
          },
          {
            icon: manufacturing,
            heading: "Supply Chain Management",
            content:
              "Enhance transparency and traceability in supply chains through decentralized blockchain networks.",
          },
          {
            icon: engineering,
            heading: "Energy",
            content:
              "Optimize energy distribution and trading systems with blockchain for increased transparency and efficiency.",
          },
          {
            icon: aerospace,
            heading: "Media and Entertainment",
            content:
              "Protect intellectual property rights and streamline royalty payments through blockchain technology.",
          },
          {
            icon: travel,
            heading: "Government",
            content:
              "Increase governmental transparency and reduce fraud with secure blockchain applications.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Choose Qcentrio for Blockchain Development?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Customized Solutions",
            content:
              "Our blockchain services are tailored to meet your business's unique challenges and demands.",
          },
          {
            image: whyChooseImg2,
            heading: "Expertise and Experience",
            content:
              "Rely on our extensive expertise in blockchain technology to deliver innovative and effective solutions.",
          },
          {
            image: whyChooseImg3,
            heading: "Enhanced Security",
            content:
              "With blockchain, experience unprecedented security levels that protect your transactions and data integrity.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading:
          "Capitalize on Blockchain for Enhanced Security, Transparency, and Efficiency",
      },
      metaData: {
        title: "Blockchain Strategy and Advisory | Innovate with Qcentrio",
        description:
          "Maximize your blockchain potential with Qcentrio's strategic advisory services, offering cutting-edge solutions for security, efficiency, and innovation.",
      },
      breadCrump: {
        main: "BLOCKCHAIN ADVISORY AND OFFERINGS",
        link: "/offerings/blockchain-advisory-and-offerings",
        current: "Blockchain Strategy and Advisory",
      },
      contactHead:
        "Begin your Blockchain transformation today with expert advisory",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Command the Future of Tech with Qcentrio’s Blockchain Strategy and Advisory",
        content1:
          "Blockchain technology fundamentally transforms industries by enhancing security, transparency, and efficiency. To stay competitive, businesses must capitalize on blockchain's benefits, driving more incredible innovation while maintaining the integrity and efficiency of their operations.",
        content2:
          "At Qcentrio, we offer specialized blockchain strategy and advisory services to empower your business to leverage this transformative technology. Our experts provide comprehensive guidance through the complexities of blockchain integration, ensuring your initiatives are strategic, practically implementable, and highly innovative. Embrace our expertise to lead your industry in the blockchain revolution.",
      },
      offeringsSetion: {
        mainHeading:
          "Empower Your Technological Transformation with Qcentrio's Blockchain Strategy and Advisory Services",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Blockchain Advisory",
            content:
              "Navigate your blockchain journey with seasoned consultants providing strategic insights and development roadmaps tailored to align blockchain initiatives with your corporate objectives.",
          },
          {
            num: "02",
            heading: "DLT Solutions",
            content:
              "Deploy Distributed Ledger Technology (DLT) to enhance process efficiency and secure data integrity. These custom services offer a tamper-proof platform essential for transparent and reliable transactions.",
          },
          {
            num: "03",
            heading: "Innovative Contracts Development",
            content:
              "Revolutionize your operations with smart contracts that automate and secure transactions. These self-executing contracts minimize the need for intermediaries, enhancing operational efficiency and reducing overhead.",
          },
          {
            num: "04",
            heading: "Blockchain Security Services",
            content:
              "Fortify your cybersecurity with robust blockchain-based solutions that safeguard digital assets and operational continuity against emerging cyber threats.",
          },
          {
            num: "05",
            heading: "Tokenization Strategies",
            content:
              "Unlock innovative asset monetization and security avenues through tokenization. This strategy increases asset liquidity and market accessibility while ensuring transaction security.",
          },
          {
            num: "06",
            heading: "Private Blockchain Networks",
            content:
              "Construct bespoke, permissioned blockchain environments tailored for enhanced data privacy and control, enabling streamlined data and operations management.",
          },
          {
            num: "07",
            heading: "Decentralized Application (dApp) Development",
            content:
              "Dive into the decentralized economy with scalable, user-friendly dApps that are congruent with your business model, offering adaptability to market changes.",
          },
          {
            num: "08",
            heading: "Blockchain Integration Services",
            content:
              "Seamlessly integrate blockchain technology with existing infrastructures, leveraging its inherent benefits to enhance current systems without disruption.",
          },
          {
            num: "09",
            heading: "Blockchain for Internet of Things (IoT)",
            content:
              "Enhance the integrity and reliability of IoT device networks through blockchain technology, ensuring secure data exchanges and improved system management.",
          },
          {
            num: "10",
            heading: "Cross-Chain Integration Services",
            content:
              "Expert cross-chain integration facilitates interoperability across diverse blockchain platforms, enabling seamless communication and functionality between blockchain ecosystems.",
          },
          {
            num: "11",
            heading: "Blockchain Governance Framework",
            content:
              "Develop comprehensive governance models for your blockchain networks to ensure clarity in operations and compliance with regulatory standards.",
          },
          {
            num: "12",
            heading: "Blockchain Training and Workshops",
            content:
              "Equip your team with cutting-edge knowledge on blockchain technology through targeted training and workshops, ensuring they remain ahead in a rapidly evolving digital landscape.",
          },
          {
            num: "13",
            heading: "Digital Identity Solutions",
            content:
              "Implement blockchain technology to create immutable digital identities, enhancing user authentication processes and privacy across digital interactions.",
          },
          {
            num: "14",
            heading: "Blockchain Analytics",
            content:
              "Extract valuable insights from blockchain transaction data with sophisticated analytics tools, driving strategic decision-making and enhancing operational efficiencies.",
          },
          {
            num: "15",
            heading: "Cryptocurrency Exchange Solutions",
            content:
              "Establish secure and efficient cryptocurrency exchange platforms with advanced development services, facilitating reliable and user-friendly trading experiences.",
          },
          {
            num: "16",
            heading: "Enterprise Blockchain Transformation",
            content:
              "Integrate blockchain technology across enterprise-level systems for a holistic digital transformation, boosting security and streamlining operations, unlocking the full potential of blockchain capabilities.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "Unlock the Power of Blockchain Across Various Sectors with Qcentrio",
        list: [
          {
            icon: healthcare,
            heading: "Finance",
            content:
              "Transform financial operations by embedding blockchain to ensure secure and transparent transactions, speed up settlements, and strengthen trust.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
          },
          {
            icon: manufacturing,
            heading: "Healthcare",
            content:
              "Transform patient care by deploying blockchain to bolster data integrity and traceability and ensure unparalleled security for medical records.",
          },
          {
            icon: engineering,
            heading: "Supply Chain Management",
            content:
              "Enhance supply chain transparency and control by utilizing decentralized ledger technology for real-time tracking and authentication of goods.",
          },
          {
            icon: aerospace,
            heading: "Government and Public Sector",
            content:
              "Implement blockchain to modernize public services and record-keeping, thereby increasing transparency and security in government operations.",
          },
          {
            icon: travel,
            heading: "Retail and Consumer Goods",
            content:
              "Build consumer confidence by adopting blockchain to confirm product authenticity and streamline supply chain processes.",
          },
          {
            icon: eCommerce,
            heading: "Energy",
            content:
              "Innovate in renewable energy trading and grid management by integrating blockchain for more efficient, transparent transactions.",
          },
          {
            icon: realEstate,
            heading: "Telecommunications",
            content:
              "Advance communication systems and billing transparency by applying blockchain, setting the stage for future innovations.",
          },
          {
            icon: softwareTechnology,
            heading: "Media and Entertainment",
            content:
              "Protect intellectual property and manage royalties more effectively by harnessing blockchain for greater transparency.",
          },
          {
            icon: softwareTechnology,
            heading: "Automotive",
            content:
              "Improve the traceability and security of automotive supply chains and features by leveraging blockchain, enhancing operational efficiency and safety.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Qcentrio Stands Out in Blockchain Advisory?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Tailored Blockchain Strategies",
            content:
              "Design unique solutions that align with your business vision and blockchain’s capabilities.",
          },
          {
            image: whyChooseImg2,
            heading: "Expertise and Execution",
            content:
              "A team of experts who provide comprehensive support from strategy development to solution deployment.",
          },
          {
            image: whyChooseImg3,
            heading: "Security and Compliance",
            content:
              "High standards of security and adherence to regulations to protect your blockchain investments.",
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
      metaData: {
        title: "Collaboration and Productivity Solutions Support | Qcentrio",
        description:
          "Discover how Qcentrio's Collaboration and Productivity Solutions support can transform your workspace for better communication, efficiency, and innovation. ",
      },
      breadCrump: {
        main: "BUSINESS OPTIMIZATION AND ANALYTICS SERVICES",
        link: "/offerings/business-optimization-and-analytics-services",
        current: "Collaboration and Productivity Solutions",
      },
      contactHead:
        "Harness the true potential of collaboration and productivity solutions",
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
      metaData: {
        title: "CRM System Solutions for Business Growth | Qcentrio",
        description:
          "Explore how Qcentrio's CRM System Solutions support enhances customer relations and streamlines sales and marketing processes for measurable growth and efficiency.",
      },
      breadCrump: {
        main: "BUSINESS OPTIMIZATION AND ANALYTICS SERVICES",
        link: "/offerings/business-optimization-and-analytics-services",
        current: "CRM System Solutions",
      },
      contactHead: "Transform your customer relationships today",
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
      metaData: {
        title: "Data Analytics and Business Intelligence Services | Qcentrio",
        description:
          "Leverage Qcentrio's Data Analytics and Business Intelligence expertise to transform your data into strategic business insights for informed decision-making.",
      },
      breadCrump: {
        main: "BUSINESS OPTIMIZATION AND ANALYTICS SERVICES",
        link: "/offerings/business-optimization-and-analytics-services",
        current: "Data Analytics and Business Intelligence",
      },
      contactHead:
        "Unlock the full potential of your business with data-driven decision-making",
      contentSection: {
        image: "/sub-service-content-side-image.png",
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
          "DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY WITH BESPOKE AI/ML CAPABILITIES",
      },
      metaData: {
        title: "Artificial Intelligence/Machine Learning Offerings | Qcentrio",
        description:
          "Boost your enterprise's capabilities with Qcentrio's AI/ML offerings. Harness AI and ML-driven insights and automation expertise for strategic growth and operational excellence.",
      },
      breadCrump: {
        main: "BUSINESS VALUE ENHANCEMENT SERVICES",
        link: "/offerings/business-value-enhancement-services",
        current: "Artificial Intelligence/Machine Learning Offerings",
      },
      contactHead:
        "Transform business decisions with AI/ML-led actionable insights",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Unlock the Full Potential of AI and ML for E2E Business Transformation with Qcentrio",
        content1:
          "Artificial Intelligence (AI) and Machine Learning (ML) are indispensable for businesses across various industries. They drive innovation, increase efficiency, and boost productivity for a competitive edge. Although companies invest in building AI and ML capabilities, they lack the necessary governance structures and innovative systems to fully leverage their potential.",
        content2:
          "At Qcentrio, we use our AI/ML expertise to optimize business operations, streamline workflows, and improve bottom lines. Our offerings are tailored to meet specific needs and give a strategic advantage. As an advanced analytics service and solution provider, we unlock AI/ML's potential for long-term business transformation and short-term wins.",
      },
      offeringsSetion: {
        mainHeading:
          "OUR AI/ML OFFERINGS: EMPOWER YOUR ENTERPRISE TO UNLOCK FULL POTENTIAL",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Advanced Analytics and Forecasting",
            content:
              "Dive into the future of your business with Qcentrio's cutting-edge analytics. We employ sophisticated AI/ML models beyond traditional data analysis, offering deep insights and accurate forecasting that drive strategic decision-making.",
          },
          {
            num: "02",
            heading: "AI-Driven Process Optimization",
            content:
              "Transform your operational processes with our AI-powered optimization. Qcentrio streamlines workflows, enhancing efficiency and output while minimizing waste and reducing costs.",
          },
          {
            num: "03",
            heading: "Machine Learning Operationalization",
            content:
              "Qcentrio is not just about creating models; it’s about bringing them to life within your operational ecosystem. Our ML operationalization ensures your AI investments are fully realized, embedding intelligence into every layer of your business operations.",
          },
          {
            num: "04",
            heading: "Predictive Analytics",
            content:
              "Employ our advanced AI/ML algorithms to analyze data and forecast future trends, providing actionable insights for informed decision-making and strategic planning.",
          },
          {
            num: "05",
            heading: "Personalized Customer Interactions",
            content:
              "Embrace AI-driven personalization with Qcentrio. We deliver tailored experiences that engage and delight your end users, providing recommendations and services that hit the mark every time.",
          },
          {
            num: "06",
            heading: "Bespoke AI/ML Solutions",
            content:
              "Our commitment is to your success. We develop AI and ML solutions that align with your business goals and industry requirements, ensuring seamless integration and impactful outcomes.",
          },
          {
            num: "07",
            heading: "Process/Platform Automation",
            content:
              "Leverage AI and ML to automate processes for increased efficiency. Qcentrio's solutions enable you to automate routine tasks, reduce errors, and shift your team's focus to strategic activities that propel business growth. ",
          },
          {
            num: "08",
            heading: "Real-Time Data Processing and Analysis",
            content:
              "Harness the speed and accuracy of real-time data processing with Qcentrio’s advanced AI/ML systems. Make faster, more informed decisions as our technology sifts through vast information streams to deliver the insights that matter most, right when you need them.",
          },
          {
            num: "09",
            heading: "AI-Enhanced Customer Service",
            content:
              "Transform your customer support with AI-enhanced capabilities. Our solutions understand and respond to customer queries with human-like accuracy, ensuring higher satisfaction rates and freeing your customer service team to handle more complex issues.",
          },
          {
            num: "10",
            heading: "Robotic Process Automation (RPA)",
            content:
              "Amplify your efficiency with Qcentrio's RPA solutions. By automating repetitive tasks, our AI-driven robots save time and reduce human error, allowing your workforce to concentrate on creative and strategic tasks that add real value to your business.",
          },
          {
            num: "11",
            heading: "Delivering Business Insights",
            content:
              "Establish a robust framework for Machine Learning models with Qcentrio. We onboard our top talent to tailor these models to each unique case, scaling your business intelligence in real-time.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "TAILORED AI/ML OFFERINGS ACROSS DIFFERENT INDUSTRIES",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "AI-powered diagnostics, personalized treatments, and optimized clinical operations are the future of patient care. Transform your practice with the latest advancements in AI technology.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Transform financial services with AI-driven insights for risk management, fraud detection, and personalized investment strategies, ensuring accuracy and agility in decision-making.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "ML-driven predictive maintenance, optimized supply chains, and intelligent quality control boost productivity while reducing downtime and operational costs.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Enhance customer experiences with personalized recommendations, inventory optimization, and market trend analysis to increase sales and customer loyalty.",
          },
          {
            icon: aerospace,
            heading: "ENERGY",
            content:
              "Deploy smart grid analytics for efficient energy distribution, demand forecasting, and sustainable operations, contributing to energy conservation and cost savings.",
          },
          {
            icon: travel,
            heading: "TRANSPORTATION",
            content:
              "Utilize AI for dynamic routing, predictive maintenance, and logistics optimization to improve service reliability and manage operational complexities.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Choose Qcentrio for AI/ML Solutions?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expertise in AI/ML Technologies",
            content:
              "Our solutions range from advisory to model development and ongoing managed services, ensuring you have the expertise you need at every step.",
          },
          {
            image: whyChooseImg2,
            heading: "Customized Solutions for Your Industry",
            content:
              "Our AI/ML models are not one-size-fits-all; they are trained on specialized data and tailored to meet your business's unique challenges and opportunities.",
          },
          {
            image: whyChooseImg3,
            heading: "Innovative Ecosystem at Your Disposal",
            content:
              "Gain access to a full stack ecosystem of data, AI, and ML independent software vendors (ISVs) for accelerated value creation and sustained innovation.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
      },
      metaData: {
        title: "Generative AI Solutions and Offerings | Qcentrio",
        description:
          "Discover how Qcentrio's Generative AI Solutions and Offerings can transform your business operations, drive innovation, and enhance productivity.",
      },
      breadCrump: {
        main: "BUSINESS VALUE ENHANCEMENT SERVICES",
        link: "/offerings/business-value-enhancement-services",
        current:
          "DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY WITH BESPOKE AI/ML CAPABILITIES",
      },
      contactHead:
        "Build confidence in your AI/ML models and revolutionize your operations",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Redefine Innovation with Qcentrio’s GenAI Expertise",
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
          "INDUSTRY-SPECIFIC GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
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
          "BOOST OPERATIONAL EFFICIENCY, GAIN E2E VISIBILITY, AND OPTIMIZE IT RESOURCE UTILIZATION",
      },
      metaData: {
        title: "Robotic Process Automation Offerings | Qcentrio",
        description:
          "Elevate operational efficiency with Qcentrio's bespoke Robotic Process Automation (RPA) Offerings. Drive growth and streamline your processes with next-gen automation solutions.",
      },
      breadCrump: {
        main: "BUSINESS VALUE ENHANCEMENT SERVICES",
        link: "/offerings/business-value-enhancement-services",
        current: "Robotic Process Automation Services",
      },
      contactHead:
        "Experience Next-Level Efficiency with Qcentrio’s RPA Offerings",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Transform Workflow with Next-Gen Automation at Qcentrio",
        content1:
          "Today, efficiency and speed in business are indispensable. Robotic Process Automation (RPA) is a pillar for innovations that can automate routine tasks and enhance process workflows, thus giving a business the necessary momentum to stay relevant and win.",
        content2:
          "At Qcentrio, we understand CXOs' challenges and specialize in providing RPA solutions that seamlessly integrate with existing systems. Our RPA offerings are designed to help businesses optimize their operations, reduce costs, and improve customer experiences, allowing your team to focus on strategic initiatives.",
      },
      offeringsSetion: {
        mainHeading: "OUR ROBOTIC PROCESS AUTOMATION OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Process and Platform Assessments",
            content:
              "We comprehensively assess your company's processes and platforms to provide you with a tailored and effective RPA solution. By aligning our strategy with your business objectives, we ensure a fit-for-purpose solution that meets your unique needs and requirements.",
          },
          {
            num: "02",
            heading: "Business Case Preparation and Process Triage",
            content:
              "If you're considering implementing RPA in your business, we can assist you in developing a solid business case and determining which areas should take priority. Our expertise can help you successfully implement and maximize your return on investment.",
          },
          {
            num: "03",
            heading: "SoP Creation and Automation Requirements Capture",
            content:
              "Our team specializes in developing standard operating procedures and detailed automation requirements to ensure efficient and effective robotic process automation (RPA) implementation in businesses, resulting in increased productivity and streamlined processes.",
          },
          {
            num: "04",
            heading: "Proof of Concept and Pilot Programs",
            content:
              "To ensure the successful deployment of RPA, we first conduct pilot programs and proofs of concept. This helps us demonstrate the potential impact of RPA on your operations and make informed decisions for a smoother implementation.",
          },
          {
            num: "05",
            heading: "RPA Roadmap Creation and CoE Setup",
            content:
              "We help you plan your journey with Robotic Process Automation (RPA) and create a Center of Excellence (CoE) to promote innovation and best practices in your organization. Our goal is to optimize your business processes and increase efficiency.",
          },
          {
            num: "06",
            heading: "RPA Strategy and Implementation",
            content:
              "Our approach to RPA begins with a comprehensive analysis of your business processes to pinpoint automation opportunities. We then craft a tailored strategy to transform your operations using leading tools like UiPath, Blue Prism, and Automation Anywhere.",
          },
          {
            num: "07",
            heading: "Custom RPA Solutions",
            content:
              "Our custom RPA solutions are designed to help your business automate complex tasks like data entry, invoice processing, and customer inquiries. By doing so, we boost efficiency and promote innovation while tailoring our offerings to meet your specific needs.",
          },
          {
            num: "08",
            heading: "System Integration and Optimization",
            content:
              "When implementing RPA solutions, ensuring smooth integration with existing systems is essential to avoid disrupting business operations. Our solutions are designed to seamlessly incorporate your workflows, optimizing efficiency without causing any disruptions.",
          },
          {
            num: "09",
            heading: "Continuous Monitoring and Support",
            content:
              "Efficient operational workflows are crucial to business success. Our RPA solutions enable smooth integration with existing systems, streamlining workflows without disrupting business rhythm. This helps businesses optimize efficiency and achieve operational excellence.",
          },
          {
            num: "10",
            heading: "Training and Skill Development",
            content:
              "Our company doesn't just deploy RPA solutions and leave you alone. Our commitment to your success includes ongoing monitoring and support to ensure optimal performance and quick resolution of any issues that may arise.",
          },
          {
            num: "11",
            heading: "Bot Support and Maintenance",
            content:
              "Our comprehensive bot support services cover everything from routine maintenance and monitoring to health checks and release management. This ensures your RPA operations run smoothly and sustainably, with minimal downtime and maximum efficiency.",
          },
          {
            num: "12",
            heading: "Custom Reporting and Analytics",
            content:
              "Our team analyzes your tech environment to determine the best way to incorporate RPA with your current systems, ensuring that the automation process is as smooth as possible and that there are no disruptions to your business operations.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "TRANSFORM YOUR INDUSTRY WITH QCENTRIO'S RPA SOLUTIONS",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Facilitate better patient care with automated record management and scheduling, ensuring critical resources are focused on patient outcomes.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Transform financial operations by automating compliance checks, report generation, and transaction processing for enhanced accuracy and efficiency.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Embrace RPA in manufacturing for real-time inventory management, quality control, and supply chain optimization, which will reduce costs and improve productivity.",
          },
          {
            icon: engineering,
            heading: "REAL ESTATE",
            content:
              "Streamline property management in real estate, from tenant screening to financial reconciliations, ensuring smooth operations.",
          },

          {
            icon: travel,
            heading: "TRAVEL & TRANSPORTATION",
            content:
              "Automate booking systems and operational scheduling in your travel and transportation sector to improve customer service and operational efficiency.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Choose Qcentrio for RPA Offerings?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Domain Expertise in RPA",
            content:
              "Our RPA offerings redefine process management by combining intelligent automation, deep domain knowledge, and thousands of hours of learning and testing in complex environments.",
          },
          {
            image: whyChooseImg2,
            heading: "Platform & Technology-Agnostic Approach",
            content:
              "We prioritize metric improvement, cost savings, and ROI. Supported by over 1,00 RPA experts, we offer a comprehensive suite of offerings, from advisory to bot support, ensuring process perfection.",
          },
          {
            image: whyChooseImg3,
            heading: "People–Process–Technology Framework",
            content:
              "To scale RPA successfully, Qcentrio combines expertise across people, processes, and technology. Our team harmonizes KPIs for effective resource allocation and change management.",
          },
        ],
      },
    },
  },
  serviceSix: {
    1: {
      heroSectionData: {
        heading:
          "Harness the Power of Cloud Computing with Full Stack AWS Capabilities",
      },
      metaData: {
        title: "Advanced AWS Services and Support | Qcentrio",
        description:
          "Qcentrio's AWS services enhance cloud capabilities, offering end-to-end integration, security assurance, and scalable solutions to power your business.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "AWS Services and Offerings",
      },
      contactHead:
        "Get ready to transform your business with AWS's scalability and innovation",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Future-Proof Your Business with Qcentrio's AWS Expertise",
        content1:
          "Today, enterprises constantly turn to cloud technology to transform their businesses and make them scalable and agile. Amazon Web Services (AWS) offers a premier infrastructure that provides many cloud-based solutions to help companies achieve their goals.",
        content2:
          "At Qcentrio, we understand the importance of AWS implementation for businesses of all sizes and industries. Our team of seasoned professionals can help you leverage the power of AWS to the fullest extent, providing tailored services that align with your unique business requirements. Whether you need assistance with migration, integration, or ongoing support, we can customize our services to meet your needs.",
      },
      offeringsSetion: {
        mainHeading:
          "Maximize Your Cloud Potential with Qcentrio's AWS Services",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "E2E AWS Integration",
            content:
              "We offer comprehensive AWS integration services for your business, enabling you to streamline your operations and drive innovation. Benefit from seamless transitions and strategic implementations as we help you harness the full potential of cloud technologies to transform your organization.",
          },
          {
            num: "02",
            heading: "Scalable Cloud Infrastructure",
            content:
              "Build a secure and scalable cloud infrastructure on AWS that aligns with your business goals. Our services support promotes agility, reliability, and cost-effectiveness, enabling you to innovate faster. And with us as your, you can future-proof your cloud environment and achieve sustainable growth.",
          },
          {
            num: "03",
            heading: "Computing and Storage Solutions",
            content:
              "AWS's EC2 and S3 services offer a reliable and flexible solution for your computing needs. With secure and scalable storage options, you can easily store and access your data on the cloud. Whether a small business or a large enterprise, we help you leverage AWS's compute and storage solutions. ",
          },
          {
            num: "04",
            heading: "Security and Compliance Assurance",
            content:
              "We understand how critical it is to keep your cloud environment secure. With our advanced AWS security support, you can adhere to the best compliance practices. With such a secure environment, you can have peace of mind knowing that your data and applications are safe from cyber threats and other security vulnerabilities.",
          },
          {
            num: "05",
            heading: "Continuous AWS Support",
            content:
              "Streamline your software development process and accelerate your time-to-market by leveraging AWS DevOps tools to automate your CI/CD pipeline. With these tools, and us as your partner, you can improve your software delivery process, increase deployment frequency, and enhance the overall quality of your software.",
          },
          {
            num: "06",
            heading: "AWS Managed Services",
            content:
              "With Qcentrio as your AWS partner, you can manage your AWS infrastructure seamlessly and optimize its performance and cost. Our team of experts can help you offload the day-to-day management of your cloud environment, leaving you with more time to focus on your business goals.",
          },
          {
            num: "07",
            heading: "AWS Data Analytics",
            content:
              "Gain valuable insights from your business data with AWS’s powerful data processing and analytics capabilities. AWS makes it easy to uncover meaningful patterns and trends in your data. You can make data-driven decisions to help your business thrive by leveraging these insights. So why wait? Start tapping into the power of AWS today with Qcentrio.",
          },
          {
            num: "08",
            heading: "AWS DevOps Automation",
            content:
              "Innovate and bring new products to market quickly by leveraging AWS DevOps tools and automating your software delivery pipeline, making it more efficient, reliable, and scalable. With DevOps, you can reduce your time to market and increase deployment frequency, allowing you to stay ahead of the competition.",
          },
          {
            num: "09",
            heading: "AWS Machine Learning and AI Services",
            content:
              "Build intelligent solutions that can perceive, hear, speak, comprehend, and engage with your data and users like never before. By leveraging these technologies, you can transform your data into actionable insights, optimize your business processes, and enhance the customer experience.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Qcentrio's AWS Services Adapted for Your Industry",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Maintain compliance and manage patient data securely with AWS services tailored to healthcare requirements.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Leverage AWS for secure financial transactions, data analytics, and meeting stringent industry regulations.",
          },
          {
            icon: manufacturing,
            heading: "E-commerce",
            content:
              "Scale your e-commerce platforms with AWS's flexible computing resources and robust security measures.",
          },
          {
            icon: engineering,
            heading: "Education",
            content:
              "Enhance educational offerings with AWS's cloud solutions for remote learning and educational resource management.",
          },
          {
            icon: aerospace,
            heading: "Real Estate",
            content:
              "Utilize AWS services to securely manage property listings, client interactions, and back-end operations in the cloud.",
          },
          {
            icon: travel,
            heading: "Government",
            content:
              "Implement AWS cloud solutions to streamline public sector processes, enhance civic engagement, and improve governmental service delivery.",
          },
          {
            icon: eCommerce,
            heading: "Telecommunications",
            content:
              "Deploy AWS to support vast telecom networks, improve data analytics and customer experience, and innovate with new services at scale.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Opt for Qcentrio for AWS Services?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Bespoke AWS Services Support",
            content:
              "Our services are personalized to meet your business's unique needs, delivering agile and cost-effective cloud infrastructure solutions.",
          },
          {
            image: whyChooseImg2,
            heading: "AWS Accreditation",
            content:
              "Experience peace of mind with our team of certified AWS professionals who deeply understand AWS services. ",
          },
          {
            image: whyChooseImg3,
            heading: "Streamlined Processes",
            content:
              "Experience efficient cloud migration and management with our systematic approach to AWS integration.",
          },
        ],
      },
    },
    2: {
      heroSectionData: {
        heading:
          "LIFT YOUR BUSINESS INTO AZURE FOR UNMATCHED PERFORMANCE AND SCALABILITY",
      },
      metaData: {
        title: "Azure Cloud Services | Seamless Integration and Optimization",
        description:
          "Leverage Qcentrio's expertise for Azure cloud services and offerings that promise scalability, agility, and innovation. Transform your cloud strategy today.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "Azure Services and Offerings",
      },
      contactHead:
        "Begin your journey towards a scalable, innovative infrastructure today",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Embrace Cloud Innovation with Comprehensive Azure Services",
        content1:
          "Azure offers a robust cloud platform that empowers businesses to stay agile and adaptable in the increasingly dynamic and complex market. With it, companies can build a future-proof digital environment that scales with their growth and unleashes their full potential. All they need is a strategic Azure partner.",
        content2:
          "At Qcentrio, we specialize in Azure and deliver end-to-end services that ensure businesses can capitalize on the full spectrum of cloud computing capabilities, from infrastructure to analytics and beyond. Our Azure experts work closely with clients to understand their unique business needs and design tailored offerings that align with their strategic objectives—Trust Qcentrio to help your business stay ahead of the curve and thrive in the digital age.",
      },
      offeringsSetion: {
        mainHeading: "EXPLORE OUR AZURE SERVICES AND OFFERINGS",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Comprehensive Azure Integration",
            content:
              "Employ AWS CloudFormation and Azure DevOps to develop a precise strategy for Azure cloud integration, aligning technology with business objectives.",
          },
          {
            num: "02",
            heading: "Azure Managed Services",
            content:
              "Benefit from our full-spectrum managed services for Azure, including ongoing management, monitoring, and optimizing your cloud resources for peak performance.",
          },
          {
            num: "03",
            heading: "Azure DevOps Capabilities",
            content:
              "Accelerate your software development lifecycle with our Azure DevOps capabilities. Implement continuous integration and delivery to enhance collaboration and streamline deployment.",
          },
          {
            num: "04",
            heading: "Data Migration and Security",
            content:
              "Utilize AWS Data Migration Service and Azure Site Recovery for seamless data transfer, reinforced with robust security measures like encryption and IAM policies.",
          },
          {
            num: "05",
            heading: "Robust Cloud Infrastructure",
            content:
              "Build resilient and scalable cloud infrastructure to support growing business demands, ensuring seamless migration and efficient resource management.",
          },
          {
            num: "06",
            heading: "Azure IoT Offerings",
            content:
              "Unlock the potential of the Internet of Things with Azure, creating intelligent, connected solutions that gather data and insights from devices across your operations.",
          },
          {
            num: "07",
            heading: "Advanced Analytics and AI",
            content:
              "Drive innovation with Azure’s analytics and AI services, from processing big data to deploying intelligent models that shape business strategies.",
          },
          {
            num: "08",
            heading: "Cloud Application Modernization",
            content:
              "Refresh legacy applications with our application modernization services, leveraging Azure’s PaaS and container services for increased scalability and reduced operational costs.",
          },
          {
            num: "09",
            heading: "Cloud Security Posture Management",
            content:
              "Strengthen your Azure deployments with our cloud security posture management, ensuring your cloud assets are protected against threats and vulnerabilities.",
          },
          {
            num: "10",
            heading: "Disaster Recovery and Continuity",
            content:
              "Minimize downtime with Azure's disaster recovery capabilities, implementing failover systems and backup solutions for business resilience.",
          },
          {
            num: "11",
            heading: "Customized Offerings",
            content:
              "Create hybrid and cloud-native solutions using Azure services, customized to integrate with your existing technology stack for a complete cloud ecosystem.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "SPECIALIZED AZURE CLOUD SERVICES FOR EVERY SECTOR",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "HIPAA-compliant cloud offerings that enable healthcare providers to manage patient data securely and scale operations as needed.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Secure and compliant cloud infrastructure designed for financial institutions, facilitating real-time data analysis and transaction processing.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Azure cloud service offerings that support manufacturing processes, from supply chain optimization to IoT and innovative factory enablement.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Harness Azure to analyze customer data, manage inventory efficiently, and provide a personalized shopping experience with intelligent recommendations.",
          },
          {
            icon: aerospace,
            heading: "AUTOMOTIVE",
            content:
              "Utilize Azure to drive innovation in the automotive industry, from enhancing vehicle design with AI and simulation to improving manufacturing efficiency with IoT solutions.",
          },
          {
            icon: travel,
            heading: "LOGISTICS AND SUPPLY CHAIN",
            content:
              "Implement Azure cloud solutions to optimize logistics operations, enhance supply chain visibility, and predict market demands with advanced analytics.",
          },
          {
            icon: eCommerce,
            heading: "EDUCATION",
            content:
              "Deploy scalable Azure solutions to facilitate remote learning platforms, manage large volumes of educational content, and provide analytics on student performance.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Transform Your Operations with Our Azure Cloud Expertise",
        list: [
          {
            image: whyChooseImg1,
            heading: "Tailored Azure Strategies",
            content:
              "We provide Azure cloud services for your business, considering every nuance of your industry's needs to ensure a perfect fit.",
          },
          {
            image: whyChooseImg2,
            heading: "Seamless Cloud Transition",
            content:
              "Our seamless transition services are designed to minimize disruption, ensuring a smooth shift to Azure’s cloud environment.",
          },
          {
            image: whyChooseImg3,
            heading: "Ongoing Support and Optimization",
            content:
              "Experience continuous improvement with our dedicated support, helping your business stay ahead in a rapidly evolving digital landscape.",
          },
        ],
      },
    },
    3: {
      heroSectionData: {
        heading:
          "TRANSFORM YOUR CONVENTIONAL IT BY TRANSITIONING TO CLOUD WITH CONFIDENCE",
      },
      metaData: {
        title: "Comprehensive Cloud Infrastructure Services | Qcentrio",
        description:
          "Move your business to the cloud confidently with Qcentrio's expert Cloud Infrastructure Services. Achieve digital transformation with agility, efficiency, and scalability.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "Cloud Infrastructure Services",
      },
      contactHead:
        "Unlock the potential of the cloud and revolutionize your IT infrastructure",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Modernize Your Business with Scalable Cloud Infrastructure Services from Qcentrio",
        content1:
          "Businesses today need to be agile and scalable to keep up with the rapidly changing market conditions. This is where the cloud comes in. By leveraging the full potential of the cloud, businesses can achieve automation, scalability, flexibility, and innovation.",
        content2:
          "Qcentrio's Cloud Infrastructure Services enable a smooth transition to the cloud, making businesses more service-focused, secure, and agile. We provide complete support for clients transitioning to popular cloud platforms like AWS, Azure, and GCP, with minimal downtime and maximum efficiency. With our unique consultative approach, automation capabilities, and advanced digital platforms & frameworks, we deliver technology enablement, tool-based service delivery, and operational excellence to the IT infrastructure needs of global companies.",
      },
      offeringsSetion: {
        mainHeading: "EXPLORE QCENTRIO'S CLOUD INFRASTRUCTURE SERVICES",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Cloud Assessment and Strategy",
            content:
              "Utilize advanced tools such as AWS CloudFormation and Azure DevOps for a comprehensive evaluation and strategic cloud adoption planning.",
          },
          {
            num: "02",
            heading: "Data Migration and Security",
            content:
              "Employ robust services like AWS Data Migration Service and Azure Site Recovery to transfer data securely through encryption and identity access management.",
          },
          {
            num: "03",
            heading: "Integration with Salesforce",
            content:
              "Enhance CRM capabilities by integrating Salesforce with cloud platforms, streamlining data flow for improved customer relationship management.",
          },
          {
            num: "04",
            heading: "Setup and Configuration",
            content:
              "Implement optimized cloud solutions with Amazon EC2, Azure Virtual Machines, and Google Compute Engine for peak performance.",
          },
          {
            num: "05",
            heading: "Managed Services",
            content:
              "Get continuous support post-deployment, including decommissioning legacy systems and education on best practices for cloud integration.",
          },
          {
            num: "06",
            heading: "Hybrid Cloud Optimization",
            content:
              "With our hybrid cloud solutions, you can achieve the perfect balance between private and public cloud environments, optimizing for cost, performance, and security.",
          },
          {
            num: "07",
            heading: "Cloud Ops",
            content:
              "Streamline your cloud operations with our Cloud Ops services, offering real-time monitoring, automated scaling, and continuous optimization to maintain system health and efficiency.",
          },
          {
            num: "08",
            heading: "Infrastructure Consulting",
            content:
              "Consult with our cloud experts to design and deploy scalable, resilient, and secure cloud infrastructure tailored to your business's unique needs and growth goals.",
          },
          {
            num: "09",
            heading: "Customer Experience (CX) Services",
            content:
              "Enhance customer experiences by leveraging cloud technologies to provide seamless, responsive, and personalized interactions across all customer touchpoints.",
          },
          {
            num: "10",
            heading: "Cloud Compliance Audits",
            content:
              "Ensure your cloud infrastructure adheres to international standards and industry regulations with our comprehensive compliance audit services.",
          },
          {
            num: "11",
            heading: "Disaster Recovery Planning",
            content:
              "Develop and implement robust disaster recovery strategies to maintain business continuity in the cloud, minimizing potential downtimes and data loss.",
          },
          {
            num: "11",
            heading: "Customized Offerings",
            content:
              "Develop hybrid, cloud-native solutions with technologies like Kubernetes and Docker tailored to your business requirements.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "CLOUD INFRASTRUCTURE SERVICES TAILORED TO INDUSTRY NEEDS",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Ensure patient data is secure and accessible with cloud services that comply with healthcare regulations.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Leverage cloud solutions to handle large-scale financial data and transactions with enhanced security and compliance.",
          },
          {
            icon: manufacturing,
            heading: "MANUFACTURING",
            content:
              "Integrate IoT and cloud technologies to streamline production processes, enhancing operational efficiency and real-time data analysis.",
          },
          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Utilize cloud infrastructure to manage e-commerce platforms, ensuring scalability to meet consumer demands.",
          },
          {
            icon: aerospace,
            heading: "EDUCATION",
            content:
              "Utilize cloud services to foster collaborative learning environments with scalable solutions for virtual classrooms and content management.",
          },
          {
            icon: travel,
            heading: "GOVERNMENT",
            content:
              "Implement secure and compliant cloud infrastructure that meets the specific needs of public sector organizations, ensuring data sovereignty and public trust.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Partner with Qcentrio for Cloud Infrastructure?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expert Guidance & Customized Integration",
            content:
              "Our experts provide customized integration strategies for your cloud journey, aligned with your company's growth and innovation vision.",
          },
          {
            image: whyChooseImg2,
            heading: "Tailored Cloud Solutions ",
            content:
              "We offer bespoke cloud solutions designed to transform your business with tailored systems and processes that meet your specific needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Streamlined Cloud Adoption ",
            content:
              "We specialize in efficient cloud infrastructure transformations that minimize complexities and enable rapid and seamless transitions to the cloud.",
          },
        ],
      },
    },
    4: {
      heroSectionData: {
        heading: "Make Your IT Infrastructure Best-In-Class",
      },
      metaData: {
        title: "Continuous IT Support & Managed Services | Qcentrio",
        description:
          "Ensure your IT infrastructure is always at its peak with Qcentrio's continuous IT support and managed services: experience top-tier maintenance, upgrades, and monitoring.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "Continuous IT Support & Managed Services",
      },
      contactHead:
        "Ensure your infrastructure is perpetually at its best with continuous IT excellence",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading: "Elevate Your IT Operations with Qcentrio's Managed Services",
        content1:
          "The stability and efficiency of IT infrastructure are foundational to business success. It helps maintain the integrity and efficiency of your IT systems, allowing you to focus on strategic growth and operational excellence.",
        content2:
          "Qcentrio's Continuous IT Support and Managed Services are designed to ensure your operations remain seamless, with minimal downtime and peak performance. Our service offerings include proactive maintenance, thorough system monitoring, and expert troubleshooting, all customized to meet your business's unique needs.",
      },
      offeringsSetion: {
        mainHeading:
          "Qcentrio’s Managed IT Services Ensure Your Operations are Seamless and Secure",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Proactive Maintenance and Monitoring",
            content:
              "Stay ahead of issues with 24/7 monitoring and maintenance, preventing potential downtime. Our team of experts will continuously monitor your systems, allowing for quick identification and resolution of problems.",
          },
          {
            num: "02",
            heading: "Timely Updates/Upgrades",
            content:
              "Keep your systems up-to-date with the latest features and functionalities to ensure continuous operational excellence. Our seamless integration of updates ensures that your systems are always at the cutting edge.",
          },
          {
            num: "03",
            heading: "Expert Troubleshooting",
            content:
              "Our team offers prompt and responsive support to keep your operations running smoothly. We understand the importance of minimizing disruption and maintaining productivity, so we provide efficient troubleshooting to resolve any issues that may arise promptly.",
          },
          {
            num: "04",
            heading: "Customized IT Strategies",
            content:
              "Align your IT operations with your business goals by creating tailored IT strategies and customized solutions to meet your business's unique needs. We can work closely with you to develop the right approach that helps you achieve your objectives most efficiently and effectively..",
          },
          {
            num: "05",
            heading: "Infrastructure Optimization",
            content:
              "We optimize your IT infrastructure to ensure it functions at its best, providing you with the resources needed to grow your business. Our expertise lies in enhancing the functionality of your IT infrastructure to maximize efficiency and fuel your business's growth.",
          },
          {
            num: "06",
            heading: "Disaster Recovery Planning",
            content:
              "Implement robust disaster recovery strategies to protect data and maintain continuity. We help you develop and implement disaster recovery strategies to ensure that your data is protected and your operations continue to run smoothly in the event of a disaster.",
          },
          {
            num: "07",
            heading: "Cloud Transition and Management",
            content:
              "Our expert guidance can help you make a smooth transition to the cloud while providing flexibility and scalability benefits. We can be your strategic partner if you are new to the cloud or looking to improve your existing cloud infrastructure.",
          },
          {
            num: "08",
            heading: "Network Management Services",
            content:
              ": Optimize and manage your entire network infrastructure, ensuring high-speed connectivity, reliability, and security across your organization. Our support services ensure your network operates at peak performance, enabling your team to work efficiently and seamlessly. ",
          },
          {
            num: "09",
            heading: "End-User Support Services",
            content:
              "Our services are designed to provide your staff with the technical support they need to be productive. Our dedicated helpdesk services ensure that all of your employees' technical queries and challenges are resolved promptly, allowing them to focus on their work without interruptions.",
          },
          {
            num: "10",
            heading: "IT Compliance Services",
            content:
              "Navigate the complex world of IT compliance easily by ensuring that your systems always comply with all regulatory requirements and industry standards. You can rely on our expertise to keep your systems up-to-date with compliance regulations and standards.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Specialized IT Support for Diverse Industries",
        list: [
          {
            icon: healthcare,
            heading: "Healthcare",
            content:
              "Ensure patient data integrity and continuous care with reliable IT systems.",
          },
          {
            icon: finace,
            heading: "FINANCE",
            content:
              "Safeguard secure transactions and compliance with robust IT infrastructures.",
          },
          {
            icon: manufacturing,
            heading: "Education",
            content:
              "Support academic excellence with uninterrupted access to educational technology.",
          },
          {
            icon: engineering,
            heading: "Logistics and Supply Chain",
            content:
              "Strengthen the backbone of your logistics network with robust IT support that ensures seamless operations and real-time tracking.",
          },
          {
            icon: aerospace,
            heading: "Legal Services",
            content:
              "Protect sensitive client information and support case management systems with secure and reliable IT infrastructure.",
          },
          {
            icon: travel,
            heading: "Hospitality and Travel",
            content:
              "Deliver exceptional customer service with uninterrupted IT systems that support booking engines, customer management, and operational tools.",
          },
          {
            icon: eCommerce,
            heading: "Energy and Utilities",
            content:
              "Ensure the integrity and reliability of critical energy infrastructure with comprehensive IT management that supports innovative grid technologies and data analytics.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Choose Qcentrio for Continuous IT Support and Managed Services?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Uninterrupted Business Operations",
            content:
              "Our managed services are designed to keep your business running smoothly, day or night.",
          },
          {
            image: whyChooseImg2,
            heading: "Custom-fit Solutions",
            content:
              "We don’t just support your IT needs; we anticipate them, ensuring your services scale with your business.",
          },
          {
            image: whyChooseImg3,
            heading: "Certified Expertise",
            content:
              "Our team comprises industry-certified experts dedicated to maintaining and elevating your IT operations.",
          },
        ],
      },
    },
    5: {
      heroSectionData: {
        heading: "Navigate the Digital Space with Confidence",
      },
      metaData: {
        title: "Robustrsecurity Solutions and Services Support | Qcentrio",
        description:
          "Protect and Cybe future-proof your digital infrastructure with Qcentrio's advanced cybersecurity solutions. Experience comprehensive protection with our expert services.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "Cybersecurity Solutions and Services Support",
      },
      contactHead:
        "Protect your sensitive data and online assets today with expert cybersecurity measures",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Secure Your Enterprise Future with Qcentrio's Cybersecurity Expertise",
        content1:
          "Cyber threats have increased significantly recently and become more sophisticated, posing a direct threat to the integrity of your enterprise data. As senior executives, your strategic oversight is pivotal in promoting a secure digital framework.",
        content2:
          "At Qcentrio, we offer a robust suite of Cybersecurity Solutions, starting with a detailed assessment of your current security posture and concluding with implementing customized measures tailored to your business needs. Trust in Qcentrio to strengthen your defenses, ensuring your business's resilience and continuity in the face of digital threats.",
      },
      offeringsSetion: {
        mainHeading:
          "Discover our Cybersecurity Solutions and Services Support",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Comprehensive Security Assessment",
            content:
              "We begin by evaluating your digital ecosystem, identifying vulnerabilities, and enhancing your security posture.",
          },
          {
            num: "02",
            heading: "Customized Security Solutions",
            content:
              "We implement robust cybersecurity measures post-assessment, utilizing top-tier tools and services from leading industry providers.",
          },
          {
            num: "03",
            heading: "Data Protection and Compliance",
            content:
              "We provide comprehensive data protection and compliance services to ensure that your cybersecurity strategies meet all relevant regulations.",
          },
          {
            num: "04",
            heading: "Continuous Monitoring and Support",
            content:
              "Take advantage of ongoing vigilance with our monitoring services that safeguard your systems against the latest threats.",
          },
          {
            num: "05",
            heading: "Intrusion Detection and Response",
            content:
              "With our advanced monitoring systems, we help you detect intrusions in real time and respond swiftly to mitigate risks and prevent potential breaches.",
          },
          {
            num: "06",
            heading: "Cloud Security Services",
            content:
              "Get specialized security protocols embedded in your systems to protect your cloud deployments on platforms like AWS, Azure, and GCP.",
          },
          {
            num: "07",
            heading: "Phishing Prevention and Email Security",
            content:
              "Implement robust email filtering and phishing prevention strategies to safeguard against sophisticated email-borne threats.",
          },
          {
            num: "08",
            heading: "Cybersecurity Training and Awareness Programs",
            content:
              "Equip your staff with the knowledge to recognize and respond to cybersecurity threats with comprehensive training programs.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading:
          "Industries Benefitting from Qcentrio’s Cybersecurity Solutions and Services Support",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Protect sensitive patient information and healthcare systems with compliance-focused cybersecurity measures.",
          },
          {
            icon: finace,
            heading: "Financial Services",
            content:
              "Secure financial data and transactions with stringent security protocols and regular compliance checks.",
          },
          {
            icon: manufacturing,
            heading: "Retail",
            content:
              "Safeguard online retail platforms against cyber threats, ensuring customer data protection and trust.",
          },
          {
            icon: engineering,
            heading: "Transportation",
            content:
              "Secure sensitive operational data in the transportation sector, from logistic operations to customer data, with robust cybersecurity frameworks.",
          },
          {
            icon: aerospace,
            heading: "Hospitality",
            content:
              "Implement security solutions to protect guests' personal information and transaction data in the hospitality industry.",
          },
          {
            icon: travel,
            heading: "Education",
            content:
              "Protect student data and academic research with tailored cybersecurity measures designed for educational institutions.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Partner with Qcentrio for Cybersecurity?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Expert Team",
            content:
              ": Our certified professionals provide comprehensive security solutions, ensuring a seamless defense system with minimal operational interruption.",
          },
          {
            image: whyChooseImg2,
            heading: "Custom-Fit Security",
            content:
              "We offer tailored security strategies that are cost-effective and perfectly aligned with your specific business needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Ongoing Support",
            content:
              "With Qcentrio, you get more than just the initial setup; you receive continual support and updates to your cybersecurity measures.",
          },
        ],
      },
    },
    6: {
      heroSectionData: {
        heading:
          "Navigate the Future with Google Cloud’s Advanced Capabilities",
      },
      metaData: {
        title: "Comprehensive GCP Services and Support | Qcentrio",
        description:
          "Elevawte your business ith Qcentrio's Google Cloud Platform services. Our bespoke GCP services support offer seamless integration, scalability, and performance.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "GCP Services and Support",
      },
      contactHead:
        "Propel your business forward by leveraging Google Cloud’s capabilities",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Embrace the Full Potential of Google Cloud with Qcentrio’s GCP Expertise",
        content1:
          "For businesses aiming to capitalize on cloud technology, Google Cloud Platform (GCP) offers agility and innovation second to none. It gives enterprises the strategic advantage they need with a gamut of services.",
        content2:
          "At Qcentrio, we double down on our GCP expertise to help your organization equip with the essential tools to enhance and streamline your cloud infrastructure. By partnering with us, you ensure a seamless, secure, and efficient transition to the cloud, leveraging Google’s next-gen technologies. Our dedicated team of GCP experts is committed to customizing solutions that optimize performance, scalability, and security, ensuring your business fully harnesses the potential of the cloud to drive growth and innovation.",
      },
      offeringsSetion: {
        mainHeading: "Qcentrio’s Spectrum of GCP Services ",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "GCP Tools Integration",
            content:
              "Tailored GCP integration services to consolidate your infrastructure and leverage the full range of Google Cloud’s computing and hosting solutions for robust, future-ready business operations.",
          },
          {
            num: "02",
            heading: "Seamless Application Deployment",
            content:
              "Expert deployment and management, utilizing GCP’s Kubernetes Engine for container orchestration and Cloud Functions for responsive, event-driven applications.",
          },
          {
            num: "03",
            heading: "Data Analytics & Machine Learning",
            content:
              "Transformational insights with GCP’s BigQuery and AI Platform, providing powerful analytics and machine learning capabilities for data-driven decision-making.",
          },
          {
            num: "04",
            heading: "Enhanced Security and Compliance",
            content:
              "Comprehensive security and compliance solutions ensure your data is managed with the utmost integrity and meets regulatory requirements with GCP’s cutting-edge security tools.",
          },
          {
            num: "05",
            heading: "Custom GCP Architectures",
            content:
              "Develop custom cloud architectures on GCP that are meticulously designed to meet the specific requirements of your applications and workloads for enhanced performance and scalability.",
          },
          {
            num: "06",
            heading: "GCP Migration Services",
            content:
              "Migrate your existing workloads and applications to GCP with minimal disruption, leveraging our expertise in GCP migration for a smooth transition and quick adoption.",
          },
          {
            num: "07",
            heading: "GCP Cost Optimization",
            content:
              "Utilize our cost management services to maximize your investment in GCP, ensuring you only pay for the resources you need while maintaining optimal performance.",
          },
          {
            num: "07",
            heading: "GCP Managed Services",
            content:
              "Allow our team to manage your GCP environment, handling all operational tasks, from routine maintenance to proactive monitoring and optimization, enabling you to focus on your core business functions.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "Optimized GCP Services Support for Various Industries",
        list: [
          {
            icon: healthcare,
            heading: "HEALTHCARE",
            content:
              "Leverage GCP to maintain patient data confidentiality, streamline operations, and support telemedicine.",
          },
          {
            icon: finace,
            heading: "Retail",
            content:
              "Utilize GCP to manage e-commerce platforms, analyze consumer behavior, and personalize customer experiences.",
          },
          {
            icon: manufacturing,
            heading: "Finance",
            content:
              "Implement GCP’s secure and compliant cloud solutions for financial operations, risk management, and real-time analytics.",
          },
          {
            icon: engineering,
            heading: "Manufacturing",
            content:
              "Integrate GCP to optimize production processes, supply chain management, and predictive maintenance.",
          },
          {
            icon: aerospace,
            heading: "Automotive",
            content:
              "Leverage GCP’s advanced analytics and machine learning capabilities to accelerate innovation in autonomous driving technologies and customer experience.",
          },
          {
            icon: travel,
            heading: "Media & Entertainment",
            content:
              "Employ GCP to manage large datasets, streamline content delivery networks, and personalize viewer experiences across digital platforms.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Choose Qcentrio for GCP Services?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Customized GCP Strategies",
            content:
              "Advanced GCP services support tailored to your business, ensuring a scalable, secure, and efficient cloud environment.",
          },
          {
            image: whyChooseImg2,
            heading: "Expert GCP Integration",
            content:
              "A dedicated team of GCP experts offers end-to-end support from initial integration to continuous enhancement.",
          },
          {
            image: whyChooseImg3,
            heading: "Scalability and Innovation",
            content:
              "Leverage GCP’s diverse offerings to foster growth and adaptability, keeping you ahead in a rapidly evolving digital landscape.",
          },
        ],
      },
    },
    7: {
      heroSectionData: {
        heading:
          "Unlock Global Potential by Next-Gen Offshore Development Centre",
      },
      metaData: {
        title: "Specialized Offshore Development Centre Services | Qcentrio",
        description:
          "Leverage Qcentrio's offshore development centers for enhanced productivity and innovation. Benefit from our customized teams and best-in-class infrastructure.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "Offshore Development Centre Services",
      },
      contactHead:
        "Scale your business operations with a dedicated Offshore Development Centre",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Extend Your Global Reach with Qcentrio’s Offshore Development Centre Services",
        content1:
          "As markets globalize, the strategic expansion of your enterprise through an Offshore Development Centre (ODC) becomes essential. Without it, you cannot empower your global operations and enhance your capacity for innovation and competitive advantage in the international marketplace.",
        content2:
          "At Qcentrio, we specialize in establishing ODCs that function as a seamless extension of your business, delivering a comprehensive range of IT services beyond mere software development. We excel in navigating the complexities of managing remote teams, providing robust infrastructure, and ensuring round-the-clock support. This enables your offshored operations to perform with the same efficacy and integration as your onshore activities.",
      },
      offeringsSetion: {
        mainHeading: "Discover Qcentrio’s Offshore Development Centre Services",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Customized Team",
            content:
              "Build your offshore team with professionals meticulously selected to meet your project requirements and embody your company's culture and values. We ensure your team is customized to suit your project-specific needs, ensuring they fit the job perfectly.",
          },
          {
            num: "02",
            heading: "Best-in-Class Infrastructure and Facilities",
            content:
              "Our ODCs boast the latest modern technology suites, ensuring your offshore team operates in an environment conducive to high productivity and security. We provide state-of-the-art infrastructure and facilities that enable your team to work efficiently and effectively.",
          },
          {
            num: "03",
            heading: "Full-Spectrum Development and Testing",
            content:
              "We cover every aspect of software development and testing, ensuring your products meet the highest standards and market demands. We provide end-to-end development and testing services so that you can focus on your core business while we take care of the rest.",
          },
          {
            num: "04",
            heading: "Ongoing Support and Maintenance",
            content:
              "Benefit from continuous maintenance and IT support to ensure your software remains current and performs flawlessly. We offer continuing support and maintenance services to ensure your software is always up-to-date and running smoothly.",
          },
          {
            num: "05",
            heading: "Strategic Project Management",
            content:
              "Implement efficient project management strategies to ensure timely delivery and alignment with business objectives. We provide strategic project management services to ensure your project is timely, within budget and aligned with your business objectives.",
          },
          {
            num: "06",
            heading: "IP Protection and Data Security",
            content:
              "Safeguard the integrity of your intellectual property and data with our robust security protocols and stringent compliance measures. We prioritize security and ensure that your intellectual property and data are always protected using the latest security protocols and compliance measures.",
          },
          {
            num: "07",
            heading: "Cultural and Operational Integration",
            content:
              "Create a seamless operational link between your onshore and offshore teams, preserving cohesion and unified business practices. We help you foster a seamless link between your onshore and offshore teams by ensuring they are culturally and operationally integrated.",
          },
          {
            num: "08",
            heading: "Flexible Resource Allocation",
            content:
              ": Rapidly adapt your team size and skill set to match project demands, ensuring agility and optimal resource utilization. Our flexible resource allocation services empower you to respond quickly to your project's demands, ensuring you always have the right resources at the right time.",
          },
          {
            num: "09",
            heading: "Dedicated Research and Development",
            content:
              "Our Offshore Development Centers (ODCs) have specialized R&D teams that focus on innovation and explore new technologies to keep you ahead of the curve. We can help you stay updated with the latest industry trends and advancements.",
          },
          {
            num: "10",
            heading: "Quality Assurance and Risk Management",
            content:
              "We have rigorous QA protocols and risk management strategies to ensure the highest quality output and mitigate potential offshore development risks. Rest assured that your project is in good hands and will be delivered on time and budget.",
          },
          {
            num: "11",
            heading: "Language and Communication Training",
            content:
              "We provide dedicated language and communication training for offshore teams to overcome language barriers and ensure clear and effective cross-cultural collaboration. This will help you communicate more efficiently with your offshore team and achieve better results.",
          },
          {
            num: "12",
            heading: "Advanced Analytics and Reporting",
            content:
              "You can utilize our advanced analytics to gain insights into your offshore operations, with regular reporting to track progress and inform decision-making. This will help you make data-driven decisions and optimize your offshore development processes.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "ODC Services Tailored for Various Industries",
        list: [
          {
            icon: healthcare,
            heading: "Software and Technology",
            content:
              "Support your tech-driven initiatives with a dedicated team of developers and IT specialists.",
          },
          {
            icon: finace,
            heading: "Healthcare",
            content:
              "Manage healthcare application development with teams understanding regulatory compliance and patient privacy concerns.",
          },
          {
            icon: manufacturing,
            heading: "Financial Services",
            content:
              "Ensure secure and efficient development of financial software solutions, including fintech innovations and banking systems.",
          },
          {
            icon: engineering,
            heading: "Telecommunications",
            content:
              "Stay ahead in the fast-paced telecom sector with teams that can rapidly develop and test new applications and services.",
          },
          {
            icon: aerospace,
            heading: "E-Commerce",
            content:
              "Develop robust e-commerce platforms with a team experienced in the latest online retail technologies and customer experience trends.",
          },
          {
            icon: travel,
            heading: "Automotive",
            content:
              "Support automotive software development, including IoT, telematics, and automation, with an offshore team well-versed in automotive industry standards.",
          },
          {
            icon: eCommerce,
            heading: "Energy",
            content:
              ": Harness specialized knowledge in energy sector software, from oil and gas exploration data management to renewable energy grid integration.",
          },
          {
            icon: realEstate,
            heading: "Entertainment & Media",
            content:
              "Create robust solutions for media management, streaming services, and content distribution with a tech team attuned to the entertainment industry's pulse.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading:
          "Why Partner with Qcentrio for Offshore Development Centre Services?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Customized Solutions",
            content:
              "Each ODC is tailored to fit your unique project requirements and perfectly aligns with your operational goals.",
          },
          {
            image: whyChooseImg2,
            heading: "Scalability and Flexibility",
            content:
              "Our ODC services allow you to quickly adapt team sizes and skills to your changing needs.",
          },
          {
            image: whyChooseImg3,
            heading: "Cost-Effective Expertise",
            content:
              "Gain access to a global talent pool and reduce operational costs while maintaining high-quality development standards.",
          },
        ],
      },
    },
    8: {
      heroSectionData: {
        heading: "MAKE THE MOST OF EVERY CUSTOMER INTERACTION WITH SALESFORCE",
      },
      metaData: {
        title: "Expert Salesforce Integration and Optimization | Qcentrio",
        link: "/offerings/cloud-infra-and-security-services",
        description:
          "Enhance your customer relations with Qcentrio's Salesforce capabilities. Our expertise in CRM solutions drives growth and enriches customer interactions.",
      },
      breadCrump: {
        main: "CLOUD INFRA AND SECURITY SERVICES",
        link: "/offerings/cloud-infra-and-security-services",
        current: "Salesforce Services",
      },
      contactHead:
        "Start optimizing customer relations with robust Salesforce capabilities",
      contentSection: {
        image: "http://localhost:3000/sub-service-content-side-image.png",
        heading:
          "Transform Customer Interactions with Qcentrio's Advanced Salesforce Solutions",
        content1:
          "Strong customer relationships require constant building and nurturing of customer relationships for sustainable growth and long-term success. ",
        content2:
          "Salesforce, the world's #1 CRM platform, can transform your company’s customer interactions, and Qcentrio leads the space by offering customized Salesforce capabilities. You can optimize your sales, customer service, and marketing efforts with us. Our team designs customized Salesforce solutions that increase productivity, streamline workflows, and provide valuable insights, enabling your businesses to achieve sustainable growth and success.",
      },
      offeringsSetion: {
        mainHeading: "QCENTRIO'S SALESFORCE SERVICES INCLUDE",
        images: [service1, service2, service3, service4, service5],
        list: [
          {
            num: "01",
            heading: "Custom Salesforce Integration",
            content:
              "Develop Salesforce solutions that align with your business needs in finance, healthcare, or retail to fit seamlessly into your operations.",
          },
          {
            num: "02",
            heading: "Seamless Data Connectivity",
            content:
              "Create a cohesive Salesforce ecosystem that enhances the flow of customer data across your business units, ensuring accessibility and empowering management.",
          },
          {
            num: "03",
            heading: "EFFICIENCY AND PROCESS AUTOMATION",
            content:
              "Utilize Salesforce to automate tasks and streamline processes, improving operational efficiency and customer relationship management.",
          },
          {
            num: "04",
            heading: "Predictive Customer Engagement",
            content:
              "Apply Salesforce AI to anticipate customer needs and trends, proactively engaging them with solutions catering to future requirements.",
          },
          {
            num: "05",
            heading: "Analytics and Customer Insights",
            content:
              "Build Salesforce analytics capabilities to gain deep insights into customer behavior, driving informed decision-making that enhances satisfaction and sales.",
          },
          {
            num: "06",
            heading: "Salesforce Cloud Integration",
            content:
              "Seamlessly integrate Salesforce with cloud services like AWS, GCP, and Azure, enabling unified access to customer data across platforms.",
          },
          {
            num: "07",
            heading: "Salesforce Mobile Solutions",
            content:
              "Extend Salesforce's power to mobile devices, ensuring your sales and service teams have full CRM capabilities on the go, anytime, anywhere.",
          },
          {
            num: "08",
            heading: "Custom App Development on Salesforce",
            content:
              "Build bespoke Salesforce applications tailored to your unique business processes, enhancing functionality and user engagement.",
          },
          {
            num: "09",
            heading: "Salesforce Training and Adoption",
            content:
              "Provide comprehensive training programs to ensure your team can fully leverage Salesforce functionality, maximizing ROI through increased adoption rates.",
          },
        ],
      },
      servicesOfSubService: {
        mainHeading: "DEPLOY SALESFORCE SOLUTIONS ACROSS VARIOUS SECTORS",
        list: [
          {
            icon: healthcare,
            heading: "FINANCIAL SERVICES",
            content:
              "Manage client relations and complex financial data within Salesforce, ensuring security and regulatory compliance.",
          },
          {
            icon: finace,
            heading: "HEALTHCARE",
            content:
              "Coordinate patient interactions and streamline care management through customized Salesforce integrations.",
          },

          {
            icon: engineering,
            heading: "RETAIL",
            content:
              "Use Salesforce to personalize shopping experiences, manage loyalty programs, and analyze consumer trends.",
          },
          {
            icon: aerospace,
            heading: "GOVERNMENT",
            content:
              "Enhance citizen engagement and inter-agency collaboration with Salesforce, ensuring transparency and efficiency in public sector management.",
          },
          {
            icon: travel,
            heading: "AUTOMOTIVE",
            content:
              "Utilize Salesforce to track customer life cycles from initial inquiry through post-sale services, enhancing the buyer journey and after-sales support.",
          },
          {
            icon: eCommerce,
            heading: "TELECOMMUNICATIONS",
            content:
              "Deploy Salesforce to manage vast customer interactions and service provisions and streamline the complexities of telecom operations.",
          },
        ],
      },
      whyChooseSection: {
        mainHeading: "Why Opt for Qcentrio's Salesforce Expertise?",
        list: [
          {
            image: whyChooseImg1,
            heading: "Tailored Solutions",
            content:
              "Our Salesforce integrations are custom-built to address your business's unique challenges and objectives.",
          },
          {
            image: whyChooseImg2,
            heading: "Comprehensive Expertise",
            content:
              "We have deep expertise in Salesforce’s suite of services, including advanced analytics and AI for CRM.",
          },
          {
            image: whyChooseImg3,
            heading: "Continuous Support",
            content:
              "Benefit from our round-the-clock support and service, ensuring your Salesforce environment evolves with your business.",
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
    } else if (sub == "mergers-and-acquisitions-advisory-services") {
      return subServicePagesContent.serviceTwo[6];
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
