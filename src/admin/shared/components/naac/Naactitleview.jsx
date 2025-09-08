/* eslint-disable react/prop-types */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';

const Naactitleview = (props) => {
  const { naacTitletabledata, editNaacTitle, handleDeleteNaacTitle, cusfilter, filtervalues, onPage, page, setIsDialogVisible, isDialogVisible, naactitleTotalRecords } = props;

  const [tempFilterValues, setTempFilterValues] = useState(filtervalues);
  const [filterOptions, setFilterOptions] = useState([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(naactitleTotalRecords / itemsPerPage);

  useEffect(() => {
    setTempFilterValues(filtervalues);
  }, [filtervalues]);

  const actionButton = (rowData) => {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => editNaacTitle(rowData)}
          className="inline-flex items-center text-xl font-medium text-blue-600 gap-x-1 decoration-2 cursor-pointer"
        >
          <i className="fi fi-rr-pen-circle"></i>
        </button>
        <button
          onClick={() => handleDeleteNaacTitle(rowData?._id)}
          className="inline-flex items-center text-xl font-medium text-red-600 gap-x-1 decoration-2 cursor-pointer"
        >
          <i className="fi fi-rr-trash"></i>
        </button>
      </div>
    );
  };

  const handleApplyFilters = (key) => {
    cusfilter(key, tempFilterValues[key]);
    onPage(page);
  };

  const handleClearFilters = (key) => {
    setTempFilterValues((prev) => ({ ...prev, [key]: null }));
    cusfilter(key, null);
    onPage(page);
  };

  const getOption = async (key) => {
    const filterOptions = await getFilterOptionsNaacTitle(key.field);
    const formatOption = filterOptions[key.field].map((val) => ({
      label: val,
      value: val,
    }));
    setFilterOptions(formatOption);
  };

  const Filter = (key) => (
    <div onClick={() => getOption(key)}>
      <MultiSelect
        value={tempFilterValues[key.field]}
        options={filterOptions}
        optionLabel="value"
        className="p-column-filter"
        virtualScrollerOptions={{ itemSize: 43 }}
        maxSelectedLabels={1}
        filter
        onChange={(e) =>
          setTempFilterValues((prev) => ({ ...prev, [key.field]: e.value }))
        }
        placeholder={`Select ${key.field.charAt(0).toUpperCase() + key.field.slice(1)}`}
        panelFooterTemplate={
          <div className="flex justify-between p-2 mt-2">
            <Button
              label="Clear"
              onClick={() => handleClearFilters(key.field)}
              className="p-1 text-white bg-blue-500 w-[45%]"
            />
            <Button
              label="Apply"
              onClick={() => handleApplyFilters(key.field)}
              className="p-1 mx-1 text-white bg-blue-500 w-[45%]"
            />
          </div>
        }
      />
    </div>
  );

  const columns = [
    { field: 'naactitle', header: 'Naac Title', filter: true },
    { field: 'naacsubtitle', header: 'Naac Title', filter: true },
    { field: 'Status', header: 'Status', filter: true },
  ];

  return (
    <div>
      <Dialog
        visible={isDialogVisible}
        onHide={() => setIsDialogVisible(false)}
        header="Naac Title Table"
        style={{ width: '80vw', maxWidth: '1200px' }}
        modal
        draggable={true}
        resizable={false}
      >
        <div className="mb-4 text-lg font-semibold text-end">Total Records: {naactitleTotalRecords}</div>
        <DataTable
          rowClassName={() => 'border-b border-secondary'}
          selectionMode="single"
          value={naacTitletabledata}
          scrollable
          scrollHeight="400px"
          className="!text-sm"
          stateStorage="session"
          stateKey="dt-state-naac-title-local"
        >
          <Column header="Action" body={actionButton} />
          {columns.map((col, i) => (
            <Column
              key={i}
              field={col.field}
              header={col.header}
              filter={col.filter}
              filterElement={Filter(col)}
              showFilterMenuOptions={false}
              showApplyButton={false}
              showClearButton={false}
              showFilterMatchModes={false}
            />
          ))}
        </DataTable>
        {/* <div className="flex items-center justify-center w-full p-4">
          {naactitleTotalRecords > 0 && (
            <Paginator
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={totalPages}
              onChange={(page) => onPage(page)}
            />
          )}
        </div> */}
        
      </Dialog>
    </div>
  );
};

export default Naactitleview;