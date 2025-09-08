import { useCallback, useEffect, useState } from "react";
import PlacementCellPage from "../shared/components/placementcell/PlacementCellPage";
import { getplacementgallery } from "../shared/services/apiplacement/apiplacement";


export default function PlacementPage() {

    const [placementimage, setPlacementimage] = useState(null)
      
         let isMounted = true
      const placementgallery = useCallback(async () => {
        try {
          const response = await getplacementgallery()
          setPlacementimage(response)
        } catch (error) {
          console.error('Error fetching gallery :', error)
          setPlacementimage([]) 
        }
      },[])
    
      useEffect(() => {
          if(isMounted){
            placementgallery();
            }
            return(()=>isMounted = false);
      }, [placementgallery])
  return (
    <>
      <PlacementCellPage placementimage={placementimage}  />
    </>
  )
}
