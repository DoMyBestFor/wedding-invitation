const appearAnimation = `@keyframes appear {
    from {
      transform: scale(0.1);
    }
    50% {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
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
