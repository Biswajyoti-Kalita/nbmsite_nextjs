"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function CallMeBack({ closeModal }: { closeModal: () => void }) {
  const [selected, setSelected] = useState("US");
  const [requestSent, setrequestSent] = useState(false);

  const handleRequest = () => {
    setrequestSent(true);
  };

  const handleCancel = () => {
    setrequestSent(false);
    closeModal();
  };

  if (requestSent) {
    return (
      <div className="w-full max-w-[630px] flex flex-col items-start justify-start gap-[32px] px-4  lg:p-[40px] bg-[#FFFFFF] rounded-[16px] mt-[50px] lg:mt-0">
        <div className="w-full flex flex-col items-start justify-start gap-[20px]">
          <div className="bg-[#FFEDFB] rounded-[5px] w-[48px] h-[48px] flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.125 13.75L11.875 17.5L19.375 10M26.25 13.75C26.25 20.6536 20.6536 26.25 13.75 26.25C6.84644 26.25 1.25 20.6536 1.25 13.75C1.25 6.84644 6.84644 1.25 13.75 1.25C20.6536 1.25 26.25 6.84644 26.25 13.75Z"
                stroke="#F11F68"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[12px]">
            <h2 className="text-[#262626] text-[24px] leading-[32px] font-extrabold">
                Thanks! Message received
            </h2>
            <p className="text-[#344054] text-[20px] leading-[28px] font-normal">Someone from the team will get back to you shortly</p>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-start gap-[12px]">
            
            <button className="gradient-text w-full py-[10px] px-[16px] rounded-[4px]" onClick={handleCancel}>
                Cancel
            </button>
            <GradientButton        
                text="Confirm"
                type="primary"
                className="w-full"
                fullWidth={true}
                onClick={handleCancel}
            />

        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[900px] flex flex-col items-start justify-start gap-[20px] px-4  lg:pr-0 lg:pl-[40px] bg-[#FFFFFF] rounded-[16px] mt-[50px] lg:mt-0">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[40px] h-full">
        <div className="flex flex-col items-start justify-start gap-[24px] min-w-[340px] lg:min-w-[400px]">
          <h2 className="pt-[24px] lg:pt-[40px] text-[#262626] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-extrabold">
            Request a call back
          </h2>
          <div className="w-full flex flex-col items-start justify-start gap-[32px] pb-[40px] h-full">
            <div className="w-full flex flex-col items-start justify-start gap-[10px]">
              <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                  Full Name
                </h4>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                  Business / Show Name
                </h4>
                <input
                  type="text"
                  placeholder="Enter business or show name"
                  className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                  Email
                </h4>
                <input
                  type="text"
                  placeholder="Enter your full email"
                  className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                  Phone number
                </h4>
                <div className="w-full flex flex-row items-start justify-start gap-[12px] rounded-[4px] border-[#D0D5DD] border-1">
                  <div className="py-[8px] pl-[12px] h-[36px]">
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      showSelectedLabel={false}
                      showSecondarySelectedLabel={false}
                      showOptionLabel={true}
                      className="flag-select"
                      selectButtonClassName="!bg-transparent !border-0 !p-0 hover:opacity-80"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[8px] px-[10px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal border-none text-[#344054]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                  Message
                </h4>
                <textarea
                  placeholder="Tell us your needs and we’ll get the right team member to call you back"
                  className="w-full rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start gap-[10px]">
              <GradientButton
                text="Request a Callback"
                type="primary"
                className="w-full h-[44px]"
                fullWidth={true}
                onClick={handleRequest}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-end justify-end min-h-full rounded-[16px]">
          <Image
            src="/assets/images/microphone.jpg"
            alt="call-me-back"
            width={500}
            height={655}
            className="h-[675px] w-auto object-cover rounded-r-[16px]"
          />
        </div>
      </div>
    </div>
  );
}
