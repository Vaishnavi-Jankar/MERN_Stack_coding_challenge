import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState('03'); // Default to March

    useEffect(() => {
        fetchTransactions();
    }, [month]);

    const fetchTransactions = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/transactions?month=${month}`);
            setTransactions(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>MERN Stack Coding Challenge</h1>

            <label>Select Month: </label>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

            {/* Transactions Table */}
            <h2>Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id}>
                            <td>{t.title}</td>
                            <td>{t.description}</td>
                            <td>{t.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
