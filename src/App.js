import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OtpInput from 'react-otp-input';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e9573e'
    },
  },
});

function App() {
  const [otp, setOtp] = useState();

  const handleChange = (otp) => setOtp(otp);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box sx={{ textAlign: 'center', my: 6 }}>
            <img src='/favicon.png' width='20%' alt='logo' />
          </Box>
          <Box sx={{ textAlign: 'center', my: 0 }}>
            <Typography variant='h6'>Please enter the OTP sent to</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', my: 0 }}>
            <Typography>
              +91 XXXXXXXXXX
              <Button
                type="submit"
                variant="text"
                color="primary"
              >
                Change
              </Button>
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <Box sx={{ display: 'inline-block' }}>
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span>&nbsp;</span>}
                isInputNum
                placeholder='----'
                inputStyle={{
                  border: 0,
                  borderBottom: '1px solid black',
                  fontSize: '26px',
                  padding: '4px 8px',
                  margin: '0 6px',
                  outlineWidth: 0
                }}
              />
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', my: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '308px' }}

            >
              Verify
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center', my: 0 }}>
            <Typography>
              Not received your code?
              <Button
                type="submit"
                variant="text"
                color="primary"
              >
                Resend code
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
