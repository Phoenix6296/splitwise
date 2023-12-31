import { Banner, Card, Navbar } from "@/components/Block/LandingPage";
import Image from "next/image";
import { TESTIMONIALS } from "@/utils/constant";
import { Layout } from "@/components/common";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Banner />
        <section className="flex flex-col gap-10 px-5">
          <h1 className="md:text-5xl text-4xl text-primary text-semibold text-center">
            Testimonials
          </h1>
          <div className="flex md:flex-row flex-col gap-5 items-center justify-evenly">
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
      </Layout>
    </>
  );
}
