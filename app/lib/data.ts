import { unstable_noStore as noStore } from "next/cache";

export async function fetchProjects() {
  noStore()
  try {
    console.log("Fetching gallery...")
    const response = await fetch("http://localhost:5678/api/works")
    const data = await response.json()
    console.log("works....", data)

    return data
  } catch (error) {
    console.error("Error when fetching datas", error)
    throw new Error("Failed to fetch works.")
  }
}

export async function fetchCategories() {
  noStore()
  try {
    console.log('Fetching categories....')
    const response = await fetch("http://localhost:5678/api/categories")
    const data = await response.json()
    console.log("Categories....", data)
    return data
  } catch (error) {
    throw new Error("Failed to fetch categories.")
  }
}