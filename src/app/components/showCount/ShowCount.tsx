"use client";

import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ShowCountProps } from '~/app/utils/interface/table'

const ShowCount: React.FC<ShowCountProps> = ({ itemsPerPage, setItemsPerPage }) => {
  return (
    <Menu as="div" className="relative inline-block mr-2 text-left">
      <div>
        <MenuButton className="dark:bg-selector-dark-blue dark:text-white inline-flex h-[32px] p-2 w-full justify-center items-center border-transparent bg-gray rounded-md text-sm font-medium text-gray-900">
          {itemsPerPage}
          <ChevronDownIcon aria-hidden="true" className="dark:text-white -mr-1 h-5 w-5 text-gray-input" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-20 origin-top-right dark:bg-selector-dark-blue dark:text-white rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {[10, 20, 50, 100].map(count => (
            <MenuItem key={count}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setItemsPerPage(count);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-selector-dark-blue"
              >
                {count}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default ShowCount;
