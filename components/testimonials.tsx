import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-cyan-600 text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Alex Broth">
        TH Agency excels in software development, delivering top-notch solutions
        with a proactive and innovative approach. Their skilled team and
        transparent communication make them a reliable partner for any project.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Mini Mouse">
        TH Agency is a top-tier software development firm, known for its
        innovative solutions and transparent communication. Their skilled team
        makes them a reliable partner for any project.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Milena Gray">
        TH Agency has consistently impressed with their software development
        prowess. Their team's expertise shines through in every project,
        delivering tailored solutions and maintaining open lines of
        communication. A reliable and innovative choice for software development
        needs.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Brendan Totton">
        TH Agency sets the bar high in the software development landscape. Their
        adept team consistently crafts innovative solutions, demonstrating a
        keen understanding of industry trends. With clear communication and a
        commitment to excellence, they stand out as a top choice for any
        development project.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
