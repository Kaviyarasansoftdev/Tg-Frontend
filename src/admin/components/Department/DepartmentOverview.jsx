import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tablepagination from '../../shared/others/Tablepagination';
import toast from 'react-hot-toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { deletecategory, getallcategory } from '../../shared/services/apicategory/apicategory';
import Tableheadpanel from '../../shared/components/departments/Tableheadpanel';
import { deletedepartmentoverview, getalldepartmentoverview } from '../../shared/services/apidepartment/apidepartmentoverview';
import DepartmentTableView from '../../shared/components/departments/Tableview';


export default function DepartmentOverview() {
  const navigate = useNavigate();
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [loading, setLoading] = useState(false);
  const [tabledata, setTabledata] = useState([]);
  const [colfilter, setcolFilter] = useState({});
  const [globalfilter, setglobalfilter] = useState('');
  const [filtervalues, setfiltervalues] = useState([]);
  const [formdata, setFormdata] = useState({});
  const [imageDataUrl, setImageDataUrl] = useState(null);

  let isMounted = true;

  const getallproduct = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getalldepartmentoverview({ first, rows, globalfilter, colfilter });
      setTabledata(res?.resdata);
      setTotalRecords(res?.totallength);
    } finally {
      setLoading(false);
    }
  }, [first, rows, globalfilter, colfilter]);

  useEffect(() => {
    if (isMounted) {
      getallproduct();
    }
    return () => {
      isMounted = false;
    };
  }, [getallproduct]);

  const onPage = (page) => {
    setPage(page);
    setFirst(rows * (page - 1));
    setRows(rows);
  };
  

  const handlechange = (e) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = function (eve) {
        setImageDataUrl(eve.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const filesArray = Array.from(e.target.files);
      setFormdata({ ...formdata, [e.target.name]: filesArray });
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const cusfilter = (field, value) => {
    setcolFilter((prev) => ({ ...prev, [field]: { $in: value } }));
    setFirst(0);
  };

  const newform = () => {
    setFormdata({});
    setImageDataUrl(null);
    navigate('/dashboard/department/department-overview/add-edit', { state: { formdata: {}, imageDataUrl: null } });
  };

  const editfrom = (data) => {
    setFormdata(data);
    setImageDataUrl(data.Image || null);
    navigate('/dashboard/department/department-overview/add-edit', { state: { formdata: data, imageDataUrl: data.Image || null } });
  };

  const handledelete = (id) => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'bg-red-500 ml-2 text-white p-2',
      rejectClassName: 'p-2 outline-none border-0',
      accept: async () => {
        await deletedepartmentoverview(id);
        toast.success('Successfully deleted');
        getallproduct();
      }
    });
  };

  return (
    <div>
      <div className="bg-white border rounded-3xl">
        <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} />
        <DepartmentTableView
          tabledata={tabledata}
          totalRecords={totalRecords}
          first={first}
          editfrom={editfrom}
          handledelete={handledelete}
          cusfilter={cusfilter}
          filtervalues={filtervalues}
          onPage={onPage}
          page={page}
          loading={loading}
        />
        <Tablepagination
          page={page}
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPage={onPage}
          setRows={setRows}
        />
        <ConfirmDialog />
      </div>
    </div>
  );
}