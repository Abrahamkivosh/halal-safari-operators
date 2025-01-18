import { CMS_ASSETS_URL, CMS_TOKEN } from "@/config";
import axiosInstance from "./axios";

export function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CMS_TOKEN}`,
  };
}

export function getImageUrl(imageId: string) {
  if (!imageId) return "";
  return `${CMS_ASSETS_URL}/${imageId}`;
}

export const getAos = (index: number) => {
  // Return AOS animation based on the index
  return index % 2 === 0 ? "fade-right" : "fade-left";
};

export const getFlipAos = (index: number) => {
  // Return flip AOS animation based on the index
  switch (index % 3) {
    case 0:
      return "flip-left";
    case 1:
      return "flip-right";
    case 2:
      return "flip-down";
    default:
      return "flip-left";
  }
};

export const getReverse = (index: number) => {
  // Determine if the layout should be reversed
  return index % 2 !== 0;
};

// format currency
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(amount);
}

export const defaultGetImage = async (
  id: string,
  width: number = 500,
  height: number = 500,
  mime: "auto" | "gif" | "jpeg" | "png" | "webp" | "bmp" = "webp"
): Promise<string | null> => {
  try {
    const { data } = await axiosInstance.get<string>(
      `/assets/image/${id}?w=${width}&h=${height}&mime=${mime}`
    );
    return data;
  } catch (axiosError: unknown) {
    const message =
      axiosError instanceof Error
        ? axiosError.message
        : "An unknown error occurred";
    console.error("Error fetching image:", message);
    return null;
  }
};