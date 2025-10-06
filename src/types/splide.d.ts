declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface SplideProps {
    options?: any;
    extensions?: any;
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
  export const AutoScroll: any;
}
