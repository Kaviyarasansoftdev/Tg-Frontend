import React from 'react'

export default function AcademicProgram() {
  return (
     <div className="flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col">
        <div className="flex-1 p-6">
          <iframe
            src="/documents/academic-details/academic-prog.pdf"
            className="w-full h-full border border-gray-200 rounded-lg"
            title="NAAC Accreditation Certificate"
          />
        </div>
      </div>
    </div>
  )
}
