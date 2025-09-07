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
}

export interface PopularProduct {
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  brand: string;
  image: string;
}

export async function getPopularProducts(
  limit: number = 10
): Promise<PopularProduct[]> {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch popular products");
  }

  const data: ProductResponse = await res.json();

  return data.products.map(
    (product: Product): PopularProduct => ({
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      category: product.category,
      brand: product.brand,
      image: product.images[0] || product.thumbnail
    })
  );
}
