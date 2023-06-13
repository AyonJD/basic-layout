import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ sx }, ref) => {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
      <img src="/static/brand/logo.png" alt="" />
    </Box>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
};

export default Logo;
