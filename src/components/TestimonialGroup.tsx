'use client';

import { Splide as SplideComponent, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideCore } from '@splidejs/splide';
import { useEffect, useRef, useState } from 'react';
import Testimonial from "./Testimonial";
import Image from 'next/image';

export default function TestimonialGroup() {
  const [splideWidth, setSplideWidth] = useState(100);
  const splideInstanceRef = useRef<SplideCore | null>(null);

  const handleMounted = (splide: SplideCore) => {
    splideInstanceRef.current = splide;
  };

  const handleDestroy = () => {
    splideInstanceRef.current = null;
  };

  useEffect(() => {
    const updateWidth = () => {
      const testimonials = document.getElementById('testimonials');
      if (testimonials) {
        setSplideWidth(testimonials.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const moveLeft = () => {
    splideInstanceRef.current?.go('<');
  };

  const moveRight = () => {
    splideInstanceRef.current?.go('>');
  };


  const testimonials = [
    {
      title: "Setting the Benchmark",
      quote: "The campaign drove efficient reach and for a first-time campaign, it truly set a remarkable benchmark.",
      stars: 5,
      name: "Sarah Kanaan",
      designation: "Zenith Media",
      image: "./assets/images/person.png"
    },
    {

      title: "Staying Ahead with Audio",
      quote: "The podcast was an exciting and needed Next Audio step for Kiri to earn our audience’s audio attention and to stay ahead of our competitors in a modern way.",
      stars: 5,
      name: "Noha Gaber",
      designation: "Senior Brand Manager - Kiri",
      image: "./assets/images/person.png"
    },
    {
      title: "Proven Impact",
      quote: "The campaign was a huge success, delivering a strong impact on awareness and consideration among the target market.",
      stars: 5,
      name: "Morgane Dessesard",
      designation: "Associate Media Director, UM",
      image: "./assets/images/person.png"
    },
    {
      title: "High Reach. High Recall.",
      quote: "We knew podcasts would be an important channel...it has wide reach, and incredible awareness and recall capabilities.",
      stars: 5,
      name: "Areej Yacoub",
      designation: "Haleon, Marketing Manager",
      image: "./assets/images/person.png"
    },
    {
      title: "Cutting Through the Noise",
      quote: "There is a lot of noise to cut through. With digital audio, we can engage with our audience one-on-one, throughout their daily routine: whenever they are listening.",
      stars: 5,
      name: "Alina Sukhar",
      designation: "Publicis",
      image: "./assets/images/person.png"
    },
    {
      title: "Local Voices",
      quote: "Working with local podcasters, we were able to educate listeners in a way that felt both relevant and authentic.",
      stars: 5,
      name: "Tarik Chebib",
      designation: "Capital.com",
      image: "./assets/images/person.png"
    },
    {
      title:"Game Changer",
      quote: "Working with Next Audio for our podcast advertising campaign in North America and the Asia-Pacific region has been a game-changer.",
      stars: 5,
      name: "Aurore Nguyen",
      designation: "Director, Transmission",
      image: "./assets/images/person.png"
    },
    {

      title: "Ticket Sales",
      quote: "[Objective to] boost ticket sales by drawing attention to all the events happening around the race. We not only achieved our goal but exceeded it.",
      stars: 5,
      name: "Formula 1 Abu Dhabi Grand",
      designation: "PrixTransmission",
      image: "./assets/images/person.png"
    },
    {

      title: "Performance Campaign",
      quote: "Our digital audio campaign for the Nissan Patrol not only drove remarkable ad recall but also a surge in website visits.",
      stars: 5,
      name: "OMD",
      designation: "",
      image: "./assets/images/person.png"
    },
    {

      title: "Awareness & Consideration",
      quote: "We are more than satisfied with the result that we were able to achieve through the audio campaign with Next. Not only did our brand awareness and consideration increase, we also saw a real impact on conversions.",
      stars: 5,
      name: "Total Energies",
      designation: "",
      image: "./assets/images/person.png"
    }
  ];

  const splideOptions = {
    type: 'slide' as const,
    drag: 'free' as const,
    gap: 0,
    width: splideWidth < 700 ? splideWidth : splideWidth,
    autoWidth: true,
    pagination: false,
    arrows: false,
    perPage: 1,
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
      1280: {
        perPage: 3,
      }
    }
  };

  return (
    <section
    className="w-full bg-[#FFFFFF] flex flex-col items-end justify-end md:py-[80px] px-4 md:px-[96px] gap-[64px]"
    data-aos="fade-up"
  >
    <div
      className="max-w-[1440px] flex flex-row w-full justify-between items-end gap-[24px]"
    >
      <div
        className="flex flex-col items-start justify-start gap-4 md:gap-[20px]"
      >
        <div
          className="flex flex-col items-start justify-start gap-3 md:gap-[16px]"
        >
          <span
            className="text-[#F11F68] border border-[#F11F68] rounded-full px-3 md:px-[16px] py-1.5 md:py-[3px] text-sm md:text-[16px] leading-tight md:leading-[24px] font-medium"
            >Testimonials</span
          >
          <h1
            className="font-semibold text-2xl md:text-3xl lg:text-[42px] leading-tight md:leading-[50px] gradient-text"
          >
            What Our Clients Say
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end gap-4 md:gap-[20px]">
        <div
          className="flex flex-row items-center justify-center gap-4 md:gap-[24px]"
        >
          <Image
            src="/assets/images/left.png"
            alt="left-arrow"
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
            id="prevTestimonial"
            width={20}
            height={20}
            onClick={moveLeft}
          />
          <Image
            src="/assets/images/right.png"
            alt="right-arrow"
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
            id="nextTestimonial"
            width={20}
            height={20}
            onClick={moveRight}
          />
        </div>
      </div>
    </div>
    <div
      className="max-w-[1440px] w-full rounded-l-[16px]"
      id="testimonials"
      data-aos="fade-up"
    >
      <SplideComponent
        options={splideOptions}
        onMounted={handleMounted}
        onDestroy={handleDestroy}
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <Testimonial
              quote={testimonial.quote}
              stars={testimonial.stars}
              name={testimonial.name}
              title={testimonial.title}
              designation={testimonial.designation}
            />
          </SplideSlide>
        ))}
      </SplideComponent>
    </div>
    </section> 
  );
}