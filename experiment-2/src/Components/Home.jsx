import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBasic from './Button';
import BasicTextFields from './TextField';

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Home Page</Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>Button Component</Typography>
          <ButtonBasic />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>TextField Component</Typography>
          <BasicTextFields />
        </Box>
      </Box>
    </Box>
  );
}
