import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Mode Hotspots</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">District</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Cell/Sector</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Street</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Cause</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">More</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-left">Gisozi</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-green-500">KG458ST</div>
                </td>
                <td className="p-2">
                  <div className="text-left">SEVERE</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">Brake Fail</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">2.250</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-left">Gahanga</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-green-500">KN252ST</div>
                </td>
                <td className="p-2">
                  <div className="text-left">Normal</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">Driving under Alcohol Influences</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">5.785</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-left">Muhima</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-green-500">KK452ST</div>
                </td>
                <td className="p-2">
                  <div className="text-left">Dangerous</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">Mechanical Fault</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">12.589</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-left">Remera</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-green-500">KG124ST</div>
                </td>
                <td className="p-2">
                  <div className="text-left">Severe</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">Uknown</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">6.548</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">View</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-left">Kimironko</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-green-500">KG182St</div>
                </td>
                <td className="p-2">
                  <div className="text-left">Dengerous</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">Driving under Alcohol Influences</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">3.558</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-sky-500">View</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
