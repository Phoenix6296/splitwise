import { Banner, Card, Navbar } from "@/components/Block/LandingPage";
import Image from "next/image";
import { TESTIMONIALS } from "@/utils/constant";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/Assets/LandingPage/background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Banner />
      <section className="flex flex-col gap-10">
        <h1 className="text-5xl text-primary text-semibold text-center">
          Testimonials
        </h1>
        <div className="flex items-center justify-evenly">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              title={testimonial.title}
              author={testimonial.author}
            />
          ))}
        </div>
      </section>
      <Image
        src="/Assets/LandingPage/footer.svg"
        alt="footer"
        width="800"
        height="300"
        className="w-full"
      />
    </div>
  );
}
