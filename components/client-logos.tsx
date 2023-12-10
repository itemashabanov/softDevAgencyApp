import Image from "next/image";
import React from "react";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/truestedby/apple.png"
          width={150}
          height={50}
          alt="apple"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/truestedby/spotify.png"
          width={150}
          height={50}
          alt="spotify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/truestedby/github.png"
          width={150}
          height={50}
          alt="github"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/truestedby/netflix.png"
          width={150}
          height={50}
          alt="netflix"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
