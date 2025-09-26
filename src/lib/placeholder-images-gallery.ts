import data from './placeholder-images-gallery.json';

export type GalleryImage = {
  id: string;
  imageUrl: string;
  imageHint: string;
  title: string;
  href: string;
  category?: string;
};

export const GalleryImages: GalleryImage[] = data.galleryImages;
