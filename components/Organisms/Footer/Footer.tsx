import ContactInfoBlock from "@/components/Molecules/ContactInfoBlock/ContactInfoBlock";
import FooterNavBlock from "@/components/Molecules/FooterNavBlock/FooterNavBlock";
import SupportBlock from "@/components/Molecules/SupportBlock/SupportBlock";

const Footer = () => {
  const footerNavBlocks = [
    {
      title: "Company",
      items: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
    {
      title: "Account",
      items: [
        "Sign In",
        "View Cart",
        "My Wishlist",
        "Track My Order",
        "Help Ticket",
        "Shipping Details",
        "Compare products",
      ],
    },
    {
      title: "Corporate",
      items: [
        "Become a Vendor",
        "Affiliate Program",
        "Farm Business",
        "Farm Careers",
        "Our Suppliers",
        "Accessibility",
        "Promotions",
      ],
    },
    {
      title: "Popular",
      items: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Sour Cream and Dips",
        "Tea & Kombucha",
        "Cheese",
      ],
    },
  ];

  return (
    <footer className="pt-10 pb-2 flex flex-col gap-y-12 max-[768px]:pb-14">
      <div className="flex gap-y-6 gap-x-6 justify-between max-lg:flex-col">
        <ContactInfoBlock />
        {footerNavBlocks.map((block, index) => (
          <FooterNavBlock key={index} title={block.title} items={block.items} />
        ))}
      </div>
      <SupportBlock />
    </footer>
  );
};

export default Footer;
