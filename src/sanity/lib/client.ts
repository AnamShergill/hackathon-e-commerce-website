import { createClient } from "next-sanity";


export const client = createClient({
  projectId : "6ybpasf7",  
  dataset:   "production",
  apiVersion : "2025-01-13", 
  useCdn: true,
});
