import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { getFilterOptions } from '../../services/apilab/apilab';


const LoadingSkeleton = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, idx) => (
      <div key={idx} className="flex items-center gap-4 p-4 bg-white">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        
        <div className="w-24 h-16 bg-gray-200 rounded-lg animate-pulse" />
        
        <div className="flex-1 space-y-3">
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
        
        <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
      </div>
    ))}
  </div>
);

const Tableview = (props) => {
  const { tabledata, editfrom, handledelete, cusfilter, filtervalues, onPage, page, loading } = props;
  const [tempFilterValues, setTempFilterValues] = useState(filtervalues);
  const [filterOptions, setFilterOptions] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setTempFilterValues(filtervalues);
  }, [filtervalues]);

  useEffect(() => {
    columns.filter(col => col.filter).forEach(async (col) => {
      const options = await getFilterOptions(col.field);
      setFilterOptions(prev => ({
        ...prev,
        [col.field]: options[col.field].map(val => ({
          label: val,
          value: val
        }))
      }));
    });
  }, []);

  const actionbotton = (rowData) => {
    return (
      <div className="flex justify-center gap-2">
        <button
          onClick={() => editfrom(rowData)}
          className="p-2 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:scale-110"
          title="Edit Lab"
        >
          <i className="text-lg text-blue-600 fi fi-rr-pen-circle"></i>
        </button>
        <button
          onClick={() => handledelete(rowData?._id)}
          className="p-2 transition-all duration-200 rounded-lg hover:bg-red-50 hover:scale-110"
          title="Delete Lab"
        >
          <i className="text-lg text-red-600 fi fi-rr-trash"></i>
        </button>
      </div>
    );
  };

  const labProfileTemplate = (rowData) => {
    const imageUrl = rowData.Image ? `${apiurl()}/${rowData.Image}` : null;
    
    return (
      <div className="flex items-center gap-4 py-2">
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              className="object-cover w-16 h-16 border-2 border-gray-200 rounded-lg shadow-sm"
              alt={rowData.Lab_name}
            />
          ) : (
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white font-bold text-xl shadow-sm">
              <i className="fi fi-rr-flask text-2xl"></i>
            </div>
          )}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
            <i className="fi fi-rr-computer text-xs text-white"></i>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-lg text-gray-900 truncate">
              {rowData.Lab_name}
            </h3>
            <span className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-sm">
              {rowData.Department_details?.Department_shortName || 'N/A'}
            </span>
          </div>
          <p className="text-sm text-gray-600 font-medium mb-1">
            {rowData.Department_details?.Department_name}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <i className="fi fi-rr-users text-blue-500"></i>
              <span className="font-medium">Capacity: {rowData.Capacity}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const equipmentTemplate = (rowData) => {
    return (
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <i className="text-purple-500 fi fi-rr-settings-sliders text-sm mt-1"></i>
          <div className="flex-1">
            <p className="text-sm text-gray-800 line-clamp-3" title={rowData.Equipment}>
              {rowData.Equipment}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const descriptionTemplate = (rowData) => {
    return (
      <div className="max-w-xs">
        <div className="flex items-start gap-2">
          <i className="text-green-500 fi fi-rr-document text-sm mt-1"></i>
          <div className="flex-1">
            <p className="text-sm text-gray-600 line-clamp-3" title={rowData.Description}>
              {rowData.Description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const statusTemplate = (rowData) => {
    const getStatusConfig = (status) => {
      switch (status?.toLowerCase()) {
        case 'active':
          return {
            bg: 'bg-green-100',
            text: 'text-green-700',
            icon: 'fi fi-rr-check-circle',
            iconColor: 'text-green-500'
          };
        case 'inactive':
          return {
            bg: 'bg-gray-100',
            text: 'text-gray-700',
            icon: 'fi fi-rr-pause-circle',
            iconColor: 'text-gray-500'
          };
        case 'maintenance':
          return {
            bg: 'bg-orange-100',
            text: 'text-orange-700',
            icon: 'fi fi-rr-tool',
            iconColor: 'text-orange-500'
          };
        default:
          return {
            bg: 'bg-blue-100',
            text: 'text-blue-700',
            icon: 'fi fi-rr-info-circle',
            iconColor: 'text-blue-500'
          };
      }
    };

    const config = getStatusConfig(rowData.Status);

    return (
      <div className="flex items-center justify-center">
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
          <i className={`${config.icon} ${config.iconColor} text-xs`}></i>
          {rowData.Status}
        </span>
      </div>
    );
  };

  const dateTemplate = (rowData) => {
    return (
      <div className="flex items-center gap-2">
        <i className="text-gray-400 fi fi-rr-calendar text-sm"></i>
        <span className="text-sm text-gray-700">
          {moment(rowData.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
    );
  };

  const handleApplyFilters = (key) => {
    cusfilter(key, tempFilterValues[key]);
    onPage(page);
  };

  const handleClearFilters = (key) => {
    setTempFilterValues(prev => ({ ...prev, [key]: null }));
    cusfilter(key, null);
    onPage(page);
  };

  const columns = [
    { field: 'Lab_name', header: 'Lab Details', filter: true, body: labProfileTemplate },
    { field: 'Equipment', header: 'Equipment', filter: true, body: equipmentTemplate },
    { field: 'Description', header: 'Description', filter: true, body: descriptionTemplate },
    { field: 'createdAt', header: 'Created Date', body: dateTemplate, filter: true },
    { field: 'Status', header: 'Status', filter: true, body: statusTemplate }
  ];

  const FilterPanel = () => (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${showFilterPanel ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
            <button
              onClick={() => setShowFilterPanel(false)}
              className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
            >
              <i className="text-gray-600 fi fi-rr-cross"></i>
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
          {columns.filter(col => col.filter).map((col, index) => (
            <div key={index} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {col.header}
              </label>
              <MultiSelect
                value={tempFilterValues[col.field]}
                options={filterOptions[col.field] || []}
                className="w-full"
                onChange={(e) => setTempFilterValues(prev => ({ ...prev, [col.field]: e.value }))}
                placeholder={`Select ${col.header}`}
                filter
                showClear
                maxSelectedLabels={3}
                panelClassName="!w-72"
              />
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-gray-50">
          <div className="flex gap-3">
            <button
              onClick={() => {
                Object.keys(tempFilterValues).forEach(key => handleClearFilters(key));
                setShowFilterPanel(false);
              }}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Clear All
            </button>
            <button
              onClick={() => {
                Object.keys(tempFilterValues).forEach(key => handleApplyFilters(key));
                setShowFilterPanel(false);
              }}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 border border-transparent rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TableHeader = () => (
    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <i className="text-purple-600 fi fi-rr-flask text-lg"></i>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Labs & Facilities Management</h2>
            <p className="text-sm text-gray-600">Manage your Labs & Facilities</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilterPanel(true)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <i className="mr-2 fi fi-rr-filter"></i>
            Filters
            {Object.values(tempFilterValues).some(v => v && v.length > 0) && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium text-white bg-purple-600 rounded-full">
                {Object.values(tempFilterValues).filter(v => v && v.length > 0).length}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              Object.keys(tempFilterValues).forEach(key => handleClearFilters(key));
              setSearchValue('');
            }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <i className="mr-2 fi fi-rr-refresh"></i>
            Reset
          </button>
        </div>
      </div>

      {Object.entries(tempFilterValues).some(([_, value]) => value && value.length > 0) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(tempFilterValues).map(([key, value]) => {
            if (value && value.length > 0) {
              return value.map((v, i) => (
                <span
                  key={`${key}-${i}`}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full"
                >
                  {key}: {v}
                  <button
                    onClick={() => {
                      setTempFilterValues(prev => ({
                        ...prev,
                        [key]: prev[key].filter(item => item !== v)
                      }));
                      handleApplyFilters(key);
                    }}
                    className="ml-2 hover:text-purple-900"
                  >
                    <i className="fi fi-rr-cross-small"></i>
                  </button>
                </span>
              ));
            }
            return null;
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white border shadow-lg rounded-xl overflow-hidden">
      <TableHeader />
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="overflow-hidden">
          <DataTable
            value={tabledata}
            scrollable
            scrollHeight="680px"
            className="!text-sm lab-table"
            rowClassName={(rowData, { rowIndex }) => 
              `${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-purple-50 transition-all duration-200 cursor-pointer`
            }
            showGridlines={false}
            responsiveLayout="scroll"
          >
            <Column
              header="Actions"
              body={actionbotton}
              headerClassName="text-gray-700 bg-gradient-to-r from-purple-100 to-pink-200 font-semibold"
              className="text-center"
              style={{ width: '120px' }}
            />
            {columns.map((col, i) => (
              <Column
                key={i}
                field={col.field}
                header={col.header}
                body={col.body}
                headerClassName="text-gray-700 bg-gradient-to-r from-purple-100 to-pink-200 font-semibold"
                style={{ minWidth: i === 0 ? '320px' : i === 1 || i === 2 ? '250px' : '180px' }}
              />
            ))}
          </DataTable>
        </div>
      )}
      <FilterPanel />
      
      <style jsx>{`
        .lab-table .p-datatable-header {
          background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Tableview;