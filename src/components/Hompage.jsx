import { useCallback, useEffect, useState } from "react";
import AboutSection from "../shared/components/Home/AboutSection";
import FacilitiesSection from "../shared/components/Home/FacilitiesSection";
import HeroSection from "../shared/components/Home/Herosection";
import MinimalGallerySection from "../shared/components/Home/MinimalGallerySection";
import NewsEventsSection from "../shared/components/Home/NewsandEventSection";
import RecruitersSection from "../shared/components/Home/RecruitersSection";
import VideoSection from "../shared/components/Home/VideoSection";
import { getActiveWelcomePopup, getallactivebanner, getallactivelatestupdates, getallactivenotifications } from "../shared/services/apihomepage/apihomepage";
import Latestupdates from "../shared/components/Home/Latestupdates";
import Popup from "../shared/components/Home/Popup";



export default function Hompage() {
  const [bannerData, setBannerData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [latestUpdate, setLatestUpdate] = useState([]);
  const [welcomePopup, setWelcomePopup] = useState([]);
  const [activePopup, setActivePopup] = useState(false);

  let isMounted = true;
  const getherobanner = useCallback(async () => {
    const res1 = await getallactivebanner({});
    console.log(res1)
    setBannerData(res1);
    const res2 = await getallactivenotifications();
    setNotifications(res2);
    const res3 = await getallactivelatestupdates();
    setLatestUpdate(res3)
    const res4 = await getActiveWelcomePopup();
    setWelcomePopup(res4)
  }, []);

  useEffect(() => {
    if (isMounted) {
      getherobanner();
    }
    return (() => isMounted = false);
  }, [])

  useEffect(() => {
    if (welcomePopup.length > 0) {
      console.log("Showing welcomePopup");
      setActivePopup(true);
    }
  }, [welcomePopup]);

  const data = [
    {
      img: '/images/home/hero1.jpg',
      title: 'Experience Excellence',
      subtitle: 'Discover amazing possibilities with our innovative solutions',
      cta: 'Get Started'
    },
    {
      img: '/images/home/hero2.jpg',
      title: 'Transform Your Vision',
      subtitle: 'Bringing your ideas to life with cutting-edge technology',
      cta: 'Learn More'
    },
    {
      img: '/images/home/hero3.jpg',
      title: 'Future is Now',
      subtitle: 'Step into tomorrow with our advanced platform',
      cta: 'Explore'
    },
  ];


  return (
    <>
      <HeroSection data={bannerData} notifications={notifications} />
      <AboutSection />
      {/* <Chooseussection/> */}
      {/* <HighLight /> */}
      <VideoSection />
      <Latestupdates data={latestUpdate} />
      <NewsEventsSection />
      <FacilitiesSection />
      <MinimalGallerySection />
      <RecruitersSection />
      <Popup welcomePopup={welcomePopup} activePopup={activePopup} setActivePopup={setActivePopup} />
      {/* <GallerySection /> */}

    </>
  );
}

