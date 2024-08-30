export interface UserItemProps {
  trackingId: number;
  productImage: string;
  productName: string;
  customer: string;
  date: string;
  amount: number;
  paymentMode: string;
  status: string;
  onDelete: (id: number) => void;
}

export interface ShowCountProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

export interface HeaderProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  darkTheme: boolean;
  toggleDarkTheme: () => void;
}

export interface UserTableProps {
  itemsPerPage: number;
  searchQuery: string;
}

export interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export interface DarkModeSwitchProps {
  darkTheme: boolean;
  toggleDarkTheme: () => void;
}

export interface Table {
  darkTheme: boolean;
  toggleDarkTheme: () => void;
}
