import './globals.css'
import {Inter} from 'next/font/google'
import Head from "next/head";
import {NextSeo} from "next-seo";
// import { DefaultSeo } from 'next-seo';

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'КогнитB',
    description: 'KognitB - КогнитB',
    url: 'https://kognitb.vercel.app',
    image: 'https://kognitb.vercel.app/kognit1.webp',
    content: 'KognitB - КогнитB',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="CAsdUMwCIe87epyFLMFWK0JauvzAQFtFj0tg0mzvEns"/>
            <link rel="canonical" href="https://www.kognitb.uz/" />
            <meta property="og:url" content="https://kognitb.uz/" />
            <meta property="og:title" content="КогнитB" />
            <meta property="og:description" content="КогнитB" />
            <meta property="og:image" content="https://kognitb.vercel.app/kognit1.webp" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image" content="https://kognitb.vercel.app/kognit1.webp" />
            <meta property="og:image:width" content="900" />
            <meta property="og:image:height" content="800" />
            <meta property="og:image" content="https://kognitb.vercel.app/kognit1.webp" />
            <meta property="og:image" content="https://kognitb.vercel.app/kognit1.webp" />
            <meta property="og:site_name" content="КогнитB" />
            {/* Telegram */}
            <meta property="telegram:channel" content="@SpringPharmaceutic" />
            {/*Instagram*/}
            <meta property="instagram:account" content="@springpharmaceutic/" />
            {/*Facebook*/}
            <meta property="article:publisher" content="https://www.facebook.com/spring.pharm.3/" />
            {/*Email*/}
            <meta property="email" content="spring_pharmaceutic@gmail.com" />
        </head>
        <body className={inter.className}>
        {/*<DefaultSeo*/}
        {/*    title="Invirep"*/}
        {/*    description="Invirep"*/}
        {/*    openGraph={{*/}
        {/*        type: 'website',*/}
        {/*        url: 'https://invirep.vercel.app',*/}
        {/*        site_name: 'Invirep',*/}
        {/*    }}*/}
        {/*/>*/}
        {children}
        </body>
        </html>
)
}
