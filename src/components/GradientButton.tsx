interface GradientButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: "primary" | "secondary" | "tertiary";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
  fullWidth?: boolean;
  className?: string;
  buttonType?: "button" | "submit" | "reset";
}

export default function GradientButton({ 
  type = "primary", 
  text, 
  leftIcon, 
  rightIcon, 
  fullWidth = false, 
  className = "",
  onClick,
  disabled = false,
  buttonType = "button",
  ...rest
}: GradientButtonProps) {
  
  // Common base classes
  const baseClasses = "px-2 md:px-4 py-1.5 md:py-2.5 rounded-md text-xs md:text-sm lg:text-base font-semibold cursor-pointer transition-all";
  const iconWrapperClasses = "flex flex-row gap-2 items-center justify-center";
  
  // Disabled state classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Render icon wrapper with text
  const renderContent = (textClasses: string, iconClasses: string = "") => (
    <>
      {leftIcon && <div><span className={`flex-shrink-0 ${iconClasses}`}>{leftIcon}</span></div>}
      {text && <span className={`text-nowrap ${textClasses}`}>{text}</span>}
      {rightIcon && <div><span className={`flex-shrink-0 ${iconClasses}`}>{rightIcon}</span></div>}
    </>
  );

  // Tertiary variant: White border with white text
  if (type === "tertiary") {
    return (
      <button 
        type={buttonType}
        className={`border-[#FFFEFF] border-2 hover:bg-white/10 ${iconWrapperClasses} ${baseClasses} ${disabledClasses} ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {renderContent("text-[#FFFEFF]")}
      </button>
    );
  }

  // Secondary variant: Gradient border with gradient text
  if (type === "secondary") {
    return (
      <button 
        type={buttonType}
        className={`relative bg-gradient-to-r from-[#F11F68] to-[#162ABF] p-[2px] rounded-md cursor-pointer transition-all text-xs md:text-sm lg:text-base font-semibold ${disabledClasses} ${className}`}
        style={{
            background: "linear-gradient(90deg, #f11f68 0%, #162abf 100%)"
        }}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        <div className={`bg-white hover:bg-[#FFF9FE] active:bg-[#FFEDFB] rounded-[4px] min-h-[40px] min-w-[44px] ${iconWrapperClasses} px-2 md:px-4 py-1.5 md:py-2.5`}>
          {renderContent("bg-gradient-to-r from-[#F11F68] to-[#162ABF] bg-clip-text text-transparent", "bg-gradient-to-r from-[#F11F68] to-[#162ABF] bg-clip-text text-transparent")}
        </div>
      </button>
    );
  }

  // Primary variant: Solid gradient background with white text
  return (
    <button 
      type={buttonType}
      className={`${fullWidth ? "w-full" : ""} text-white gradient-bg-button ${iconWrapperClasses} text-center gap-3  ${baseClasses} shadow-[0px_1px_2px_0px_#1018280D,_inset_0px_-2px_0px_0px_#1018280D,_inset_0px_0px_0px_1px_#1018282E] ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {renderContent("")}
    </button>
  );
}