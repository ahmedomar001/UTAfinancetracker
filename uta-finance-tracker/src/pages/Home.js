import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <Typography paragraph>
        Manage your budget and track your income and expenses here.
      </Typography>
      {/* Insert BudgetForm and IncomeOutcomeList components here */}
    </div>
  );
};

export default Home;
