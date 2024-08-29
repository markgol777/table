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
    <div className={`${theme} min-h-screen bg-gray-100 dark:bg-[#1D1E42]`}>
      <Table darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme}/>
    </div>
  );
}
