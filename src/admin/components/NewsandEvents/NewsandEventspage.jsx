import { useState, useEffect, useCallback } from "react";
import Addandeditform from "../../shared/components/news-and-events/AddandEditform";
import Tableheadpanel from "../../shared/components/news-and-events/Tableheadpanel";
import { apigetallNewsandevents, deleteNewsandevents, savenewsandevents, updateNewsandevents } from "../../shared/services/apinewsandevents/apinewsandevents";
import TableView from "../../shared/components/news-and-events/Tableview";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";


export default function NewsAndEventsPage() {
    const [visible, setVisible] = useState(false);
    const [formdata, setformdata] = useState({});
    const [coverImage, setCoverImage] = useState('');
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [globalFilter, setglobalfilter] = useState('');
    const [page, setPage] = useState(1);
    const [isEdit, setIsEdit] = useState(false);


    const openform = () => {
        setformdata({});
        setVisible(true);
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverImage(file);
        }
    };

const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    
    const fieldName = name.toLowerCase();
    
    setformdata(prev => ({
        ...prev,
        [fieldName]: value
    }));
};

    const handleSubmit = async (formDataFromForm) => {
        try {
            const formData = new FormData();
            
            if (coverImage) {
                formData.append('coverimage', coverImage);
            }
            
            formData.append('title', formDataFromForm.title);
            formData.append('tags', JSON.stringify(formDataFromForm.tags));
            formData.append('location', formDataFromForm.location);
            formData.append('dateandtime', formDataFromForm.dateandtime);
            formData.append('status', formDataFromForm.status);
            formData.append('content', formDataFromForm.content);
            if (isEdit) {
                formData.append('_id', formdata._id);
                await updateNewsandevents(formData);
            } else {
                await savenewsandevents(formData);
            }
            toast.success("Post saved successfully");
            setVisible(false);
            setCoverImage('');
            getNewsEvents();
        } catch (error) {
            toast.error("Error saving post");
        }
    };

    const getNewsEvents = useCallback(async () => {
        setLoading(true);
        try {
            const res = await apigetallNewsandevents({ first, rows, globalFilter });
            console.log("API response:", res);
            
            if (res && res.resdata) {
                setTableData(res.resdata);
            } else {
                setTableData([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setTableData([]);
        } finally {
            setLoading(false);
        }
    }, [first, rows, globalFilter]);

    useEffect(() => {
        getNewsEvents();
    }, [getNewsEvents]);

    const onPage = (newPage) => {
        setPage(newPage);
        setFirst(rows * (newPage - 1));
    };

    const editfrom = (data) => {
        console.log('Edit data received:', data);
        
        let formattedDateTime = '';
        if (data.DateandTime) {
            const date = new Date(data.DateandTime);
            formattedDateTime = date.toISOString().slice(0, 16);
        }
        
        setformdata({
            title: data.Title,
            location: data.Location,
            dateandtime: formattedDateTime,
            status: data.Status,
            content: data.Content,
            tags: data.Tags,
            coverimage: data.Coverimage,
            _id: data._id
        });
        setIsEdit(true);
        setVisible(true);
    };

    const handledelete = (id) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'bg-red-500 ml-2 text-white p-2',
            rejectClassName: 'p-2 outline-none border-0',
            accept:async ()=>{
             await deleteNewsandevents(id)
             toast.success("Sucessfully deleted")
             getNewsEvents()
            }
        });
    };
    return (
        <>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel openform={openform} setglobalfilter={setglobalfilter} />
                <Addandeditform 
                    visible={visible} 
                    setVisible={setVisible} 
                    formdata={formdata} 
                    handleSubmit={handleSubmit} 
                    handlechange={handlechange}
                    handleCoverImageChange={handleCoverImageChange} 
                    isEdit={isEdit}
                    setIsEdit={setIsEdit} setformdata={setformdata}
                />
                <TableView tableData={tableData} loading={loading} onPage={onPage} page={page} editfrom={editfrom} first={first} handledelete={handledelete} />
                <ConfirmDialog />                
            </div>
        </>
    );
}