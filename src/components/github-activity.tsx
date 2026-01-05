"use client";

import { githubConfig } from "@/config/github";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Icons } from "./icons";
import { Button } from "./ui/button";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.default),
  { ssr: false }
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => new Date(item.date) >= oneYearAgo);
}

export default function GithubActivity() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: { contributions?: unknown[] } = await response.json();

        if (!Array.isArray(data?.contributions)) {
          throw new Error("Unexpected response shape");
        }

        const flattened = data.contributions.flat();

        const contributionLevelMap = {
          NONE: 0,
          FIRST_QUARTILE: 1,
          SECOND_QUARTILE: 2,
          THIRD_QUARTILE: 3,
          FOURTH_QUARTILE: 4,
        } as const;

        const validContributions = flattened
          .filter(
            (item: unknown): item is GitHubContributionResponse =>
              typeof item === "object" &&
              item !== null &&
              "date" in item &&
              "contributionCount" in item &&
              "contributionLevel" in item
          )
          .map((item) => ({
            date: String(item.date),
            count: Number(item.contributionCount || 0),
            level: (contributionLevelMap[
              item.contributionLevel as keyof typeof contributionLevelMap
            ] || 0) as ContributionItem["level"],
          }));

        if (!validContributions.length) {
          throw new Error("No contributions returned");
        }

        const total = validContributions.reduce((sum, item) => sum + item.count, 0);
        const filteredContributions = filterLastYear(validContributions);

        if (isMounted) {
          setTotalContributions(total);
          setContributions(filteredContributions);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub contributions:", err);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const showCalendar = !isLoading && !hasError && contributions.length > 0;

  return (
    <div className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b px-4 py-4 sm:px-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Open Source
          </p>
          <h3 className="text-lg font-semibold">{githubConfig.title}</h3>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Anurag's</span>
            {" "}
            {githubConfig.subtitle}
          </p>
          {showCalendar && totalContributions > 0 && (
            <p className="text-sm text-primary font-semibold">
              {totalContributions.toLocaleString()} contributions recorded
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`https://github.com/${githubConfig.username}`}
            className="inline-flex items-center gap-2"
          >
            <Icons.github className="size-4" />
            View profile
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center gap-2 px-4 py-10 text-sm text-muted-foreground sm:px-6">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></span>
          {githubConfig.loadingState.description}
        </div>
      ) : hasError || !contributions.length ? (
        <div className="space-y-3 px-4 py-10 text-center text-muted-foreground sm:px-6">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full border">
            <Icons.github className="size-6" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-semibold text-foreground">
              {githubConfig.errorState.title}
            </p>
            <p className="text-sm">{githubConfig.errorState.description}</p>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <Icons.github className="size-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="px-2 py-4 sm:px-4">
          <div className="w-full overflow-hidden">
            <ActivityCalendar
              data={contributions}
              blockSize={githubConfig.blockSize}
              blockMargin={githubConfig.blockMargin}
              fontSize={githubConfig.fontSize}
              colorScheme={theme === "dark" ? "dark" : "light"}
              maxLevel={githubConfig.maxLevel}
              hideTotalCount
              hideColorLegend
              hideMonthLabels={false}
              theme={githubConfig.theme}
              labels={{
                months: githubConfig.months,
                weekdays: githubConfig.weekdays,
                totalCount: githubConfig.totalCountLabel,
              }}
              showWeekdayLabels
              style={{
                color: "rgb(139, 148, 158)",
                width: "100%",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
