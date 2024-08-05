"use server";

import { cookies } from "next/headers";

export async function checkConsent() {
  const cookieStore = cookies();
  const consent = cookieStore.get("qcentrio-cookie-consent");
  return consent;
}

export async function checkLoader() {
  const cookieStore = cookies();
  const load = cookieStore.get("load");
  if (load) {
    return load.value;
  } else {
    return null;
  }
}
