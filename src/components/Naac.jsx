import React, { useCallback, useEffect, useState } from 'react'
import NaacAccreditationSection from '../shared/components/NaacAccreditationSection/NaacAccreditationSection'
import { getallactivenaactitle } from '../shared/services/apinaac/apinaac'

export default function Naac() {
  
  const [naactitle, setNaactitle] = useState(null)
  
     let isMounted = true
  const naactitledata = useCallback(async () => {
    try {
      const response = await getallactivenaactitle()
      setNaactitle(response)
    } catch (error) {
      console.error('Error fetching NAAC titles:', error)
      setNaactitle([]) 
    }
  },[])

  useEffect(() => {
      if(isMounted){
        naactitledata();
        }
        return(()=>isMounted = false);
  }, [naactitledata])

  return (
    <>
      <NaacAccreditationSection naactitle={naactitle} />
    </>
  )
}