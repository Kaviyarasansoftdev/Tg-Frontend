import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ViewGallery from '../View-Gallery/View-Gallery';
import GalleryModel from '../Gallery/GalleryModel';
import { getallGallerys } from '../../services/apigallery/apigallery';

export default function ViewEventsPage() {
  const [Visible, setVisible] = useState(false);
  const [ModelData, setModelData] = useState({});
  const [Images, setImages] = useState([]);
  const [Videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const params = useParams();

  const getallevent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get all gallery data
      const res = await getallGallerys(params.Type,params.Year);
      
      if (res && res.length > 0) {
        // Filter by Type and Year
        const filteredData = res.filter(item => {
          const itemYear = new Date(item.Event_Date).getFullYear().toString();
          // Map route params to API Type values
          const apiType = params.Type === 'Images' ? 'Image' : 'Video';
          return item.Type === apiType && itemYear === params.Year;
        });
        
        console.log('Filtered data:', filteredData);
        console.log('Params:', params);
        
        if (params.Type === 'Images') {
          setImages(filteredData);
          setVideos([]);
        } else if (params.Type === 'Videos') {
          setVideos(filteredData);
          setImages([]);
        }
      } else {
        setImages([]);
        setVideos([]);
      }
    } catch (err) {
      console.error('Error fetching gallery data:', err);
      setError('Failed to load gallery data');
      setImages([]);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  }, [params.Type, params.Year]);

  useEffect(() => {
    getallevent();
  }, [getallevent]);

  const OpenModel = (data) => {
    console.log('Opening model with data:', data);
    setModelData(data);
    setVisible(true);
  };

  return (
    <>
      <ViewGallery 
        Images={Images} 
        Videos={Videos} 
        OpenModel={OpenModel} 
        loading={loading} 
        error={error}
      />
      {Visible && (
        <GalleryModel 
          ModelData={ModelData} 
          setVisible={setVisible} 
          Visible={Visible} 
        />
      )}
    </>
  );
}