"use client";

import React, { useState } from 'react';
import Header from '~/app/containers/header/Header';
import UserTable from '~/app/components/user-table/UserTable';
import { Table } from '~/app/utils/interface/table'

const Table: React.FC<Table> = ({ darkTheme, toggleDarkTheme }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="dark:bg-dark-blue min-h-screen">
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
