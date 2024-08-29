"use client";

import React from "react";
import { PaginationProps } from '~/app/utils/interface/table';
import { Button } from '@headlessui/react';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav aria-label="Page navigation" className="flex justify-center mt-4">
      <ul className="flex list-none p-0">
        <li>
          <Button
            onClick={() => handleClick(currentPage - 1)}
            className={`relative block rounded px-3 py-1.5 text-sm dark:text-white ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-black hover:bg-gray-100"
            }`}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
          >
            Previous
          </Button>
        </li>
        {totalPages > 0 &&
          Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <li key={number}>
              <Button
                onClick={() => handleClick(number)}
                className={`relative block px-3 py-1.5 text-sm rounded ${
                  currentPage === number
                    ? "text-white bg-purple font-semibold"
                    : "text-black dark:text-white bg-gray-200 hover:bg-gray-300"
                }`}
                aria-current={currentPage === number ? "page" : undefined}
              >
                {number}
              </Button>
            </li>
          ))}
        <li>
          <Button
            onClick={() => handleClick(currentPage + 1)}
            className={`relative block rounded px-3 py-1.5 dark:text-white text-sm ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-black hover:bg-gray-100"
            }`}
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
