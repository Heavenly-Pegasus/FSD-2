import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconCheckboxes from './Checkbox';
import BasicTextFields from './TextField';

export default function Contact() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Contact Page</Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>Checkbox Component</Typography>
          <IconCheckboxes />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>TextField Component</Typography>
          <BasicTextFields />
        </Box>
      </Box>
    </Box>
  );
}
