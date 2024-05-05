import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Separator } from "./ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          Feedback?{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            Join our Discord Server!
          </Link>
        </div>
        <Separator className="block md:hidden" />
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:px-0">
          Contact Us: mcsrranked@gmail.com
        </div>
        <Separator className="block md:hidden" />
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-5 md:px-0">
          <Link
            href={siteConfig.links.privacyPolicy}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            Privacy Policy
          </Link>
          <span className="hidden md:block">|</span>
          <Link
            href={siteConfig.links.licenses}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            Open Source Licenses
          </Link>
          <span className="hidden md:block">|</span>
          <Link
            href={siteConfig.links.apiDocs}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            API Docs
          </Link>
          <span className="hidden md:block">|</span>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            GitHub
          </Link>
        </div>
      <Separator className="block md:hidden" />
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"></div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:px-0">
          © 2022-24 MCSR Ranked. THIS IS NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"></div>
      </div>
    </footer>
  )
}
