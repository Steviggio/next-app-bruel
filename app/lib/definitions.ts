export interface Work {
  id: number;
  title: string;
  imageUrl: string;
  categoryId: number;
  userId: number;
  category: GalleryProps
}

export interface WorkList {
  works: Work[];
}

export interface GalleryProps {
  works: Work[];
  activeCategory: number | string | null
}

export interface CategorySchema {
  id: number;
  name: string;
}

export interface User {
  email: string;
  password: string;
}

export interface GalleryModalProps {
  show: boolean;
  onCloseButtonClick: () => void;
  projects: Work[];
  deleteProject: (index: number) => Promise<void>; 
}

export interface AddProjectModalProps {
  show: boolean;
  onCloseButtonClick: () => void;
  backToPrevious: () => void;
}

export interface PostWorkBody {
  image: string;
  title: string;
  category: CategorySchema["id"];
}