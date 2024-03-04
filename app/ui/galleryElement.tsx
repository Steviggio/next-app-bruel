'use server'

import { useState } from "react"
import { fetchProjects } from "../lib/data"
import { Work } from "../lib/definitions";
import Image from "next/image";

export default async function Gallery() {

  const projects = await fetchProjects();
  console.log(projects)

  return (
    <>
      <section id="portfolio">
        <h2>Mes Projets</h2>

        <div className={`modal-modify-btn`}>
          <div id="portfolio-modal">
            <img src={projects.imageUrl} alt="" />
            <a href="#modal-box1" className="js-modal" >
              modifier
            </a>
          </div>
        </div>

        <article>

          <div className="filter">
            {/* <button
              className="short buttons btn-all"
              onClick={() => handleCategoryChange(null)}
            >
              Tous
            </button> */}
            {/* {categories.map((category) => (
              <button
                key={category.id}
                className={`${category.id === selectedCategory ? "selected " : ""
                  }short buttons`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))} */}
          </div>

        </article>
        <GalleryList works={projects} />
      </section>
    </>
  )
}

// export function GalleryElement() {
//   const projects = fetchProjects();

//   return (

//   )
// }


// export function getElement({
//   id,
//   imageUrl,
//   categoryId,
//   category
// }: {
//   id: number,
//   imageUrl: string,
//   categoryId: number
//   category: { id: number, name: "Objets" | "Appartements" | "Hotel & restaurants" }
// }) {

// }

// export function postElement({
//   image,
//   title,
//   category
// }: {
//   image: string,
//   title: string,
//   category: number
// }) {

// }




export async function GalleryList({ works, category }: {
  works: Work[],
  category?: string | number
}) {
  let filteredWorks = works;

  if (category !== undefined) {
    filteredWorks = works.filter(work => work.categoryId === category);
  }

  return (
    <div className="gallery">
      {filteredWorks.map((item: Work, index: number) => (
        <figure key={index}>
          <Image
            src={item.imageUrl}
            width={400}
            height={400}
            alt={item.title}
          />
        </figure>
      ))}
    </div>
  );
}


