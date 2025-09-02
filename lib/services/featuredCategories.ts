export async function getCategories(): Promise<string[]> {
  const res = await fetch("https://dummyjson.com/products/categories", {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getProductsByCategory(
  category: string
): Promise<{ products: any[]; total: number; categoryImage?: string }> {
  const res = await fetch(
    `https://dummyjson.com/products/category/${encodeURIComponent(category)}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error(`Failed to fetch products for ${category}`);
  const data = await res.json();
  const categoryImage =
    data.products.length > 0 ? data.products[0].images[0] : undefined;
  return { ...data, categoryImage };
}
