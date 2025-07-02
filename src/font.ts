import { Outfit, Cormorant_Garamond } from 'next/font/google'

export const gilroy = Outfit({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-gilroy',
    display: 'swap',
})

export const mazius = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400'],
    style: ['italic'],
    variable: '--font-mazius',
    display: 'swap',
})