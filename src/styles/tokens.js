// Shared layout + motion tokens so every section breathes and moves the same way.
export const SECTION_PX = { base: "1.25rem", sm: "1.75rem", md: "3rem", lg: "4.5rem", xl: "6rem" };
export const SECTION_PY = { base: "4rem", sm: "4.5rem", md: "5.5rem", lg: "6.5rem", xl: "7.5rem" };

// Expo-style ease-out for reveals, and a symmetric ease for wipes/curtains.
export const EASE = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];
export const CSS_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
