import { useRouter } from 'next/router'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  alpha,
} from '@mui/material'
// hooks
import useOffSetTop from '../../hooks/useOffSetTop'
// components
import Logo from '../../components/Logo'

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 88

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP,
  },
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 5px',
  paddingBottom: theme.spacing(1),
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
}))

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100)
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 },
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h4" color="primary.main">
              Kitchen
            </Typography>

            <Typography
              variant="span"
              color="primary.main"
              sx={{
                fontFamily: 'Saira Condensed, sans-serif',
                fontWeight: 'bold',
              }}
            >
              Cafe & Restaurant
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Logo sx={{ width: 80, height: 80 }} />
        </Container>
      </ToolbarStyle>

      {/* {isOffset && <ToolbarShadowStyle />} */}
    </AppBar>
  )
}
