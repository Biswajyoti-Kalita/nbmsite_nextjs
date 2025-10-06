"use client";

interface TestimonialProps {
    quote: string;
    stars: number;
    name: string;
    title: string;
    image: string;
}

export default function Testimonial({ quote, stars, name, title, image }: TestimonialProps) {
    return (
        <div
        className="testimonial-card h-full bg-color-4 border-color-4 p-4 md:p-8 relative mb-5 max-w-[380px]"
      >
        <img
          src="./assets/images/quotes.png"
          className="absolute"
          style={{ top: '80px' }}
        />
        <div className="flex flex-row gap-2 mb-20">
          <img src="./assets/images/star-yellow.png" />
          {stars > 1 && <img src="./assets/images/star-yellow.png" />}
          {stars > 2 && <img src="./assets/images/star-yellow.png" />}
          {stars > 3 && <img src="./assets/images/star-yellow.png" />}
          <img src="./assets/images/star-yellow.png" />
        </div>
        <h4 className="color-5 font-semibold text-2xl">Positive ROI</h4>
        <h5 className="color-5 font-normal text-lg tracking-tight my-2">
          {quote}
          data
        </h5>
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