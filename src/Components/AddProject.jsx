

// // import React from 'react';
// // import { Box, Typography, Button, TextField, Paper, IconButton } from '@mui/material';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { useNavigate ,useLocation} from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { useForm } from 'react-hook-form'; // ייבוא הספרייה
// // import { addProject } from '../Components/store/projectSlice';

// // export default function AddProject() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   // הגדרת ה-Form
// //   const { register, handleSubmit, formState: { errors } } = useForm();

// //   // פונקציית השליחה שתופעל רק אם הטופס תקין
// //   const onSubmit = (data) => {
// //     dispatch(addProject({ name: data.projectName, description: data.projectDescription }));
// //     navigate(-1);
// //   };

// //   return (
// //     <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', pt: 5 }}>
// //       <Paper component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', maxWidth: '500px', borderRadius: 2, overflow: 'hidden' }}>
        
// //         {/* Header */}
// //         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#1976d2', color: 'white', p: 2 }}>
// //           <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
// //           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>יצירת פרויקט חדש</Typography>
// //           <Button type="submit" variant="contained" sx={{ bgcolor: '#4fc3f7', '&:hover': { bgcolor: '#29b6f6' }, fontWeight: 'bold' }}>
// //             שמור פרויקט
// //           </Button>
// //         </Box>

// //         {/* גוף הטופס */}
// //         <Box sx={{ p: 4, textAlign: 'right', direction: 'rtl' }}>
// //           <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>שם הפרויקט</Typography>
// //           <TextField
// //             fullWidth
// //             placeholder="הכנס שם פרויקט..."
// //             {...register("projectName", { required: "חובה להזין שם פרויקט" })} // וולידציה
// //             error={!!errors.projectName}
// //             helperText={errors.projectName?.message}
// //             sx={{ mb: 3 }}
// //           />

// //           <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>תיאור הפרויקט</Typography>
// //           <TextField
// //             fullWidth
// //             placeholder="מה עושים בפרויקט?"
// //             multiline
// //             rows={4}
// //             {...register("projectDescription", { required: "נא להוסיף תיאור קצר" })} // וולידציה
// //             error={!!errors.projectDescription}
// //             helperText={errors.projectDescription?.message}
// //             sx={{ mb: 3 }}
// //           />
// //         </Box>
// //       </Paper>
// //     </Box>
// //   );
// // }









// import React, { useEffect } from 'react'; // הוספתי useEffect
// import { Box, Typography, Button, TextField, Paper, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { addProject, updateProject } from '../Components/store/projectSlice';

// export default function AddProject() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isEdit = location.state?.isEdit || false;
//   const projectToEdit = location.state?.project;
//   const projectId = location.state?.projectId;

//   const { register, handleSubmit, reset, formState: { errors } } = useForm({
//     defaultValues: {
//       projectName: isEdit ? projectToEdit?.name : '',
//       projectDescription: isEdit ? projectToEdit?.description : ''
//     }
//   });

//   // חשוב מאוד: זה מעדכן את השדות במידה והנתונים הגיעו באיחור או שהקומפוננטה עשתה Re-render
//   useEffect(() => {
//     if (isEdit && projectToEdit) {
//       reset({
//         projectName: projectToEdit.name,
//         projectDescription: projectToEdit.description
//       });
//     }
//   }, [isEdit, projectToEdit, reset]);

//   const onSubmit = (data) => {
//     if (isEdit) {
//       dispatch(updateProject({ 
//         id: projectId, 
//         updatedData: { 
//           name: data.projectName, 
//           description: data.projectDescription 
//         } 
//       }));
//     } else {
//       dispatch(addProject({ 
//         name: data.projectName, 
//         description: data.projectDescription 
//       }));
//     }
//     navigate(-1);
//   };

//   return (
//     <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', pt: 5 }}>
//       <Paper 
//         component="form" 
//         onSubmit={handleSubmit(onSubmit)} 
//         sx={{ width: '100%', maxWidth: '500px', borderRadius: 2, overflow: 'hidden' }}
//       >
//         <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center', 
//             bgcolor: isEdit ? '#0097a7' : '#1976d2', 
//             color: 'white', 
//             p: 2 
//         }}>
//           <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}>
//             <CloseIcon />
//           </IconButton>
          
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             {isEdit ? "עריכת פרויקט" : "יצירת פרויקט חדש"}
//           </Typography>

//           <Button 
//             type="submit" 
//             variant="contained" 
//             sx={{ bgcolor: '#4fc3f7', '&:hover': { bgcolor: '#29b6f6' }, fontWeight: 'bold' }}
//           >
//             {isEdit ? "שמור שינויים" : "שמור פרויקט"}
//           </Button>
//         </Box>

//         <Box sx={{ p: 4, textAlign: 'right', direction: 'rtl' }}>
//           <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>שם הפרויקט</Typography>
//           <TextField
//             fullWidth
//             {...register("projectName", { required: "חובה להזין שם פרויקט" })}
//             error={!!errors.projectName}
//             helperText={errors.projectName?.message}
//             sx={{ mb: 3 }}
//             InputLabelProps={{ shrink: true }} // מוודא שהתווית לא עולה על הטקסט בעריכה
//           />

//           <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>תיאור הפרויקט</Typography>
//           <TextField
//             fullWidth
//             multiline
//             rows={4}
//             {...register("projectDescription", { required: "נא להוסיף תיאור קצר" })}
//             error={!!errors.projectDescription}
//             helperText={errors.projectDescription?.message}
//             sx={{ mb: 3 }}
//             InputLabelProps={{ shrink: true }}
//           />
//         </Box>
//       </Paper>
//     </Box>
//   );
// }




import React, { useEffect } from 'react';
import { Box, Typography, Button, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addProject, updateProject } from '../Components/store/projectSlice';
import { styled } from '@mui/material/styles';

const PageWrapper = styled(Box)({
  background: 'var(--bg-primary)',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '60px',
  paddingBottom: '60px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '700px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
});

const GridLines = styled(Box)({
  position: 'fixed',
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(99,102,241,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.035) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
  pointerEvents: 'none',
});

const FormPanel = styled(Box)({
  width: '100%',
  maxWidth: '520px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-medium)',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-elevated), var(--glow-primary)',
  position: 'relative',
  zIndex: 1,
  animation: 'fadeInUp 0.5s ease forwards',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)',
  },
});

const Header = styled(Box)(({ isEdit }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: isEdit
    ? 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(8,145,178,0.08))'
    : 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))',
  borderBottom: `1px solid ${isEdit ? 'rgba(6,182,212,0.2)' : 'rgba(99,102,241,0.2)'}`,
  padding: '18px 24px',
}));

const SaveButton = styled(Button)(({ isEdit }) => ({
  background: isEdit
    ? 'linear-gradient(135deg, #06b6d4, #0891b2) !important'
    : 'linear-gradient(135deg, #6366f1, #8b5cf6) !important',
  border: 'none !important',
  borderRadius: '10px !important',
  fontFamily: 'Heebo, sans-serif !important',
  fontWeight: '700 !important',
  fontSize: '0.88rem !important',
  padding: '8px 20px !important',
  boxShadow: isEdit
    ? '0 4px 14px rgba(6,182,212,0.3) !important'
    : '0 4px 14px rgba(99,102,241,0.3) !important',
  transition: 'all 0.2s ease !important',
  '&:hover': {
    filter: 'brightness(1.1)',
    transform: 'translateY(-1px)',
    boxShadow: isEdit
      ? '0 8px 24px rgba(6,182,212,0.45) !important'
      : '0 8px 24px rgba(99,102,241,0.45) !important',
  },
}));

const FieldLabel = styled(Typography)({
  fontFamily: 'Heebo, sans-serif',
  fontSize: '0.82rem',
  fontWeight: 700,
  color: 'var(--text-secondary)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: '8px',
});

export default function AddProject() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isEdit = location.state?.isEdit || false;
  const projectToEdit = location.state?.project;
  const projectId = location.state?.projectId;

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      projectName: isEdit ? projectToEdit?.name : '',
      projectDescription: isEdit ? projectToEdit?.description : ''
    }
  });

  useEffect(() => {
    if (isEdit && projectToEdit) {
      reset({
        projectName: projectToEdit.name,
        projectDescription: projectToEdit.description
      });
    }
  }, [isEdit, projectToEdit, reset]);

  const onSubmit = (data) => {
    if (isEdit) {
      dispatch(updateProject({
        id: projectId,
        updatedData: { name: data.projectName, description: data.projectDescription }
      }));
    } else {
      dispatch(addProject({ name: data.projectName, description: data.projectDescription }));
    }
    navigate(-1);
  };

  return (
    <PageWrapper>
      <GridLines />

      <FormPanel>
        {/* Header */}
        <Header isEdit={isEdit}>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: 'var(--text-secondary)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              '&:hover': {
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--text-primary)',
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{
              width: 32, height: 32, borderRadius: '9px',
              background: isEdit
                ? 'linear-gradient(135deg, #06b6d4, #0891b2)'
                : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.9rem',
              boxShadow: isEdit ? '0 4px 12px rgba(6,182,212,0.35)' : '0 4px 12px rgba(99,102,241,0.35)',
            }}>
              {isEdit ? '✏️' : '📁'}
            </Box>
            <Typography sx={{
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              color: 'var(--text-primary)',
            }}>
              {isEdit ? 'עריכת פרויקט' : 'יצירת פרויקט חדש'}
            </Typography>
          </Box>

          <SaveButton isEdit={isEdit} type="button" variant="contained" onClick={handleSubmit(onSubmit)}>
            {isEdit ? 'שמור שינויים' : 'שמור פרויקט'}
          </SaveButton>
        </Header>

        {/* Form Body */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ p: 4, direction: 'rtl', display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          {/* Project Name */}
          <Box>
            <FieldLabel>שם הפרויקט</FieldLabel>
            <TextField
              fullWidth
              placeholder="הכנס שם פרויקט..."
              {...register("projectName", { required: "חובה להזין שם פרויקט" })}
              error={!!errors.projectName}
              helperText={errors.projectName?.message}
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiInputBase-input': {
                  fontFamily: 'Heebo, sans-serif',
                  fontSize: '0.95rem',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'var(--text-muted)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Description */}
          <Box>
            <FieldLabel>תיאור הפרויקט</FieldLabel>
            <TextField
              fullWidth
              placeholder="מה עושים בפרויקט?"
              multiline
              rows={4}
              {...register("projectDescription", { required: "נא להוסיף תיאור קצר" })}
              error={!!errors.projectDescription}
              helperText={errors.projectDescription?.message}
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiInputBase-input': {
                  fontFamily: 'Heebo, sans-serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'var(--text-muted)',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Hint */}
          <Box sx={{
            p: 2,
            background: isEdit ? 'rgba(6,182,212,0.06)' : 'rgba(99,102,241,0.06)',
            border: `1px solid ${isEdit ? 'rgba(6,182,212,0.15)' : 'rgba(99,102,241,0.15)'}`,
            borderRadius: '10px',
            display: 'flex',
            gap: 1.5,
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1rem', flexShrink: 0 }}>💡</span>
            <Typography sx={{
              fontFamily: 'Heebo, sans-serif',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}>
              {isEdit
                ? 'ניתן לשנות את שם הפרויקט ותיאורו. המשימות הקיימות לא יושפעו.'
                : 'לאחר יצירת הפרויקט תוכל להוסיף משימות בלוח הקנבן.'}
            </Typography>
          </Box>
        </Box>
      </FormPanel>
    </PageWrapper>
  );
}