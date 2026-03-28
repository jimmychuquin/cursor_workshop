export const motionViewport = { once: true as const, margin: "-80px" as const };

export function motionTransition(reduceMotion: boolean | null) {
  if (reduceMotion) return { duration: 0 };
  return { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
}
