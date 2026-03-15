
// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import { Card } from '@mui/material';
// // import AddTask from '../Components/AddTask'; 
// // import AddItemToTask from './AddItemToTask';
// // import React, { useState } from 'react';


// // const DetailsProject = () => {
// //     const { id } = useParams();

// //     // שליפת הפרויקט מה-Store לפי ה-ID מה-URL
// //     const project = useSelector(state => {
// //         const list = state.project.projectsList || []; 
// //         return list[id]; 
// //     });

// //         const [isEditOpen, setIsEditOpen] = useState(false);
// //     const [taskToEdit, setTaskToEdit] = useState(null);

// //     const handleEdit = (task) => {
// //     setTaskToEdit(task); // שומרים את המשימה שרוצים לערוך
// //     setIsEditOpen(true); // פותחים את המודאל

// // };


// //     // הגנה מפני קריסה בזמן טעינה או רענון
// //     if (!project) {
// //         return (
// //             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
// //                 <Card sx={{ p: 4, textAlign: 'center', maxWidth: '400px' }}>
// //                     <h2 style={{ color: '#1976d2' }}>טוען נתונים...</h2>
// //                     <p>הפרויקט לא נמצא או שהדף ברענון.</p>
// //                 </Card>
// //             </div>
// //         );
// //     }
// // //     const handleEdit = (task) => {
// // //     console.log("עריכת משימה:", task);
// // // };


// //     return (
// //         <div style={{ width: '100vw', margin: '0', padding: '0', overflowX: 'hidden', direction: 'rtl' }}>

// //             {/* כותרת הפרויקט העליונה */}
// //             <div style={{ 
// //                 width: '100%', backgroundColor: '#f0f4f8', padding: '1.5rem', 
// //                 textAlign: 'center', fontWeight: 'bold', marginBottom: '15px',
// //                 fontSize: '1.8rem', borderBottom: '2px solid #d1d9e6'
// //             }}>
// //                 פרויקט: {project.name}
// //             </div>


// //             {/* שורת התיבות (קנבן) */}
// //             <div style={{ 
// //                 display: 'flex', 
// //                 width: '100%', 
// //                 gap: '15px', 
// //                 padding: '0 15px',
// //                 boxSizing: 'border-box' 
// //             }}>


// //                  {/* תיבה 4 - בוצע */}
// //                 <div style={columnStyle('#f3e5f5')}>
// //                     <AddTask/>  
// //                     <div style={labelStyle}>משימות שנבדקו</div>
// //                 {project?.tasks?.done?.map((task) => (
// //                 <AddItemToTask 
// //                 key={task.id}
// //                 task={task}
// //                 column="done" />
// //             ))}

// //                 </div>
// //                 {/* תיבה 3 - בדיקה */}
// //                 <div style={columnStyle('#fff3e0')}>
// //                     <AddTask />
// //                     <div style={labelStyle}>מוכנות לבדיקה</div> 
// //                         {project?.tasks?.testing?.map((task) => (

// //                         <AddItemToTask key={task.id} task={task} column="testing"  />
// //             ))}

// //                     </div>
// //                  {/* תיבה 2 - בביצוע */}
// //                      <div style={columnStyle('#f3e5f5')}>
// //                     <AddTask/> 
// //                     <div style={labelStyle}>משימות בביצוע</div> 
// //                 {project?.tasks?.doing?.map((task) => (
// //                 <AddItemToTask key={task.id} task={task} column="doing" 
// //                 />
// //             ))}


// //                 </div>

// //                       {/* תיבה 1 - לביצוע */}
// //                <div style={columnStyle('#f3e5f5')}>
// //                     <AddTask/> 

// //                      <div style={labelStyle}>משימות לביצוע</div>
// //                 {project?.tasks?.todo?.map((task) => (
// //                 <AddItemToTask key={task.id} task={task} column="todo" 
// //               />
// //             ))}

// //                 </div>


// //             </div>
// //         </div>
// //     );
// // };

// // // אובייקטי עיצוב לשימוש חוזר (כדי שהקוד יהיה נקי)
// // const columnStyle = (bgColor) => ({
// //     flex: '1', 
// //     backgroundColor: bgColor, 
// //     minHeight: '80vh', 
// //     borderRadius: '20px', 
// //     display: 'flex', 
// //     flexDirection: 'column', 
// //     alignItems: 'center', 
// //     padding: '25px',
// //     boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
// //     border: '1px solid rgba(0,0,0,0.03)'
// // });

// // const labelStyle = {
// //     marginTop: '15px', 
// //     fontWeight: 'bold', 
// //     fontSize: '1.1rem', 
// //     color: '#333'
// // };

// // export default DetailsProject;






// // import React, { useState } from 'react'; // ייבוא מאוחד
// // import { useParams } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import { Card } from '@mui/material';
// // import AddTask from '../Components/AddTask'; 
// // import AddItemToTask from './AddItemToTask';

// // const DetailsProject = () => {
// //     const { id } = useParams();

// //     const project = useSelector(state => {
// //         const list = state.project.projectsList || []; 
// //         return list[id]; 
// //     });

// //     const [isEditOpen, setIsEditOpen] = useState(false);
// //     const [taskToEdit, setTaskToEdit] = useState(null);

// //     const handleEdit = (task) => {
// //         setTaskToEdit(task); 
// //         setIsEditOpen(true); 
// //     };

// //     if (!project) {
// //         return (
// //             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
// //                 <Card sx={{ p: 4, textAlign: 'center', maxWidth: '400px' }}>
// //                     <h2 style={{ color: '#1976d2' }}>טוען נתונים...</h2>
// //                     <p>הפרויקט לא נמצא או שהדף ברענון.</p>

// //                 </Card>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div style={{ width: '100vw', margin: '0', padding: '0', overflowX: 'hidden', direction: 'rtl' }}>

// //             <div style={{ 
// //                 width: '100%', backgroundColor: '#f0f4f8', padding: '1.5rem', 
// //                 textAlign: 'center', fontWeight: 'bold', marginBottom: '15px',
// //                 fontSize: '1.8rem', borderBottom: '2px solid #d1d9e6'
// //             }}>
// //                 פרויקט: {project.name}

// //             </div>

// //             <div style={{ display: 'flex', width: '100%', gap: '15px', padding: '0 15px', boxSizing: 'border-box' }}>

// //                 {/* טור בוצע */}
// //                 <div style={columnStyle('#f3e5f5')}>
// //                     <AddTask />  
// //                     <div style={labelStyle}>משימות שנבדקו</div>
// //                     {project?.tasks?.done?.map((task) => (
// //                         <AddItemToTask key={task.id} task={task} column="done" onEdit={handleEdit} />
// //                     ))}

// //                 </div>

// //                 {/* טור בדיקה */}
// //                 <div style={columnStyle('#fff3e0')}>
// //                     <AddTask />
// //                     <div style={labelStyle}>מוכנות לבדיקה</div> 
// //                     {project?.tasks?.testing?.map((task) => (
// //                         <AddItemToTask key={task.id} task={task} column="testing" onEdit={handleEdit} />
// //                     ))}
// //                 </div>

// //                 {/* טור בביצוע */}
// //                 <div style={columnStyle('#e8f5e9')}>
// //                     <AddTask /> 
// //                     <div style={labelStyle}>משימות בביצוע</div> 
// //                     {project?.tasks?.doing?.map((task) => (
// //                         <AddItemToTask key={task.id} task={task} column="doing" onEdit={handleEdit} />
// //                     ))}
// //                 </div>

// //                 {/* טור לביצוע */}
// //                 <div style={columnStyle('#e3f2fd')}>
// //                     <AddTask /> 
// //                     <div style={labelStyle}>משימות לביצוע</div>
// //                     {project?.tasks?.todo?.map((task) => (
// //                         <AddItemToTask key={task.id} task={task} column="todo" onEdit={handleEdit} />
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* חלון עריכה נסתר שקופץ רק כשצריך */}
// //             {isEditOpen && (
// //                 <AddTask 
// //                     isEditMode={true}
// //                     taskData={taskToEdit} 
// //                     visible={isEditOpen} 
// //                     onHide={() => {
// //                         setIsEditOpen(false);
// //                         setTaskToEdit(null);
// //                     }} 
// //                 />
// //             )}
// //         </div>
// //     );
// // };

// // const columnStyle = (bgColor) => ({
// //     flex: '1', backgroundColor: bgColor, minHeight: '80vh', borderRadius: '20px', 
// //     display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px',
// //     boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)'
// // });

// // const labelStyle = { marginTop: '15px', fontWeight: 'bold', fontSize: '1.1rem', color: '#333' };

// // export default DetailsProject;








// import React, { useState } from 'react';
// import { useParams ,useNavigate } from 'react-router-dom';
// import { useSelector ,useDispatch} from 'react-redux';
// import { Card } from '@mui/material';
// import { Button } from 'primereact/button';
// import AddTask from '../Components/AddTask';
// import AddItemToTask from './AddItemToTask';
// import { deleteProject, updateProject } from './store/projectSlice';


// const DetailsProject = () => {
//     const { id } = useParams();

//     const project = useSelector(state => {
//         const list = state.project.projectsList || [];
//         return list[id];
//     });

//     const [isEditOpen, setIsEditOpen] = useState(false);
//     const [taskToEdit, setTaskToEdit] = useState(null);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleEditTask = (task) => {
//         setTaskToEdit(task);
//         setIsEditOpen(true);
//     };

    

//     if (!project) {
//         return (
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//                 <Card sx={{ p: 4, textAlign: 'center', maxWidth: '400px' }}>
//                     <h2 style={{ color: '#1976d2' }}>טוען נתונים...</h2>
//                     <p>הפרויקט לא נמצא.</p>
//                 </Card>
//             </div>
//         );
//     }

//     return (
//         <div style={{ width: '100vw', margin: '0', padding: '0', overflowX: 'hidden', direction: 'rtl' }}>

//             {/* כותרת הפרויקט - הכיתוב באמצע, הכפתורים בצד ימין */}
//             <div style={{
//                 width: '100%',
//                 backgroundColor: '#f0f4f8',
//                 padding: '1.5rem',
//                 marginBottom: '20px',
//                 borderBottom: '2px solid #d1d9e6',
//                 display: 'flex',
//                 justifyContent: 'center', // הכותרת תמיד באמצע
//                 alignItems: 'center',
//                 position: 'relative', // מאפשר לכפתורים "לצוף" בתוכו
//                 boxSizing: 'border-box'
//             }}>
//                 {/* הכיתוב שמרכז העולם שלו הוא האמצע */}
//                 <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
//                     פרויקט: {project.name}
//                 </span>

//                 {/* הכפתורים בצד ימין (Absolute) */}
//                 <div style={{
//                     position: 'absolute',
//                     right: '20px', // נצמד לימין
//                     display: 'flex',
//                     gap: '10px'
//                 }}>
//                     <Button
//                         icon="pi pi-pencil"
//                         rounded text severity="info"
//                         onClick={() => {
//                             navigate(`/AddProject`, { state: { project, projectId: id, isEdit: true } });
//                         }
                            
//                         }

//                         style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
//                     />
//                     <Button
//                         icon="pi pi-trash"
//                         rounded text severity="danger"
//                         onClick={() => {
//                             dispatch(deleteProject(id));
//                             navigate(-1);
//                         }}
//                         style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
//                     />
//                 </div>
//             </div>

//             {/* לוח הקנבן */}
//             <div style={{ display: 'flex', width: '100%', gap: '15px', padding: '0 15px', boxSizing: 'border-box' }}>

//                 <div style={columnStyle('#f3e5f5')}>
//                     <AddTask />
//                     <div style={labelStyle}>משימות שנבדקו</div>
//                     {project.tasks?.done?.map((task) => (
//                         <AddItemToTask key={task.id} task={task} column="done" onEdit={handleEditTask} />
//                     ))}
//                 </div>

//                 <div style={columnStyle('#fff3e0')}>
//                     <AddTask />
//                     <div style={labelStyle}>מוכנות לבדיקה</div>
//                     {project.tasks?.testing?.map((task) => (
//                         <AddItemToTask key={task.id} task={task} column="testing" onEdit={handleEditTask} />
//                     ))}
//                 </div>

//                 <div style={columnStyle('#e8f5e9')}>
//                     <AddTask />
//                     <div style={labelStyle}>משימות בביצוע</div>
//                     {project.tasks?.doing?.map((task) => (
//                         <AddItemToTask key={task.id} task={task} column="doing" onEdit={handleEditTask} />
//                     ))}
//                 </div>

//                 <div style={columnStyle('#e3f2fd')}>
//                     <AddTask />
//                     <div style={labelStyle}>משימות לביצוע</div>
//                     {project.tasks?.todo?.map((task) => (
//                         <AddItemToTask key={task.id} task={task} column="todo" onEdit={handleEditTask} />
//                     ))}
//                 </div>
//             </div>

//             {isEditOpen && (
//                 <AddTask
//                     isEditMode={true}
//                     taskData={taskToEdit}
//                     visible={isEditOpen}
//                     onHide={() => {
//                         setIsEditOpen(false);
//                         setTaskToEdit(null);
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// const columnStyle = (bgColor) => ({
//     flex: '1', backgroundColor: bgColor, minHeight: '80vh', borderRadius: '20px',
//     display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)'
// });

// const labelStyle = { marginTop: '15px', fontWeight: 'bold', fontSize: '1.1rem', color: '#333' };

// export default DetailsProject;




import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import { Button } from 'primereact/button';
import AddTask from '../Components/AddTask';
import AddItemToTask from './AddItemToTask';
import { deleteProject } from './store/projectSlice';

/* ===== COLUMN CONFIGS ===== */
const COLUMNS = [
  {
    key: 'done',
    label: 'בוצע ✓',
    accent: '#10b981',
    bg: 'rgba(16,185,129,0.04)',
    border: 'rgba(16,185,129,0.15)',
    glow: 'rgba(16,185,129,0.08)',
    dot: '#10b981',
  },
  {
    key: 'testing',
    label: 'בבדיקה',
    accent: '#f59e0b',
    bg: 'rgba(245,158,11,0.04)',
    border: 'rgba(245,158,11,0.15)',
    glow: 'rgba(245,158,11,0.08)',
    dot: '#f59e0b',
  },
  {
    key: 'doing',
    label: 'בביצוע',
    accent: '#06b6d4',
    bg: 'rgba(6,182,212,0.04)',
    border: 'rgba(6,182,212,0.15)',
    glow: 'rgba(6,182,212,0.08)',
    dot: '#06b6d4',
  },
  {
    key: 'todo',
    label: 'לביצוע',
    accent: '#6366f1',
    bg: 'rgba(99,102,241,0.04)',
    border: 'rgba(99,102,241,0.15)',
    glow: 'rgba(99,102,241,0.08)',
    dot: '#6366f1',
  },
];

const DetailsProject = () => {
  const { id } = useParams();
  const project = useSelector(state => {
    const list = state.project.projectsList || [];
    return list[id];
  });

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsEditOpen(true);
  };

  if (!project) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--bg-primary)',
      }}>
        <Card sx={{
          p: 5,
          textAlign: 'center',
          maxWidth: '380px',
          background: 'var(--bg-card) !important',
          border: '1px solid var(--border-medium) !important',
          borderRadius: '20px !important',
          boxShadow: 'var(--shadow-elevated) !important',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⏳</div>
          <h2 style={{ color: '#818cf8', fontFamily: 'Heebo, sans-serif', margin: '0 0 8px' }}>טוען נתונים...</h2>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'Heebo, sans-serif', margin: 0 }}>הפרויקט לא נמצא.</p>
        </Card>
      </div>
    );
  }

  const totalTasks =
    (project.tasks?.todo?.length || 0) +
    (project.tasks?.doing?.length || 0) +
    (project.tasks?.testing?.length || 0) +
    (project.tasks?.done?.length || 0);

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      direction: 'rtl',
      background: 'var(--bg-primary)',
      position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* ===== HEADER ===== */}
      <div style={{
        width: '100%',
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10,
        height: '68px',
      }}>
        {/* Top shimmer line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
        }} />

        {/* Right: Title + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(99,102,241,0.35)',
          }}>
            📋
          </div>
          <div>
            <div style={{
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}>
              {project.name}
            </div>
            <div style={{
              fontFamily: 'Heebo, sans-serif',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}>
              {totalTasks} משימות סה״כ
            </div>
          </div>
        </div>

        {/* Left: Action buttons */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={() => navigate('/AllProject')}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-medium)',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              fontFamily: 'Heebo, sans-serif',
              fontSize: '0.82rem',
              padding: '6px 14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            ← חזרה
          </button>
          <Button
            icon="pi pi-pencil"
            rounded
            text
            severity="info"
            onClick={() => navigate('/AddProject', { state: { project, projectId: id, isEdit: true } })}
            style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '8px',
              color: '#06b6d4',
              width: '36px',
              height: '36px',
            }}
          />
          <Button
            icon="pi pi-trash"
            rounded
            text
            severity="danger"
            onClick={() => { dispatch(deleteProject(id)); navigate(-1); }}
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '8px',
              color: '#ef4444',
              width: '36px',
              height: '36px',
            }}
          />
        </div>
      </div>

      {/* ===== KANBAN BOARD ===== */}
      <div style={{
        display: 'flex',
        width: '100%',
        gap: '16px',
        padding: '24px 20px',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
        minHeight: 'calc(100vh - 68px)',
      }}>
        {COLUMNS.map((col) => (
          <div key={col.key} style={columnStyle(col)}>
            {/* Column Header */}
            <div style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              paddingBottom: '14px',
              borderBottom: `1px solid ${col.border}`,
            }}>
              <div style={{
                background: `rgba(${hexToRgb(col.accent)},0.12)`,
                border: `1px solid ${col.border}`,
                borderRadius: '100px',
                padding: '3px 10px',
                fontSize: '0.72rem',
                color: col.accent,
                fontFamily: 'Heebo, sans-serif',
                fontWeight: 700,
              }}>
                {project.tasks?.[col.key]?.length || 0}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontFamily: 'Heebo, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                }}>
                  {col.label}
                </span>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: col.dot,
                  boxShadow: `0 0 8px ${col.dot}`,
                }} />
              </div>
            </div>

            {/* Add Task Button */}
            <AddTask />

            {/* Task Cards */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
              {project.tasks?.[col.key]?.map((task) => (
                <AddItemToTask
                  key={task.id}
                  task={task}
                  column={col.key}
                  onEdit={handleEditTask}
                  accentColor={col.accent}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <AddTask
          isEditMode={true}
          taskData={taskToEdit}
          visible={isEditOpen}
          onHide={() => { setIsEditOpen(false); setTaskToEdit(null); }}
        />
      )}
    </div>
  );
};

/* ===== HELPERS ===== */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '99,102,241';
}

const columnStyle = (col) => ({
  flex: '1',
  background: col.bg,
  minHeight: '80vh',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 16px',
  boxSizing: 'border-box',
  border: `1px solid ${col.border}`,
  boxShadow: `0 0 30px ${col.glow}, inset 0 1px 0 rgba(255,255,255,0.03)`,
  transition: 'all 0.3s ease',
});

export default DetailsProject;