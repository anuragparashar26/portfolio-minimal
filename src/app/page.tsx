import { headers } from "next/headers";

export const metadata = {
  title: "Anurag's Minimal Portfolio",
  description: "A minimal portfolio by Anurag Parashar.",
};
// import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { BlogSection, BlogPost } from "@/components/blog-section";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  // Fetch blog posts server-side
  let posts: BlogPost[] = [];
  let error: string | null = null;
  try {
    const h = headers();
    const host = h.get("host");
    const protocol = h.get("x-forwarded-proto") || "http";
    const absUrl = `${protocol}://${host}/api/blog-titles`;

    const res = await fetch(absUrl, {
      cache: 'no-store',
    });
    const data = await res.json();
    posts = data.posts || [];
    error = data.error || null;
  } catch (e: any) {
    error = e.message || 'Failed to fetch blog posts';
  }
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6">
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>

    {/* Social Icons before About section */}                                               
    <section id="social-icons" className="flex justify-start items-center gap-4 py-2">
      {Object.entries(DATA.contact.social)
        .filter(([key, social]) => key !== 'email')
        .map(([key, social], idx) => (
          <BlurFade key={key} delay={BLUR_FADE_DELAY * (2 + idx)}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {social.icon && typeof social.icon === 'function' ? social.icon({ className: "size-5" }) : null}
            </a>
          </BlurFade>
        ))}
    </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <div className="mt-4 flex justify-left">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <a
            href="https://drive.google.com/file/d/1-4luJ3zWE7XZgLHZIYHwK_nxqAQHMyoA/view?usp=sharing"
            rel="noopener noreferrer"
            className="inline-block rounded bg-primary text-primary-foreground px-6 py-2 font-semibold shadow hover:bg-primary/90 transition-colors"
          >
            Resume 
          </a>
        </BlurFade>
      </div>
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {Object.values(DATA.skills).flat().map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-6 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some projects I've worked on.
                </p>
              </div>
            </div>
          </BlurFade>
          {['Web Apps', 'Developer Tools', 'Desktop Apps', 'Utility'].map((cat) => {
            const projects = DATA.projects.filter((p) => p.category === cat);
            if (!projects.length) return null;
            return (
              <div key={cat} className="space-y-2">
                <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
                  <h3 className="text-xl font-semibold px-2 pt-4">{cat}</h3>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                  {projects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="certifications">
        <div className="space-y-6 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certifications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Certifications
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the certifications I have earned.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed">
              {DATA.certifications.map((cert, id) => (
                <BlurFade
                  key={cert.title + cert.date}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <li className="flex items-center gap-4 py-4">
                    {cert.image && (
                      <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain rounded" />
                    )}
                    <div>
                      <div className="font-semibold text-lg">{cert.title}</div>
                      <div className="text-sm text-muted-foreground">{cert.issuer} &middot; {cert.date}</div>
                      <div className="text-xs text-muted-foreground mb-1">{cert.description}</div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded bg-primary text-primary-foreground px-3 py-1 font-semibold shadow hover:bg-primary/90 transition-colors text-xs"
                        >
                          View Credential
                        </a>
                      )}
                    </div>
                  </li>
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
  <BlogSection posts={posts} error={error} />
      <section id="contact">
        <div className="grid items-center justify-center gap-2 px-4 text-center md:px-6 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Drop a DM {" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  on X
                </Link>{" "}
                or send an <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  email
                </a>{" "}and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
