
export type State = {
  errors?: {
    image?: string[];
    title?: string[];
    category?: string[]
  },
  message?: string | null
}


export async function fetchProject() {
  const data = await fetch("http://localhost:5678/api/works")
  console.log(data)
  return data
}



export async function postProject(prevState: State, formData: FormData) {

  const validatedFields = postProject.safeParse({
    image: formData.get("image"),
    title: formData.get("title"),
    category: formData.get('category')
  });

  if (!validatedFields) {
    return {
      errors: validatedFields.errors.flatten().fieldErrors,
      message: "Missing fields. Failed to post a new project.",
    }
  }

  const (image, title, category) = validatedFields.data;

}