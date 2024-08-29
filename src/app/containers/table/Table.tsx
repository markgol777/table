"use client";

import React, { useState } from 'react';
import Header from '~/app/containers/header/Header';
import UserTable from '~/app/components/user-table/UserTable';

const Table: React.FC<{ darkTheme: boolean; toggleDarkTheme: () => void }> = ({ darkTheme, toggleDarkTheme }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="dark:bg-dark-blue h-[100vh]">
      <Header
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkTheme={darkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <UserTable
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Table;
