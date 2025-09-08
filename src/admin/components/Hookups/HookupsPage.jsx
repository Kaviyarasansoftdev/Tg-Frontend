
import { useCallback, useEffect, useState } from "react"
import Tableheadpanel from '../../shared/components/hookups/Tableheadpanel';
import Addandeditform from '../../shared/components/hookups/Addandeditform';
import Tableview from '../../shared/components/hookups/Tableview';
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { deletehookups, getallhookups, savehookups, updatehookups } from "../../shared/services/apihookups/apihookups";

export default function HookupsPage(){

    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [visible, setVisible] = useState(false);
    const [formdata, setFormdata] = useState({});
    const [loading, setLoading] = useState(false);
    const [tabledata, setTabledata] = useState([]);
    const [colfilter, setcolFilter] = useState({});
    const [globalfilter, setglobalfilter] = useState('');
    const [filtervalues,] = useState([]); // setfiltervalues
    const [imageDataUrl, setImageDataUrl] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    let isMounted = true;

    const getIngredient = useCallback(async () => {
        setLoading(true);
        try {
            let tabFilter = {};
            if (activeTab !== 'all') { tabFilter = { [activeTab]: { $exists: true, $ne: '' } };}
            const combinedFilter = {...tabFilter,...colfilter};
            const res = await getallhookups({ first, rows, globalfilter,colfilter: combinedFilter  });
            setTabledata(res?.resdata || []);
            setTotalRecords(res?.totallength || 0); 
        } catch (error) {
            console.error('Error fetching data:', error);
            setTabledata([]);
            setTotalRecords(0);
        } finally {
            setLoading(false);
        }
    }, [first, rows, globalfilter, colfilter, activeTab]);

    useEffect(() => {
        if(isMounted){
            getIngredient();
        }
        return(() => isMounted = false);
    }, [first, rows, globalfilter, colfilter, activeTab]);

    useEffect(() => {
        setPage(1);
        setFirst(0);
    }, [activeTab]);

    const onPage = (page) => {
        setPage(page)
        setFirst(rows * (page - 1));
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
        setFirst(0);
    };

    const handlesave = async (e) => {
        e.preventDefault();
        setLoading(true);
        await savehookups(formdata);
        toast.success("Successfully saved");
        getIngredient();
        setVisible(false);
        setLoading(false);
    };

    const newform = () => {
        const initialData = {};
        if (activeTab !== 'all') {
            initialData.Status = 'Active';
        }
        setFormdata(initialData);
        setVisible(true);
    };
    
    const editfrom = (data) => {
        setFormdata(data);
        setVisible(true);
    };

    const handleupdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        await updatehookups(formdata);
        toast.success("Successfully updated");
        getIngredient();
        setVisible(false);
        setLoading(false);
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
                await deletehookups(id);
                toast.success("Successfully deleted");
                getIngredient();
            }
        });
    };
    
    // Get columns based on active tab
    const getActiveColumns = () => {
        const baseColumns = [
            { field: 'Status', header: 'Status', filter: true }
        ];
        
        switch (activeTab) {
            case 'Tags':
                return [
                    { field: 'Tags', header: 'Tag Name', filter: true },
                    ...baseColumns
                ];
            case 'Brand_Name':
                return [
                    { field: 'Brand_Name', header: 'Brand Name', filter: true },
                    ...baseColumns
                ];
            case 'Search_Keywords':
                return [
                    { field: 'Search_Keywords', header: 'Search Keywords', filter: true },
                    ...baseColumns
                ];
                 case 'Product_Specialwords':
                return [
                    { field: 'Product_Specialwords', header: 'Product Specialwords', filter: true },
                    ...baseColumns
                ];
            default:
                return [
                    { field: 'Departments', header: 'Departments', filter: true },
                    { field: 'Brand_Name', header: 'Brand Name', filter: true },
                    { field: 'Search_Keywords', header: 'Search Keywords', filter: true },
                    { field: 'Product_Specialwords', header: 'Product Specialwords', filter: true },
                    ...baseColumns
                ];
        }
    };

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel 
                    newform={newform} 
                    setglobalfilter={setglobalfilter} 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <Tableview 
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
                    columns={getActiveColumns()}
                />

                <Tablepagination 
                    page={page} 
                    first={first} 
                    rows={rows} 
                    totalRecords={totalRecords} 
                    onPage={onPage} 
                    setRows={setRows}
                /> 
                
                <Addandeditform 
                    visible={visible} 
                    setVisible={setVisible} 
                    loading={loading} 
                    formdata={formdata} 
                    setFormdata={setFormdata} 
                    imageDataUrl={imageDataUrl}
                    handlechange={handlechange} 
                    handlesave={handlesave} 
                    handleupdate={handleupdate}
                    activeTab={activeTab}
                />
                
                <ConfirmDialog />
            </div>
        </div>
    );
}