import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroImages } from "./HeroImages";

function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel plugins={[plugin.current]} className="max-w-fit">
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image} alt="Hero image" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default HeroCarousel;
