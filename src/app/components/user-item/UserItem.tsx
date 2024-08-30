"use client";

import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Button } from '@headlessui/react';
import { UserItemProps } from '~/app/utils/interface/table';
import Image from 'next/image';

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
      <td className="whitespace-nowrap px-6 py-4 font-medium w-[10%]">#{trackingId}</td>
      <td className="whitespace-nowrap flex items-center px-6 py-4 w-[20%]">
        {/* className="w-8 h-8 object-cover rounded mr-2" */}
        <Image src={productImage} alt={productName} height={32} width={32} />
        {productName.length > 15 ? productName.slice(0, 15) + '...' : productName}
      </td>
      <td className="whitespace-nowrap px-6 py-4 w-[15%]">{customer}</td>
      <td className="whitespace-nowrap px-6 py-4 w-[10%]">{date}</td>
      <td className="whitespace-nowrap px-6 py-4 w-[10%]">${amount.toFixed(2)}</td>
      <td className="whitespace-nowrap px-6 py-4 w-[15%]">{paymentMode}</td>
      <td className={`whitespace-nowrap px-6 py-4 w-[10%] ${status}`}>
        <div className="status-container">{status}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 flex gap-2 w-[10%]">
        <Button
          onClick={() => alert(`Edit ${trackingId}`)}
          className="text-blue-500 h-6 text-purple"
        >
          <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button
          onClick={() => onDelete(trackingId)}
          className="text-red-delete hover:text-red-700 h-6"
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </td>
    </tr>
  );
};

export default UserItem;
