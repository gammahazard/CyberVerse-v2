import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ ...styles.container, ...(isMobile && styles.mobileContainer) }}>
      <Box>
        <Typography sx={styles.title}>Connect with Us</Typography>
        <Typography sx={styles.subtitle}>Explore the vibrant world of CyberVerse</Typography>
      </Box>

      <Box sx={styles.linksContainer}>
        <Box sx={styles.menuItemBox}>
   
        </Box>

        <Box sx={styles.menuItemBox}>
          <Link href="/wiki" passHref>
            <Typography component="a" sx={styles.menuItem}>
              Wiki
            </Typography>
          </Link>
        </Box>

  

        <Box sx={styles.menuItemBox}>
          <Link href="/patch" passHref>
            <Typography component="p" sx={styles.menuItem}>
             Patch Notes
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#000C56',
    color: '#E1EBFA',
   
    padding: '20px 40px',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },

  mobileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px 10px',
   
  },

  title: {
    fontSize: '32px',
    mb: '10px',
  },

  subtitle: {
    fontSize: '18px',
  },

  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  
  },

  menuItemBox: {
    mb: 2,
  },

  menuItem: {
    fontSize: '18px',
    color: '#E1EBFA',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },

  menuItemWithWeight: {
    fontSize: '18px',
    fontWeight:0,
   
    color: '#E1EBFA',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

export default Footer;
