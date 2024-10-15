import React from 'react';
import { Typography } from '@mui/material';

const Scholarships = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Scholarship Opportunities</Typography>
      <Typography paragraph>
        Explore scholarships tailored to your merits.
      </Typography>
      {/* Insert ScholarshipList component here */}
    </div>
  );
};

export default Scholarships;