import { Typography } from '@mui/material';

export default function PageTitleTypography(props) {
  return (
    <Typography
      component="h1"
      variant="h5"
      align="center"
      sx={{ mb: 1, fontWeight: '700', color: 'textColor.dark' }}
      {...props}
    />
  );
}
