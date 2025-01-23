// utils/hooks/useTourPackageData.ts
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../functions/axios";
import { CMS_URL } from "@/configs";

export const useTourPackageData = (endpoint: string) => {
  const [sectionData, setSectionData] = useState<TourPackageInterface | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  const fetchSectionData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = CMS_URL + "/api/content/item/" + endpoint + "?locale=en";
      const { data } = await axiosInstance.get<TourPackageInterface>(url);
      setSectionData(data); // Set fetched data
    } catch (axiosError: unknown) {
      // Handle errors
      const message =
        axiosError instanceof Error
          ? axiosError.message
          : "An unknown error occurred";
      setError(message);
    } finally {
      setLoading(false); // Stop loading
    }
  }, [endpoint]);

  // Fetch data on endpoint change
  useEffect(() => {
    fetchSectionData();
  }, [fetchSectionData]);

  // Return data, error, and loading state
  return { sectionData, error, loading };
};
