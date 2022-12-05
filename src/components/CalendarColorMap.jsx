import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function CalendarColorMap() {
  return (
    <Stack direction="row" width="320px" sx={{mb: 5, px: '15px'}}>
        <Stack direction="row" gap={2} width="50%">
          <Box
            sx={{
              background: '#625B75',
              height: '22px',
              width: '22px',
              borderRadius: '5px',
            }}
          />
          <Typography>I'm going</Typography>
        </Stack>
        <Stack direction="row" gap={2} width="50%">
          <Box
            sx={{
              background: '#e5def6',
              height: '22px',
              width: '22px',
              borderRadius: '5px',
            }}
          />
          <Typography>I'm interested</Typography>
        </Stack>
      </Stack>
  )
}
