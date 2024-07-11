import heroImage from "../../assets/images/hero-244.webp";
import { Button } from "../ui/button";
import Container from "./Container";

const Hero = () => {
  return (
    <Container>
      <section className="flex flex-col-reverse md:flex-row justify-between items-center mt-5 overflow-hidden">
        <div className="flex-1 space-y-5 py-8">
          <h1 className="text-5xl font-bold first-letter:text-theme">
            Experience the Precision of Mechanical Mastery
          </h1>
          <p className="opacity-70">
            Discover the ultimate typing experience with our premium mechanical
            keyboards. Engineered for professionals and enthusiasts, our
            keyboards combine unmatched durability, sleek design, and superior
            performance. Elevate your workflow and enjoy every keystroke with
            our top-tier selection.
          </p>
          <Button variant="secondary">Shop Now</Button>
        </div>
        <div className="flex-1 relative">
          <img src={heroImage} alt="Hero section image" className="max-h-fit md:hidden" />
          <img
            src={heroImage}
            alt="Hero section image"
            className="max-h-fit absolute -rotate-45 bottom-10 opacity-10 md:opacity-100"
          />

          <img
            src={heroImage}
            alt="Hero section image"
            className="max-h-fit hidden md:flex absolute -rotate-45 -right-6"
          />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
