// This utility function 'tw' combines and deduplicates Tailwind CSS class names.
// It first uses 'clsx' to conditionally join class names together based on input arguments (strings, arrays, objects for toggling).
// Then it passes the result to 'twMerge', which intelligently merges these class names, ensuring
// that conflicting Tailwind classes (like 'p-1' and 'p-2') resolve with the last one winning.
// This pattern makes it easier to compose dynamic and correct Tailwind class strings in React apps.

import clsx, { ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

export function tw(...input: ClassValue[]) {
    return twMerge(clsx(input));
}
