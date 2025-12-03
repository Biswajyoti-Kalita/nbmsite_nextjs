"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import ReactFlagsSelect from "react-flags-select";
import { useRef, useState, useEffect } from "react";
import { MODAL_EVENTS, closeShareBriefModal } from "@/util/modalEvents";
import DatePicker from "react-multi-date-picker";

export default function ShareBrief() {
  const [selected, setSelected] = useState("US");
  const [requestSent, setrequestSent] = useState(false);
  const [formType, setformType] = useState("complete-a-form");
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setformData] = useState({
    formType: "complete-a-form",
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    campaignDetails: {
      campaignAim: [] as string[],
      fullName: "",
      geoTargeting: "",
      targetAudience: "",
      languageTargeting: "",
      campaignDates: "",
      budget: "<$2K",
      preferredFormat: ["Dynamic"],
      brief: "",
      uploadedFile: null as File | null,
    }
  });

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRefStep1 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
      setIsOpen(false);
      setrequestSent(false);
      setStep(1);
      setformData({
        formType: "complete-a-form",
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        campaignDetails: {
          campaignAim: [] as string[],
          fullName: "",
          geoTargeting: "",
          targetAudience: "",
          languageTargeting: "",
          campaignDates: "",
          budget: "<$2K",
          preferredFormat: ["Dynamic"],
          brief: "",
          uploadedFile: null,
        }
      });
      setIsDragging(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    window.addEventListener(MODAL_EVENTS.OPEN_SHARE_BRIEF, handleOpen);
    window.addEventListener(MODAL_EVENTS.CLOSE_SHARE_BRIEF, handleClose);

    return () => {
      window.removeEventListener(MODAL_EVENTS.OPEN_SHARE_BRIEF, handleOpen);
      window.removeEventListener(MODAL_EVENTS.CLOSE_SHARE_BRIEF, handleClose);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  useEffect(() => {
    console.log(formType);
    setformData({
      ...formData,
      formType: formType
    });
  }, [formType]);


  const moveNextStep = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (step === 1 && formRefStep1.current?.checkValidity()) {
      setStep(2);
    } else if (step === 1 && formRefStep1.current) {
      // Trigger browser validation UI
      formRefStep1.current.reportValidity();
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequest = async () => {
    setIsSubmitting(true);
    
    try {
      const submitFormData = new FormData();
      
      // Step 1 data
      submitFormData.append('formType', formData.formType);
      submitFormData.append('fullName', formData.fullName);
      submitFormData.append('businessName', formData.businessName);
      submitFormData.append('email', formData.email);
      submitFormData.append('phone', formData.phone);
      
      // Step 2 campaign details
      if (formData.formType === 'complete-a-form') {
        submitFormData.append('campaignAim', JSON.stringify(formData.campaignDetails.campaignAim));
        submitFormData.append('campaignFullName', formData.campaignDetails.fullName);
        submitFormData.append('geoTargeting', formData.campaignDetails.geoTargeting);
        submitFormData.append('targetAudience', formData.campaignDetails.targetAudience);
        submitFormData.append('languageTargeting', formData.campaignDetails.languageTargeting);
        submitFormData.append('campaignDates', formData.campaignDetails.campaignDates);
        submitFormData.append('budget', formData.campaignDetails.budget);
        submitFormData.append('preferredFormat', JSON.stringify(formData.campaignDetails.preferredFormat));
      } else if (formData.formType === 'write-a-brief') {
        submitFormData.append('brief', formData.campaignDetails.brief);
      } else if (formData.formType === 'upload-file' && formData.campaignDetails.uploadedFile) {
        submitFormData.append('file', formData.campaignDetails.uploadedFile);
      }
      
      const response = await fetch('/api/submit-brief', {
        method: 'POST',
        body: submitFormData,
      });
      
      const result = await response.json();
      
      if (result.success) {
        setrequestSent(true);
      } else {
        alert('Failed to submit brief. Please try again.');
        console.error('Submission error:', result.error);
      }
    } catch (error) {
      console.error('Error submitting brief:', error);
      alert('An error occurred while submitting your brief. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setrequestSent(false);
    closeShareBriefModal();
  };

  const validateFile = (file: File): boolean => {
    const allowedExtensions = ['.xls', '.xlsx', '.pdf', '.docx', '.doc'];
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedExtensions.includes(fileExtension)) {
      alert('Invalid file type. Please upload xls, pdf, or docx files only.');
      return false;
    }

    if (file.size > maxSize) {
      alert('File size exceeds 2MB limit. Please upload a smaller file.');
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setformData({ 
        ...formData, 
        campaignDetails: { 
          ...formData.campaignDetails, 
          uploadedFile: file 
        } 
      });
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setformData({ 
      ...formData, 
      campaignDetails: { 
        ...formData.campaignDetails, 
        uploadedFile: null 
      } 
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-end lg:items-center justify-center p-0 lg:p-4 bg-black/40 bg-opacity-20"
      onClick={closeShareBriefModal}
    >
      <div 
        className="relative w-full lg:w-auto max-w-[900px] max-h-auto flex flex-row items-end lg:items-center justify-center overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
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
                  Your brief has been submitted
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
          <div className="w-full relative min-w-full lg:min-w-[650px] overflow-y-auto max-h-[90vh] flex flex-col items-start justify-start gap-[20px] px-[16px] py-[20px] lg:p-[40px] bg-[#FFFEFF] rounded-[16px]">
            <Image
              src="/assets/images/close.png"
              alt="Close"
              width={12}
              height={12}
              className="w-[12px] h-[12px] absolute top-[40px] right-[40px] cursor-pointer"
              onClick={closeShareBriefModal}
            />
      <div className="w-full flex flex-col items-start justify-start gap-[24px]">
        <div className="w-full flex flex-col items-start justify-start gap-[16px]">
          <span className="border border-[#344054] px-[8px] py-[4px] rounded-[24px] h-[32px] text-[#344054] text-[14px] leading-[22px] font-normal">
            {" "}
            {step}/2 Steps
          </span>
          <h2 className="text-[#262626] font-extrabold text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px]">
            {step === 1 ? (
              "Enter your contact details"
            ) : (
              <span
                className="flex flex-row items-center justify-start gap-[6px]"
                onClick={() => setStep(1)}
              >
                {" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8H1M1 8L8 15M1 8L8 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Share your campaign details
              </span>
            )}
          </h2>
        </div>

        {step === 2 && (
          <div className="w-full flex flex-row items-start justify-center h-[32px] bg-[#FFFFFF] rounded-[8px]">
            <span
              className={`${
                formType === "complete-a-form"
                  ? "bg-#FFF9FE border border-[#F11F68] rounded-[4px] text-[#262626]"
                  : "text-[#344054]"
              } font-medium text-[14px] leading-[22px] py-[4px] px-[16px] text-nowrap w-auto lg:w-full text-center `}
              onClick={() => setformType("complete-a-form")}
            >
              Complete a Form
            </span>

            <span
              className={`${
                formType === "write-a-brief"
                  ? "bg-#FFF9FE border border-[#F11F68] rounded-[4px] text-[#262626]"
                  : "text-[#344054]"
              } font-medium text-[14px] leading-[22px] py-[4px] px-[16px] text-nowrap w-auto lg:w-full text-center `}
              onClick={() => setformType("write-a-brief")}
            >
              Write a Brief
            </span>

            <span
              className={`${
                formType === "upload-file"
                  ? "bg-#FFF9FE border border-[#F11F68] rounded-[4px] text-[#262626]"
                  : "text-[#344054]"
              } font-medium text-[14px] leading-[22px] py-[4px] px-[16px] text-nowrap w-auto lg:w-full text-center `}
              onClick={() => setformType("upload-file")}
            >
              Upload a File
            </span>
          </div>
        )}
        {step === 2 && (
          <div className="w-full flex flex-col items-start justify-start gap-[32px]">
            {formType === "complete-a-form" && (
              <div className="w-full flex flex-col items-start justify-start gap-[16px] max-h-[50vh] lg:max-h-[50vh] overflow-y-auto">
                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold tracking-[-0.02em]">
                    Campaign aim
                  </h4>
                  <div className="w-full flex  max-w-full overflow-x-auto flex-row items-start justify-start gap-[6px]">
                    {
                      ["Awareness", "Consideration", "Performance", "Engagement", "Launch"].map((aim:string) => (
                        <span key={aim} className={` border ${ formData.campaignDetails.campaignAim.indexOf(aim) !== -1 ?  "border-[#F11F68]":  "border-[#D0D5DD]" }  py-[4px] px-[16px] rounded-[4px] h-[32px] text-[#262626] text-[14px] min-w-[120px] text-center`} onClick={() => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, campaignAim: formData.campaignDetails.campaignAim.indexOf(aim) !== -1 ? formData.campaignDetails.campaignAim.filter((a: string) => a !== aim) : [...formData.campaignDetails.campaignAim, aim] } })}>
                          {aim}
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px] hidden">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Full Name
                  </h4>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.campaignDetails.fullName}
                    onChange={(e) => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, fullName: e.target.value } })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Geo Targeting
                  </h4>
                  <input
                    type="text"
                    placeholder="Where do you want the campaign to run?"
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.campaignDetails.geoTargeting}
                    onChange={(e) => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, geoTargeting: e.target.value } })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Target Audience
                  </h4>
                  <input
                    type="text"
                    placeholder="Tell us the age, gender, interests of your target audience"
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.campaignDetails.targetAudience}
                    onChange={(e) => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, targetAudience: e.target.value } })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Language Targeting
                  </h4>
                  <input
                    type="text"
                    placeholder="Select language"
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.campaignDetails.languageTargeting}
                    onChange={(e) => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, languageTargeting: e.target.value } })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Campaign Dates
                  </h4>
                  <DatePicker
                    range
                    value={formData.campaignDetails.campaignDates.split(",")}
                    onChange={(dates) => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, campaignDates: dates.toString() } })}
                    inputClass="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    placeholder="Select date range"
                    className="w-full"
                    format="MM/DD/YYYY"
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Select budget
                  </h4>
                  <div className="w-full flex flex-row items-start justify-start gap-[6px] max-w-full overflow-x-auto">
                    {["<$2K", "$2K-$5K", "$5K-$10K", ">$10K"].map((budget) => (
                      <span
                        key={budget}
                        className={`border ${formData.campaignDetails.budget == budget ?  "border-[#F11F68]" : "border-[#D0D5DD]" }   py-[4px] px-[16px] rounded-[4px] h-[32px] text-[#262626] text-[14px] min-w-[100px] text-center font-medium`}
                        onClick={() => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, budget: budget } })}
                      >
                        {budget}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Preferred format
                  </h4>
                  <div className="w-full flex flex-row items-start justify-start gap-[6px] max-w-full overflow-x-auto">
                    {["Dynamic", "Host read", "Sponsorship", "DCO"].map(
                      (format) => (
                        <span
                          key={format}
                          className={`border ${formData.campaignDetails.preferredFormat.indexOf(format) !== -1 ?  "border-[#F11F68]" : "border-[#D0D5DD]" }   py-[4px] px-[16px] rounded-[4px] h-[32px] text-[#262626] text-[14px] min-w-[100px] text-center font-medium`}
                          onClick={() => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, preferredFormat: formData.campaignDetails.preferredFormat.indexOf(format) !== -1 ? formData.campaignDetails.preferredFormat.filter((f: string) => f !== format) : [...formData.campaignDetails.preferredFormat, format] } })}
                        >
                          {format}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {formType === "write-a-brief" && (
              <div className="w-full flex flex-col items-start justify-start gap-[16px] max-h-[50vh] lg:max-h-[50vh] overflow-y-auto">
                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Brief
                  </h4>
                  <textarea
                    placeholder="Tell us your needs and we’ll get the right team member to call you back"
                    className="w-full rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    rows={5}
                    value={formData.campaignDetails.brief}
                    onChange={(e) => setformData({ ...formData, campaignDetails: { ...formData.campaignDetails, brief: e.target.value } })}
                  >
                    {formData.campaignDetails.brief}
                  </textarea>
                </div>
              </div>
            )}

            {formType === "upload-file" && (
              <div className="w-full flex flex-col items-start justify-start gap-[16px] max-h-[50vh] lg:max-h-[50vh] overflow-y-auto">
                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Upload a File
                  </h4>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xls,.xlsx,.pdf,.doc,.docx"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                  {formData.campaignDetails.uploadedFile ? (
                    <div className="w-full flex flex-col items-start justify-start gap-[8px]">
                      <div className="w-full flex flex-row items-center justify-between gap-[12px] py-[12px] px-[16px] border border-[#D0D5DD] rounded-[8px] bg-[#F9FAFB]">
                        <div className="flex flex-row items-center justify-start gap-[12px] flex-1 min-w-0">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0"
                          >
                            <path
                              d="M10 2.5V10M10 10L7.5 7.5M10 10L12.5 7.5M5.83333 17.5H14.1667C15.5474 17.5 16.6667 16.3807 16.6667 15V8.33333C16.6667 7.41286 16.2976 6.52946 15.6475 5.87935L12.4542 2.68602C11.8041 2.03591 10.9207 1.66667 10.0002 1.66667H5.83333C4.45262 1.66667 3.33333 2.78596 3.33333 4.16667V15C3.33333 16.3807 4.45262 17.5 5.83333 17.5Z"
                              stroke="#344054"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#344054] text-[14px] leading-[20px] font-normal truncate">
                            {formData.campaignDetails.uploadedFile.name}
                          </span>
                          <span className="text-[#98A2B3] text-[12px] leading-[18px] font-normal flex-shrink-0">
                            ({(formData.campaignDetails.uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          onClick={handleRemoveFile}
                          className="flex-shrink-0 text-[#F11F68] text-[14px] leading-[20px] font-medium hover:opacity-80"
                        >
                          Remove
                        </button>
                      </div>
                      <button
                        onClick={handleUploadClick}
                        className="text-[#F11F68] text-[14px] leading-[20px] font-bold hover:opacity-80"
                      >
                        Upload different file
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={handleUploadClick}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`w-full flex flex-col items-center justify-center gap-[4px] py-[16px] px-[24px] border-2 border-dashed rounded-[8px] h-[124px] cursor-pointer transition-colors ${
                        isDragging
                          ? 'border-[#F11F68] bg-[#FFF9FE]'
                          : 'border-[#D0D5DD] hover:border-[#F11F68] hover:bg-[#FFF9FE]'
                      }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-[8px]">
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.83301 11.6666L9.16634 8.33325M9.16634 8.33325L12.4997 11.6666M9.16634 8.33325V15.8333M15.833 12.2856C16.8509 11.445 17.4997 10.1732 17.4997 8.74992C17.4997 6.21861 15.4476 4.16659 12.9163 4.16659C12.7342 4.16659 12.5639 4.07158 12.4714 3.9147C11.3847 2.07062 9.37837 0.833252 7.08301 0.833252C3.63123 0.833252 0.833008 3.63147 0.833008 7.08325C0.833008 8.80501 1.52921 10.3642 2.65547 11.4945"
                            stroke={isDragging ? "#F11F68" : "#344054"}
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex flex-col items-center justify-center gap-[4px]">
                          <h5>
                            <span className="text-[#F11F68] text-[14px] leading-[20px] font-bold">Click to upload</span>
                            <span className="text-[#344054] text-[14px] leading-[20px] font-normal"> or drag and drop</span>
                          </h5>
                          <h5 className="text-[#344054] text-[14px] leading-[20px] font-normal">
                            xls, pdf, or docx (max. 2mb)
                          </h5>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="w-full flex flex-row items-start justify-start">
              <GradientButton
                text={isSubmitting ? "Submitting..." : "Submit a Brief"}
                type="primary"
                className="w-full"
                textClassName="text-[16px] leading-[24px] font-bold"
                fullWidth={true}
                onClick={handleRequest}
                disabled={isSubmitting}
                rightIcon={
                  isSubmitting ? (
                    <svg
                      className="animate-spin"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="#FFFEFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="31.416"
                        strokeDashoffset="31.416"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          dur="2s"
                          values="0 31.416;15.708 15.708;0 31.416;0 31.416"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          dur="2s"
                          values="0;-15.708;-31.416;-31.416"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="#FFFEFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )
                }
              />
            </div>
          </div>
        )}
        {step === 1 && (
          <form 
            ref={formRefStep1 as React.RefObject<HTMLFormElement>} 
            className="w-full flex flex-col items-start justify-start gap-[32px]"
            onSubmit={moveNextStep}
          >
            <div className="w-full flex flex-col items-start justify-start gap-[32px]">
              <div className="w-full flex flex-col items-start justify-start gap-[16px]">
                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold tracking-[-0.02em]">
                    Full Name <sup className="text-[#F11F68]">*</sup>
                  </h4>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.fullName}
                    onChange={(e) => setformData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold tracking-[-0.02em]">
                    Business Name <sup className="text-[#F11F68]">*</sup>
                  </h4>
                  <input
                    type="text"
                    placeholder="Enter business or show name"
                    required
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.businessName}
                    onChange={(e) => setformData({ ...formData, businessName: e.target.value })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold tracking-[-0.02em]">
                    Business Email <sup className="text-[#F11F68]">*</sup>
                  </h4>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[6px] px-[12px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal text-[#344054]"
                    value={formData.email}
                    onChange={(e) => setformData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-[6px]">
                  <h4 className="text-[#344054] text-[16px] leading-[32px] font-bold tracking-[-0.02em]">
                    Phone number
                  </h4>
                  <div className="w-full flex flex-row items-start justify-start gap-[12px] rounded-[4px] border-[#D0D5DD] border-1">
                    <div className="py-[4px] pl-[12px] h-[36px] text-[#344054]">
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        showSelectedLabel={true}
                        showSecondarySelectedLabel={true}
                        showOptionLabel={true}
                        className="flag-select"
                        selectButtonClassName="!bg-transparent !border-0 !p-0 hover:opacity-80"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full h-[36px] rounded-[4px] border-[#D0D5DD] border-[1px] py-[8px] px-[10px] font-normal placeholder-[#98A2B3] text-[16px] leading-[24px] font-normal border-none text-[#344054]"
                      value={formData.phone}
                      onChange={(e) => setformData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-start">
                <GradientButton
                  text="Continue"
                  type="primary"
                  className="w-full"
                  textClassName="text-[16px] leading-[24px] font-bold"
                  fullWidth={true}
                  buttonType="submit"
                  rightIcon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="#FFFEFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          </form>
        )}
      </div>
          </div>
        )}
      </div>
    </div>
  );
}
