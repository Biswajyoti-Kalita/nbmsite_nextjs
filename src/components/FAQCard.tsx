"use client"
import { useState } from "react";

interface FAQCardProps {
    title: string;
    description: string;
    open?: boolean;
}

export default function FAQCard({ title, description, open }: FAQCardProps) {
    const [isOpen, setIsOpen] = useState(open || false);
    return (
        <div className="w-full flex flex-col items-start justify-center border-[#E5E5E5] border-[1px] rounded-[16px] bg-[#FFFEFF]">
            <h1 className="text-[#262626] w-full text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] font-medium flex flex-row gap-[24px] py-[20px] px-[24px]">
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
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 px-[24px] pb-[24px]' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#344054] text-[16px] leading-[24px] font-normal">
                    {description}
                </p>
            </div>
        </div>
    )
}