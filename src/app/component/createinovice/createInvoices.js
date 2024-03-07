// src/pages/CreateInvoice.js
"use client";
import React, { useState } from 'react';
import './createInvoices.css'; 
import PreviewInvoice from '../PreviewInvoice/PreviewInvoice';

const CreateInvoice = () => {
  const initialItems = [
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "inprogress" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "cancelled" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "cancelled" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "cancelled" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
    { patient: "John Doe", time: "09:00 AM", date: "2024-03-10", total: "$100", status: "complete" },
   
    // Add more demo items as needed
  ];

  
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(10);
  const [sortByDate, setSortByDate] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewMoreClick = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const handleSortByDateChange = (e) => {
    setSortByDate(e.target.value);
  };

  const getStatusColorClass = (status) => {
    switch (status.toLowerCase()) {
      case 'inprogress':
        return 'in-progress-cell';
      case 'cancelled':
        return 'cancelled-cell';
      case 'complete':
        return 'completed-cell';
      default:
        return '';
    }
  };
  

  const filteredItems = initialItems.filter((item) =>
    item.patient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = sortByDate
    ? filteredItems.sort((a, b) => new Date(a.date) - new Date(b.date))
    : filteredItems;

  const displayedItems = sortedItems.slice(0, visibleItems);

  return (
    <div className="invoice-container">
      <div className="create-invoice-container">
        <h1>Invoice</h1>
        <h2>Invoice list</h2>

        <div className="invoice-card">
          <div className="search-bar-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by patient name..."
              className="search-bar"
            />
            <select
              value={sortByDate}
              onChange={handleSortByDateChange}
              className="date-sort-dropdown"
            >
              <option value="" disabled>
                Sort by date
              </option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Time</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
           
<tbody>
  {displayedItems.map((item, index) => (
    <tr key={index}>
      <td>{item.patient}</td>
      <td>{item.time}</td>
      <td>{item.date}</td>
      <td>{item.total}</td>
      <td> <span className={getStatusColorClass(item.status)}> {item.status}</span></td>
    </tr>
  ))}
</tbody>

          </table>

          {filteredItems.length > visibleItems && (
            <button className="view-more-button" onClick={handleViewMoreClick}>
              View More
            </button>
          )}
        </div>
      </div>

      {/* PreviewInvoice component on the right side */}
      {/* <div style={{width:'30%'}}> */}
        <PreviewInvoice />
      {/* </div>s */}
    </div>
  );
};

export default CreateInvoice;