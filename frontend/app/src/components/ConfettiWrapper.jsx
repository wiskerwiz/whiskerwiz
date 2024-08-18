// frontend/src/components/ConfettiWrapper.jsx
import React from 'react';
import confetti from 'canvas-confetti';

const ConfettiWrapper = ({ children, triggerConfetti }) => {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  if (triggerConfetti) {
    handleConfetti();
  }

  return <>{children}</>;
};

export default ConfettiWrapper;
