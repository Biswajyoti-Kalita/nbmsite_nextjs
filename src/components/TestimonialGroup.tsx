'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import Testimonial from "./Testimonial";

export default function TestimonialGroup() {
  const [splideWidth, setSplideWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const home = document.getElementById('home');
      if (home) {
        setSplideWidth(home.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const testimonials = [
    {
      quote: "After running ads for about 4 weeks, there's been positive ROI data",
      stars: 4,
      name: "Damian Brennan",
      title: "Group Marketing Director",
      image: "./assets/images/person.png"
    },
    {
      quote: "The campaign exceeded our expectations with remarkable engagement rates",
      stars: 5,
      name: "Sarah Johnson",
      title: "Marketing Manager",
      image: "./assets/images/person.png"
    },
    {
      quote: "We saw a significant increase in brand awareness within just 2 weeks",
      stars: 4,
      name: "Michael Chen",
      title: "Brand Director",
      image: "./assets/images/person.png"
    },
    {
      quote: "The ROI was impressive, and the targeting was spot-on for our audience",
      stars: 5,
      name: "Emily Rodriguez",
      title: "Digital Marketing Lead",
      image: "./assets/images/person.png"
    }
  ];

  const splideOptions = {
    type: 'slide' as const,
    drag: 'free' as const,
    gap: 20,
    width: splideWidth < 700 ? splideWidth : splideWidth - 200,
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
    <div
      className="max-w-[1280px] w-full rounded-l-[16px]"
      id="testimonials"
      data-aos="fade-up"
    >
      <Splide options={splideOptions}>
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <Testimonial 
              quote={testimonial.quote}
              stars={testimonial.stars}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}