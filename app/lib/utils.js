"use server";

import { cookies } from "next/headers";

export async function checkCookie() {
  const cookieStore = cookies();
  const consent = cookieStore.get("qcentrio-cookie-consent");
  return consent;
}
