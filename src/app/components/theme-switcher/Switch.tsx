"use client";

import React from 'react';
import { DarkModeSwitchProps } from '~/app/utils/interface/table'
import { Button } from '@headlessui/react';

const Switch: React.FC<DarkModeSwitchProps> = ({ darkTheme, toggleDarkTheme }) => {
  return (
    <Button
      className="mr-4"
      onClick={toggleDarkTheme}
      aria-label="Toggle Dark Mode"
    >
      {darkTheme ? (
        <span className="text-yellow-400 text-2xl">🌙</span>
      ) : (
        <span className="text-gray-700 text-2xl">☀️</span>
      )}
    </Button>
  );
};

export default Switch;
