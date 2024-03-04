"use client"

import { fetchCategories } from "../../lib/data";
import { CategorySchema } from "../../lib/definitions";

// interface CategoriesListProps {
//   OnSelectCategory: (categoryId: number | null) => void
// }

export default async function CategoriesList() {

  const categories = await fetchCategories();

  const handleCategoryClick = (categoryId: number | null) => {
    return categoryId
  }

  return (
    <div className="filter">
      <button
        className="short buttons btn-all"
        onClick={() => handleCategoryClick(null)}
      >
        Tous
      </button>
      {categories.map((item: CategorySchema) => (
        <button key={item.id} className="btn-all"
          onClick={() => handleCategoryClick(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

// function OnSelectCategory(categoryId: number | null) {
//   return categoryId
// }
