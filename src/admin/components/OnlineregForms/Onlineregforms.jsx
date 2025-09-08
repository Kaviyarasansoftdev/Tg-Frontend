import { useCallback, useEffect, useState } from "react";
import { apigetallOnlinereg } from "../../../shared/services/apionlinereg/apionlinereg";
import Tableheadpanel from "../../shared/components/online-reg-forms/Tableheadpanel";
import Tableview from "../../shared/components/online-reg-forms/Tableview";

export default function Onlineregforms () {

    
        const [tableData, setTableData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [first, setFirst] = useState(0);
        const [rows, setRows] = useState(10);
        const [globalFilter, setglobalfilter] = useState('');
        const [page, setPage] = useState(1);
       

        const getOnlionregForms = useCallback(async () => {
            setLoading(true);
            try {
                const res = await apigetallOnlinereg({ first, rows, globalFilter });
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
            getOnlionregForms();
        }, [getOnlionregForms]);

          const onPage = (newPage) => {
                setPage(newPage);
                setFirst(rows * (newPage - 1));
            };

    return (
        <>
        <div className="bg-white border rounded-3xl">
            <Tableheadpanel setglobalfilter={setglobalfilter}/>
            <Tableview  tableData={tableData} loading={loading} onPage={onPage} page={page} first={first} />
        </div>
        </>
    )
}