"use client";
import { useEffect, useState } from "react";
import MarketingCard from "./MarketingCard";
import isMobile from "@/util/util";

export default function MarketingCardGroup() {
    const [marketingCards, setMarketingCards] = useState([
        {
            title: "Brands & Agencies",
            description: "AI Ad-Studio, DIY Campaign Manager and high performing managed campaign solutions",
            buttonText: "Explore Solutions",
            buttonText2: "Create free AI Ads",
            image: "/assets/images/card-bg-1.jpg",
            expanded: true
        },
        {
            title: "Publishers & Networks",
            description: "Tap into global advertiser demand and monetise your full podcast catalogue with scalable, multi-format campaigns.",
            buttonText: "Explore Our Solutions",
            buttonText2: "",
            image: "/assets/images/card-bg-2.jpg",
            expanded: false
        },
        {
            title: "Podcasters & Creators",
            description: "Maximize revenues of your shows with our Host-Read Studio and Brand-matching in our Global Advertiser Network.",
            buttonText: "Learn More",
            buttonText2: "Register your show",
            image: "/assets/images/card-bg-3.jpg",
            expanded: false
        }
    ]);
    const [isMobileScreen] = useState(isMobile());
    
    const handleMouseEnter = (index: number) => {
        if(isMobileScreen) {
            return;
        }
        setMarketingCards(prevCards => prevCards.map((card, i) => ({ ...card, expanded: i === index })));
    }

    const handleMouseLeave = () => {
        //setMarketingCards(prevCards => prevCards.map((card, index) => ({ ...card, expanded: index === 0 })));
    }

    useEffect(() => {
        if (isMobileScreen) {
            setMarketingCards(prevCards => prevCards.map((card) => ({ ...card, expanded: false })));
        }
    }, [isMobileScreen]);

    return (
        <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-[20px] marketing-cards-container">
            {marketingCards.map((card, index) => (
                <MarketingCard key={card.title} {...card} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} />
            ))}
        </div>
    )




}