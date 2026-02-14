import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const EmployeeDetails = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees);

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return (
      <div className="p-8 text-center text-red-500">Employee not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#982598] flex justify-center items-center p-6">
      <div className="w-full max-w-3xl">
        <Card>
          {/* Header Section */}
          <div className="border-b border-[#E491C9] pb-4 mb-6">
            <h2 className="text-3xl font-bold text-[#15173D]">
              {employee.name}
            </h2>
            <p className="text-[#982598] text-sm mt-1">
              {employee.company.name}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#15173D]">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600">{employee.email}</p>
            </div>

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-gray-600">{employee.phone}</p>
            </div>

            <div>
              <p className="font-semibold">Website</p>
              <p className="text-sm text-gray-600">{employee.website}</p>
            </div>

            <div>
              <p className="font-semibold">City</p>
              <p className="text-sm text-gray-600">{employee.address.city}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDetails;
