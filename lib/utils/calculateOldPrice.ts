export function calculateOldPrice(newPrice: number, discountPercentage: number): number {
  return +(newPrice / (1 - discountPercentage / 100)).toFixed(2);
}
