import React from "react";

interface TableColumn {
    label: string;
    accessor: string | boolean;
}

interface TableData {
    [key: string]: any;
}

interface TableProps {
    data: TableData[];
    columns: TableColumn[];
}

export default function Table({ data, columns }: TableProps): JSX.Element {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column, index) => (
                                <td key={index} className="px-6 py-4 whitespace-nowrap">
                                    {row[column.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};