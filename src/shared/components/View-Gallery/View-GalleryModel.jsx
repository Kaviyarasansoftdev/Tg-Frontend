import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from 'yet-another-react-lightbox/plugins';
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import apiurl from '../../services/apiendpoint/apiendpoint';


export default function GalleryModel(props) {

  const {setVisible,Visible, ModelData} = props;
  console.log(ModelData)
  const GalleryData = ModelData.Src_Type=="Images"? ModelData.Src.map(item=>({ src: `${apiurl()}/${item}`, width: 3840, height: 5760 })): null;
  const VideoData = ModelData.Src_Type=="Videos"? ModelData.Src.map(item=>({type: "video", width: 1280, height: 720, poster:'https://natomasgroup.org/assets/Images/Logo/logo.png',
     sources: [{src: `${apiurl()}/${item}`,type:'video/mp4'}] })):null;
  console.log(VideoData)
  return (
    <>
      {GalleryData && <Lightbox open={Visible} close={() => setVisible(false)} slides={GalleryData} plugins={[Thumbnails,Zoom,Counter]} />}
      {VideoData && <Lightbox open={Visible} close={() => setVisible(false)} slides={VideoData} plugins={[Video,Counter]}  video={{autoPlay:true }}/>}
    </>
    
  )
}
