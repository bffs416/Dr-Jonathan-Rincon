import data from './placeholder-images-home.json';

export type ImagePlaceholderHome = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImagesHome: ImagePlaceholderHome[] = data.placeholderImagesHome;
