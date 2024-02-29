import Header from "../Header"
import Footer from "../Footer"
import Introduction from "../introduction/introduction"
import Contact from "../Contact"
import Gallery from "../galleryElement"
// import { GalleryList } from "../galleryElement"

export default function Homepage() {
  return (
    <>
      <Introduction />
      <Gallery />
      <Contact />
    </>
  )
}