
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Tablepagination from "../../shared/others/Tablepagination";
import Tableheadpanel from "../../shared/components/naac/Tableheadpanel";
import Tableview from "../../shared/components/naac/Tableview";
import NaacForm from "../../shared/components/naac/Addandeditform";
import NaacTitleform from "../../shared/components/naac/NaacTitleform";
import { deleteatenaac, deleteatenaactitle, getallnaac, getallnaactitle, savenaac, savenaactitle, updatenaac, updatenaactitle } from "../../shared/services/apinaac/apinaac";
import Naactitleview from "../../shared/components/naac/Naactitleview";

export default function Naacadmin() {
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
  const [filtervalues, setfiltervalues] = useState([]);
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [brandnameOptions, setBrandnameOptions] = useState([]);
  const [pdfDataUrl, setPdfDataUrl] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [naactitledata, setNaactitledata] = useState({});
  const [naactitleVisible, setNaactitlevisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [naacTitletabledata, setNaactitletabledata] = useState([]);
  const [naactitleTotalRecords, setnaactitleTotalRecords] = useState(0);
  const [naacTitleOptions, setNaacTitleOptions] = useState([]);

  let isMounted = true;

  const getNotification = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getallnaac({ first, rows, globalfilter, colfilter });
      console.log('Res:', res);
      setTabledata(res?.resdata);
      setTotalRecords(res?.totallength);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTabledata([]);
      setTotalRecords(0);
    } finally {
      setLoading(false);
    }
  }, [first, rows, globalfilter, colfilter]);

  useEffect(() => {
    if (isMounted) {
      getNotification();
    }
    return () => { isMounted = false; };
  }, [first, rows, globalfilter, colfilter]);

  const getnaactitle = useCallback(async () => {
    try {
      const res = await getallnaactitle({ first, rows, globalfilter, colfilter });
      console.log('NAAC Title Response:', res); // Debug log
      setNaactitletabledata(res?.resdata || []);
      setnaactitleTotalRecords(res?.totallength || 0);
      setNaacTitleOptions(res?.resdata || []);
    } catch (error) {
      console.error('Error fetching NAAC titles:', error);
      setNaactitletabledata([]);
      setnaactitleTotalRecords(0);
      setNaacTitleOptions([]);
    }
  }, [first, rows, globalfilter, colfilter]);

  useEffect(() => {
    if (isMounted) {
      getnaactitle();
    }
    return () => { isMounted = false; };
  }, [first, rows, globalfilter, colfilter]);

  const onPage = (page) => {
    setPage(page);
    setFirst(rows * (page - 1));
    setRows(rows);
  };

  const handlechange = (e) => {
    if (e.target.name === "Image" && e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (eve) {
          setImagePreview(eve.target.result);
        };
        reader.readAsDataURL(file);
        setFormdata({ ...formdata, [e.target.name]: file });
      }
    } else if (e.target.name === "pdf" && e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (eve) {
          setPdfPreview(eve.target.result);
        };
        reader.readAsDataURL(file);
        setFormdata({ ...formdata, [e.target.name]: file });
      }
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const handleNaacTitleChange = (e) => {
    setNaactitledata({ ...naactitledata, [e.target.name]: e.target.value });
  };

  const handleNaacTitleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await savenaactitle(naactitledata);
      toast.success("Successfully saved NAAC title");
      setNaactitledata({});
      getnaactitle(); // Refresh NAAC titles after saving
      getNotification();
      setNaactitlevisible(false);
    } catch (error) {
      console.error('Error saving NAAC title:', error);
      toast.error("Failed to save NAAC title");
    } finally {
      setLoading(false);
    }
  };

  const handleNaacTitleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updatenaactitle(naactitledata);
      toast.success("Successfully updated NAAC title");
      getnaactitle(); // Refresh NAAC titles after updating
      getallnaactitle();
      setNaactitledata({});
      setNaactitlevisible(false);
    } catch (error) {
      console.error('Error updating NAAC title:', error);
      toast.error("Failed to update NAAC title");
    } finally {
      setLoading(false);
    }
  };

  const naactitleform = () => {
    setNaactitledata({});
    setNaactitlevisible(true);
  };

  const cusfilter = (field, value) => {
    setcolFilter(prev => ({ ...prev, [field]: { $in: value } }));
    setFirst(0);
  };

  const handlesave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await savenaac(formdata);
      toast.success("Successfully saved");
      setFormdata({});
      setImagePreview(null);
      setPdfPreview(null);
      getNotification();
      setVisible(false);
    } catch (error) {
      console.error('Error saving notification:', error);
      toast.error("Failed to save notification");
    } finally {
      setLoading(false);
    }
  };

  const newform = () => {
    setFormdata({});
    setImagePreview(null);
    setPdfPreview(null);
    setVisible(true);
  };

  const editform = (data) => {
    setFormdata(data);
    setVisible(true);
  };

  const handleupdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updatenaac(formdata);
      toast.success("Successfully updated");
      getNotification();
      setVisible(false);
    } catch (error) {
      console.error('Error updating notification:', error);
      toast.error("Failed to update notification");
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
      accept: async () => {
        await deleteatenaac(id);
        toast.success("Successfully deleted");
        getNotification();
      }
    });
  };

  const handleDeleteNaacTitle = (id) => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'bg-red-500 ml-2 text-white p-2',
      rejectClassName: 'p-2 outline-none border-0',
      accept: async () => {
        await deleteatenaactitle(id);
        toast.success("Successfully deleted");
        getnaactitle(); // Refresh NAAC titles after deleting
        getNotification();
      }
    });
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageDataUrl(null);
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      Image: null,
    }));
  };

  const removePdf = () => {
    setPdfPreview(null);
    setPdfDataUrl(null);
    setFormdata({ ...formdata, pdf: null });
  };

  const editNaacTitle = (data) => {
    setNaactitledata(data);
    setNaactitlevisible(true);
  };

  return (
    <div>
      <div className="bg-white border rounded-3xl">
        <Tableheadpanel
          newform={newform}
          setglobalfilter={setglobalfilter}
          naactitleform={naactitleform}
          setIsDialogVisible={setIsDialogVisible}
        />
        <Tableview
          tabledata={tabledata}
          totalRecords={totalRecords}
          first={first}
          editfrom={editform}
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
        <NaacForm
          visible={visible}
          setVisible={setVisible}
          loading={loading}
          formdata={formdata}
          setFormdata={setFormdata}
          imagePreview={imagePreview}
          pdfPreview={pdfPreview}
          handlechange={handlechange}
          handlesave={handlesave}
          handleupdate={handleupdate}
          brandnameOptions={brandnameOptions}
          naacTitleOptions={naacTitleOptions} // Make sure this is passed
          removeImage={removeImage}
          removePdf={removePdf}
        />
        <Naactitleview
          naacTitletabledata={naacTitletabledata}
          naactitleTotalRecords={naactitleTotalRecords}
          editNaacTitle={editNaacTitle}
          handleDeleteNaacTitle={handleDeleteNaacTitle}
          cusfilter={cusfilter}
          filtervalues={filtervalues}
          onPage={onPage}
          page={page}
          setIsDialogVisible={setIsDialogVisible}
          isDialogVisible={isDialogVisible}
        />
        <NaacTitleform
          naactitleVisible={naactitleVisible}
          setNaactitlevisible={setNaactitlevisible}
          naactitledata={naactitledata}
          setNaactitledata={setNaactitledata}
          handlechange={handleNaacTitleChange}
          handlesave={handleNaacTitleSave}
          handleupdate={handleNaacTitleUpdate}
          loading={loading}
        />
        <ConfirmDialog />
      </div>
    </div>
  );
}