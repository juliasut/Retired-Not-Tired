import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Stack } from '@mui/material';
import theme from '../theme';

const Search = ({ placeholder, onChange }) => {
  return (
    <Stack
      alignSelf="center"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      sx={{
        p: '0 10px',
        border: `1px solid ${theme.palette.textColor.secondary}`,
        borderRadius: "8px",
        height: "42px",
        // [theme.breakpoints.up('sm')]: {
        //   width: '300px',
        // },
      }}
    >
      <InputBase
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
      ></InputBase>
      <SearchIcon />
    </Stack>
  );
};

export default Search;
