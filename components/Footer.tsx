// components/Footer.tsx
import React from "react";
import Script from "next/script";

const CURRENT_YEAR = new Date().getFullYear();

const Footer: React.FC = () => {
  const portalId = "45405801";
  const embedId = "218449909854";
  const elementId = "hs-embed-218449909854-1ql4bs";

  return (
    <footer className="w-full bg-gray-100 px-6">
      {/* HubSpot embed section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-10">
        <div id="hubspot-footer-form" className="w-full">
          <div id={elementId} />
        </div>
      </section>

      {/* Load HubSpot script + init it from one inline Script */}
      <Script
        id="hubspot-footer-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement("script");
              script.src = "https://js.hubspot.com/content-embed/v1.js";
              script.onload = function () {
                if (window.hbspt && window.hbspt.content && window.hbspt.content.create) {
                  window.hbspt.content.create({
                    region: "na1",
                    portalId: "${portalId}",
                    embedId: "${embedId}",
                    elementId: "${elementId}"
                  });
                }
              };
              document.head.appendChild(script);
            })();
          `,
        }}
      />

      {/* Bottom bar */}
      <section className="w-full bg-gray-100 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Test Interscholastic Cycling League<br />&copy; {CURRENT_YEAR}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="hover:text-gray-700 underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-700 underline">
              Terms of Use
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;