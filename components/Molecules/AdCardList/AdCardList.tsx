"use client";
import AdCard from "@/components/Atoms/AdCard/AdCard";
import React from "react";

type CardData = {
  title: string;
  image: string;
  buttonLabel: string;
  bgColor?: string;
};

type CardListProps = {
  cards: CardData[];
};

const AdCardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <AdCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AdCardList;
