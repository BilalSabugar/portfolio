import { PortfolioShell, PageIntro, TextLink } from "@/components/PortfolioShell";
export default function NotFound() {
  return <PortfolioShell><PageIntro label="404 / Page not found" title="Let’s find the right place." intro="This page may have moved, or the address may be incomplete. The work index has a direct link to every project." /><section className="section-space"><TextLink href="/work/">Explore the work</TextLink><br /><TextLink href="/index/">Open the full site index</TextLink></section></PortfolioShell>;
}
