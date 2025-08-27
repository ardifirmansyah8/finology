import { Search } from "lucide-react";

interface Props {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchInput = ({ searchTerm, onSearchChange }: Props) => (
  <div className="relative flex-1">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onSearchChange(e.target.value)
      }
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
    />
  </div>
);

export default SearchInput;
