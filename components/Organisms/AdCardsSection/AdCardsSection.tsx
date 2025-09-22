"use client";
import AdCardList from "@/components/Molecules/AdCardList/AdCardList";
import React from "react";

const cardsData = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    image: "/banner1.png",
    buttonLabel: "Shop now",
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    image: "/banner2.png",
    buttonLabel: "Shop now",
  },
  {
    title: "The best Organic Products Online",
    image: "/banner3.png",
    buttonLabel: "Shop now",
  },
];

const AdCardsSection: React.FC = () => (
  <div className="pt-15">
    <AdCardList cards={cardsData}/>
  </div>
);

export default AdCardsSection;
