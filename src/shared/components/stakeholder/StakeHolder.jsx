import { useState } from 'react';
import {
    FileText,
    Users,
    GraduationCap,
    Building2,
    UserCheck,
    Download,
    ExternalLink,
    ShieldCheck,
    MessageCircleHeart,
    XCircle
} from 'lucide-react';

const PoliciesAndFeedback = () => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openPdf = (url) => {
        setPdfUrl(url);
        setModalOpen(true);
    };

    const closeModal = () => {
        setPdfUrl(null);
        setModalOpen(false);
    };

    const policyDocuments = [
        {
            title: "General Feedback Policy",
            description: "Comprehensive guidelines for feedback collection and implementation",
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            type: "PDF",
            size: "2.3 MB",
            url: "/pdfs/general-feedback-policy.pdf"
        },
        {
            title: "Sample Feedback Forms The Stake",
            description: "Template forms and best practices for stakeholder feedback collection",
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            type: "PDF",
            size: "1.8 MB",
            url: "/pdfs/sample-feedback-forms.pdf"
        },
        {
            title: "Questionnaire Guidelines",
            description: "Structured approach to creating effective feedback questionnaires",
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            type: "PDF",
            size: "1.2 MB",
            url: "/pdfs/questionnaire-guidelines.pdf"
        },
        {
            title: "Stakeholder Feedback Analysis Report",
            description: "Analytical framework for processing and interpreting feedback data",
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            children: [
                { title: "Student", size: "1.1 MB", url: "/pdfs/stakeholder/student.pdf" },
                { title: "Faculty", size: "0.9 MB", url: "/pdfs/stakeholder/faculty.pdf" },
                { title: "Alumni", size: "1.0 MB", url: "/pdfs/stakeholder/alumni.pdf" },
                { title: "Employer", size: "1.2 MB", url: "/pdfs/stakeholder/employer.pdf" }
            ]
        },
        {
            title: "Action Taken Report",
            description: "Documentation of implemented changes based on feedback received",
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            type: "PDF",
            size: "2.7 MB",
            url: "/pdfs/action-taken-report.pdf"
        },
        {
            title: "Evidences for Action Taken Report",
            description: "Supporting documentation and evidence for implemented feedback actions",
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            type: "PDF",
            size: "4.2 MB",
            url: "/pdfs/evidence-action.pdf"
        }
    ];

    const feedbackForms = [
        {
            title: "Student Feedback",
            description: "Share your academic experience, suggestions, and concerns",
            icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
            participants: "2,340+ responses"
        },
        {
            title: "Faculty Feedback",
            description: "Provide insights on teaching environment and institutional support",
            icon: <Users className="w-8 h-8 text-purple-500" />,
            participants: "180+ responses"
        },
        {
            title: "Alumni Feedback",
            description: "Help us improve by sharing your professional journey insights",
            icon: <UserCheck className="w-8 h-8 text-purple-500" />,
            participants: "850+ responses"
        },
        {
            title: "Employer Feedback",
            description: "Evaluate our graduates and suggest curriculum improvements",
            icon: <Building2 className="w-8 h-8 text-purple-500" />,
            participants: "120+ responses"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20 pb-5 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-6">

                    {/* Tag Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Institutional Integrity</span>
                    </div>

                    {/* Icon */}
                    {/* <div className="flex justify-center">
                        <div className="p-4 bg-purple-100 rounded-2xl">
                            <ShieldCheck className="w-12 h-12 text-purple-600" />
                        </div>
                    </div> */}

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Policies <br /> & <br />
                        <span className="block text-purple-600">Feedback System</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Engage with our institutional policy structure and help us grow with your valuable insights. We strive for transparency and excellence through feedback.
                    </p>
                </div>
            </section>


            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Policy Documents */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <FileText className="w-6 h-6 mr-2 text-purple-600" /> Policy Documents
                        </h2>
                        {policyDocuments.map((doc, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div>{doc.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                                            {doc.type && (
                                                <div className="mt-2 text-xs text-gray-500 space-x-3">
                                                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{doc.type}</span>
                                                    <span>{doc.size}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {doc.url && (
                                        <button onClick={() => openPdf(doc.url)} className="text-gray-400 hover:text-purple-600 transition">
                                            <Download className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>

                                {/* Sub-documents (for Stakeholders) */}
                                {doc.children && (
                                    <div className="mt-4 ml-10 space-y-2">
                                        {doc.children.map((subDoc, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className="flex items-center justify-between border border-gray-100 rounded px-4 py-2 hover:bg-gray-50"
                                            >
                                                <span className="text-sm text-gray-700">{subDoc.title}</span>
                                                <div className="flex items-center space-x-3 text-xs text-gray-500">
                                                    <span>{subDoc.size}</span>
                                                    <button
                                                        onClick={() => openPdf(subDoc.url)}
                                                        className="text-gray-400 hover:text-purple-600 transition"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Feedback Forms */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
                            <MessageCircleHeart className="w-6 h-6 mr-2 text-purple-600" />
                            Feedback Forms
                        </h2>

                        <div className="space-y-4">
                            {feedbackForms.map((form, index) => (
                                <a
                                    key={index}
                                    href={form.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white border border-gray-200 hover:bg-purple-50 cursor-pointer hover:border-purple-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {form.icon}
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
                                                <p className="text-sm text-gray-600">{form.description}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-600" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">{form.participants}</p>
                                </a>
                            ))}
                        </div>


                        {/* Quick Stats */}
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 mt-6 shadow">
                            <h3 className="text-lg font-semibold text-purple-800 mb-4">Feedback Impact</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Total Responses</span>
                                    <span className="font-bold">3,490+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Actions Implemented</span>
                                    <span className="font-bold text-purple-700">127</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Satisfaction Rate</span>
                                    <span className="font-bold text-purple-700">94.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-100 py-16 border-t border-gray-300">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Voice Matters</h2>
                    <p className="text-gray-600 mb-6">
                        We believe that constructive feedback drives meaningful change. Contribute your thoughts to help shape a better tomorrow for our institution.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                            View All Policies
                        </button>
                        <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
                            Submit Feedback
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal PDF Viewer */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
                    <div className="relative w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl bg-white animate-fadeIn">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-gray-100 hover:bg-red-100 text-red-600 p-2 rounded-full transition-all"
                            aria-label="Close PDF Viewer"
                        >
                            <XCircle className="w-6 h-6" />
                        </button>
                        <iframe
                            src={pdfUrl}
                            className="w-full h-[85vh] rounded-b-xl"
                            frameBorder="0"
                            title="PDF Viewer"
                        />
                    </div>
                </div>
            )}

        </div>
    );
};

export default PoliciesAndFeedback;
