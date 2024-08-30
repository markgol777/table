import { Input } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { SearchProps } from '~/app/utils/interface/table'

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full max-w-md px-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="w-[218px] h-[32px] pl-10 pr-3 rounded-lg border border-gray bg-white/5 dark:text-white text-sm text-gray-900 dark:border-white dark:placeholder-white focus:outline-none"
        />
        <MagnifyingGlassIcon
          className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-input dark:text-white"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Search