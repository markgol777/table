"use client";

import React, { useState } from 'react';
import Table from '~/app/containers/table/Table';

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  const theme = darkTheme ? 'dark' : '';

  return (
    <div className={theme}>
      <Table
        darkTheme={darkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
    </div>
  );
}
