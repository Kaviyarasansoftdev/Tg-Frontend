import React, { useCallback, useEffect, useState } from 'react'
import Gallery from '../shared/components/Gallery/Gallery'
import GalleryModel from '../shared/components/Gallery/GalleryModel';
import { getallGallerys } from '../shared/services/apigallery/apigallery';
import moment from 'moment-timezone';

export default function GalleryPage() {

  const [Visible, setVisible] = useState(false);
  const [ModelData, setModelData] = useState({});

  const [Images, setImages]=useState([]);
  const [Videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  let isMounted = true;

  const getallevent = useCallback(async ()=>{
    setLoading(true)
    const res= await getallGallerys();
    var images = res?.resdata.filter(val => val.Type == "Images");
    var videos = res?.resdata.filter(val => val.Type == "Videos");
    //console.log(images,videos)
    var uniqueImage = images.filter((item, index, self) => index === self.findIndex((t) => moment(t.Event_Date).format('YYYY') === moment(item.Event_Date).format('YYYY')) );
    var uniqueVideo = videos.filter((item, index, self) => index === self.findIndex((t) => moment(t.Event_Date).format('YYYY') === moment(item.Event_Date).format('YYYY')) );
    setImages(uniqueImage);
    setVideos(uniqueVideo);
    setLoading(false);
  },[]);

  useEffect(()=>{
    if(isMounted){
      getallevent();
    }
    return(()=>isMounted = false);
  },[])


  const OpenModel = (data)=>{
    //console.log(data)
    setModelData(data);
    setVisible(true)
  }


  return (
    <>
      <Gallery Images={Images} Videos={Videos} OpenModel={OpenModel} />
      {Visible && <GalleryModel ModelData={ModelData} setVisible={setVisible} Visible={Visible} />}
      
    </>
  )
}
