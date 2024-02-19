import { headers } from "next/headers";
import { z } from "zod"

const FormSchema = z.object({
  id: z.string(),
  image: z.string(),
  category: z.coerce
    .number()
})

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

const PostProject = FormSchema.omit({ id: true })


export async function postProject(prevState: State, formData: FormData) {

  const validatedFields = PostProject.safeParse({
    image: formData.get("image"),
    title: formData.get("title"),
    category: formData.get('category')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to post a new project.",
    }
  }


  try {
    const response = await fetch("http://localhost:5678/api/works",
      {
        method: "POST",
        body: formData
      });

    if (!response) {
      throw new Error("Failed to post a new project");
    }

    const responseData = await response.json();
    return {
      message: responseData.message,
    }
  } catch (error) {
    return { message: error }
  }

}

const AuthSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string()
})

const Authenticate = AuthSchema.omit({ id: true })

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const validatedFields = Authenticate.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })

  if (!validatedFields) {
    throw new Error("Something went wrong when trying to login.")
  }

  try {
    let response = await fetch("http://localhost:5678/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: formData
      })
    if (!response) {
      return null
    }
    const user = await response.json()

    return user
  } catch (error) {
    throw new Error("An error occurred when trying to connect.")
  }
}