import { useCallback, useEffect, useState } from "react"
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Departmentdetailsaddandeditform from "../../shared/components/departments/departmentdetails/Addandeditform";
import Tableheadpanel from "../../shared/components/departments/departmentdetails/Tableheadpanel";
import Tableview from "../../shared/components/departments/departmentdetails/Tableview";
import { deletedepartmentdetails, getalldepartmentdetails, savedepartmentdetails, updatedepartmentdetails } from "../../shared/services/apidepartment/apidepartmentdetails";
export default function Departmentdetails(){

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
    const [brandnameOptions, setBrandnameOptions] = useState([]);
    let isMounted = true;

    const getDepartmentdetails = useCallback(async ()=>{
            setLoading(true);
        try {
            const res= await getalldepartmentdetails({first,rows,globalfilter,colfilter});
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
            getDepartmentdetails();
        }
        return(()=>isMounted = false);
    },[first,rows,globalfilter,colfilter])



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
        await savedepartmentdetails(formdata)
        toast.success("Sucessfully saved")
        getDepartmentdetails()
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
        await updatedepartmentdetails(formdata)
        toast.success("Sucessfully updated")
        getDepartmentdetails()
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
             await deletedepartmentdetails(id)
             toast.success("Sucessfully deleted")
             getDepartmentdetails()
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
                <Departmentdetailsaddandeditform visible={visible} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata} imageDataUrl={imageDataUrl}
                    handlechange={handlechange} handlesave={handlesave} handleupdate={handleupdate} brandnameOptions={brandnameOptions}/>
                <ConfirmDialog />
            </div>
    
        </div>
    )
}