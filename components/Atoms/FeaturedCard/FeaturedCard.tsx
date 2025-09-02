import Image from "next/image";

interface FeaturedCardProps {
  name: string | { slug: string; name: string; url: string };
  itemCount: number;
  image?: string; // Added optional image property
}

const FeaturedCard = ({ name, itemCount, image }: FeaturedCardProps) => {
  const displayName = typeof name === "string" ? name : name.name;

  return (
    <div className="rounded-[10px] p-6 border border-[#F4F6FA] bg-white flex flex-col items-center">
      {image && (
        <Image
          src={image}
          alt={displayName}
          width={64}
          height={64}
          className="rounded object-cover mb-4"
        />
      )}
      <h4 className="mt-4 font-quicksand font-bold leading-[120%] text-[#254D4E]">
        {displayName}
      </h4>
      <p className="text-[#7E7E7E] font-lato leading-[24px]">
        {itemCount} items
      </p>
    </div>
  );
};

export default FeaturedCard;
