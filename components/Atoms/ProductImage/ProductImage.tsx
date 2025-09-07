import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => (
  <div className="max-w-[246px] max-h-[246px]">
    <Image src={src} alt={alt} width={246} height={246} />
  </div>
);

export default ProductImage;
