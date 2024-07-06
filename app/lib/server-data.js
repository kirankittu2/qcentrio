"use server";

import pool, { closeConnection, createConnection } from "./db";

export async function fetchBlogs() {
  try {
    const query = "SELECT * FROM articles";
    const results = await queryAsync(query, []);
    return JSON.stringify(results);
  } catch (e) {
    console.log(e);
    return JSON.stringify([]);
  }
}

export async function fetchBlogsForInsights(name = "", page) {
  try {
    const itemsPerPage = 6;
    const offset = (page - 1) * itemsPerPage;

    const query = "SELECT * FROM articles WHERE name LIKE ? LIMIT ? OFFSET ?";
    const param = `%${name}%`;
    const results = await queryAsync(query, [param, itemsPerPage, offset]);
    return JSON.stringify(results);
  } catch (e) {
    console.log(e);
    return JSON.stringify([]);
  }
}

export async function fetchSingleBlog(slug) {
  try {
    const query = "SELECT * FROM articles WHERE slug = ?";
    const results = await queryAsync(query, [slug]);
    return JSON.stringify(results);
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function fetchCaseStudies() {
  try {
    const query = "SELECT * FROM case_studies";
    const results = await queryAsync(query, []);
    return JSON.stringify(results);
  } catch (e) {
    console.log(e);
    return JSON.stringify([]);
  }
}

export async function fetchCaseStudiesForInsights(name = "", page) {
  try {
    const itemsPerPage = 6;
    const offset = (page - 1) * itemsPerPage;

    const query =
      "SELECT * FROM case_studies WHERE name LIKE ? LIMIT ? OFFSET ?";
    const param = `%${name}%`;
    const results = await queryAsync(query, [param, itemsPerPage, offset]);
    return JSON.stringify(results);
  } catch (e) {
    console.log(e);
    return JSON.stringify([]);
  }
}

export async function fetchSingleCaseStudies(slug) {
  try {
    const query = "SELECT * FROM case_studies WHERE slug = ?";
    const results = await queryAsync(query, [slug]);
    return JSON.stringify(results);
  } catch (e) {
    console.log(e);
    return JSON.stringify([]);
  }
}

export async function insightSearch(type, item, page) {
  if (type == "perspectives") {
    return await fetchBlogsForInsights(item, page);
  }
  if (type == "case-study") {
    return await fetchCaseStudiesForInsights(item, page);
  }
}

export async function queryAsync(sqlQuery, values = []) {
  try {
    const [rows, fields] = await pool.query(sqlQuery, values);
    return rows;
  } catch (error) {
    throw error;
  }
}
