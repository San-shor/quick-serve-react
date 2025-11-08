import { Edit2, Eye, Trash2 } from 'lucide-react';
import React from 'react';
import Card from './Card';
import colors from './color/color';

const Table = ({
  data = [],
  columns = [],
  actions = true,
  onView,
  onEdit,
  onDelete,
  className = '',
}) => {
  const getValue = (item, accessor) => {
    if (typeof accessor === 'function') {
      return accessor(item);
    }
    return item[accessor];
  };

  return (
    <Card formCard={true} className={`overflow-hidden ${className}`}>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr
              className='border-b'
              style={{
                borderColor: colors.neutral[200],
                backgroundColor: colors.neutral[50],
              }}>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider'
                  style={{ color: colors.neutral[600] }}>
                  {column.header}
                </th>
              ))}
              {actions && (
                <th
                  className='px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider'
                  style={{ color: colors.neutral[600] }}>
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr
                  key={item.id || rowIndex}
                  className='transition-colors duration-150 hover:bg-neutral-50'
                  style={{
                    backgroundColor: 'transparent',
                    '--tw-bg-opacity': 1,
                  }}>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className='px-6 py-4 whitespace-nowrap text-sm'
                      style={{ color: colors.neutral[700] }}>
                      {getValue(item, column.accessor)}
                    </td>
                  ))}
                  {actions && (
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <div className='flex justify-end space-x-2'>
                        {onView && (
                          <button
                            onClick={() => onView(item)}
                            className='p-1 rounded transition-colors'
                            style={{
                              color: colors.accent[500],
                              '&:hover': { color: colors.accent[600] },
                            }}
                            title='View'>
                            <Eye size={16} />
                          </button>
                        )}
                        {onEdit && (
                          <button
                            onClick={() => onEdit(item)}
                            className='p-1 rounded transition-colors'
                            style={{
                              color: colors.success[500],
                            }}
                            title='Edit'>
                            <Edit2 size={16} />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(item)}
                            className='p-1 rounded transition-colors'
                            style={{
                              color: colors.error[500],
                            }}
                            title='Delete'>
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className='px-6 py-8 text-center text-sm'
                  style={{ color: colors.neutral[500] }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
