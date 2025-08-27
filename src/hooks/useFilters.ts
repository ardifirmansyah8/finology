import { useMemo, useState } from "react";

import type { User } from "../types";

export const useFilters = (users: User[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const { cities, companies } = useMemo(() => {
    const uniqueCities = [
      ...new Set(
        users
          .map((user) => user.address?.city)
          .filter((city): city is string => Boolean(city))
      ),
    ].sort();

    const uniqueCompanies = [
      ...new Set(
        users
          .map((user) => user.company?.name)
          .filter((company): company is string => Boolean(company))
      ),
    ].sort();

    return {
      cities: uniqueCities,
      companies: uniqueCompanies,
    };
  }, [users]);

  const filteredUsers = useMemo((): User[] => {
    return users.filter((user) => {
      const matchesSearch =
        searchTerm === "" ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCity =
        selectedCity === "" || user.address?.city === selectedCity;

      const matchesCompany =
        selectedCompany === "" || user.company?.name === selectedCompany;

      return matchesSearch && matchesCity && matchesCompany;
    });
  }, [users, searchTerm, selectedCity, selectedCompany]);

  const clearAllFilters = (): void => {
    setSearchTerm("");
    setSelectedCity("");
    setSelectedCompany("");
  };

  const hasActiveFilters =
    searchTerm !== "" || selectedCity !== "" || selectedCompany !== "";

  return {
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
  };
};
