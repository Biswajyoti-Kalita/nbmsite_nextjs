interface GradientButtonProps {
  type?: "primary" | "secondary" | "tertiary";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
  fullWidth?: boolean;
  className?: string;
}

export default function GradientButton({ type, text, leftIcon, rightIcon, fullWidth =false, className = "" }: GradientButtonProps) {
  return (
    type == "tertiary" ? (
        <button className={`border-[#FFFEFF] border-2  px-2 md:px-4 py-1.5 md:py-2.5 rounded-md text-xs md:text-sm lg:text-base font-semibold cursor-pointer ${className}`}>
        {leftIcon ? leftIcon : null}
        <span className="text-[#FFFEFF] text-nowrap">{text}</span>
        {rightIcon ? rightIcon : null}
    </button>        
    ): (
    type === "secondary"? (
        <button className={`relative bg-gradient-to-r from-[#F11F68] to-[#162ABF] p-[2px]  rounded-md text-xs md:text-sm lg:text-base font-semibold cursor-pointer shadow-lg ${className} `}>
            <div className="bg-white rounded-md h-full w-full flex flex-row gap-2 items-center justify-center px-2 md:px-4 py-1.5 md:py-2.5">
                {leftIcon  ? leftIcon : null}
                <span className="bg-gradient-to-r from-[#F11F68] to-[#162ABF] bg-clip-text text-transparent text-nowrap">{text}</span>
                {rightIcon ? rightIcon : null}
            </div>
        </button>
    ) : (
        <button className={` ${fullWidth ? "w-full" : ""} text-white gradient-bg-button px-2 md:px-4 py-1.5 md:py-2.5 rounded-md text-xs md:text-sm lg:text-base font-semibold  text-center cursor-pointer flex flex-row items-center justify-center gap-3 ${className}`}>    
        {leftIcon ? leftIcon : null}
        <span className="text-nowrap">{text}</span>
        {rightIcon ? rightIcon : null}
        </button>
    )
  ));
}