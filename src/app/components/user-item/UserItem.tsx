"use client";

import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Button } from '@headlessui/react';
import { UserItemProps } from '~/app/utils/interface/table';

const UserItem: React.FC<UserItemProps> = ({
  trackingId,
  productImage,
  productName,
  customer,
  date,
  amount,
  paymentMode,
  status,
  onDelete
}) => {
  return (
    <tr className="odd:bg-odd-product-light-purple dark:odd:bg-odd-product-dark-blue even:bg-transparent dark:text-white">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{trackingId}</td>
      <td className="whitespace-nowrap flex items-center px-6 py-4">
        <img src={productImage} alt={productName} className="w-8 h-8 object-cover rounded mr-2" />
        {productName}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{customer}</td>
      <td className="whitespace-nowrap px-6 py-4">{date}</td>
      <td className="whitespace-nowrap px-6 py-4">${amount.toFixed(2)}</td>
      <td className="whitespace-nowrap px-6 py-4">{paymentMode}</td>
      <td className="whitespace-nowrap px-6 py-4">{status}</td>
      <td className="whitespace-nowrap px-6 py-4 flex gap-2">
        <Button
          onClick={() => alert(`Edit ${trackingId}`)}
          className="text-blue-500 hover:text-blue-700 h-8"
        >
          <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button
          onClick={() => onDelete(trackingId)}
          className="text-red-500 hover:text-red-700 h-8"
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </td>
    </tr>
  );
};

export default UserItem;
