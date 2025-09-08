import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState } from "react";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";

export default function TableView({ tableData, loading, onPage, page, editfrom, handledelete, first }) {
  const [contentModal, setContentModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const statusTemplate = (rowData) => {
    const statusClass = rowData.Status === 'Active' ? 'text-green-600' : 'text-red-600';
    return <span className={statusClass}>{rowData.Status}</span>;
  };

  const titleTemplate = (rowData) => {
    return <span className="font-medium">{rowData.Title}</span>;
  };

  const dateTemplate = (rowData) => {
    const date = new Date(rowData.DateandTime);
    return <span>{date.toLocaleDateString()} {date.toLocaleTimeString()}</span>;
  };

  const locationTemplate = (rowData) => {
    return <span>{rowData.Location}</span>;
  };

  const tagsTemplate = (rowData) => {
    return (
      <div className="flex flex-wrap gap-1">
        {rowData.Tags && rowData.Tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
    );
  };

    const actionbotton = (rowData) => {
    return (
      <div className="flex gap-1">
        <button onClick={()=>editfrom(rowData)} className="inline-flex items-center p-1 text-sm font-medium text-blue-600 rounded gap-x-1 decoration-2 " >
        <i class="fi fi-sr-pen-circle text-xl"></i>
        </button>
        <button onClick={()=>handledelete(rowData?._id)} className="inline-flex items-center p-1 text-sm font-medium text-red-600  rounded gap-x-1 decoration-2 " >
        <i class="fi fi-sr-trash text-xl"></i>
        </button>
      </div>
    )
  }

  const contentTemplate = (rowData) => {
    const openContentModal = () => {
      setSelectedContent(rowData.Content || '');
      setSelectedTitle(rowData.Title || '');
      setContentModal(true);
    };

    return (
      <Button label="View Content" icon="pi pi-eye" size="small" className="p-button-text p-button-sm" onClick={openContentModal}/>
    );
  };

  const imageTemplate = (rowData) => {
    return rowData.Coverimage ? (
      <img src={`${apiurl()}/${rowData.Coverimage}`} alt="Cover" className="w-12 h-12 object-cover rounded"/>
    ) : (
      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
        <span className="text-gray-500 text-xs">No Image</span>
      </div>
    );
  };

  const closeContentModal = () => {
    setContentModal(false);
    setSelectedContent('');
    setSelectedTitle('');
  };

  const columns = [
    { field: "Title",header: "Title",body: titleTemplate,width: "250px" },
    { field: "Status", header: "Status", body: statusTemplate, width: "120px"},
    { field: "DateandTime", header: "Date & Time", body: dateTemplate, width: "180px"},
    { field: "Location", header: "Location", body: locationTemplate, width: "150px"},
    { field: "Tags", header: "Tags", body: tagsTemplate, width: "200px"},
    { field: "Content", header: "Content", body: contentTemplate, width: "120px"},
    { field: "Coverimage", header: "Cover Image", body: imageTemplate, width: "120px"},
  ];

  return (
    <>
      <div className="p-5">
        <div className="card">
          <DataTable
            value={tableData || []} 
            scrollable
            scrollHeight="680px"
            loading={loading}
            className="shadow-sm rounded-lg"
            emptyMessage="No news and events request records found"
            rowClassName="hover:bg-gray-50 text-sm"
            stripedRows
            size="small"
            dataKey="_id"
          >
            <Column field="sno" header="S.No" body={(rowData, { rowIndex }) => <div>{first + (rowIndex+1)}</div>} />
            <Column header="Action" style={{minWidth: "100px"}} body={actionbotton} />
            {columns.map((col, i) => (
              <Column
                key={i}
                field={col.field}
                header={col.header}
                body={col.body}
                headerClassName="text-gray-700 font-semibold bg-gray-100 text-md"
                className="p-2"
                style={{ minWidth: col.width || "150px" }}
              />
            ))}
          </DataTable>
        </div>

        <Dialog header={selectedTitle} visible={contentModal} onHide={closeContentModal} style={{ width: '80vw', maxWidth: '800px' }} modal draggable={false} 
        resizable={false} className="content-modal">
          <div className="content-display p-4 max-h-96 overflow-y-auto"dangerouslySetInnerHTML={{ __html: selectedContent }}/>
          <div className="flex justify-end mt-4">
            <Button label="Close" icon="pi pi-times" onClick={closeContentModal} className="p-button-secondary"/>
          </div>
        </Dialog>
      </div>
    </>
  );
}