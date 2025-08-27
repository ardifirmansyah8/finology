import { Filter } from "lucide-react";

interface Props {
  onClear: () => void;
  show: boolean;
}

const ClearBtn = ({ onClear, show }: Props) => {
  if (!show) return null;

  return (
    <button
      onClick={onClear}
      className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
      type="button"
    >
      <Filter className="h-4 w-4" />
      Clear Filters
    </button>
  );
};

export default ClearBtn;
