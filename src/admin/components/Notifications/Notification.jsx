import { useCallback, useEffect, useState } from "react"
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Tableheadpanel from "../../shared/components/notifications/Tableheadpanel";
import Tableview from "../../shared/components/notifications/Tableview";
import Addandeditform from "../../shared/components/notifications/Addandeditform";
import { deletenotifications, getallnotifications, savenotifications, updatenotifications } from "../../shared/services/apinotifications/apinotifications";

export default function Notifications(){

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
    const [pdfDataUrl, setPdfDataUrl] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);

    let isMounted = true;

    const getNotification = useCallback(async ()=>{
            setLoading(true);
        try {
            const res= await getallnotifications({first,rows,globalfilter,colfilter});
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
            getNotification();
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
            if (file) {
                const reader = new FileReader();
                reader.onload = function(eve) {
                    setImagePreview(eve.target.result);
                };
                reader.readAsDataURL(file);
                setFormdata({...formdata, [e.target.name]: file});
            }
        } 
        else if (e.target.name === "pdf" && e.target.files) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(eve) {
                    setPdfPreview(eve.target.result);
                };
                reader.readAsDataURL(file);
                setFormdata({...formdata, [e.target.name]: file});
            }
        }
        else {
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
        await savenotifications(formdata)
        toast.success("Sucessfully saved")
        setFormdata({});
        setImagePreview(null);
        getNotification()
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
        await updatenotifications(formdata)
        toast.success("Sucessfully updated")
        getNotification()
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
             await deletenotifications(id)
             toast.success("Sucessfully deleted")
             getNotification()
            }
        });
    };

 const removeImage = () => {
  setImagePreview(null);
  setImageDataUrl(null);
  setFormdata((prevFormdata) => ({
    ...prevFormdata,
    Image: null, // Corrected to match the field name
  }));
};

  const removePdf = () => {
    setPdfPreview(null);
    setPdfDataUrl(null);
    setFormdata({...formdata, pdf: null});
  };

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} />

                <Tableview tabledata={tabledata} totalRecords={totalRecords} first={first} editfrom={editfrom} handledelete={handledelete} 
                    cusfilter={cusfilter} filtervalues={filtervalues} onPage={onPage} page={page} loading={loading} />

                <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} setRows={setRows}/> 
                <Addandeditform visible={visible} setVisible={setVisible} loading={loading} formdata={formdata} setFormdata={setFormdata} imagePreview={imagePreview}
                    handlechange={handlechange} handlesave={handlesave} handleupdate={handleupdate} brandnameOptions={brandnameOptions}
                    pdfPreview={pdfPreview} removeImage={removeImage} removePdf={removePdf}  />
                <ConfirmDialog />
            </div>
    
        </div>
    )
}