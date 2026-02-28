import { Feature } from "./feature/Feature";
import Hero from "./hero/Hero";
import Sponsor from "./sponsor/Sponsor";

function Main() {
  return (
    <main className="flex-1">
      <Hero></Hero>
      <Sponsor></Sponsor>
      <Feature></Feature>
    </main>
  );
}

export default Main;
