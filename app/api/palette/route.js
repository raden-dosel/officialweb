import { findMostDistinctColors } from "@utils/color_processing";
import path from "path";
import fs from "fs/promises";

export const GET = async (req) => {
  try {
    const filePath = path.resolve(
      process.cwd(),
      "public/data/colors_cleaned.json"
    );
    const data = await fs.readFile(filePath, "utf-8");
    const colors = JSON.parse(data);

    return new Response(JSON.stringify(colors), { status: 200 });
  } catch (error) {
    console.error("Error fetching colors:", error); // Log the error for more details
    return new Response("Error fetching colors.", { status: 500 });
  }
};
