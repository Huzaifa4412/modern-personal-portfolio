import { Inter, Playfair_Display } from 'next/font/google'

export const gilroy = Inter({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-gilroy',
    display: 'swap',
})

export const mazius = Playfair_Display({
    subsets: ['latin'],
    weight: ['400'],
    style: ['italic'],
    variable: '--font-mazius',
    display: 'swap',
})