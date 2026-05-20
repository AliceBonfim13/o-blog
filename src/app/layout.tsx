
import type { Metadata } from "next";
import "./global.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/index,";
import { ToastifyContainer } from "@/components/ToastifyContainer";




export const metadata: Metadata = {
  title: {
    default: "O blog",
    template: "%s | O Blog"
  },
  description: "Essa seria a descrição dessa página",
};

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />


          {children}

          <Footer />
        </Container>

        <ToastifyContainer />
      </body>
    </html>
  );
}
