import { use, useEffect, useState } from 'react';
import Table from '../ui/Table';
import getShiftColor from '../utils/utils';

const WorkerTable = ({ workerPromise }) => {
  const workerData = use(workerPromise);
  const workers = workerData.data || workerData || [];
  const ITEMS_PER_PAGE_OPTIONS = [10, 20];
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [workers.length]);

  const totalPages = Math.max(1, Math.ceil(workers.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWorkers = workers.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageSizeChange = (event) => {
    const newSize = Number(event.target.value);
    setItemsPerPage(newSize);
    setCurrentPage(1);
  };

  const workerColumns = [
    { header: 'Id', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Service Type', accessor: 'service_type' },
    { header: 'Expertise', accessor: 'expertise_of_service' },
    {
      header: 'Rating',
      accessor: (item) => `${item.rating}/5`,
    },
    {
      header: 'Status',
      accessor: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status !== 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
          {item.is_active ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    { header: 'NID', accessor: 'nid' },
    {
      header: 'Shift',
      accessor: (item) => {
        const shiftColors = getShiftColor(item.shift);
        return (
          <span
            style={{
              backgroundColor: shiftColors.background,
              color: shiftColors.text,
              border: `1px solid ${shiftColors.border}`,
            }}
            className='px-3 py-1 rounded-full text-xs font-medium'>
            {item.shift || 'Not Set'}
          </span>
        );
      },
    },
    { header: 'Address', accessor: 'address' },
  ];
  const handleEdit = (worker) => {
    console.log('Edit worker:', worker);
  };

  const handleDelete = () => {
    console.log('data delete');
  };

  const handleView = (worker) => {
    console.log('View worker:', worker);
  };

  return (
    <div className='space-y-4'>
      <Table
        title='Workers List'
        data={paginatedWorkers}
        columns={workerColumns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />

      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <span>Rows per page:</span>
          <select
            value={itemsPerPage}
            onChange={handlePageSizeChange}
            className='border rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-200'>
            {ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className='ml-4'>
            Showing{' '}
            {workers.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} -
            {Math.min(currentPage * itemsPerPage, workers.length)} of{' '}
            {workers.length}
          </span>
        </div>

        <div className='flex items-center justify-end gap-2'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed'>
            Previous
          </button>
          <span className='text-sm text-gray-600'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerTable;
