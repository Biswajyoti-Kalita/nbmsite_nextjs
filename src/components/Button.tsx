interface ButtonProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    onClick?: () => void;
}

export default function Button({ text, bgColor, textColor, borderColor, onClick }: ButtonProps) {
    return (
        <button className={`border-[${borderColor}] bg-[${bgColor}] text-[${textColor}] px-[16px] py-[10px] rounded-[44px] font-semibold text-[16px] leading-[24px] border-2`} onClick={onClick}>{text}</button>
    )
}