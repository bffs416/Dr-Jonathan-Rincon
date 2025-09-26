import data from './placeholder-images-gallery.json';

export type GalleryImage = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

export const GalleryImages: GalleryImage[] = data.galleryImages;
