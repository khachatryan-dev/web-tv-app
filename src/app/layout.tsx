import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'TV Web App',
    description: 'A modern TV streaming web app built with Next.js and Tailwind CSS.',
    keywords: ['TV', 'Streaming', 'Next.js', 'Tailwind CSS', 'Web App', 'Video', 'Movies', 'Shows'],
    authors: [{ name: 'Aram Khachatryan', url: 'https://khachatryan-dev.vercel.app/' }],
    creator: 'Aram Khachatryan',
    publisher: 'Aram Khachatryan',
    openGraph: {
        title: 'TV Web App',
        description: 'A modern TV streaming web app built with Next.js and Tailwind CSS.',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        siteName: 'TV Web App',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/users/avatar.webp`,
                width: 1200,
                height: 630,
                alt: 'TV Web App Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TV Web App',
        description: 'A modern TV streaming web app built with Next.js and Tailwind CSS.',
        images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/users/avatar.webp`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    icons: {
        icon: "/favicon/favicon-32x32.png",
        apple: [
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-57x57.png", sizes: "57x57"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-60x60.png", sizes: "60x60"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-72x72.png", sizes: "72x72"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-76x76.png", sizes: "76x76"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-114x114.png", sizes: "114x114"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-120x120.png", sizes: "120x120"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-144x144.png", sizes: "144x144"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-152x152.png", sizes: "152x152"},
            {rel: "apple-touch-icon", url: "/favicon/apple-icon-180x180.png", sizes: "180x180"}
        ]
    },
    manifest: "/favicon/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-black text-white antialiased">{children}</body>
        </html>
    );
}
