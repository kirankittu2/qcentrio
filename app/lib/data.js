const blogs = {
  children: [
    {
      title: "7 ways to maximize your cloud security",
      content: "Content",
      link: "/perspectives/7-ways-to-maximize-your-cloud-security",
    },
    {
      title: "Boost your enterprise innovation with robotic process automation",
      content: "Content",
      link: "/perspectives/boost-your-enterprise-innovation-with-robotic-process-automation",
    },
    {
      title: "How blockchain redefines business and banking",
      content: "Content",
      link: "/perspectives/how-blockchain-redefines-business-and-banking",
    },
    {
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