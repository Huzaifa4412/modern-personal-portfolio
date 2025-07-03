import { Urbanist, Bangers } from 'next/font/google'

export const gilroy = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-gilroy',
    display: 'swap',
})

export const mazius = Bangers({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-mazius',
    display: 'swap',
})