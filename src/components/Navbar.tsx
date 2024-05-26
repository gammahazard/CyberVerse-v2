import { Box, Button, Drawer, IconButton, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface NavbarProps {
  onRoadmapClick?: () => void;
}

export default function Navbar({ onRoadmapClick }: NavbarProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleMobileMenuOpen = () => setMobileMenuOpen(true);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);
  const handleRoadmapClick = () => {
    window.open('https://docs.cyberversegame.io/cyberverseroadmap2024', '_blank', 'noopener,noreferrer');
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      <Box onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
        <Image
          src="/logo.png"
          alt="CyberVerse Logo"
          width={150}
          height={50}
          objectFit="contain"
        />
      </Box>

      <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" justifyContent="center" flexGrow={1}>
  <Box display="flex" alignItems="center" gap={2}>
    <Button
      onClick={() => window.open('https:/playcyberverse.com', '_blank', 'noopener,noreferrer')}
      className="nav-item"
      sx={{ fontSize: '1.5rem !important' }} // Adjust the font size as needed
    >
      Litepaper
    </Button>
    <Link href="/series" passHref>
      <Button className="nav-item" sx={{ fontSize: '1.5rem !important' }}>Tutorial</Button>
    </Link>
    <Button
      className="nav-item"
      onClick={handleRoadmapClick}
      sx={{ fontSize: '1.5rem !important' }} // Adjust the font size as needed
    >
      Roadmap
    </Button>
    <Link href="/overview" passHref>
      <Button className="nav-item" sx={{ fontSize: '1.5rem !important' }}>Patch Notes</Button>
    </Link>
    <Link href="/merchandise" passHref>
      <Button className="nav-item" sx={{ fontSize: '1.5rem !important' }}>Wiki</Button>
    </Link>
  </Box>
</Box>


      <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
        <IconButton href="https://x.com/CyberVerse_io" target="_blank" rel="noopener noreferrer" size="large">
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        </IconButton>
        <IconButton href=" https://discord.com/invite/cyberversegame" target="_blank" rel="noopener noreferrer" size="large">
          <Image src="/discord.svg" alt="Discord" width={24} height={24} />
        </IconButton>
        <Button
  sx={{ fontSize: '1.5rem !important', border: '1px solid #FF00FC' }} // Set font size to 1.5rem with important tag
  variant="outlined"
  className="join-btn"
  onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')}
>
  Play Now
</Button>
      </Box>

      <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
        <IconButton href="https://x.com/CyberVerse_io" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        </IconButton>
        <IconButton href=" https://discord.com/invite/cyberversegame" target="_blank" rel="noopener noreferrer">
          <Image src="/discord.svg" alt="Discord" width={24} height={24} />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          PaperProps={{
            style: {
              backgroundColor: 'black',
              color: '#E1EBFA',
              width: '250px',
              borderLeft: '1px solid white',
            },
          }}
        >
          <List style={{ alignItems: 'center', textAlign: 'center' }}>
            {['Whitepaper', 'Series', 'Overview', 'Merchandise'].map((text) => (
              <ListItem button key={text} onClick={handleMobileMenuClose} style={{ justifyContent: 'center' }}>
                <Link href={`/${text.toLowerCase().replace(' ', '-')}`} passHref>
                  <Typography variant="body1" className="nav-item" component="a" style={{ textDecoration: 'none' }}>{text}</Typography>
                </Link>
              </ListItem>
            ))}
            <ListItem button onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')} style={{ justifyContent: 'center', backgroundColor: 'red!important' }}>
              <Typography variant="body1" className="nav-item" component="div" style={{ textDecoration: 'none' }}>Neohub</Typography>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}