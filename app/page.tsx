// import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

// import Projects from "./components/homepage/projects";

import { Blog as BlogType } from "@/types/blogs"
async function getData(): Promise<BlogType[]> {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: BlogType[] = await res.json();

  // Filter articles with a cover image and randomize the order
  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Education />
      {/* <Projects /> */}
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
