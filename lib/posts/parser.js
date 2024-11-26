import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function getPostData() {
  const filePath = path.join(process.cwd(), "posts", "hello-world.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}
