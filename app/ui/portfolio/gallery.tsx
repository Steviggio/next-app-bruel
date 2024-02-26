import { fetchProjects } from "../../lib/actions"
import { Work } from "../../lib/definitions"

export async function Gallery() {
  const works = await fetchProjects()

  return (
    <div className="gallery">
      {works.map((item: Work) => {
        <figure key={item.id}>
          <img src={item.imageUrl} alt={`${item.imageUrl} image`} />
        </figure>
      })}
    </div>
  )
}