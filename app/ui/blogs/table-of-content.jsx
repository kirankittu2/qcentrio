"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TableOfContent() {
  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    const headings = document.querySelectorAll(
      ".blog-page-main-content h2, .blog-page-main-content h3"
    );

    let hierarchicalHeadings = [];

    headings.forEach((heading) => {
      const content = heading.textContent.trim();
      const id = content
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .toLowerCase();
      heading.setAttribute("id", id);

      if (heading.tagName.toLowerCase() === "h2") {
        hierarchicalHeadings.push({ id, title: content, children: [] });
      } else if (
        heading.tagName.toLowerCase() === "h3" &&
        hierarchicalHeadings.length > 0
      ) {
        hierarchicalHeadings[hierarchicalHeadings.length - 1].children.push({
          id,
          title: content,
        });
      }
    });
    setTableContent(hierarchicalHeadings);
  }, []);

  useEffect(() => {}, [tableContent]);

  return (
    <div
      data-option="up"
      id="table-of-contents"
      className="table-of-contents animate animate-hidden">
      <h2 className="blog-page-side-heading">TABLE OF CONTENTS</h2>
      <ul>
        {tableContent.map((item, index) => {
          return (
            index > 1 &&
            index < tableContent.length - 2 && (
              <li key={index}>
                <Link href={`#${item.id}`}>{item.title}</Link>
                <ul>
                  {item.children.map((child, childIndex) => {
                    return (
                      <Link href={`#${child.id}`} key={childIndex}>
                        <li>{child.title}</li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
