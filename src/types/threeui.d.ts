declare module '@designcodeio/threeui' {
  import type { CSSProperties, FC } from 'react';

  export interface CharacterCarouselProps {
    variant?: 'filmstrip' | 'wave';
    speed?: number;
    scale?: number;
    opacity?: number;
    hue?: number;
    saturation?: number;
    brightness?: number;
    className?: string;
    style?: CSSProperties;
  }

  export const CharacterCarousel: FC<CharacterCarouselProps>;
  export const CharacterFilmstrip: FC<Omit<CharacterCarouselProps, 'variant'>>;
  export const CharacterWave: FC<Omit<CharacterCarouselProps, 'variant'>>;
}

declare module '@designcodeio/threeui/style.css' {
  const content: string;
  export default content;
}
