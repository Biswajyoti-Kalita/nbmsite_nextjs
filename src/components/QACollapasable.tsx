"use client"
import { useState } from "react";

interface QACollapasableProps {
    title: string;
    description: string;
}

export default function QACollapasable({ title, description }: QACollapasableProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full flex flex-col items-start justify-center py-[20px] border-[#E8E8E8] border-b-[1px] border-t-[1px] gap-[12px]">
            <h1 className="text-[#262626] w-full text-[20px] leading-[28px] lg:text-[20px] lg:leading-[32px] font-medium flex flex-row gap-[24px]">
                <span className="w-full">
                {title}
                </span>
                {isOpen ? (
                    <span onClick={() => setIsOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                ) : (
                    <span onClick={() => setIsOpen(true)}>                   
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                )}
            </h1>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-normal">
                    {description}
                </p>
            </div>
        </div>
    )
}