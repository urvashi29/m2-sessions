import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/actions/action";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Employee = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce logic
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  // Filter (Memoized)
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [debouncedSearch]);

  // Pagination (Memoized)
  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * 6;
    return filteredEmployees.slice(start, start + 6);
  }, [filteredEmployees, currentPage]);

  const totalPages = Math.ceil(filteredEmployees.length / 6);

  return (
    <div className="p-8">
      {/* Search */}
      <input
        type="text"
        placeholder="Search employee..."
        className="border p-2 rounded w-full mb-6"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedEmployees.map((emp) => (
          <Link to={`/employees/${emp.id}`}>
            <Card key={emp.id}>
              <h3 className="text-lg font-semibold">{emp.name}</h3>
              <p className="text-sm text-gray-600">{emp.email}</p>
              <p className="text-sm text-gray-500">{emp.company.name}</p>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-[#982598] text-white" : "border"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Employee;
