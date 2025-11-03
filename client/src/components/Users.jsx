import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/api';
import './Users.css'; // <-- añadida importación

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    const formatDateSlash = (dateInput) => {
        const d = new Date(dateInput);
        if (isNaN(d)) return dateInput;
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de Contratación</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.EmployeeID}>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{formatDateSlash(user.HireDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;