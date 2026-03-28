/*
Problem 5: Normalize Inconsistent API Responses
Objective
Convert inconsistent API data into a normalized structure.
Input
const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];

Requirements
Normalize tags into arrays


Create a lookup object keyed by id


Fill missing properties with defaults


Do not mutate the original response


Expected Outcome
{
  1: { id: 1, name: "A", tags: ["x","y","z"] },
  2: { id: 2, name: "B", tags: ["x","y"] },
  3: { id: 3, name: "C", tags: [] }
}


*/
const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];


const normalizeData = data =>
  data.reduce((lookup, { id, name = "", tags }) => {

    const normalizedTags =
      Array.isArray(tags)
        ? tags
        : typeof tags === "string"
          ? tags.split(",")
          : [];

    lookup[id] = { id, name, tags: normalizedTags };

    return lookup;
  }, {});

const result = normalizeData(apiResponse);
console.log(result);
