import Committees from "../shared/components/committies/Committies";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getcommitteeByTitle } from "../shared/services/apicommittee/apicommittee";


export default function CommittesPage() {
    const [data, setdata] = useState([]);

  const { shortname } = useParams()

  const getData = useCallback(async () => {
    let res = await getcommitteeByTitle(shortname)
    setdata(res.data || [])
  }, [shortname])

  useEffect(() => {
    getData()
  }, [shortname])

  return (
    <>
    <Committees committeesData={data}/>
    </>
  )
}
