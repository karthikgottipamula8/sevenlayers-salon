import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ['normal', 'italic'],
  variable: "--font-playfair" 
});

export const metadata = {
  title: "Seven Layers Unisex Salon & Training Academy",
  description: "Seven Layers Unisex Salon offers professional hair styling, beauty treatments, skin care services, grooming solutions, bridal makeup, and beauty training academy programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
