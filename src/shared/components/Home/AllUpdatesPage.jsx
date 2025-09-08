import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, MapPin, ArrowLeft, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiurl from "../../services/apiendpoint/apiendpoint";

export default function AllUpdatesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
console.log('dattta',newsData)
  useEffect(() => {
    if (location.state?.newsData) {
      setNewsData(location.state.newsData);
    }
  }, [location.state]);

  const stripHtmlAndLimit = (html, limit = 150) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const dateStr = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const timeStr = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return `${dateStr} ${timeStr}`;
  };

  const handleReadMore = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };


  const handleBackToNews = () => {
    navigate(-1);
  };

  return (
    <div className="py-5 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={handleBackToNews}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News & Events
          </button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            All <span className="text-purple-600">Updates</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Complete list of all news and events at Tagore Institute of Engineering and Technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div
              key={item._id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.Coverimage ? `${apiurl()}/${item.Coverimage}` : 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop'}
                  alt={item.Title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                    NEW
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {item.Tags && item.Tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {item.Title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {stripHtmlAndLimit(item.Content)}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDateTime(item.DateandTime)}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.Location}
                  </div>
                </div>
                <Link to={`/all-updates/${item?._id}`}>
                  <button
                    // onClick={() => handleReadMore(item)}
                    className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {showModal && selectedItem && (
          <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      News
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                      General
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {selectedItem.Coverimage && (
                    <div className="w-full h-64 rounded-2xl overflow-hidden">
                      <img src={`${apiurl()}/${selectedItem.Coverimage}`} alt={selectedItem.Title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedItem.Title}
                  </h2>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDateTime(selectedItem.DateandTime)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedItem.Location}
                    </div>
                  </div>

                  {selectedItem.Tags && selectedItem.Tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.Tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: selectedItem.Content }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}