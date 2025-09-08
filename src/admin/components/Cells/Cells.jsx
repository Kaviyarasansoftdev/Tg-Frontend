import { useCallback, useEffect, useState } from "react"
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import CellsForm from "../../shared/components/Cells/Addandeditform";
import Tableheadpanel from "../../shared/components/Cells/Tableheadpanel";
import Tableview from "../../shared/components/Cells/Tableview";
import { deletecell, getallcell, savecell, updatecell } from "../../shared/services/apicell/apicell";

export default function Cells(){

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
    
    // Updated state for multiple images
    const [imagePreviews, setImagePreviews] = useState([]);
    const [pdfPreview, setPdfPreview] = useState(null);

    let isMounted = true;

    const getNotification = useCallback(async ()=>{
            setLoading(true);
        try {
            const res= await getallcell({first,rows,globalfilter,colfilter});
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
        if (e.target.name === "Images" && e.target.files) {
            // Handle multiple images - this will be called by addImage function instead
            const files = Array.from(e.target.files);
            addImage(files);
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
        
        // Create FormData for multipart/form-data
        const formDataToSend = new FormData();
        
        // Add text fields
        Object.keys(formdata).forEach(key => {
            if (key !== 'Images' && formdata[key] !== null && formdata[key] !== undefined) {
                formDataToSend.append(key, formdata[key]);
            }
        });
        
        // Add multiple images
        if (formdata.Images && formdata.Images.length > 0) {
            formdata.Images.forEach(image => {
                formDataToSend.append('Images', image);
            });
        }
        
        await savecell(formDataToSend)
        toast.success("Successfully saved")
        resetForm()
        getNotification()
        setVisible(false)
        setLoading(false)
    }

    const newform=()=>{
        resetForm();
        setVisible(true)
    }
    
    const editfrom=(data)=>{
        setFormdata(data);
        
        // Handle existing images for edit mode
        if (data.Images && data.Images.length > 0) {
            const existingImagePreviews = data.Images.map((imageUrl, index) => ({
                url: imageUrl,
                isExisting: true,
                id: index
            }));
            setImagePreviews(existingImagePreviews);
        } else {
            setImagePreviews([]);
        }
        
        // Handle existing PDF
        if (data.pdf) {
            setPdfPreview(data.pdf);
        } else {
            setPdfPreview(null);
        }
        
        setVisible(true)
    }

    // const handleupdate=async (e)=>{
    //     console.log(formdata)
    //     e.preventDefault()
    //     setLoading(true)
        
    //     // Create FormData for multipart/form-data
    //     const formDataToSend = new FormData();
        
    //     // Add text fields
    //     Object.keys(formdata).forEach(key => {
    //         if (key !== 'Images' && formdata[key] !== null && formdata[key] !== undefined) {
    //             formDataToSend.append(key, formdata[key]);
    //         }
    //     });
        
    //     // Add multiple images (only new ones, keep existing ones)
    //     if (formdata.Images && formdata.Images.length > 0) {
    //         formdata.Images.forEach(image => {
    //             if (image instanceof File) {
    //                 formDataToSend.append('Images', image);
    //             }
    //         });
    //     }
        
    //     // Add existing image URLs that should be kept
    //     const existingImages = imagePreviews
    //         .filter(preview => preview.isExisting)
    //         .map(preview => preview.url);
        
    //     if (existingImages.length > 0) {
    //         formDataToSend.append('existingImages', JSON.stringify(existingImages));
    //     }
        
    //     await updatecommittee(formDataToSend)
    //     toast.success("Successfully updated")
    //     getNotification()
    //     setVisible(false)
    //     setLoading(false)
    // }

    const handleupdate = async (e) => {
  console.log(formdata);
  e.preventDefault();
  setLoading(true);
  
  try {
    // Create FormData for multipart/form-data
    const formDataToSend = new FormData();
    
    // Add text fields
    Object.keys(formdata).forEach(key => {
      if (key !== 'Images' && formdata[key] !== null && formdata[key] !== undefined) {
        formDataToSend.append(key, formdata[key]);
      }
    });
    
    // Add multiple images (only new ones, keep existing ones)
    if (formdata.Images && formdata.Images.length > 0) {
      formdata.Images.forEach(image => {
        if (image instanceof File) {
          formDataToSend.append('Images', image);
        }
      });
    }
    
    // Add existing image URLs that should be kept
    const existingImages = imagePreviews
      .filter(preview => preview.isExisting)
      .map(preview => preview.url);
    
    if (existingImages.length > 0) {
      formDataToSend.append('existingImages', JSON.stringify(existingImages));
    }
    
    // Pass the _id as second parameter
    await updatecell(formDataToSend, formdata._id);
    toast.success("Successfully updated");
    getNotification();
    setVisible(false);
  } catch (error) {
    console.error("Update failed:", error);
    toast.error("Update failed");
  } finally {
    setLoading(false);
  }
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
             await deletecell(id)
             toast.success("Successfully deleted")
             getNotification()
            }
        });
    };

    // Updated addImage function for multiple images
    const addImage = (files) => {
        const newPreviews = files.map(file => ({
            file: file,
            url: URL.createObjectURL(file),
            isExisting: false
        }));
        
        setImagePreviews(prev => [...prev, ...newPreviews]);
        
        setFormdata(prev => ({
            ...prev,
            Images: [...(prev.Images || []), ...files]
        }));
    };

    // Updated removeImage function for multiple images
    const removeImage = (index) => {
        // Clean up object URL to prevent memory leaks
        const imageToRemove = imagePreviews[index];
        if (imageToRemove && imageToRemove.url && !imageToRemove.isExisting) {
            URL.revokeObjectURL(imageToRemove.url);
        }
        
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
        
        setFormdata(prev => ({
            ...prev,
            Images: prev.Images?.filter((_, i) => i !== index) || []
        }));
    };

    const removePdf = () => {
        setPdfPreview(null);
        setPdfDataUrl(null);
        setFormdata({...formdata, pdf: null});
    };

    // Helper function to reset form
    const resetForm = () => {
        setFormdata({});
        setImagePreviews([]);
        setPdfPreview(null);
        setImageDataUrl(null);
        setPdfDataUrl(null);
        
        // Clean up any object URLs
        imagePreviews.forEach(preview => {
            if (preview.url && !preview.isExisting) {
                URL.revokeObjectURL(preview.url);
            }
        });
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            imagePreviews.forEach(preview => {
                if (preview.url && !preview.isExisting) {
                    URL.revokeObjectURL(preview.url);
                }
            });
        };
    }, [imagePreviews]);

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} />

                <Tableview tabledata={tabledata} totalRecords={totalRecords} first={first} editfrom={editfrom} handledelete={handledelete} 
                    cusfilter={cusfilter} filtervalues={filtervalues} onPage={onPage} page={page} loading={loading} />

                <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} setRows={setRows}/> 
                
                <CellsForm 
                    visible={visible} 
                    setVisible={setVisible} 
                    loading={loading} 
                    formdata={formdata} 
                    setFormdata={setFormdata} 
                    imagePreviews={imagePreviews}
                    handlechange={handlechange} 
                    handlesave={handlesave} 
                    handleupdate={handleupdate} 
                    brandnameOptions={brandnameOptions}
                    pdfPreview={pdfPreview} 
                    removeImage={removeImage} 
                    removePdf={removePdf} 
                    addImage={addImage}  
                />
                <ConfirmDialog />
            </div>
    
        </div>
    )
}