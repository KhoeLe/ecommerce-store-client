import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ModalProvider from "@/provders/ModalProvider";
import QueryWrapper from "@/provders/QueryWrapper";
import Container from "@/components/ui/container";
import { Analytics } from '@vercel/analytics/react';
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Store",
    description: "Store - The place for all your purchases.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader showSpinner={false} color="#302b2d" />
                <QueryWrapper>
                    <Analytics />
                    <ModalProvider />
                    <Container>
                        <Navbar />
                        {children}

                        <Footer />
                    </Container>
                </QueryWrapper>
            </body>
        </html>
    );
}
