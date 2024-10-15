import React from 'react';
import { Typography } from '@mui/material';

const Discounts = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Available Discounts</Typography>
      <Typography paragraph>
        Check out the discounts available for UTA students.
      </Typography>
      {/* Insert DiscountCard component here */}
    </div>
  );
};

export default Discounts;
