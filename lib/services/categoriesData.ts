export interface Category {
  slug: string;
  name: string;
  url: string;
  total?: number;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch("https://dummyjson.com/products/categories", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();
  return categories.map((category: Category) => {
    const slug = category.slug || category.name || String(category);
    return {
      slug: slug,
      name: slug.replace(/-/g, " "),
      url: `/category/${slug}`,
    };
  });
}

export async function getCategoryTotal(slug: string): Promise<number> {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch total for category: ${slug}`);
  }
  const data = await res.json();
  return data.total;
}