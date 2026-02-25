import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
    metadataBase: new URL('https://kognitb.uz'),
    title: {
        default: 'КогнитB® — Для улучшения когнитивных функций | Spring Pharmaceutic',
        template: '%s | КогнитB®',
    },
    description: 'КогнитB® — биологически активная добавка для улучшения памяти, концентрации внимания и когнитивных функций. Содержит Гинкго билоба, магний, глицин, L-триптофан и витамины группы В. Производитель — Spring Pharmaceutic.',
    keywords: ['КогнитB', 'Когнит B', 'гинкго билоба', 'память', 'концентрация внимания', 'БАД', 'Spring Pharmaceutic', 'сироп', 'таблетки', 'когнитивные функции', 'улучшение памяти', 'нервная система'],
    authors: [{ name: 'Spring Pharmaceutic' }],
    creator: 'Spring Pharmaceutic',
    publisher: 'Spring Pharmaceutic',
    formatDetection: {
        telephone: true,
        email: true,
    },
    verification: {
        google: ['CAsdUMwCIe87epyFLMFWK0JauvzAQFtFj0tg0mzvEns'],
    },
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        url: 'https://kognitb.uz',
        siteName: 'КогнитB®',
        title: 'КогнитB® — Для улучшения когнитивных функций',
        description: 'Биологически активная добавка для улучшения памяти, концентрации внимания и когнитивных функций.',
        images: [
            {
                url: '/kognit1.webp',
                width: 800,
                height: 600,
                alt: 'КогнитB® сироп 100 мл',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'КогнитB® — Для улучшения когнитивных функций',
        description: 'Биологически активная добавка для улучшения памяти, концентрации внимания и когнитивных функций.',
        images: ['/kognit1.webp'],
    },
    alternates: {
        canonical: 'https://kognitb.uz',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
