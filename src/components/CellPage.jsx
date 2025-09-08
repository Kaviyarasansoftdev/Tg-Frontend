import { useCallback, useEffect, useState } from "react";
import Cell from "../shared/components/cell/Cell";
import { apigetcellbytitle } from "../shared/services/apicells/apicells";
import { useParams } from "react-router-dom";


export default function CellPage() {

    const [data, setdata] = useState([]);
    const { shortname } = useParams()

    const getData = useCallback(async () => {
        let res = await apigetcellbytitle(shortname)
        setdata(res.data || [])
    }, [shortname])

    useEffect(() => {
        getData()
    }, [shortname])

    return (
        <>
            <Cell cellData={data} />
        </>
    )
}
