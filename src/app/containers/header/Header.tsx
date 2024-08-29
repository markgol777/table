"use client";

import React from 'react';
import { Button } from '@headlessui/react';
import ShowCount from '~/app/components/showCount/ShowCount';
import Search from '~/app/components/search/Search'
import Switch from '~/app/components/theme-switcher/Switch'
import { HeaderProps } from '~/app/utils/interface/table'

const Header: React.FC<HeaderProps> = ({
  itemsPerPage,
  setItemsPerPage,
  searchQuery,
  setSearchQuery,
  darkTheme,
  toggleDarkTheme,
}) => {
  return (
    <header className="flex w-full p-4 items-center justify-between text-xs font-medium">
      <div className="flex items-center">
        <p className="mr-3 dark:text-white">Show</p>
        <ShowCount itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
        <p className="mr-6 ml-3 dark:text-white">entries</p>

        <div className="w-full max-w-md px-4">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>

      <div className="flex items-center">
        <Switch darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
        <Button className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold text-white shadow-white/10 bg-purple">
          + Add Customer
        </Button>
      </div>
    </header>
  );
}

export default Header;
