

// import React from 'react';
// import { Box, Typography, Button, TextField, Paper, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate ,useLocation} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form'; // ייבוא הספרייה
// import { addProject } from '../Components/store/projectSlice';

// export default function AddProject() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // הגדרת ה-Form
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // פונקציית השליחה שתופעל רק אם הטופס תקין
//   const onSubmit = (data) => {
//     dispatch(addProject({ name: data.projectName, description: data.projectDescription }));
//     navigate(-1);
//   };

//   return (
//     <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', pt: 5 }}>
//       <Paper component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', maxWidth: '500px', borderRadius: 2, overflow: 'hidden' }}>
        
//         {/* Header */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#1976d2', color: 'white', p: 2 }}>
//           <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>יצירת פרויקט חדש</Typography>
//           <Button type="submit" variant="contained" sx={{ bgcolor: '#4fc3f7', '&:hover': { bgcolor: '#29b6f6' }, fontWeight: 'bold' }}>
//             שמור פרויקט
//           </Button>
//         </Box>

//         {/* גוף הטופס */}
//         <Box sx={{ p: 4, textAlign: 'right', direction: 'rtl' }}>
//           <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>שם הפרויקט</Typography>
//           <TextField
//             fullWidth
//             placeholder="הכנס שם פרויקט..."
//             {...register("projectName", { required: "חובה להזין שם פרויקט" })} // וולידציה
//             error={!!errors.projectName}
//             helperText={errors.projectName?.message}
//             sx={{ mb: 3 }}
//           />

//           <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>תיאור הפרויקט</Typography>
//           <TextField
//             fullWidth
//             placeholder="מה עושים בפרויקט?"
//             multiline
//             rows={4}
//             {...register("projectDescription", { required: "נא להוסיף תיאור קצר" })} // וולידציה
//             error={!!errors.projectDescription}
//             helperText={errors.projectDescription?.message}
//             sx={{ mb: 3 }}
//           />
//         </Box>
//       </Paper>
//     </Box>
//   );
// }









import React, { useEffect } from 'react'; // הוספתי useEffect
import { Box, Typography, Button, TextField, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addProject, updateProject } from '../Components/store/projectSlice';

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

  // חשוב מאוד: זה מעדכן את השדות במידה והנתונים הגיעו באיחור או שהקומפוננטה עשתה Re-render
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
        updatedData: { 
          name: data.projectName, 
          description: data.projectDescription 
        } 
      }));
    } else {
      dispatch(addProject({ 
        name: data.projectName, 
        description: data.projectDescription 
      }));
    }
    navigate(-1);
  };

  return (
    <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', pt: 5 }}>
      <Paper 
        component="form" 
        onSubmit={handleSubmit(onSubmit)} 
        sx={{ width: '100%', maxWidth: '500px', borderRadius: 2, overflow: 'hidden' }}
      >
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            bgcolor: isEdit ? '#0097a7' : '#1976d2', 
            color: 'white', 
            p: 2 
        }}>
          <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
          
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {isEdit ? "עריכת פרויקט" : "יצירת פרויקט חדש"}
          </Typography>

          <Button 
            type="submit" 
            variant="contained" 
            sx={{ bgcolor: '#4fc3f7', '&:hover': { bgcolor: '#29b6f6' }, fontWeight: 'bold' }}
          >
            {isEdit ? "שמור שינויים" : "שמור פרויקט"}
          </Button>
        </Box>

        <Box sx={{ p: 4, textAlign: 'right', direction: 'rtl' }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>שם הפרויקט</Typography>
          <TextField
            fullWidth
            {...register("projectName", { required: "חובה להזין שם פרויקט" })}
            error={!!errors.projectName}
            helperText={errors.projectName?.message}
            sx={{ mb: 3 }}
            InputLabelProps={{ shrink: true }} // מוודא שהתווית לא עולה על הטקסט בעריכה
          />

          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>תיאור הפרויקט</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            {...register("projectDescription", { required: "נא להוסיף תיאור קצר" })}
            error={!!errors.projectDescription}
            helperText={errors.projectDescription?.message}
            sx={{ mb: 3 }}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Paper>
    </Box>
  );
}