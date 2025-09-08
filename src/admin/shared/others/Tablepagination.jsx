// // import { Pagination } from '@nextui-org/react';
// // import { useMemo } from 'react';
// // export default function Tablepagination(props){
// //     const {rows,page,onPage,totalRecords}=props;
// //     const pages = useMemo(() => {
// //         return totalRecords ? Math.ceil(totalRecords / rows) : 0;
// //       }, [totalRecords, rows]);
// //     return(
// //         <div className="flex items-center justify-between w-full p-2 px-8">
// //           <div></div>
// //         {totalRecords > 0 && (<Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={(page) => onPage(page)} />) }
// //         <div>Total Records : {totalRecords}</div>
// //       </div>
// //     )
// // }


// // import { Pagination } from '@nextui-org/react';
// import { Paginator } from 'primereact/paginator';
// import { useMemo } from 'react';

// export default function Tablepagination(props) {
//     const { rows, page, onPage, totalRecords, setRows } = props;
//     const pages = useMemo(() => {
//         return totalRecords ? Math.ceil(totalRecords / rows) : 0;
//     }, [totalRecords, rows]);
//     const rowOptions = [10, 20, 50,100,300,500,1000,1500,2000,3000,4000];
//     return (
//         <div className="items-center justify-between w-full p-2 px-8 mt-2 mb-2 space-y-2 lg:flex lg:space-y-0">
   
//             <div>
//                 <label htmlFor="rows-per-page" className="mr-2">Rows per page:</label>
//                 <select
//                     id="rows-per-page"
//                     value={rows}
//                     onChange={(e) => setRows(Number(e.target.value))}
//                     className="px-2 py-1 border rounded"
//                 >
//                     {rowOptions.map(option => (
//                         <option key={option} value={option}>
//                             {option}
//                         </option>
//                     ))}
//                 </select>
//             </div>

     
//             {totalRecords > 0 && (
//                 <Paginator 
//                     className="w-full lg:w-auto"
//                     page={page}
//                     total={pages}
//                     onChange={(page) => onPage(page)}
//                     // className='max-w-full mx-auto' 
//                 />
//             )}

    
//             <div>Total Records: {totalRecords}</div>
//         </div>
//     );
// }


import { Paginator } from 'primereact/paginator';
import { useMemo } from 'react';

export default function Tablepagination(props) {
    const { rows, page, onPage, totalRecords, setRows } = props;
    
    const pages = useMemo(() => {
        return totalRecords ? Math.ceil(totalRecords / rows) : 0;
    }, [totalRecords, rows]);
    
    const rowOptions = [10, 20, 50, 100, 300, 500];
    
    // Convert page to zero-based index for PrimeReact
    const first = (page - 1) * rows;
    
    const onPageChange = (event) => {
        // Convert back to 1-based page number
        const newPage = Math.floor(event.first / event.rows) + 1;
        onPage(newPage);
        if (event.rows !== rows) {
            setRows(event.rows);
        }
    };

    const rowsPerPageTemplate = {
        layout: 'RowsPerPageDropdown',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = rowOptions.map(option => ({
                label: option.toString(),
                value: option
            }));

            return (
                <div className="flex items-center">
                    <label htmlFor="rows-per-page" className="mr-2">Rows per page:</label>
                    <select
                        id="rows-per-page"
                        value={options.value}
                        onChange={(e) => options.onChange(e)}
                        className="px-2 py-1 border rounded"
                    >
                        {dropdownOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            );
        }
    };

    return (
        <div className="items-center justify-between w-full p-2 px-8 mt-2 mb-2 space-y-2 lg:flex lg:space-y-0">
            <div>
                <label htmlFor="rows-per-page" className="mr-2">Rows per page:</label>
                <select
                    id="rows-per-page"
                    value={rows}
                    onChange={(e) => setRows(Number(e.target.value))}
                    className="px-2 py-1 border rounded"
                >
                    {rowOptions.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {totalRecords > 0 && (
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={totalRecords}
                    onPageChange={onPageChange}
                    rowsPerPageOptions={rowOptions}
                    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                    className="justify-center"
                />
            )}

            <div>Total Records: {totalRecords}</div>
        </div>
    );
}