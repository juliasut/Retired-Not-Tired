import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      <Button
        component="label"
        sx={{ textTransform: 'none', fontSize: 16, pl: 2, pr: 1, color: "text.secondary" }}
      >
        Upload avatar
        <input hidden accept="image/*" multiple type="file"/>
      </Button>
      <IconButton
        size="small"
        aria-label="upload picture"
        component="label"
        sx={{color: "text.secondary"}}
      >
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}
