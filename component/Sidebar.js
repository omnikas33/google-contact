
// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
// } from 'cdbreact';


// export default function Sidebar(){
//     return(


     


//         <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//          < CDBSidebarContent>  Main Menu  </CDBSidebarContent>
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             className="sidebar-btn-wrapper"
//             style={{
//               padding: '20px 5px',
//             }}
//           >   
//             <button type="button" className="btn btn-primary active"  data-bs-toggle="button" autocomplete="off" aria-pressed="true"> <i class="bi bi-plus-lg"></i>   Create Contact</button>
//             <div className='sidebar-div'> 
//                <button type="button" className="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">   <i class="bi bi-person-fill"></i>Contact  <span>       79</span></button></div>
//                <button type="button" className="btn btn-secondary" > <i class="bi bi-clock"></i> Frequent</button>
//                <button type="button" className="btn btn-secondary" ><i class="bi bi-info"></i>Other info</button>

//           </div>
//           <h3 className='side-headline2'>Fix & Manage</h3>
//           <div className="m-f">  
//           <button type="button" class="btn btn-outline-secondary"><i class="bi bi-arrows-angle-contract"></i>Merge</button>
//           <button type="button" class="btn btn-outline-secondary"><i class="bi bi-arrow-down"></i>import</button>
//         </div>
//         <div className='m-f2'>
//         <button type="button" class="btn btn-outline-secondary"><i class="bi bi-trash3"></i>Trash</button>
//           <button type="button" class="btn btn-outline-secondary"><i class="bi bi-arrow-up-square-fill"></i>Export</button>
//         </div>

//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
        
  
//     )
// }
import React from 'react';
import { Button } from 'react-bootstrap';

export default function Sidebar() {
    return (
        <div style={{ height: '100%', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
            <h2>Main Menu</h2>
            <div style={{ margin: '20px 0' }}>
                <Button variant="primary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-plus-lg"></i> Create Contact
                </Button>
                <Button variant="secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-person-fill"></i> Contact
                </Button>
                <Button variant="secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-clock"></i> Frequent
                </Button>
                <Button variant="secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-info"></i> Other Info
                </Button>
            </div>
            <h2>Fix & Manage</h2>
            <div>
                <Button variant="outline-secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-arrows-angle-contract"></i> Merge
                </Button>
                <Button variant="outline-secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-arrow-down"></i> Import
                </Button>
                <Button variant="outline-secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-trash3"></i> Trash
                </Button>
                <Button variant="outline-secondary" className="mb-2" style={{ width: '100%' }}>
                    <i className="bi bi-arrow-up-square-fill"></i> Export
                </Button>
            </div>
        </div>
    );
}
