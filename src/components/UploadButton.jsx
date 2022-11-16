import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadButtons({ handleFileChange }) {
  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      {/* //! Can We Problems this is a button
      //! does not function properly, will not upload pic.
      //! causing a delay have to select pic twice! */}
      <Button
        onChange={handleFileChange}
        component="label"
        sx={{
          textTransform: 'none',
          fontSize: 16,
          pl: 2,
          pr: 1,
          color: 'text.secondary',
        }}
      >
        Upload avatar
        <input hidden multiple type="file" />
      </Button>
      <IconButton
        onChange={handleFileChange}
        size="small"
        aria-label="upload picture"
        component="label"
        sx={{ color: 'text.secondary' }}
      >
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}
