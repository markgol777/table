"use client";

import React, { useState, useEffect } from 'react';
import UserItem from '~/app/components/user-item/UserItem';
import Pagination from '~/app/components/pagination/Pagination';
import { UserTableProps } from '~/app/utils/interface/table';

import mockData from '~/app/mockData/mockData.json';

const UserTable: React.FC<UserTableProps> = ({ itemsPerPage, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(mockData);

  const filteredData = data.filter(item =>
    item["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const formattedItems = currentItems.map((item) => ({
    trackingId: item["Tracking ID"],
    productImage: item["Product Image"],
    productName: item["Product Name"],
    customer: item["Customer"],
    date: item["Date"],
    amount: item["Amount"],
    paymentMode: item["Payment Mode"],
    status: item["Status"]
  }));

  const handleDelete = (trackingId: number) => {
    const updatedData = data.filter(item => item["Tracking ID"] !== trackingId);
    setData(updatedData);

    const newTotalPages = Math.ceil(updatedData.length / itemsPerPage);

    if (currentPage > newTotalPages) {
      setCurrentPage(Math.max(newTotalPages, 1));
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm font-light">
        <thead>
          <tr className="font-medium dark:text-white">
            <th className="px-6 py-4">Tracking ID</th>
            <th className="px-6 py-4">Product</th>
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Payment Mode</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {formattedItems.map((item) => (
            <UserItem key={item.trackingId} {...item} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserTable;
