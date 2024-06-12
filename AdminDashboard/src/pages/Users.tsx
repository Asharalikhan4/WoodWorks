import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { BASE_URL } from "../utils/constants";

interface User {
  _id: string;
  name: string;
  email: string;
};

const columns = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
];

export default function Users(): JSX.Element {

  console.log("Users");

  console.log("Base Url", BASE_URL)

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/v1/admin/user/all-users`);
        const data = await response.json();
        setUsers(data?.Users);
        console.log("Users", data?.Users);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <Table data={users} columns={columns} />
    </div>
  )
};