import { Star, MapPin, Phone } from "lucide-react";
import Button from "../Button/Button";

interface VendorCardProps {
  vendor: {
    id: number;
    name: string;
    logo?: string;
    since: number;
    rating: number;
    products: number;
    address: string;
    phone: string;
    badge?: string;
  };
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <div className="hover:shadow-lg transition-all rounded-[15px] border border-[#ECECEC] p-6 relative duration-300">
      {vendor.badge && (
        <div className="absolute top-0 right-0 bg-pink-500 text-white px-6 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-medium">
          {vendor.badge}
        </div>
      )}

      <div className="flex justify-center mb-6">
        <img
          src={vendor.logo || "/placeholder.svg"}
          alt={vendor.name}
          className="h-32 w-32 rounded-full object-cover"
        />
      </div>

      <p className="text-muted-foreground text-sm mb-2">Since {vendor.since}</p>

      <h3 className="font-bold text-2xl mb-3 text-foreground">{vendor.name}</h3>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-muted-foreground text-sm ml-1">
            ({vendor.rating.toFixed(1)})
          </span>
        </div>
        <div className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-md text-sm font-medium">
          {vendor.products} products
        </div>
      </div>

      <div className="flex items-start gap-2 mb-3">
        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
        <p className="text-muted-foreground text-sm leading-relaxed">
          <span className="font-medium text-foreground">Address:</span>{" "}
          {vendor.address}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <p className="text-muted-foreground text-sm">
          <span className="font-medium text-foreground">Call Us:</span>{" "}
          {vendor.phone}
        </p>
      </div>

      <Button buttonLabel="Visit now" />
    </div>
  );
};

export default VendorCard;
