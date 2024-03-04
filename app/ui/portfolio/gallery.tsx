"use client"
import dynamic from "next/dynamic"
import { fetchProjects } from "../../lib/data"
import { Work } from "../../lib/definitions"
import Image from "next/image"
// import CategoriesList from "./categories"

const CategoriesList = dynamic(() => import("../portfolio/categories"))


export default async function Gallery() {

  const works = await fetchProjects()

  return (
    <>
      <CategoriesList />
      <div className="gallery">
        {works.map((item: Work) => (
          <figure key={item.id}>
            <Image
              src={item.imageUrl}
              alt={`${item.imageUrl} image`}
              height={430}
              width={320}
            />
          </figure>
        ))}
      </div>
    </>
  )
}