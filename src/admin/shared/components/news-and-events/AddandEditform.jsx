import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { Chips } from "primereact/chips";
import { Editor } from "primereact/editor";
import { useEffect, useState } from "react";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";


export default function Addandeditform ({visible, setVisible, formdata, handleSubmit, handlechange,handleCoverImageChange, setIsEdit,setformdata,  isEdit = false }) {

    const [value, setValue] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        if (formdata && isEdit) {
            setValue(formdata.tags || []);
            setText(formdata.content || '');
        } else {
            setValue([]);
            setText('');
        }
    }, [formdata, isEdit, visible]);

    useEffect(() => {
        if (!visible) {
            setValue([]);
            setText('');
            setformdata({});
            setIsEdit(false); 
        }
    }, [visible]);

    const onSubmit = (e) => {
        e.preventDefault();
        
        const submitData = {
            tags: value,
            content: text,
            title: e.target.Title.value,
            location: e.target.Location.value,
            dateandtime: e.target.DateandTime.value,
            status: e.target.Status.value,
            _id: formdata?._id
        };
        
        handleSubmit(submitData);
    };

 
    return (
        <>
          <Dialog header={isEdit ? "Edit News and Events" : "Add News and Events"} visible={visible} onHide={() => setVisible(false)} 
            style={{ width: "50vw" }} breakpoints={{ "960px": "75vw", "641px": "100vw" }} maximizable>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-3">
                    <div>
                        <label>Title</label>
                        <input type="text" name="Title" className="w-full px-4 py-2 mt-1 border outline-none rounded-xl" value={formdata?.title || ''} onChange={handlechange} required />
                    </div>
                    <div className="">
                        <label>Tags</label>
                        <Chips value={value} onChange={(e) => setValue(e.value)} separator="," className="w-full" />
                    </div>
                  <div>
                        <label>Cover Image</label>
                        {isEdit && formdata?.coverimage && (
                            <div className="mb-2">
                                <img src={`${apiurl()}/${formdata.coverimage}`} alt="Current cover" className="w-20 h-20 object-cover rounded border"/>
                                <p className="text-sm text-gray-600 mt-1">Current image</p>
                            </div>
                        )}
                        <input type="file" name="Coverimage" className="w-full px-4 py-2 mt-1 border outline-none rounded-xl" onChange={handleCoverImageChange} required={!isEdit}accept="image/*"/>
                        {isEdit && (
                            <p className="text-sm text-gray-600 mt-1">Leave empty to keep current image</p>
                        )}
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" name="Location" className="w-full px-4 py-2 mt-1 border outline-none rounded-xl" value={formdata?.location || ''}  onChange={handlechange} required />
                    </div>
                    <div>
                        <label>Date and Time</label>
                        <input type="datetime-local" name="DateandTime" className="w-full px-4 py-2 mt-1 border outline-none rounded-xl"  value={formdata?.dateandtime || ''} onChange={handlechange} required />
                    </div>
                    <div>
                        <label>Status</label>
                        <select name="Status" id="Status"  value={formdata?.status || ''} onChange={handlechange} className="w-full px-4 py-2 mt-1 border outline-none rounded-xl">
                            <option disabled>-- Select status --</option>
                            <option value="Active">Active</option>
                            <option value="InActive">InActive</option>
                        </select>
                    </div>
                </div>
                    <div className="mt-3">
                        <label>Main Content</label>
                        <Editor value={text} name="Content" onTextChange={(e) => setText(e.htmlValue)} className="mt-2" style={{ height: '320px' }} />
                    </div>
                <div className="mt-3">
                 <Button type="submit" label={formdata?._id ? "Update" : "Submit"} className="p-2 px-5 mt-4 text-white w-fit bg-secondary"/>
                </div>
            </form>

        </Dialog>
        </>
    )
}