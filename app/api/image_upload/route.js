import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

function detectMimeType(filename) {
  if (!filename) {
    return "application/octet-stream"; // Default content type for invalid input
  }
  const trimmedFilename = filename.trim();
  const extension = trimmedFilename.split(".").pop().toLowerCase();
  const contentTypes = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    // Add more extensions and content types as needed
  };
  const mimeType = contentTypes[extension] || detectMimeType(trimmedFilename);
  if (!mimeType) {
    console.warn(`Unsupported file type: ${extension}`);
  }
  return mimeType || "application/octet-stream";
}

async function uploadFileToS3(file, fileName) {
  const contentType = detectMimeType(fileName);
  const fileBuffer = file;
  console.log(fileName);

  if (!process.env.AWS_S3_BUCKET_NAME) {
    throw new Error("AWS_S3_BUCKET_NAME environment variable is not set");
  }
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `images/${fileName}-${new Date().getTime()}`,
    Body: fileBuffer,
    ContentType: contentType,
  };

  try {
    const command = new PutObjectCommand(params);
    await client.send(command);
    return fileName;
  } catch (error) {
    console.error(`Failed to upload ${fileName} to S3:`, error);
    throw new Error("File upload failed");
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "An error occurred." },
      { status: 500 }
    );
  }
}
