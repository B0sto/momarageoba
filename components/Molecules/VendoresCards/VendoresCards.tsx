import SectionHeader from "@/components/Atoms/SectionHeader/SectionHeader";
import Link from "next/link";
import React from "react";
import VendorCard from "@/components/Atoms/VendoresCard/VendoresCard";

interface Vendor {
  id: number;
  name: string;
  logo?: string;
  since: number;
  rating: number;
  products: number;
  address: string;
  phone: string;
  badge?: string;
}

interface VendoresCards {
  vendors: Vendor[];
}

const VendoresCards: React.FC<VendoresCards> = ({ vendors }) => {
  return (
    <section className="pt-15">
      <SectionHeader header="Our Trusted Vendors" className="mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
};

export default VendoresCards;
