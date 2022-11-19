const appearAnimation = `@keyframes appear {
    from {
      transform: scale(0.1);
    }
    50% {
      transform: scale(0.5);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(-5deg);
    }
    70% {
      transform: rotate(5deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    80% {
      transform: rotate(5deg);
    }
    85% {
      transform: rotate(-5deg);
    }
    90% {
      transform: rotate(5deg);
    }
    95% {
      transform: rotate(-5deg);
    }
    94% {
      transform: rotate(5deg);
    }
    95% {
      transform: rotate(-5deg);
    }
    to {
      transform: scale(1) rotate(5deg);
    }
  }`;

const fall = `@keyframes fall {
    from {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    90% {
        opacity: 0.9;
    }
    to {
        transform: translate(0, 200px);
        opacity: 0;
    }
}`;

export const animations = {
  appear: appearAnimation,
  fall,
};
