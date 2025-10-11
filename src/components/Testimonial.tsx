"use client";

import Image from "next/image";

interface TestimonialProps {
    quote: string;
    stars: number;
    name: string;
    title: string;
}

export default function Testimonial({ quote, stars, name, title }: TestimonialProps) {
    return (
        <div
        className="testimonial-card h-full bg-color-4 border-color-4 p-4 md:p-8 relative mb-5 max-w-[380px] md:h-[455px] flex flex-col justify-between"
      ><div>

        <Image
          src="/assets/images/quotes.png"
          className="absolute"
          alt="quotes"
          width={94}
          height={94}
          style={{ top: '80px' }}
        />
        <div className="flex flex-row gap-2 mb-20">
          <Image  src="/assets/images/star-yellow.png" alt="star" width={20} height={20} />
          {stars > 1 && <Image src="/assets/images/star-yellow.png" alt="star" width={20} height={20} />}
          {stars > 2 && <Image src="/assets/images/star-yellow.png" alt="star" width={20} height={20} />}
          {stars > 3 && <Image src="/assets/images/star-yellow.png" alt="star" width={20} height={20} />}
          <Image src="/assets/images/star-yellow.png" alt="star" width={20} height={20} />
        </div>
        <h4 className="color-5 font-semibold text-2xl">Positive ROI</h4>
        <h5 className="color-5 font-normal text-lg tracking-tight my-2">
          {quote}
          data
        </h5>
        </div>
        <div className="flex flex-row gap-4 my-8">
          <div>
            <div
              className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full font-bold flex items-center justify-center text-2xl"
            >
              <span>{name.charAt(0)}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="color-5 text-md font-semibold">
              {name}
            </h5>
            <h5 className="color-1 text-md font-normal">
              {title}
            </h5>
          </div>
        </div>
      </div>

)
}