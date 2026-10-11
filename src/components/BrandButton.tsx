"use client";

import { useIsDark } from "@/lib/useIsDark";
import {
  MovingGradientButton,
  type GradientPalette,
  type MovingGradientButtonProps,
} from "./fx/MovingGradientButton";

// Palettes built from the brand colours: violet #5B2A86 · sunflower #F2B705.
const PLUM: GradientPalette = {
  fill: "#5B2A86",
  hoverFill: "#45206A",
  textColor: "#FFFFFF",
  hoverTextColor: "#FFFFFF",
  borderColor: "#5B2A86",
  strokeColor: "#9B6CC7",
  headColor: "#F2B705",
};

const SUN: GradientPalette = {
  fill: "#F2B705",
  hoverFill: "#FFC933",
  textColor: "#1D0F30",
  hoverTextColor: "#1D0F30",
  borderColor: "#F2B705",
  strokeColor: "#FFE08A",
  headColor: "#FFFFFF",
};

const GHOST: GradientPalette = {
  fill: "rgba(250, 246, 255, 0)",
  hoverFill: "rgba(250, 246, 255, 0.1)",
  textColor: "#FAF6FF",
  hoverTextColor: "#FFFFFF",
  borderColor: "rgba(250, 246, 255, 0.3)",
  strokeColor: "rgba(242, 183, 5, 0.45)",
  headColor: "#F2B705",
};

const OUTLINE_LIGHT: GradientPalette = {
  fill: "rgba(243, 238, 249, 0)",
  hoverFill: "rgba(243, 238, 249, 1)",
  textColor: "#24143A",
  hoverTextColor: "#5B2A86",
  borderColor: "rgba(36, 20, 58, 0.16)",
  strokeColor: "rgba(91, 42, 134, 0.45)",
  headColor: "#5B2A86",
};

const OUTLINE_DARK: GradientPalette = {
  fill: "rgba(32, 19, 58, 0)",
  hoverFill: "rgba(32, 19, 58, 1)",
  textColor: "#F4EEFB",
  hoverTextColor: "#FFFFFF",
  borderColor: "rgba(244, 238, 251, 0.18)",
  strokeColor: "rgba(242, 183, 5, 0.45)",
  headColor: "#F2B705",
};

export type BrandVariant = "primary" | "sun" | "ghost" | "outline";

type Props = Omit<MovingGradientButtonProps, "palette"> & { variant?: BrandVariant };

export function BrandButton({ variant = "primary", ...props }: Props) {
  const dark = useIsDark();
  const palette =
    variant === "sun"
      ? SUN
      : variant === "ghost"
        ? GHOST
        : variant === "outline"
          ? dark
            ? OUTLINE_DARK
            : OUTLINE_LIGHT
          : dark
            ? SUN
            : PLUM;
  return <MovingGradientButton palette={palette} {...props} />;
}
