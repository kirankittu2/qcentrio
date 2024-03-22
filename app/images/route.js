import image from "@/public/facebook.svg";
import fs from "fs";
import path from "path";

export async function GET() {
  const imagePath = path.join("public/facebook.svg");
  const imageData = fs.readFileSync(imagePath);
  var string = imageData.toString("base64");
  console.log(string);

  return Response.json(string);
}
