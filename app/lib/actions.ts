"use server"

// import Cookies from "universal-cookie";
import { z } from "zod";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation"
import axios from "axios"
import { cookies } from 'next/headers'

// export async function handleLogin(sessionData) {
//   const encryptedSessionData = encrypt(sessionData)
//   cookies().set('session', encryptedSessionData, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 60 * 60 * 24 * 7,
//     path: "/",
//   })
// }

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

    const data = await response.json();
    return {
      message: data.message,
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


async function setCookies(data: any) {
  const jsonData = JSON.stringify(data)
  cookies().set({
    name: "userData",
    value: jsonData,
    httpOnly: true,
    path: '/'
  })
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const validatedFields = Authenticate.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })
  // console.log(validatedFields)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Something went wrong when trying to login."
    }
  }

  // console.log(formData)
  const email = formData.get('email')
  const password = formData.get('password')

  const form = { "email": email, "password": password }
  try {

    const response = await fetch("http://localhost:5678/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );
    // console.log("Response ----- ", response)
    const userData = await response.json();
    if (userData.token) {
      console.log(userData)
      await setCookies(userData)
    } else {
      return { message: "Wrong email or password" }
    }

    // console.log("User ------", userData)


  } catch (error) {
    return { message: "Wrong password or email" }
  }


  redirect("/")


}