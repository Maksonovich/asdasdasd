// import React , { useState } from 'react';
// import cn from 'classnames';
// import { MdAdd } from 'react-icons/md'

// const Fab = ( {action} ) => {

//     const [open , setOpen] = useState(false)

//     const mouseEnter = () => setOpen(true)

//     const mouseLeave = () => setOpen(false)

//     return (
//         <ul
//             className="fab-container"
//             onMouseenter={mouseEnter}
//             onMouseLeave={mouseLeave}
//         >
//             <li className="fab-button">
//                 <MdAdd />
//             </li>
//             {action.map((action , index) => (
//                 <li
//                     style={{transitionDelay: ${index * 25}ms}}
//                     className='cn("fab-action") , {open})'
//                     key={action.label}
//                     onclicl={action.onClick}
//                 >
//                     {action.icon}
//                     <span className="tooltip">{action.label}</span> 
//                 </li>
//             ))}
            
//         </ul>
//     )
// }

// export { Fab }