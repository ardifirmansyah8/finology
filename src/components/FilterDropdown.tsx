interface Props {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FilterDropdown = ({
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
}: Props) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    <select
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(e.target.value)
      }
      className=" w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg bg-white min-w-48"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FilterDropdown;
