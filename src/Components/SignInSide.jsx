
// import * as React from 'react';
// import { 
//   Box, Button, Checkbox, CssBaseline, FormControlLabel, 
//   TextField, Typography, Stack, Card as MuiCard, styled, Snackbar, Alert, 
//   Link
// } from '@mui/material';
// import { Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// const SignInContainer = styled(Stack)(({ theme }) => ({
//   height: '100vh',
//   padding: 20,
//   backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
// }));

// const Card = styled(MuiCard)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignSelf: 'center',
//   width: '100%',
//   padding: theme.spacing(4),
//   gap: theme.spacing(2),
//   margin: 'auto',
//   boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
//   [theme.breakpoints.up('sm')]: {
//     width: '450px',
//   },
// }));

// export default function SignInSide() {
//   const navigate = useNavigate();

//   const userFromRedux = useSelector((state) => state.user);

//   // משתנים לשדות
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
  
//   // ההתראה למעלה
//   const [openSnackbar, setOpenSnackbar] = React.useState(false);

//   //בדיקת תקינות מייל וסיסמא
//   const handleSubmit = (event) => {
    
//     event.preventDefault(); 
//     console.log("User from Redux:", userFromRedux);
// console.log("Input Email:", email);
// console.log("Input Password:", password);
//     if (email === userFromRedux.name && password === userFromRedux.password) {
//       navigate('/AllProject');
//     } else {
//       setOpenSnackbar(true); // פותח את ההתראה למעלה
//     }
//   };

//   //פונקציה שההודעת שגיאה תחכה 4 שניות במסך עד שתעלם
//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') return;
//     setOpenSnackbar(false);
//   };

//   return (
//     <SignInContainer direction="column" justifyContent="space-between">
//       <CssBaseline />
      
//       {/* ההתראה שתקפוץ למעלה באמצע */}
//       <Snackbar 
//         open={openSnackbar} 
//         autoHideDuration={4000} 
//         onClose={handleClose}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
//           שגיאה: האימייל או הסיסמה לא נכונים 
//         </Alert>
//       </Snackbar>

//       <Stack
//         direction={{ xs: 'column-reverse', md: 'row' }}
//         sx={{
//           justifyContent: 'center',
//           gap: { xs: 6, sm: 12 },
//           height: '100%',
//           alignItems: 'center',
//         }}
//       >
//         <Box sx={{ maxWidth: '450px', textAlign: { xs: 'center', md: 'right' } }}>
//           <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//             ברוכים הבאים
//           </Typography>
//           <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
//           <br/>  מערכת לניהול פרויקטים בדרך הנוחה והקלה 
//           <br/> בה תוכלו להפיק את מירב התועלת. 
//            אנא מלאי את פרטיך על מנת להתחבר למערכת
//           </Typography>
//         </Box>

//         <Card variant="outlined">
//           <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
//             התחברות
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField 
//               id="email" 
//               label="כתובת אימייל" 
//               onChange={(e) => setEmail(e.target.value)} 
//               fullWidth required 
//             />
//             <TextField 
//               id="password" 
//               type="password" 
//               label="סיסמה" 
//               onChange={(e) => setPassword(e.target.value)} 
//               fullWidth required 
//             />
//             <FormControlLabel control={<Checkbox color="primary" />} label="זכור אותי" />
//             <Button type="submit" fullWidth variant="contained" size="large">
//               כניסה למערכת
//             </Button>
//           </Box>
//         </Card>
//       </Stack>
//     </SignInContainer>
//   );
// }








import * as React from 'react';
import { 
  Box, Button, Checkbox, CssBaseline, FormControlLabel, 
  TextField, Typography, Stack, Card as MuiCard, styled, Snackbar, Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: 20,
  backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

export default function SignInSide() {
  const navigate = useNavigate();

  // שליפת האובייקט הפנימי שבו נמצאים name ו-password
  const user = useSelector((state) => state.user);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
  
  //כבודקים האם הנתונים קיימים בתוך state.user או state.user.user
  const userData = user.user ? user.user : user;

  if (userData && email === userData.name && password === userData.password) {
    navigate('/AllProject');
  } else {
    setOpenSnackbar(true);
  }

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <CssBaseline />
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={4000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
          שגיאה: האימייל או הסיסמה לא נכונים 
        </Alert>
      </Snackbar>

      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{
          justifyContent: 'center',
          gap: { xs: 6, sm: 12 },
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: '450px', textAlign: { xs: 'center', md: 'right' } }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            ברוכים הבאים
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            <br/> מערכת לניהול פרויקטים בדרך הנוחה והקלה 
            <br/> בה תוכלו להפיק את מירב התועלת. 
            אנא מלאי את פרטיך על מנת להתחבר למערכת
          </Typography>
        </Box>

        <Card variant="outlined">
          <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            התחברות
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              id="email" 
              label="שם משתמש / אימייל" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              fullWidth required 
            />
            <TextField 
              id="password" 
              type="password" 
              label="סיסמה" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              fullWidth required 
            />
            <FormControlLabel control={<Checkbox color="primary" />} label="זכור אותי" />
            <Button type="submit" fullWidth variant="contained" size="large">
              כניסה למערכת
            </Button>
          </Box>
        </Card>
      </Stack>
    </SignInContainer>
  );
}