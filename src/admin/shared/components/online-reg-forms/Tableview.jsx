import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";


export default function TableView({ tableData, loading,  first }) {


const columns = [
  { field: "_id", header: "ID", width: "100px" },
  { field: "name", header: "Name", width: "100px" },
  { field: "email", header: "Email", width: "100px" },
  { field: "phone", header: "Phone", width: "100px" },
  { field: "dob", header: "Date of Birth", width: "100px" },
  { field: "gender", header: "Gender", width: "100px" },
  { field: "nationality", header: "Nationality", width: "100px" },
  { field: "address", header: "Address", width: "100px" },
  { field: "city", header: "City", width: "100px" },
  { field: "state", header: "State", width: "100px" },
  { field: "pincode", header: "Pincode", width: "100px" },
  { field: "boardOfExamination", header: "Board of Examination", width: "100px" },
  { field: "higherSecondarySchool", header: "Higher Secondary School", width: "100px" },
  { field: "hscGroup", header: "HSC Group", width: "100px" },
  { field: "mediumOfInstruction", header: "Medium of Instruction", width: "100px" },
  { field: "marks", header: "Marks", width: "100px" },
  { field: "percentage", header: "Percentage", width: "100px" },
  { field: "department", header: "Department", width: "100px" },
  { field: "fatherName", header: "Father's Name", width: "100px" },
  { field: "fatherOccupation", header: "Father's Occupation", width: "100px" },
  { field: "fatherContact", header: "Father's Contact", width: "100px" },
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

      </div>
    </>
  );
}