import "./globals.css";

export const metadata = {
  title: "Nextjs Udemy Course App",
  description: "First exercise app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
