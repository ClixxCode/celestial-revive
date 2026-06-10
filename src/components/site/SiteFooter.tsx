import { Facebook, Youtube } from "lucide-react";
import logoAsset from "@/assets/steinlage-logo-white.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={logoAsset.url}
              alt="Steinlage Insurance Agency"
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              Independent Medicare and ACA brokers. Our family helping your family since 1950.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/Steinlageinsuranceagency/"
                aria-label="Facebook"
                className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCfz87FaZ62z92pB_KDUikVQ/"
                aria-label="YouTube"
                className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-lg">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a className="hover:text-white" href="#about">About Us</a></li>
              <li><a className="hover:text-white" href="#medicare">Medicare</a></li>
              <li><a className="hover:text-white" href="#aca">ACA</a></li>
              <li><a className="hover:text-white" href="#partnerships">Partnerships</a></li>
              <li><a className="hover:text-white" href="#webinars">Webinars</a></li>
              <li><a className="hover:text-white" href="#resources">Resources</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-lg">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:6365615060" className="hover:text-white">
                  (636) 561-5060
                </a>
              </li>
              <li>St. Louis, Missouri</li>
              <li><a className="hover:text-white" href="#careers">Careers</a></li>
              <li><a className="hover:text-white" href="#blog">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-white/15 pt-8 text-xs leading-relaxed text-white/65">
          <p>
            We do not offer every plan available in your area. Currently, we represent 15
            organizations which offer 105 products in your area. Please contact Medicare.gov,
            1-800-MEDICARE, or your local State Health Insurance Assistance Program (SHIP) to get
            information on all of your options.
          </p>
          <p>
            This is a proprietary website and is not associated, endorsed or authorized by the
            Social Security Administration, the Department of Health and Human Services or the
            Center for Medicare and Medicaid Services. This site contains decision-support content
            and information about Medicare, services related to Medicare and services for people
            with Medicare.
          </p>
          <p>
            If you would like to find more information about the Medicare program please visit the
            Official U.S. Government Site for People with Medicare located at Medicare.gov.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Steinlage Insurance Agency. All Rights Reserved.</p>
          <p>
            <a href="https://clix.co/internet-marketing-st-louis/" className="hover:text-white">
              St. Louis Internet Marketing
            </a>{" "}
            by{" "}
            <a href="https://clix.co/" className="hover:text-white">
              The Clix Group
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
