'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BrandsScroller() {
  const [splideWidth, setSplideWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const brands = document.getElementById('brands');
      if (brands) {
        setSplideWidth(brands.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const brands1 = [
    { src: '/assets/images/brands/loreal.png', alt: 'Loreal' },
    { src: '/assets/images/brands/gmc.png', alt: 'GMC' },
    { src: '/assets/images/brands/qatar.png', alt: 'Qatar' },
    { src: '/assets/images/brands/dentsu.png', alt: 'Dentsu' },
    { src: '/assets/images/brands/png.png', alt: 'PNG' },
    { src: '/assets/images/brands/visa_logo.jpg', alt: 'Visa' },
    { src: '/assets/images/brands/capital.svg', alt: 'Capital' },
    { src: '/assets/images/brands/citibank.png', alt: 'Citibank' },
    { src: '/assets/images/brands/omd.png', alt: 'OMD' },
    { src: '/assets/images/brands/mastercard.png', alt: 'Mastercard' },
    { src: '/assets/images/brands/mindashare.png', alt: 'Mindshare' },
    { src: '/assets/images/brands/wordpress.png', alt: 'WordPress' },
  ];

  const brands2 = [
    { src: '/assets/images/brands/tunein.png', alt: 'TuneIn' },
    { src: '/assets/images/brands/spotify.png', alt: 'Spotify' },
    { src: '/assets/images/brands/bbc.png', alt: 'BBC' },
    { src: '/assets/images/brands/apple.png', alt: 'Apple' },
    { src: '/assets/images/brands/iheart.png', alt: 'iHeart' },
    { src: '/assets/images/brands/yt.png', alt: 'YouTube' },
    { src: '/assets/images/brands/sirius_.png', alt: 'Sirius' },
    { src: '/assets/images/brands/newyork.png', alt: 'New York' },
    { src: '/assets/images/brands/castbox.png', alt: 'Castbox' },
    { src: '/assets/images/brands/ft.png', alt: 'Financial Times' },
    { src: '/assets/images/brands/skynews.png', alt: 'Sky News' },
    { src: '/assets/images/brands/emirates.png', alt: 'Emirates' },
  ];

  const splideOptions1 = {
    type: 'loop' as const,
    drag: 'free' as const,
    gap: 30,
    width: splideWidth < 700 ? 100 : splideWidth - 300,
    autoWidth: true,
    autoScroll: {
      speed: 0.8,
      pauseOnHover: false,
    },
  };

  const splideOptions2 = {
    type: 'loop' as const,
    drag: 'free' as const,
    gap: 30,
    width: splideWidth < 700 ? 100 : splideWidth - 300,
    autoWidth: true,
    autoScroll: {
      speed: -0.8,
      pauseOnHover: false,
    },
  };

  return (
    <section
      id="brands"
      className=" overflow-hidden w-full ml-[16px] rounded-xl p-4 md:p-8 mt-8 md:mt-12 md:flex flex-col items-center justify-center"
    >
      <div
        className="flex flex-row gap-4 md:gap-8 items-start md:items-center mb-6 md:mb-8 max-w-[1280px]"
        data-aos="fade-up"
      >
        <div className="min-w-[150px] md:min-w-[200px]">
          <h6 className="color-1 font-semibold text-[14px] leading-[22px] md:text-base md:text-lg">
            Trusted By
          </h6>
          <h5 className="color-3 font-semibold text-[18px] leading-[26px] md:text-xl md:text-2xl">
            400+ brands
          </h5>
        </div>
        <div className="relative lg:max-w-[50%] md:max-w-full">                                                                    
          <div className="absolute w-[50px] md:w-[150px] h-[100px] md:h-[150px] top-0 -left-5 z-5 rounded-lg p-4 [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_20.9%,#ffffff_99.44%)]"></div>
          <div className="overflow-hidden" style={{maxWidth: '90%'}}>
          <Splide
            options={splideOptions1}
            extensions={{ AutoScroll }}
            aria-labelledby="brands-carousel"
          >
            {brands1.map((brand, index) => (
              <SplideSlide key={index}>
                <div className="flex items-center justify-center min-w-48 max-w-48 h-20 rounded-lg bg-white p-2">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    className={`max-h-full max-w-full object-contain ${
                      brand.src.includes('png.png') ? 'max-h-[50px]' : ''
                    }`}
                    style={brand.src.includes('png.png') ? { maxHeight: '50px' } : {}}
                    width={200}
                    height={80}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
          </div>
          <div className="absolute w-[50px] md:w-[150px] h-[100px] md:h-[150px] top-0 -right-5 z-5 rounded-lg p-4 [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_20.9%,#ffffff_99.44%)]"></div>
        </div>
      </div>

      <div
        className="flex flex-row gap-4 md:gap-8 items-start md:items-center mb-6 md:mb-8 max-w-[1280px]"
        data-aos="fade-up"
      >
        <div className="min-w-[150px] md:min-w-[200px]">
          <h6 className="color-1 font-semibold text-[14px] leading-[22px] md:text-base md:text-lg">
            Reaching
          </h6>
          <h5 className="color-3 font-semibold text-[18px] leading-[26px] md:text-xl md:text-2xl">
            850M listeners
          </h5>
        </div>
        <div className="relative max-w-[50%] md:max-w-full">
          <div className="absolute w-[50px] md:w-[100px] h-[100px] md:h-[150px] top-0 -left-5 z-5 rounded-lg p-4 [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_20.9%,#ffffff_99.44%)]"></div>
          <div className="overflow-hidden" style={{maxWidth: '90%'}}>
          <Splide
            options={splideOptions2}
            extensions={{ AutoScroll }}
          >
            {brands2.map((brand, index) => (
              <SplideSlide key={index}>
                <div className="flex items-center justify-center max-w-[135px] max-h-[60px] md:min-w-48 md:max-w-48 h-20 rounded-lg bg-white p-2">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-full max-w-full object-contain"
                    width={200}
                    height={80}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
          </div>
          <div className="absolute w-[50px] md:w-[150px] h-[100px] md:h-[100px] top-0 -right-5 z-5 rounded-lg p-4 [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_20.9%,#ffffff_99.44%)]"></div>
        </div>
      </div>
    </section>
  );
}