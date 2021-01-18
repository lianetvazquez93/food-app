import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export interface Result {
  id: string;
  name: string;
  image_url: string;
  review_count: number;
  rating: number;
  photos: string[];
  price: string;
}

export default (id: string) => {
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const getResult = async (id: string): Promise<void> => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };

    getResult(id);
  }, []);

  return result;
};
