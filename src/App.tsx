import { Building, MapPin, Users } from "lucide-react";

import ErrorMessage from "./components/ui/ErrorMessage";
import Spinner from "./components/ui/Spinner";
import UserGrid from "./components/UserGrid";
import { useFilters } from "./hooks/useFilters";
import { useUsers } from "./hooks/useUsers";
import SearchInput from "./components/filters/SearchInput";
import FilterDropdown from "./components/filters/FilterDropdown";
import ClearBtn from "./components/filters/ClearBtn";

function App() {
  const { users, loading, error, refetch } = useUsers();
  const {
    searchTerm,
    setSearchTerm,
    selectedCity,
    setSelectedCity,
    selectedCompany,
    setSelectedCompany,
    cities,
    companies,
    filteredUsers,
    clearAllFilters,
    hasActiveFilters,
  } = useFilters(users);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
          </div>
          <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4">
            <SearchInput
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            <FilterDropdown
              value={selectedCity}
              onChange={setSelectedCity}
              options={cities}
              placeholder="All Cities"
              icon={MapPin}
            />

            <FilterDropdown
              value={selectedCompany}
              onChange={setSelectedCompany}
              options={companies}
              placeholder="All Companies"
              icon={Building}
            />

            <ClearBtn onClear={clearAllFilters} show={hasActiveFilters} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredUsers.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">{users.length}</span>{" "}
            users
          </p>
        </div>

        <UserGrid users={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
