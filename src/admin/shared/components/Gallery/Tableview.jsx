/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import moment from 'moment-timezone';
import { getFilterOptions } from '../../services/apigallery/apigallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Tableview = (props) =>{
  const {tabledata,editfrom,handledelete,cusfilter,onPage,first,rows, page, filtervalues, loading}=props

  const [tempFilterValues, setTempFilterValues] = useState(filtervalues);
  const [filterOptions,setFilterOptions] = useState([]);

  useEffect(() => {
    setTempFilterValues(filtervalues);
  }, [filtervalues]);


  const actionbotton = (rowData) => {
    return (
      <div className="flex justify-center gap-3">
        <button
          onClick={() => editfrom(rowData)}
          className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50 cursor-pointer"
        >
          <i className="text-lg text-blue-600 fi fi-rr-pen-circle"></i>
        </button>
        <button
          onClick={() => handledelete(rowData?._id)}
          className="p-2 transition-colors duration-200 rounded-full hover:bg-red-50 cursor-pointer"
        >
          <i className="text-lg text-red-600 fi fi-rr-trash"></i>
        </button>
      </div>
    );
  };

  const image = (rowData) => {
    return (
      <div className="flex justify-center">
        <div className="relative z-0 w-24 h-16 group">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            {rowData.Src.map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img
                  src={`${apiurl()}/${img}`}
                  className="object-cover h-16 transition-transform duration-200 rounded-lg shadow-sm w-28 group-hover:scale-105"
                  alt={rowData.Product_Name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 transition-all duration-200 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-10" />
        </div>
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

  const getOption = async (key)=>{
    var filterOptions = await getFilterOptions(key.field);
    console.log(filterOptions)
    var formatoption = filterOptions[key.field].map( val =>({ label:val,value: key.format == "Date"? moment(val).format('YYYY-MM-DD') :val}));
    setFilterOptions(formatoption);
  }

  const Filter = (key) => (
    <div onClick={()=>getOption(key)}>
      <MultiSelect value={tempFilterValues[key.field]} options={filterOptions} optionLabel="value" className="p-column-filter" virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={1}
        filter onChange={(e) => setTempFilterValues(prev => ({ ...prev, [key.field]: e.value }))} placeholder={`Select ${key.field.charAt(0).toUpperCase() + key.field.slice(1)}`}
          panelFooterTemplate={
          <div className="flex justify-between mt-2 p-2">
            <Button label="Clear" onClick={() => handleClearFilters(key.field)} className="p-1 text-white bg-blue-500 w-[45%]" />
            <Button label="Apply" onClick={() => handleApplyFilters(key.field)} className="p-1 mx-1 text-white bg-blue-500 w-[45%]" />
          </div>
        } 
      />
    </div>
  );

  const columns = [
    {field: 'Title', header: 'Title',filter:true,width : "200px"},
    {field: 'Event_Date', header: 'Event Date',filter:true, format: "Date",width : "120px"},
    {field: 'Src_Type', header: 'Src Type', width : "120px"},
  ];

  return(
    <div >
      <div >
        <DataTable value={tabledata} scrollable scrollHeight="630px" loading={loading} className='!text-sm' stateStorage="session" stateKey="dt-state-demo-local" > 
          <Column header="Action" body={actionbotton} style={{ minWidth: "80px" }} />
          <Column header="Src" body={image} style={{ minWidth: "150px" }} />
          {columns.map((col, i) => (
            <Column key={i} field={col.field} header={col.header} style={{ minWidth: col.width }}
            filter={col.filter} filterElement={Filter(col)} showFilterMenuOptions={false} showApplyButton={false} showClearButton={false} showFilterMatchModes={false} 
            body={(rowData,meta) => { if(col.format =="Date"){ return moment(rowData[meta.field]).format("YYYY-MM-DD")} else if(col.format == "HTML"){return <div dangerouslySetInnerHTML={{ __html: rowData[meta.field] }} />} else {return rowData[meta.field]}} }  />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default Tableview;