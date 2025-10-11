import Image from "next/image";

interface KnowledgeHubCardProps {
    description: string;
    image?: string;
    authorImage: string;
    author: string;
    date: string;
}

export default function KnowledgeHubCard({ description, image, authorImage, author, date }: KnowledgeHubCardProps) {
    return (

        <div
        className="rounded-[16px] pt-[16px] bg-[#F2F6FF] flex flex-col shadow-[0px_0px_1.48px_0.74px_#70707033] w-full"
      >
        <div
          className="flex flex-row items-start justify-start p-[16px] gap-[11px]"
        >
          <Image
            src={authorImage}
            alt="icon"
            className="w-[44px] h-[44px]"
            width={44}
            height={44}
          />
          <div className="w-full">
            <h6
              className="font-medium text-[16px] leading-[24px] text-[#191919]"
            >
              ✪ {author}
            </h6>
            <h6
              className="font-normal text-[14px] leading-[20px] text-[#707070]"
            >
              {date}
            </h6>
          </div>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5236 0.958984H1.47639C1.08483 0.958984 0.709301 1.11453 0.432425 1.39141C0.155548 1.66829 0 2.04381 0 2.43537V19.4826C0 19.8742 0.155548 20.2497 0.432425 20.5266C0.709301 20.8034 1.08483 20.959 1.47639 20.959H18.5236C18.9152 20.959 19.2907 20.8034 19.5676 20.5266C19.8445 20.2497 20 19.8742 20 19.4826V2.43537C20 2.04381 19.8445 1.66829 19.5676 1.39141C19.2907 1.11453 18.9152 0.958984 18.5236 0.958984ZM5.96111 17.9965H2.95417V8.4451H5.96111V17.9965ZM4.45556 7.12148C4.11447 7.11956 3.7816 7.01665 3.49895 6.82572C3.21629 6.6348 2.99653 6.36443 2.8674 6.04873C2.73826 5.73302 2.70554 5.38614 2.77336 5.05186C2.84118 4.71758 3.0065 4.41088 3.24846 4.17047C3.49042 3.93006 3.79818 3.76671 4.13289 3.70103C4.4676 3.63536 4.81426 3.67031 5.12913 3.80147C5.44399 3.93263 5.71295 4.15412 5.90205 4.43799C6.09116 4.72187 6.19194 5.05539 6.19167 5.39648C6.19488 5.62485 6.15209 5.85152 6.06584 6.06299C5.97959 6.27446 5.85165 6.4664 5.68964 6.62737C5.52763 6.78835 5.33487 6.91505 5.12285 6.99994C4.91083 7.08483 4.68389 7.12617 4.45556 7.12148ZM17.0444 18.0048H14.0389V12.7868C14.0389 11.2479 13.3847 10.7729 12.5403 10.7729C11.6486 10.7729 10.7736 11.4451 10.7736 12.8257V18.0048H7.76667V8.45204H10.6583V9.77565H10.6972C10.9875 9.18815 12.0042 8.18399 13.5556 8.18399C15.2333 8.18399 17.0458 9.17982 17.0458 12.0965L17.0444 18.0048Z"
              fill="#2B66BE"
            />
          </svg>
        </div>
        <div className="w-full p-[16px]">
          <p
            className="font-normal text-[16px] leading-[24px] text-[#262626]"
          >
            {description}
          </p>
        </div>
        {
            image && (
                <div className="w-full">
                    <Image
                        src={image}
                        alt="icon"
                        className="w-full h-auto rounded-b-[16px]"
                        width={400}
                        height={265}
                    />
                </div>
            )
        }
      </div>



    )
}