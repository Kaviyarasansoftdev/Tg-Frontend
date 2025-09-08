export default function Tableheadpanel(props) {
  const { newform, setglobalfilter, naactitleform, setIsDialogVisible } = props;

  return (
    <div className="items-center justify-between px-6 py-4 space-y-2 lg:flex lg:space-y-0">
      <div>
        <h2 className="mx-1 text-xl font-semibold text-gray-800 lg:mx-0">
          {/* Naac */}
        </h2>
      </div>

      <div>
        <div className="inline-flex gap-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border outline-none rounded-xl"
            onChange={(e) => setglobalfilter(e.target.value)}
          />
          <button
            onClick={newform}
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg bg-green-500 gap-x-2 hover:bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <svg
              className="flex-shrink-0 size-3"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden md:block">Add Naac</span>
          </button>
          <button
            onClick={naactitleform}
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg bg-green-500 gap-x-2 hover:bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <svg
              className="flex-shrink-0 size-3"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Add NaacTitleform
          </button>
          <button
            onClick={() => setIsDialogVisible(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg bg-green-500 gap-x-2 hover:bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <i className="fi fi-rs-eye"></i>
            View NaacTitleform
          </button>
        </div>
      </div>
    </div>
  );
}