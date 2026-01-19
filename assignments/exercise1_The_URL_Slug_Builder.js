const title = "JavaScript For Beginners";

const slug = title
  .toLowerCase()
  .split(" ")
  .join("-");

console.log(slug);