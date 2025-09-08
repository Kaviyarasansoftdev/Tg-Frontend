import { useCallback, useEffect, useState } from "react"
import Tablepagination from "../../shared/others/Tablepagination";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { deletenotifications, getallnotifications, savenotifications, updatenotifications } from "../../shared/services/apinotifications/apinotifications";
import { deletecommittee, getallcommittee, savecommittee, updatecommittee } from "../../shared/services/apicommittee/apicommittee";
import { deletecollegegallery, getallcollegegallery, savecollegegallery, updatecollegegallery } from "../../shared/services/apicollegegallery/apicollegegallery";
import Tableheadpanel from "../../shared/components/additionalgallery/Tableheadpanel";
import Tableview from "../../shared/components/additionalgallery/Tableview";
import AdditionalgalleryForm from "../../shared/components/additionalgallery/Addandeditform";
import { getalldepartmentname } from "../../shared/services/apidepartment/apidepartmentdetails";
import { deleteadditionalgegallery, getalladditionalgegallery, saveadditionalgegallery, updateadditionalgegallery } from "../../shared/services/apiadditionalgallery/apiadditionalgallery";



export default function Additionalgallery(){

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
   const [departmentOptions, setDepartmentOptions] = useState([]);
   const [loadingDepartments, setLoadingDepartments] = useState(false);
    // Updated state for multiple images and videos
    const [imagePreviews, setImagePreviews] = useState([]);
    const [videoPreviews, setVideoPreviews] = useState([]);

    let isMounted = true;

    const getNotification = useCallback(async ()=>{
            setLoading(true);
        try {
            const res= await getalladditionalgegallery({first,rows,globalfilter,colfilter});
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
        if (e.target.name === "Images" && e.target.files) {
            // Handle multiple images - this will be called by addImage function instead
            const files = Array.from(e.target.files);
            addImage(files);
        } 
        else if (e.target.name === "Videos" && e.target.files) {
            // Handle multiple videos - this will be called by addVideo function instead
            const files = Array.from(e.target.files);
            addVideo(files);
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
            if (key !== 'Images' && key !== 'Videos' && formdata[key] !== null && formdata[key] !== undefined) {
                formDataToSend.append(key, formdata[key]);
            }
        });
        
        // Add multiple images
        if (formdata.Images && formdata.Images.length > 0) {
            formdata.Images.forEach(image => {
                formDataToSend.append('Images', image);
            });
        }
        
        // Add multiple videos
        if (formdata.Videos && formdata.Videos.length > 0) {
            formdata.Videos.forEach(video => {
                formDataToSend.append('Videos', video);
            });
        }
        
        await saveadditionalgegallery(formDataToSend)
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
        
        // Handle existing videos for edit mode
        if (data.Videos && data.Videos.length > 0) {
            const existingVideoPreviews = data.Videos.map((videoUrl, index) => ({
                url: videoUrl,
                isExisting: true,
                id: index
            }));
            setVideoPreviews(existingVideoPreviews);
        } else {
            setVideoPreviews([]);
        }
        
        setVisible(true)
    }

    const handleupdate = async (e) => {
        console.log(formdata);
        e.preventDefault();
        setLoading(true);
        
        try {
            // Create FormData for multipart/form-data
            const formDataToSend = new FormData();
            
            // Add text fields
            Object.keys(formdata).forEach(key => {
                if (key !== 'Images' && key !== 'Videos' && formdata[key] !== null && formdata[key] !== undefined) {
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
            
            // Add multiple videos (only new ones, keep existing ones)
            if (formdata.Videos && formdata.Videos.length > 0) {
                formdata.Videos.forEach(video => {
                    if (video instanceof File) {
                        formDataToSend.append('Videos', video);
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
            
            // Add existing video URLs that should be kept
            const existingVideos = videoPreviews
                .filter(preview => preview.isExisting)
                .map(preview => preview.url);
            
            if (existingVideos.length > 0) {
                formDataToSend.append('existingVideos', JSON.stringify(existingVideos));
            }
            
            // Pass the _id as second parameter
            await updateadditionalgegallery(formDataToSend, formdata._id);
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
             await deleteadditionalgegallery(id)
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

    // New addVideo function for multiple videos
    const addVideo = (files) => {
        const newPreviews = files.map(file => ({
            file: file,
            url: URL.createObjectURL(file),
            isExisting: false
        }));
        
        setVideoPreviews(prev => [...prev, ...newPreviews]);
        
        setFormdata(prev => ({
            ...prev,
            Videos: [...(prev.Videos || []), ...files]
        }));
    };

    // New removeVideo function for multiple videos
    const removeVideo = (index) => {
        // Clean up object URL to prevent memory leaks
        const videoToRemove = videoPreviews[index];
        if (videoToRemove && videoToRemove.url && !videoToRemove.isExisting) {
            URL.revokeObjectURL(videoToRemove.url);
        }
        
        setVideoPreviews(prev => prev.filter((_, i) => i !== index));
        
        setFormdata(prev => ({
            ...prev,
            Videos: prev.Videos?.filter((_, i) => i !== index) || []
        }));
    };

    // Helper function to reset form
    const resetForm = () => {
        setFormdata({});
        setImagePreviews([]);
        setVideoPreviews([]);
        setImageDataUrl(null);
        
        // Clean up any object URLs for images
        imagePreviews.forEach(preview => {
            if (preview.url && !preview.isExisting) {
                URL.revokeObjectURL(preview.url);
            }
        });
        
        // Clean up any object URLs for videos
        videoPreviews.forEach(preview => {
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
            videoPreviews.forEach(preview => {
                if (preview.url && !preview.isExisting) {
                    URL.revokeObjectURL(preview.url);
                }
            });
        };
    }, [imagePreviews, videoPreviews]);

    return(
        <div>
            <div className="bg-white border rounded-3xl">
                <Tableheadpanel newform={newform} setglobalfilter={setglobalfilter} />

                <Tableview tabledata={tabledata} totalRecords={totalRecords} first={first} editfrom={editfrom} handledelete={handledelete} 
                    cusfilter={cusfilter} filtervalues={filtervalues} onPage={onPage} page={page} loading={loading} />

                <Tablepagination page={page} first={first} rows={rows} totalRecords={totalRecords} onPage={onPage} setRows={setRows}/> 
                
                <AdditionalgalleryForm 
                    visible={visible} 
                    setVisible={setVisible} 
                    loading={loading} 
                    formdata={formdata} 
                    setFormdata={setFormdata} 
                    imagePreviews={imagePreviews}
                    videoPreviews={videoPreviews}
                    handlechange={handlechange} 
                    handlesave={handlesave} 
                    handleupdate={handleupdate} 
                    brandnameOptions={brandnameOptions}
                    removeImage={removeImage} 
                    removeVideo={removeVideo}
                    addImage={addImage}
                    addVideo={addVideo}
                    departmentOptions={departmentOptions}
                    loadingDepartments={loadingDepartments} 
                    fetchDepartments={fetchDepartments}
                />
                <ConfirmDialog />
            </div>
    
        </div>
    )
}