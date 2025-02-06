import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  imageUrl: string ; // For next/image
  _id: string;
  name: string;
  type: string;
  image: {
    asset: {
      url: string // The actual URL of the image
    };
  };
  price: number;
  description: string;
  title: string;
  tags: string; // This is a string (you may want to change it to an array if it's actually a list of tags)
  discountPercentage?: number; // Corrected typo
  isNew?: boolean;
  quantity: number; // Ensure this is included in your data source
}
