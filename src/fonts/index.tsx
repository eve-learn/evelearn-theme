import { Open_Sans, Ubuntu, Balsamiq_Sans, Parkinsans } from 'next/font/google';

export const openSans = Open_Sans({
    preload: true,
    display: 'swap',
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese', 'hebrew'],
    variable: '--font-sans',
});

export const ubuntu = Ubuntu({
    preload: true,
    weight: ['300', '400', '500', '700'],
    display: 'auto',
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext'],
    variable: '--font-fallback',
});

export const parkinsans = Parkinsans({
    preload: true,
    weight: ['300', '400', '500', '700'],
    display: "swap",
    adjustFontFallback: false,
    subsets: ['latin', 'latin-ext'],
    // fallback: ['--font-fallback'],
    variable: '--font-header',
});

export const balsamicSans = Balsamiq_Sans({
    preload: false,
    display: 'swap',
    weight: ['400', '700',],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
    variable: '--font-fun',
});
