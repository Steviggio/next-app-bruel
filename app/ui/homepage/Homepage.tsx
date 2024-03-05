import Header from "../Header"
import Footer from "../Footer"
import dynamic from "next/dynamic"
import CategoriesList from "../portfolio/categories"
// import Introduction from "../introduction/introduction"
// import Contact from "../Contact"
// import Gallery from "../galleryElement"
// import { GalleryList } from "../galleryElement"
// import CategoriesList from "../portfolio/categories"

const Introduction = dynamic(() => import('../introduction/Introduction'))
const Gallery = dynamic(() => import('../portfolio/gallery'))
const Contact = dynamic(() => import('../Contact'))


export default function Homepage() {
  const handleSelectCategory = (categoryId: number | null) => {
    console.log(categoryId)
  }
  return (
    <>
      <Introduction />
      <Gallery />
      <Contact />
    </>
  )
}