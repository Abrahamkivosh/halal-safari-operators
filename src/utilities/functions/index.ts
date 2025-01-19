import {  CMS_IMAGE_URL } from "@/configs";



export const getReverse = (index: number) => {
  // Determine if the layout should be reversed
  return index % 2 !== 0;
};



export const getImageURL = (path: string) => {
  return `${CMS_IMAGE_URL}${path}`;
}