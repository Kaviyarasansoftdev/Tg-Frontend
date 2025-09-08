import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HiBell, HiArrowLeft, HiDownload, HiEye, HiClock, HiTag } from 'react-icons/hi';
import { BsFiletypePdf, BsImage } from 'react-icons/bs';
import { MdDescription } from 'react-icons/md';
import { getnotificationsbyid } from '../shared/services/apihomepage/apihomepage';
import apiurl from '../shared/services/apiendpoint/apiendpoint';

export default function NotificationView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(false);
  let isMounted = true;

  const fetchNotification = async () => {
    try {
      setLoading(true);
      const data = await getnotificationsbyid(id);
      // console.log('Fetched data:', data);
      const selectedNotification = Array.isArray(data) ? data.find(item => item._id === id) : data;
      setNotification(selectedNotification);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted) {
      fetchNotification();
    }
    return (() => isMounted = false);
  }, [id])

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = `${apiurl()}/${fileUrl}`;
    link.download = fileName || 'download';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfView = (pdfUrl) => {
    window.open(`${apiurl()}/${pdfUrl}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-gray-300 border-t-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading notification...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white border border-red-200 text-red-800 px-6 py-8 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Unable to Load Notification</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => navigate(-1)}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Header Section - Clean and Professional */}
          <div className="bg-slate-50 border-b border-gray-200 px-8 py-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <HiBell className="h-5 w-5 text-blue-600" />
                  </div>
                  {notification?.isNew && (
                    <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold border border-red-200">
                      NEW
                    </span>
                  )}
                  {notification?.type && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium flex items-center border border-gray-200">
                      <HiTag className="h-3 w-3 mr-1" />
                      {notification.type}
                    </span>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {notification?.Title}
                </h1>
                {notification?.date && (
                  <div className="flex items-center text-gray-600">
                    <HiClock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      {formatDate(notification.date)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            {notification?.Description && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MdDescription className="h-5 w-5 text-gray-500 mr-3" />
                  <h2 className="text-lg font-semibold text-gray-900">Description</h2>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {notification.Description}
                  </p>
                </div>
              </div>
            )}

            {/* Attachments Section */}
            {(notification?.Image || notification?.pdf) && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <HiEye className="h-5 w-5 mr-3 text-gray-500" />
                  Attachments
                </h2>
                
                <div className="space-y-6">
                  {/* Image Section */}
                  {notification?.Image && (
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-blue-50 p-2 rounded-lg mr-3">
                            <BsImage className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block">Image Attachment</span>
                            <span className="text-sm text-gray-500">Click to view full size</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownload(notification.Image, `${notification.Title}_image`)}
                          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-4 py-2 rounded-md border border-blue-200 hover:bg-blue-100"
                        >
                          <HiDownload className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      </div>
                      
                      <div className="relative">
                        <img
                          src={`${apiurl()}/${notification.Image}`}
                          alt={notification.Title}
                          className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => setImagePreview(true)}
                        />
                      </div>
                    </div>
                  )}

                  {/* PDF Section */}
                  {notification?.pdf && (
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-red-50 p-2 rounded-lg mr-3">
                            <BsFiletypePdf className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block">PDF Document</span>
                            <span className="text-sm text-gray-500">View or download the document</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handlePdfView(notification.pdf)}
                            className="flex items-center text-red-600 hover:text-red-700 transition-colors bg-red-50 px-4 py-2 rounded-md border border-red-200 hover:bg-red-100"
                          >
                            <HiEye className="h-4 w-4 mr-2" />
                            View
                          </button>
                          <button
                            onClick={() => handleDownload(notification.pdf, `${notification.Title}_document.pdf`)}
                            className="flex items-center text-red-600 hover:text-red-700 transition-colors bg-red-50 px-4 py-2 rounded-md border border-red-200 hover:bg-red-100"
                          >
                            <HiDownload className="h-4 w-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                        <BsFiletypePdf className="h-12 w-12 text-red-400 mx-auto mb-3" />
                        <p className="text-gray-600 mb-4 font-medium">PDF Document Ready for Viewing</p>
                        <button
                          onClick={() => handlePdfView(notification.pdf)}
                          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
                        >
                          Open Document
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* External Link */}
            {notification?.Link && notification.Link !== '#' && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <a
                    href={notification.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline break-all"
                  >
                    {notification.Link}
                  </a>
                </div>
              </div>
            )}

            {/* Metadata - Professional Info Grid */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <span className="block text-sm font-medium text-gray-600 mb-1">Status</span>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                    notification?.Status === 'Active' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-gray-100 text-gray-800 border border-gray-200'
                  }`}>
                    {notification?.Status || 'Inactive'}
                  </span>
                </div>
                
                {notification?.createdAt && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="block text-sm font-medium text-gray-600 mb-1">Created</span>
                    <span className="text-sm text-gray-900 font-medium">
                      {formatDate(notification.createdAt)}
                    </span>
                  </div>
                )}
                
                {notification?.updatedAt && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="block text-sm font-medium text-gray-600 mb-1">Last Updated</span>
                    <span className="text-sm text-gray-900 font-medium">
                      {formatDate(notification.updatedAt)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {imagePreview && notification?.Image && (
        <div 
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          onClick={() => setImagePreview(false)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setImagePreview(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={`${apiurl()}/${notification.Image}`}
              alt={notification.Title}
              className="max-w-full max-h-full object-contain rounded-lg border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}