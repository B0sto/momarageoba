import VendoresCards from "@/components/Molecules/VendoresCards/VendoresCards";
import React from "react";

const VendoresSection = () => {
  const vendors = [
    {
      id: 1,
      name: "Nature Food",
      logo: "/organic-farm-basket-logo.png",
      rating: 4.0,
      reviews: 59,
      since: 2012,
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      phone: "(+91) - 540-025-124553",
      products: 380,
      badge: "Mall",
    },
    {
      id: 2,
      name: "Green Valley Organics",
      logo: "/green-leaf-organic-logo.png",
      rating: 4.9,
      reviews: 203,
      since: 2015,
      address: "892 Harvest Way, South Main, South Carolina, PE",
      phone: "(+1) 702-240-3976",
      products: 62,
      badge: "Mall",
    },
    {
      id: 3,
      name: "Nature's Bounty",
      logo: "/nature-vegetables-logo.png",
      rating: 4.7,
      reviews: 128,
      since: 2018,
      address: "392 Corn Lake Apt 391, South Opal, Oregon, MO",
      phone: "(+1) 520-227-545",
      products: 38,
    },
    {
      id: 4,
      name: "Organic Roots Co",
      logo: "/organic-roots-plant-logo.png",
      rating: 4.9,
      reviews: 187,
      since: 2010,
      address: "3685 Kihn Trail, Wilhelmsburg, Arkansas, PY",
      phone: "(+1) 207-736-858",
      products: 54,
      badge: "Mall",
    },
    {
      id: 5,
      name: "Farm Fresh Direct",
      logo: "/farm-fresh-produce-logo.png",
      rating: 4.6,
      reviews: 94,
      since: 2016,
      address: "8711 Rodrique Overpass, New Jovanyhaven, Maine, SJ",
      phone: "(+1) 127-786-376",
      products: 41,
    },
    {
      id: 6,
      name: "Pure Earth Market",
      logo: "/earth-organic-market-logo.png",
      rating: 4.8,
      reviews: 165,
      since: 2014,
      address: "903 Rae Ferry Apt. 826, Corineberg, Montana, BQ",
      phone: "(+1) 462-283-623",
      products: 58,
      badge: "Mall",
    },
  ];
  return <VendoresCards vendors={vendors} />;
};

export default VendoresSection;
