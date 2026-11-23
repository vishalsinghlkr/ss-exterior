"use client";

import styled, { keyframes, css } from "styled-components";
import { COLORS } from "@/config/color-constants";

// 1. Shimmer sweep keyframe
const shimmerSweep = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

// 2. Float subtle keyframe
const subtleFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

/**
 * Architectural Shimmer Pill Badge
 */
export const StyledPulseBadge = styled.span<{
  $variant?: "gold" | "cobalt" | "azure" | "copper" | "bronze" | "success";
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.95rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  ${(props) => {
    switch (props.$variant) {
      case "success":
        return css`
          background: rgba(16, 185, 129, 0.12);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.35);
        `;
      case "copper":
      case "bronze":
        return css`
          background: rgba(234, 88, 12, 0.12);
          color: #FB923C;
          border: 1px solid rgba(234, 88, 12, 0.35);
        `;
      case "cobalt":
      case "azure":
        return css`
          background: linear-gradient(
            90deg,
            rgba(14, 165, 233, 0.12) 0%,
            rgba(56, 189, 248, 0.22) 50%,
            rgba(14, 165, 233, 0.12) 100%
          );
          background-size: 200% auto;
          animation: ${shimmerSweep} 4s linear infinite;
          color: #38BDF8;
          border: 1px solid rgba(14, 165, 233, 0.35);
        `;
      case "gold":
      default:
        return css`
          background: linear-gradient(
            90deg,
            rgba(212, 175, 55, 0.12) 0%,
            rgba(245, 208, 97, 0.22) 50%,
            rgba(212, 175, 55, 0.12) 100%
          );
          background-size: 200% auto;
          animation: ${shimmerSweep} 4s linear infinite;
          color: #926A06;
          border: 1px solid rgba(212, 175, 55, 0.45);
          box-shadow: 0 2px 10px rgba(212, 175, 55, 0.15);
        `;
    }
  }}
`;

/**
 * Editorial Architectural Card with Structural Ivory & Metallic Sheen
 */
export const StyledGlassCard = styled.div<{
  $accent?: "gold" | "cobalt" | "azure" | "copper" | "bronze" | "neutral";
}>`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid
    ${(props) => {
      switch (props.$accent) {
        case "cobalt":
        case "azure":
          return "rgba(14, 165, 233, 0.28)";
        case "copper":
        case "bronze":
          return "rgba(234, 88, 12, 0.28)";
        case "neutral":
          return "rgba(226, 232, 240, 0.9)";
        case "gold":
        default:
          return "rgba(212, 175, 55, 0.35)";
      }
    }};
  border-radius: 1rem;
  padding: 1.75rem;
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;

  /* Subtle top hairline highlight */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${(props) => {
      switch (props.$accent) {
        case "cobalt":
        case "azure":
          return "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.6), transparent)";
        case "copper":
        case "bronze":
          return "linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.6), transparent)";
        case "neutral":
          return "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)";
        case "gold":
        default:
          return "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6), transparent)";
      }
    }};
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => {
      switch (props.$accent) {
        case "cobalt":
        case "azure":
          return "rgba(14, 165, 233, 0.55)";
        case "copper":
        case "bronze":
          return "rgba(234, 88, 12, 0.55)";
        case "neutral":
          return "rgba(255, 255, 255, 0.2)";
        case "gold":
        default:
          return "rgba(212, 175, 55, 0.6)";
      }
    }};
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7),
      0 0 25px
        ${(props) => {
          switch (props.$accent) {
            case "cobalt":
            case "azure":
              return "rgba(14, 165, 233, 0.18)";
            case "copper":
            case "bronze":
              return "rgba(234, 88, 12, 0.18)";
            case "neutral":
              return "rgba(255, 255, 255, 0.05)";
            case "gold":
            default:
              return "rgba(212, 175, 55, 0.18)";
          }
        }};
  }

  &:hover::before {
    opacity: 1;
  }
`;

/**
 * Architectural Logo Presentation Frame
 */
export const StyledLogoDisplay = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  padding: 1.75rem;
  background: linear-gradient(
    145deg,
    rgba(25, 34, 52, 0.92) 0%,
    rgba(13, 19, 29, 0.98) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.8),
    0 0 35px rgba(212, 175, 55, 0.15);
  animation: ${subtleFloat} 5s ease-in-out infinite;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.015);
    border-color: rgba(212, 175, 55, 0.55);
  }
`;
