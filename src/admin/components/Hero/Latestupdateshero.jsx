import { useCallback, useEffect, useState } from "react"
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Tableheadpanel from "../../shared/components/hero/latestupdateshero/Tableheadpanel";
import Tableview from "../../shared/components/hero/latestupdateshero/Tableview";
import Latestupdatesheroaddandeditform from "../../shared/components/hero/latestupdateshero/Addandeditform";
import { deleteatestupdatesHero, getlatestupdatesHero, savelatestupdateshero, updatedatestupdatesHero } from "../../shared/services/apiherobanner/apilatestupdateshero";

export default function Latestupdateshero(){

    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [visible, setVisible] = useState(false);
    const [formdata,setFormdata]=useState({});
    const [loading, setLoading] = useState(false);
    const [tabledata, setTabledata]=useState([]);
    const [colfilter, setcolFilter] = useState({});
    const [globalfilter,setglobalfilter]=useState('');
    const [filtervalues,setfiltervalues]=useState([]);
    const [imageDataUrl, setImageDataUrl] = useState(null);
     const [departmentOptions, setDepartmentOptions] = useState([]);
  const [loadingDepartments, setLoadingDepartments] = useState(false);

    let isMounted = true;

    const getlatestupdateshero = useCallback(async ()=>{
            setLoading(true);
        try {
            const res= await getlatestupdatesHero({first,rows,globalfilter,colfilter});
            console.log('Res:',res)
            setTabledata(res?.resdata);
            setTotalRecords(res?.totallength);
        } catch (error) {
            console.error('Error fetching data:', error);
            setTabledata([]);
            setTotalRecords(0);
        } finally {
            setLoading(false);
        }
 
    },[first,rows,globalfilter,colfilter]);

    useEffect(()=>{
        if(isMounted){
            getlatestupdateshero();
        }
        return(()=>isMounted = false);
    },[first,rows,globalfilter,colfilter])

 useEffect(() => {
    if (visible) {
      fetchDepartments();
    }
  }, [visible]);

  const fetchDepartments = async () => {
    try {
      setLoadingDepartments(true);
      const response = await getalldepartmentname();
      
      // Assuming the API returns an array of department objects
      // Adjust this based on your actual API response structure
      if (response && response.data) {
        setDepartmentOptions(response.data);
      } else if (Array.isArray(response)) {
        setDepartmentOptions(response);
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
      // You might want to show a toast notification here
    } finally {
      setLoadingDepartments(false);
    }
  };

    const onPage = (page) => {
        setPage(page)
        setFirst(rows *(page -1));
        setRows(rows);
    };


    const handlechange = (e) => {
        if (e.target.name === "Image" && e.target.files) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = function(eve) {
                setImageDataUrl(eve.target.result); 
            };
            reader.readAsDataURL(file);
            setFormdata({...formdata, [e.target.name]: file});
        } else {
            setFormdata({...formdata, [e.target.name]: e.target.value});
        }
    };
    

    const cusfilter = (field, value) => {
        setcolFilter(prev => ({ ...prev, [field]: {$in:value} }));
        setFirst(0)
    };

    const handlesave=async (e)=>{
        e.preventDefault()
        setLoading(true)
        await savelatestupdateshero(formdata)
        toast.success("Sucessfully saved")
        setImageDataUrl(null);
        setFormdata({});
        getlatestupdateshero()
        setVisible(false)
        setLoading(false)
    }

    const newform=()=>{
        setFormdata({});
        setVisible(true)
    }
    
    const editfrom=(data)=>{
        setFormdata(data);
        setVisible(true)
    }

    const handleupdate=async (e)=>{
        console.log(formdata)
        e.preventDefault()
        setLoading(true)
        await updatedatestupdatesHero(formdata)
        toast.success("Sucessfully updated")
        getlatestupdateshero()
        setVisible(false)
        setLoading(false)
    }

    const handledelete = (id) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'bg-red-500 ml-2 text-white p-2',
            rejectClassName: 'p-2 outline-none border-0',
            accept:async ()=>{
             await deleteatestupdatesHero(id)
             toast.success("Sucessfully deleted")
             getlatestupdateshero()
            }
        });
    };

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} />

                <Tableview tabledata={tabledata} totalRecords={totalRecords} first={first} editfrom={editfrom} handledelete={handledelete} 
                    cusfilter={cusfilter} filtervalues={filtervalues} onPage={onPage} page={page} loading={loading} />

                <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} setRows={setRows}/> 
                <Latestupdatesheroaddandeditform visible={visible} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata} imageDataUrl={imageDataUrl}
                    handlechange={handlechange} handlesave={handlesave} handleupdate={handleupdate}
                    departmentOptions={departmentOptions} loadingDepartments={loadingDepartments} fetchDepartments={fetchDepartments}/>
                <ConfirmDialog />
            </div>
    
        </div>
    )
}