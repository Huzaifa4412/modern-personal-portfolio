import localFont from 'next/font/local'

export const gilroy = localFont({
    src: [
        {
            path: './font/gilroy/Gilroy-Medium.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './font/gilroy/Gilroy-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
    ],
    variable: '--font-gilroy',
    display: 'swap'
})

export const mazius = localFont({
    src: [
        {
            path: './font/mazius/Mazius-Extraitalic.otf',
            weight: '400',
            style: 'normal'
        },
    ],
    variable: '--font-mazius',
    display: 'swap'
})