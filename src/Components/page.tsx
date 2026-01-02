import { LuArrowRight, LuGithub, LuLinkedin } from "react-icons/lu";
import { Nav } from "./components/nav";
import { ProjectCard } from "./components/project-card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import BG from "./Asset/BGh.png";
import { FaWhatsapp } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";
import OG from "./Asset/Profile.png";

import Realest from "./Asset/RealestP.png";
import Aurea from "./Asset/Aurea.png";
import Ovulan from "./Asset/Ovulan.png";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        id="home"
        className="min-h-screen w-full relative flex flex-col items-center justify-center text-center px-4 sm:pt-10"
      >
        <motion.div className="absolute w-full h-full z-0">
          <div className=" h-full w-full flex justify-center items-center">
            <motion.img
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              src={BG}
              alt="Background Img"
              className=" sm:h-130 w-[90%] sm:w-fit rounded-full "
            />
          </div>
        </motion.div>
        <div className="z-2">
          <Badge
            variant="outline"
            className="mb-4 border-white text-white px-4 py-1 rounded-full uppercase tracking-tighter text-xs"
          >
            Available for hire
          </Badge>
          <h1 className=" text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-purple-700/40 bg-clip-text text-transparent">
            FRONT-END
            <br />
            DEVELOPER
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white mb-8 text-balance">
            I craft immersive digital experiences with modern web and mobile
            technologies. Specializing in high-performance frontends and native
            mobile apps.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="glass px-8 py-3 rounded-full font-bold text-white hover:text-primary transition-all flex items-center gap-2"
            >
              View Work <LuArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 min-h-150 bg-primary">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="glass aspect-square rounded-3xl overflow-hidden relative border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent overflow-hidden z-3">
              <img src={OG} alt="" />
            </div>

            <div className=" p-2 h-full flex flex-col justify-end ">
              <span className="text-4xl font-bold text-white text-shadow-sm text-shadow-black z-4">
                Osehon Godwin.
              </span>
            </div>
          </div>
          <div className="z-2">
            <h2 className="text-3xl font-bold mb-6 text-white z-3">About Me</h2>
            <div className="space-y-4 sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Front-end and Mobile developer with years of
                experience, dedicated to creating intuitive and visually
                stunning user interfaces. With a keen eye for design and a solid
                engineering foundation, I bridge the gap between aesthetics and
                functionality.
              </p>
              <p>
                My journey started with a fascination for how things look on the
                screen, which quickly evolved into a deep-seated love for
                building robust, scalable applications that solve real-world
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section
        id="what-i-do"
        className="py-10 sm:py-32 px-4 bg-primary h-fit min-h-150"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-17 text-center text-white">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl hover:translate-y-[-0.2rem] transition-all duration-200 ">
              <div className="text-violet-500 mb-4 text-sm font-bold uppercase tracking-widest">
                Web Development
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Responsive & Interactive
              </h3>
              <p className="text-muted-foreground mb-6">
                Building pixel-perfect web applications using modern frameworks
                and libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "React",
                  "Tailwind",
                  "TypeScript",
                  "JavaScript",
                  "Framer Motion",
                  "Redux",
                  "TanStack Query",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="glass-hover border-white/5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-3xl hover:translate-y-[-0.2rem] transition-all duration-200 ">
              <div className="text-violet-500 mb-4 text-sm font-bold uppercase tracking-widest">
                Mobile Development
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Native Experiences
              </h3>
              <p className="text-muted-foreground mb-6">
                Creating seamless cross-platform mobile apps with native
                performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "Flutter",
                  "iOS",
                  "Android",
                  "Mobile UI/UX",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="glass-hover border-white/5 "
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-32 px-4 min-h-150 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2 text-white">
                Selected Projects
              </h2>
              <p className="text-muted-foreground">
                A showcase of my recent work across web and mobile.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Modern Real Estate Website"
              description="A sleek real estate platform with property listed and seemless user experience."
              tags={["React", "TypeScript", "Framer Motion"]}
              githubUrl="https://github.com/Godwin-WebDev002/Realest"
              liveUrl="https://osesrealest.netlify.app/"
              image={Realest}
            />
            <ProjectCard
              title="Minimalist E-commerce"
              description="A natural skin-oil website, with product details and a seamless checkout flow"
              tags={["React", "TypeScript", "Framer motion"]}
              githubUrl="https://github.com/Godwin-WebDev002/Aurea"
              liveUrl="https://aureas.netlify.app/"
              image={Aurea}
            />
            <ProjectCard
              title="Wrist Watch landing page"
              description="A sleek portal for luxury wrist watches, detailed specs of different kind."
              tags={["React", "Framer Motion", "Tailwind"]}
              githubUrl="https://github.com/Godwin-WebDev002/Ovulan"
              liveUrl="https://ovulan.netlify.app/"
              image={Ovulan}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 bg-primary min-h-100">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Expertise & Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "UI/UX Design",
              "System Architecture",
              "API Integration",
              "Unit Testing",
              "Performance Optimization",
              "CI/CD",
              "Git",
              "Agile Methodologies",
              "SEO",
            ].map((skill) => (
              <div
                key={skill}
                className="glass px-6 py-2 rounded-full text-sm text-white font-medium glass-hover cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-balance text-white">
              Let's build something extraordinary together.
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm currently looking for new opportunities to collaborate on
              innovative projects. Whether you're a startup or an established
              company, I'd love to hear from you.
            </p>
            <div className="flex gap-4">
              <a
                target="blank"
                href="https://github.com/Godwin-WebDev002"
                className="p-3 glass rounded-xl glass-hover text-muted-foreground hover:text-primary"
              >
                <LuGithub className="w-5 h-5" />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/onobhayedo-osehon-1795aa366?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="p-3 glass rounded-xl glass-hover text-muted-foreground hover:text-primary"
              >
                <LuLinkedin className="w-5 h-5" />
              </a>
              <a
                target="blank"
                href="https://x.com/Osehon_Godwin?t=Ae2KGTIGAt6AMdOCWx_6OQ&s=08"
                className="p-3 glass rounded-xl glass-hover text-muted-foreground hover:text-primary"
              >
                <PiXLogo className="w-5 h-5" />
              </a>
              <a
                target="blank"
                href="https://wa.me/2349021719472?text=Hello%there!"
                className="p-3 glass rounded-xl glass-hover text-muted-foreground hover:text-primary"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-2">
              Direct Contact
            </div>
            <a
              target="blank"
              href="mailto:osehononos@gmail.com"
              className=" text-muted-foreground text-xl font-bold hover:text-primary transition-colors"
            >
              osehononos@gmail.com
            </a>
            <div className="mt-8 text-xs text-muted-foreground uppercase tracking-widest">
              © 2026 • Designed & Built by Godwin
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
