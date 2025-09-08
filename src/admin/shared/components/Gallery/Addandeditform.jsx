
import moment from 'moment-timezone';
import { Dialog } from 'primereact/dialog';
import { ProgressBar } from 'primereact/progressbar';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';


export default function Addandeditform(props) {
    const { visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, dataUrl, setDataUrl, AddGame, removeGame, progress } = props;

    const closeModel = () => {
        setVisible(false);
        setDataUrl(null);
    };

    // Helper function to check if file is video
    const isVideoFile = (src) => {
        if (!src) return false;
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.mkv'];
        return videoExtensions.some(ext => src.toLowerCase().includes(ext));
    };

    // Helper function to check if file is image
    const isImageFile = (src) => {
        if (!src) return false;
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
        return imageExtensions.some(ext => src.toLowerCase().includes(ext));
    };

    // Render preview for new uploads (dataUrl) - Show all files
    const renderNewUploadPreview = () => {
        if (!dataUrl || !formdata?.Src) return null;

        // Get all files from formdata.Src (FileList converted to array)
        const files = Array.from(formdata.Src);
        
        return (
            <div className="w-full mb-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-80 overflow-y-auto p-2">
                    {files.map((file, index) => {
                        const fileUrl = URL.createObjectURL(file);
                        const isVideo = file.type.startsWith('video/');
                        
                        return (
                            <div key={index} className="relative group">
                                <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-colors">
                                    {isVideo ? (
                                        <div className="relative w-full h-full">
                                            <video
                                                src={fileUrl}
                                                className="w-full h-full object-cover"
                                                muted
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                <div className="bg-white/90 rounded-full p-2">
                                                    <i className="fi fi-sr-play text-gray-700 text-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={fileUrl}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {index + 1}
                                </div>
                                <div className="absolute bottom-1 left-1 bg-black/70 text-white px-2 py-1 rounded text-xs truncate max-w-full">
                                    {file.name.split('.')[0]}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-2 text-center">
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {files.length} file{files.length > 1 ? 's' : ''} selected
                    </span>
                </div>
            </div>
        );
    };

    // Render preview for existing media (formdata.Src) - Show all files
    const renderExistingMediaPreview = () => {
        if (!formdata?.Src || (formdata?.Src && Array.isArray(formdata.Src) && formdata.Src.length > 0 && formdata.Src[0] instanceof File)) {
            return null; // Don't show if we have new uploads (File objects)
        }

        let mediaFiles = [];

        // Handle single file
        if (typeof formdata.Src === 'string') {
            mediaFiles = [formdata.Src];
        }
        // Handle multiple files
        else if (Array.isArray(formdata.Src)) {
            mediaFiles = formdata.Src;
        }

        if (mediaFiles.length === 0) return null;

        return (
            <div className="w-full mb-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-80 overflow-y-auto p-2">
                    {mediaFiles.map((item, index) => {
                        const src = `${apiurl()}/${item}`;
                        const fileName = item.split('/').pop() || `Media ${index + 1}`;
                        const isVideo = isVideoFile(item);
                        
                        return (
                            <div key={index} className="relative group">
                                <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-colors">
                                    {isVideo ? (
                                        <div className="relative w-full h-full">
                                            <video
                                                src={src}
                                                className="w-full h-full object-cover"
                                                muted
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                <div className="bg-white/90 rounded-full p-2">
                                                    <i className="fi fi-sr-play text-gray-700 text-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={src}
                                            alt={`Media ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23f3f4f6"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="%236b7280">No Image</text></svg>';
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {index + 1}
                                </div>
                                <div className="absolute bottom-1 left-1 bg-black/70 text-white px-2 py-1 rounded text-xs truncate max-w-full">
                                    {fileName.split('.')[0]}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-2 text-center">
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {mediaFiles.length} existing file{mediaFiles.length > 1 ? 's' : ''}
                    </span>
                </div>
            </div>
        );
    };

    // Render upload placeholder
    const renderUploadPlaceholder = () => {
        return (
            <div className="flex flex-col items-center justify-center pt-4 pb-5">
                <i className="fi fi-sr-mode-landscape text-4xl text-gray-400 mb-2"></i>
                <p className="mb-2 text-sm text-gray-500 ">
                    <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-400">Images or Videos</p>
            </div>
        );
    };

    return (
        <Dialog 
            header={!formdata?._id ? "Add Gallery" : "Update Gallery"} 
            visible={visible} 
            onHide={closeModel} 
            className="!w-full lg:!w-[40rem] bg-black/60 backdrop-blur-sm"
        >
            <form onSubmit={!formdata?._id ? handlesave : handleupdate}>
                <div className="mb-3">
                    <div className="w-full">
                        <label className="relative z-[1] flex flex-col items-center justify-center w-full min-h-[120px] overflow-hidden rounded-lg border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50  hover:bg-gray-100 transition-colors">
                            
                            {/* Preview for new uploads */}
                            {renderNewUploadPreview()}
                            
                            {/* Preview for existing media */}
                            {renderExistingMediaPreview()}
                            
                            {/* Upload placeholder */}
                            {!formdata?.Src && renderUploadPlaceholder()}
                            
                            {/* Show upload area even with existing media for easy replacement */}
                            {(formdata?.Src && !formdata.Src[0]?.name) && !dataUrl && (
                                <div className="text-center py-4 border-t border-gray-300 mt-2">
                                    <div className="flex flex-col items-center">
                                        <i className="fi fi-sr-mode-landscape text-2xl text-gray-400 mb-2"></i>
                                        <p className="text-sm text-gray-500">Click to add more or replace</p>
                                    </div>
                                </div>
                            )}

                            {/* Show compact upload option when files are selected */}
                            {(formdata?.Src && (formdata.Src[0]?.name || typeof formdata.Src[0] === 'string')) && (
                                <div className="w-full text-center py-3 bg-gray-100 border-t border-gray-300">
                                    <div className="flex items-center justify-center gap-2">
                                        <i className="fi fi-sr-add text-blue-500"></i>
                                        <span className="text-sm text-blue-600 font-medium">Add more files or replace</span>
                                    </div>
                                </div>
                            )}

                            <input 
                                type="file" 
                                name="Src" 
                                multiple 
                                accept="image/*,video/*"
                                onChange={handlechange} 
                                className="hidden" 
                            />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="mb-2">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                        </div>
                        <input 
                            type="text" 
                            name="Title" 
                            value={formdata?.Title || ''} 
                            onChange={handlechange} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            required 
                        />
                    </div>
                    
                    <div className="mb-2">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Source Type</label>
                        </div>
                        <select 
                            name="Src_Type" 
                            value={formdata?.Src_Type || ''} 
                            onChange={handlechange} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="Images">Images</option>
                            <option value="Videos">Videos</option>
                            <option value="Mixed">Mixed</option>
                        </select>
                    </div>

                    <div className="mb-2">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                        </div>
                        <input 
                            type="date" 
                            name="Event_Date" 
                            value={formdata?.Event_Date ? moment(formdata.Event_Date).format("YYYY-MM-DD") : ''} 
                            onChange={handlechange} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            required 
                        />
                    </div>
                </div>

                <div className="mb-2">
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300 border rounded-md cursor-pointer transition-colors flex items-center justify-center"
                    >
                        {loading && (
                            <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full mr-2" role="status" aria-label="loading"></span>
                        )} 
                        {!formdata?._id ? "Add Gallery" : "Update Gallery"}
                    </button>
                </div>
            </form>
            
            {progress > 0 && (
                <div className="mt-5">
                    <div className="mb-2 flex justify-between text-sm text-gray-600">
                        <span>Uploading...</span>
                        <span>{progress}%</span>
                    </div>
                    <ProgressBar value={progress} className="h-2" />
                </div>
            )}
        </Dialog>
    );
}