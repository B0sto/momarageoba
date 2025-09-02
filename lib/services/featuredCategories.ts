// Define a product type based on dummyjson API
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  categoryImage?: string;
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch("https://dummyjson.com/products/categories", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return (await res.json()) as string[];
}

export async function getProductsByCategory(
  category: string
): Promise<ProductResponse> {
  const res = await fetch(
    `https://dummyjson.com/products/category/${encodeURIComponent(category)}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error(`Failed to fetch products for ${category}`);
  const data = (await res.json()) as ProductResponse;
  const categoryImage =
    data.products.length > 0 ? data.products[0].images[0] : undefined;
  return { ...data, categoryImage };
}
