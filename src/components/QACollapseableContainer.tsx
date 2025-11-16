"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import QACollapasable from "./QACollapasable";
import { useState } from "react";
interface QACollapseableContainerProps {
    data: {
        image: string;
        title: string;
        description: string;
        descriptionHTML?: React.ReactNode;
    }[];
}

export default function QACollapseableContainer({ data }: QACollapseableContainerProps) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelect = (index: number) => {
        if (selectedIndex !== index) {
            setSelectedIndex(index);
        }
    }

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[16px] lg:gap-[24px]">
    <div className="w-full flex flex-col items-start justify-start">
      <Image
        src={data[selectedIndex].image}
        alt="Ad Formats"
        width={588}
        height={420}
        className="w-full max-w-[588px] object-cover"
      />
    </div>
    <div className="w-full flex flex-col items-start justify-center gap-[40px]">
      <div className="w-full flex flex-col items-start justify-center">
        {
            data.map((item, index) => (
                <QACollapasable
                    key={index}
                    title={item.title}
                    description={item.description}
                    descriptionHTML={item.descriptionHTML}
                    index={index}
                    isOpen={selectedIndex === index ? true : false}
                    onToggle={handleSelect}
                />
            ))
        }
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[12px]">
        <GradientButton text="Share a Brief" className="h-[44px] w-[200px]" />
        <GradientButton text="Download Media Kit" type="secondary" className="w-[180px]" />
      </div>
    </div>
  </div>
);
}