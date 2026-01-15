import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SelectAutoWidth from './Select';
import BasicRating from './Rating';

export default function About() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>About Page</Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>Select Component</Typography>
          <SelectAutoWidth />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>Rating Component</Typography>
          <BasicRating />
        </Box>
      </Box>
    </Box>
  );
}
