// components/WorkerList.jsx
import React, { useState } from 'react';
import Table from '../ui/Table';

const WorkerList = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1234567890',
      serviceType: 'Plumbing',
      expertise: 8,
      rating: 4.5,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1234567891',
      serviceType: 'Cleaning',
      expertise: 9,
      rating: 4.8,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+1234567892',
      serviceType: 'Electrician',
      expertise: 7,
      rating: 4.2,
      status: 'Inactive',
    },
  ]);

  const workerColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Service Type', accessor: 'serviceType' },
    { header: 'Expertise', accessor: 'expertise' },
    {
      header: 'Rating',
      accessor: (item) => `${item.rating}/5`,
    },
    {
      header: 'Status',
      accessor: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
          {item.status}
        </span>
      ),
    },
  ];

  const handleEdit = (worker) => {
    console.log('Edit worker:', worker);
  };

  const handleDelete = (worker) => {
    if (window.confirm(`Delete ${worker.name}?`)) {
      setWorkers(workers.filter((w) => w.id !== worker.id));
    }
  };

  const handleView = (worker) => {
    console.log('View worker:', worker);
  };

  return (
    <div className='p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Workers Management</h1>
        <p className='text-gray-600'>Manage all registered workers</p>
      </div>

      <Table
        title='Workers List'
        data={workers}
        columns={workerColumns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default WorkerList;
