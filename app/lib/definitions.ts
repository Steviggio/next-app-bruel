export interface Work {
  id: number;
  title: string;
  imageUrl: string;
  categoryId: number;
  userId: number;
  category: {
    id: number;
    name: string
  };
}

export interface GalleryProps {
  works: Work[];
  activeCategory: number | string | null
}