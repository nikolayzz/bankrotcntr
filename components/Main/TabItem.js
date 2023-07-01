import { Grid, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const TabItem = ({ id, title, text }) => {
  return (
    <Grid item xs={6} key={id} color="#4A0A09">
      <div className="flex">
        <CheckRoundedIcon sx={{ fill: 'green' }} fontSize="large" />
        <div className="font-semibold text-xl">{title}</div>
      </div>
      <div className="pl-9 text-xl">{text}</div>
    </Grid>
  );
};

export default TabItem;
