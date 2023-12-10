import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Our team
          of expert engineers has created the best user experiences in some of
          the most popular apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the "spec-ops"</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="marc"
            socialId="@marc"
            name="Mark"
            link="https://github.com"
          />
          <Member
            id="marc"
            socialId="@kate"
            name="Kate"
            link="https://github.com"
          />
          <Member
            id="marc"
            socialId="@tom"
            name="Tom"
            link="https://github.com"
          />
          <Member
            id="marc"
            socialId="@mike"
            name="Mike"
            link="https://github.com"
          />
          <Member
            id="marc"
            socialId="@july"
            name="July"
            link="https://github.com"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
