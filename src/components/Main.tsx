import { Feature } from "./feature/Feature";
import Hero from "./hero/Hero";
import Sponsor from "./sponsor/Sponsor";
import { Testimonial } from "./testimonial/Testimonial";

function Main() {
  return (
    <main className="flex-1">
      <Hero></Hero>
      <Sponsor></Sponsor>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </main>
  );
}

export default Main;
