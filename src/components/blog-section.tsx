import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export type BlogPost = { title: string; url: string };

export function BlogSection({ posts, error }: { posts: BlogPost[]; error?: string | null }) {
	return (
		<section id="blog" className="w-full py-6">
			<BlurFade delay={BLUR_FADE_DELAY * 15.5}>
				<div className="space-y-6 p-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								Blog
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Latest Blog Posts
							</h2>
							<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Here are the blogs I've written.
							</p>
						</div>
					</div>
					{error && <div className="text-red-500">{error}</div>}
					<ul className="mb-4 ml-4 divide-y divide-dashed">
						{!error && posts.length === 0 && <li>Loading...</li>}
						{posts.map((post, idx) => (
							<li key={idx} className="py-2 text-lg font-medium">
								<a
									href={post.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 group px-3 py-3 rounded-lg border border-border bg-background/70 shadow-sm hover:bg-muted transition"
								>
									<span className="group-hover:text-primary flex-1 text-left">{post.title}</span>
									<FontAwesomeIcon icon={faLink} className="w-4 h-4 opacity-70 group-hover:text-primary" />
								</a>
							</li>
						))}
					</ul>
				</div>
			</BlurFade>
		</section>
	);
}
