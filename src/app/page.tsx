import { headers } from "next/headers";

export const metadata = {
  title: "Anurag's Portfolio",
  description: "The portfolio of Anurag Parashar.",
};
// import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CertificationLink } from "@/components/CertificationLink";
import { ProjectsSection } from "@/components/ProjectsSection";
import GithubActivity from "@/components/github-activity";
import { DATA } from "@/data/resume";
import { ContactScrollButton } from "@/components/ContactScrollButton";
import { ResumeButton } from "@/components/ResumeButton";
import { LocalTime } from "@/components/LocalTime";
import { ViewCounter } from "@/components/ViewCounter";
import { SkillBadge } from "@/components/SkillBadge";
import { AnimatedHeroSocialIcons } from "@/components/AnimatedHeroSocialIcons";
import Link from "next/link";
import Markdown from "react-markdown";
import { BlogSection, BlogPost } from "@/components/blog-section";
import BrandReactIcon from "@/components/ui/icons/brand-react-icon";
import BrandNextjsIcon from "@/components/ui/icons/brand-nextjs-icon";
import JavascriptIcon from "@/components/ui/icons/javascript-icon";
import TypescriptIcon from "@/components/ui/icons/typescript-icon";
import NodejsIcon from "@/components/ui/icons/nodejs-icon";
import PythonIcon from "@/components/ui/icons/python-icon";
import DockerIcon from "@/components/ui/icons/docker-icon";
import FigmaIcon from "@/components/ui/icons/figma-icon";
import CoffeeIcon from "@/components/ui/icons/coffee-icon";
import CodeIcon from "@/components/ui/icons/code-icon";
import BrandAwsIcon from "@/components/ui/icons/brand-aws-icon";
import MysqlIcon from "@/components/ui/icons/mysql-icon";
import MongodbIcon from "@/components/ui/icons/mongodb-icon";
import PhoneVolumeIcon from "@/components/ui/icons/phone-volume";
import ExpressIcon from "@/components/ui/icons/express-icon";
import PostgresIcon from "@/components/ui/icons/postgres-icon";
import TailwindIcon from "@/components/ui/icons/tailwind-icon";

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
      <LocalTime />
      <div className="mx-auto w-full max-w-3xl space-y-6">
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
            <AnimatedHeroSocialIcons />
          </div>
          <div className="flex flex-col items-center gap-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.1}>
              <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                </span>
                Available
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
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
      <div className="mt-4 flex gap-2 items-center">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <ResumeButton />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5 + 0.05}>
          <ContactScrollButton
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 border bg-background text-foreground border-border hover:border-foreground/50 hover:shadow-sm"
          />
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
      {/* <section id="education">
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
      </section> */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {Object.entries(DATA.skills).map(([category, skills]) => (
              skills.map((skill, id) => {
                const skillIcons: Record<string, any> = {
                  "ReactJs": BrandReactIcon,
                  "NextJs": BrandNextjsIcon,
                  "Tailwind": TailwindIcon,
                  "JavaScript": JavascriptIcon,
                  "Typescript": TypescriptIcon,
                  "NodeJs": NodejsIcon,
                  "ExpressJs": ExpressIcon,
                  "Java": CoffeeIcon,
                  "Python": PythonIcon,
                  "PostgreSQL": PostgresIcon,
                  "MongoDB": MongodbIcon,
                  "AWS": BrandAwsIcon,
                  "Figma": FigmaIcon,
                  "Docker": DockerIcon
                };
                const IconComponent = skillIcons[skill] || CodeIcon;
                return (
                  <BlurFade key={`${category}-${skill}`} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                    <SkillBadge IconComponent={IconComponent} skill={skill} />
                  </BlurFade>
                );
              })
            )).flat()}
          </div>
        </div>
      </section>
      <section id="github-activity">
        <div className="flex min-h-0 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <GithubActivity />
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <ProjectsSection projects={DATA.projects} blurFadeDelay={BLUR_FADE_DELAY * 11} />
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
                      {cert.link && <CertificationLink href={cert.link} />}
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
        <div className="grid items-center justify-center gap-2 px-4 text-center md:px-6 w-full py-2 mb-2">
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
      <div className="pb-10 sm:pb-0">
        <ViewCounter />
      </div>
    </main>
  );
}
