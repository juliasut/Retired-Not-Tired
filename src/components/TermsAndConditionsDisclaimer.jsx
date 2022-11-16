import { Link, Typography } from '@mui/material';

export default function TermsAndConditionsDisclaimer() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 2, fontSize: '11px' }}
    >
      {'By logging in or signing up, you agree to Retired Not Tired '}
      <Link href="#" color="text.secondary">
        {'Terms of Service'}
      </Link>{' '}
      and{' '}
      <Link href="#" color="text.secondary">
        {'Privacy Policy'}
      </Link>
      , confirm that you are 18 years of age or older.
    </Typography>
  );
}
