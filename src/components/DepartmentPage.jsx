import { useCallback, useEffect, useState } from "react";
import Department from "../shared/components/department/Department";
import { getactivedepartmentoverviews } from "../shared/services/apidepartment/apidepartment";
import { useParams } from "react-router-dom";



export default function DepartmentPage() {
  const [data, setdata] = useState([]);

  const { shortname } = useParams()

  const getData = useCallback(async () => {
    let res = await getactivedepartmentoverviews(shortname)
    setdata(res.data || [])
  }, [shortname])

  useEffect(() => {
    getData()
  }, [shortname])

  return (
    <>
      <Department departmentData={data} />
    </>
  )
}
