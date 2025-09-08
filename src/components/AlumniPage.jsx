import { useCallback, useEffect, useState } from "react";
import AlumniAssociationPage from "../shared/components/alumniassociation/AlumniAssociationPage";
import { getalumnigallery } from "../shared/services/apialumni/apialumni";


export default function AlumniPage() {
  const [aluminiimage, setAlumniimage] = useState(null)

  let isMounted = true
  const alumnigallery = useCallback(async () => {
    try {
      const response = await getalumnigallery()
      setAlumniimage(response)
    } catch (error) {
      console.error('Error fetching gallery :', error)
      setAlumniimage([])
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      alumnigallery();
    }
    return (() => isMounted = false);
  }, [alumnigallery])
  return (
    <>
      <AlumniAssociationPage alumniimage={aluminiimage} />
    </>
  )
}
