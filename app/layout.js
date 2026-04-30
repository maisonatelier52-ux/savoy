// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "SAVOY  ",
//   description: "savoy bank and trust company ",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://www.savoybankandtrust.com"; // ← update to your real domain

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Savoy Bank & Trust | Private Banking in The Bahamas",
    template: "%s | Savoy Bank & Trust",
  },
  description:
    "Savoy Bank & Trust is a privately held financial institution in The Bahamas offering tailored banking, trust, and market services for discerning international clients.",
  keywords: [
    "Savoy Bank", "Savoy Trust", "private banking Bahamas",
    "international banking", "offshore banking", "trust services Bahamas",
    "wealth management Bahamas", "fiduciary services", "private bank",
  ],
  authors: [{ name: "Savoy Bank & Trust" }],
  creator: "Savoy Bank & Trust",
  publisher: "Savoy Bank & Trust",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE_URL },

  // Open Graph — Facebook, LinkedIn, WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Savoy Bank & Trust",
    title: "Savoy Bank & Trust | Private Banking in The Bahamas",
    description:
      "Tailored banking, trust, and market services for clients who value discretion, continuity, and clear guidance in a complex international landscape.",
    images: [
      {
        url: "/savoy-card.jpg",
        width: 1200,
        height: 630,
        alt: "Savoy Bank & Trust – Private Banking in The Bahamas",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Savoy Bank & Trust | Private Banking in The Bahamas",
    description:
      "Tailored banking, trust, and market services for clients who value discretion, continuity, and clear guidance.",
    images: ["/savoy-card.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BankOrCreditUnion",
              name: "Savoy Bank & Trust",
              url: BASE_URL,
              logo: `${BASE_URL}/savoy-logo.png`,
              image: `${BASE_URL}/savoy-card.jpg`,
              description: "A privately held financial institution in The Bahamas offering tailored banking, trust, and market services.",
              address: { "@type": "PostalAddress", addressCountry: "BS", addressRegion: "The Bahamas" },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}