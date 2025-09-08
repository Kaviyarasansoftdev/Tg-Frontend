import React from 'react';
import { Dialog } from 'primereact/dialog';

export default function NaacTitleform({ naactitleVisible, setNaactitlevisible, naactitledata, setNaactitledata, handlesave, handlechange, handleupdate, loading }) {
  if (!naactitleVisible) return null;

  return (
    <Dialog
      header="Naac Title Details"
      visible={naactitleVisible}
      onHide={() => setNaactitlevisible(false)}
      className="!w-full lg:!w-[40rem]"
    >
      <form onSubmit={!naactitledata?._id ? handlesave : handleupdate}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="mb-2">
            <div className="mb-2">
              <label>Naac Title</label>
            </div>
            <input
              type="text"
              name="naactitle"
              value={naactitledata?.naactitle || ''}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-md outline-none border-secondary"
              required
            />
          </div>
             <div className="mb-2">
            <div className="mb-2">
              <label>Naac Title</label>
            </div>
            <input
              type="text"
              name="naacsubtitle"
              value={naactitledata?.naacsubtitle || ''}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-md outline-none border-secondary"
              required
            />
          </div>
          <div className="mb-2">
            <div className="mb-2">
              <label>Status</label>
            </div>
            <select
              name="Status"
              value={naactitledata?.Status || ''}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-md outline-none border-secondary"
              required
            >
              <option value="" disabled>
                ---Select a status---
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white border rounded-md bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none cursor-pointer" 
            disabled={loading}
          >
            {loading && (
              <span
                className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full mr-2"
                role="status"
                aria-label="loading"
              ></span>
            )}
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
}