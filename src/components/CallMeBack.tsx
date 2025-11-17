"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import ReactFlagsSelect from "react-flags-select";
import { useState, useEffect } from "react";
import { MODAL_EVENTS, closeCallMeBackModal } from "@/util/modalEvents";

export default function CallMeBack() {
  const [selected, setSelected] = useState("US");
  const [requestSent, setrequestSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
      setIsOpen(false);
      setrequestSent(false);
      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        message: "",
      });
    };

    window.addEventListener(MODAL_EVENTS.OPEN_CALL_ME_BACK, handleOpen);
    window.addEventListener(MODAL_EVENTS.CLOSE_CALL_ME_BACK, handleClose);

    return () => {
      window.removeEventListener(MODAL_EVENTS.OPEN_CALL_ME_BACK, handleOpen);
      window.removeEventListener(MODAL_EVENTS.CLOSE_CALL_ME_BACK, handleClose);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCallMeBackModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleRequest = async () => {
    // Basic validation
    if (!formData.fullName || !formData.email) {
      alert("Please fill in all required fields (Full Name and Email)");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/call-me-back", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          countryCode: selected,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setrequestSent(true);
      } else {
        alert("Failed to submit request. Please try again.");
        console.error("Submission error:", result.error);
      }
    } catch (error) {
      console.error("Error submitting callback request:", error);
      alert(
        "An error occurred while submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setrequestSent(false);
    closeCallMeBackModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-0 lg:p-4 bg-black/40 bg-opacity-20"
      onClick={closeCallMeBackModal}
    >
      <div
        className="relative w-auto max-w-[900px] max-h-[700px] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeCallMeBackModal}
          className="absolute top-[64px] cursor-pointer lg:top-4 right-4 z-10 p-0 w-10 h-10 lg:p-2 text-[#262626] rounded-full "
          aria-label="Close modal"
        >
          <Image
            src="/assets/images/close.png"
            alt="Close"
            width={12}
            height={12}
            className="w-[12px] h-[12px]"
          />
        </button>
        {requestSent ? (
          <div className="w-full max-w-[630px] flex flex-col items-start justify-start gap-[32px] p-4 lg:p-[40px] bg-[#FFFFFF] rounded-[16px] mt-[50px] lg:mt-0">
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
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[12px]">
                <h2 className="text-[#262626] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-extrabold">
                  Thanks! Message received
                </h2>
                <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-normal">
                  Someone from the team will get back to you shortly
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start gap-[12px]">
              <button
                className="gradient-text w-full py-[10px] px-[16px] rounded-[4px]"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <GradientButton
                text="Confirm"
                type="primary"
                className="w-full h-[42px]"
                textClassName="text-[16px] leading-[24px] font-normal"
                fullWidth={true}
                onClick={handleCancel}
              />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[900px] flex flex-col items-start justify-start gap-[20px] px-4 lg:pr-0 lg:pl-[40px] bg-[#FFFFFF] rounded-[16px] mt-[50px] lg:mt-0">
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[40px] h-full">
              <div className="flex flex-col items-start justify-start gap-[24px] min-w-[340px] lg:min-w-[400px]">
                <h2 className="pt-[24px] lg:pt-[40px] text-[#262626] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-extrabold">
                  Request a call back
                </h2>
                <div className="w-full flex flex-col items-start justify-start gap-[32px] pb-[40px] h-full">
                  <form onSubmit={handleRequest} className="w-full h-full flex flex-col items-start justify-start gap-[32px]">
                    <div className="w-full flex flex-col items-start justify-start gap-[10px]">
                      <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                        <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                          Full Name
                        </h4>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
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
                          required
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                        />
                      </div>
                      <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                        <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                          Email
                        </h4>
                        <input
                          type="email"
                          placeholder="Enter your full email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
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
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[8px] px-[10px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal border-none text-[#344054]"
                          />
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                        <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold">
                          Message
                        </h4>
                        <textarea
                          placeholder="Tell us your needs and we'll get the right team member to call you back"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                          rows={3}
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start gap-[10px]">
                      <GradientButton
                        text={
                          isSubmitting ? "Submitting..." : "Request a Callback"
                        }
                        type="primary"
                        className="w-full h-[44px]"
                        fullWidth={true}
                        disabled={isSubmitting}
                        buttonType="submit"
                      />
                    </div>
                  </form>
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
        )}
      </div>
    </div>
  );
}
