declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface SplideOptions {
    type?: 'slide' | 'loop' | 'fade';
    drag?: 'free' | boolean;
    gap?: number | string;
    width?: number | string;
    autoWidth?: boolean;
    autoScroll?: boolean | {
      speed?: number;
      pauseOnHover?: boolean;
    };
    pagination?: boolean;
    arrows?: boolean;
    perPage?: number;
    breakpoints?: Record<number, Partial<SplideOptions>>;
    [key: string]: unknown;
  }
  
  export interface SplideExtensions {
    AutoScroll?: unknown;
    [key: string]: unknown;
  }
  
  export interface SplideProps {
    options?: SplideOptions;
    extensions?: SplideExtensions;
    'aria-labelledby'?: string;
    children?: ReactNode;
  }
  
  export interface SplideSlideProps {
    children?: ReactNode;
  }
  
  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

declare module '@splidejs/splide-extension-auto-scroll' {
  export const AutoScroll: unknown;
}
