// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateApril252024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - April 25, 2024
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="CyberVerse Update - April 25, 2024"
        width={400}
        height={233}
        style={{ borderRadius: '8px', marginBottom: '20px', width: '50%', height: 'auto' }}
      />
      <Box
        className="article-container"
        sx={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          borderRadius: '8px',
          textAlign: 'left',
        }}
      >
        <Link href="/" passHref>
          <Button
            variant="outlined"
            sx={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              borderColor: '#FF00FC',
              color: '#FF00FC',
              fontSize: '20px',
              fontFamily: 'pixelFont',
              fontWeight: 700,
              lineHeight: '26px',
              width: '40px',
              height: '40px',
              padding: '0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <ArrowBackIcon />
          </Button>
        </Link>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Update Overview</Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Improvements</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Reduced the probability of spawning seeds by 70% during exploration</li>
          <li>Added a new AudioNFT track "Restless Nights" to the game</li>
          <li>Introduced a new AudioNFT track - "SuperNova" to the game</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Online Players</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Enhanced lobby functionality to display total online players.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Fixes</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Resolved key response issues post-trading; keys such as 'i', 'c', etc., now properly access inventory, crafting, etc.</li>
          <li>Removed the option to connect wallets via deposit to address Cardano support issues.</li>
          <li>Corrected an energy calculation error where consuming a drink after mining left the player with incorrect energy levels.</li>
          <li>When accessing a furnace through the >add> tab, after closing, the screen will now move with your CyberCitizen.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Parental Control</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Implemented a feature that restricts certain activities on player accounts.</li>
          <li>Activation/deactivation of this feature now requires a password.</li>
          <li>When activated, access to the casino is disabled with a notification: "Your account is subject to parental control."</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Discord Server Update</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Launched a new ⁠🇪🇸┃general channel for our Spanish-speaking community ❤️</li>
          <li>@hq3r developed a Discord bot that displays the top 50 NFT holders of CyberCitizen GEN NFTs.</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          Note: Work on the next update has begun and is scheduled for release in 8-10 days.
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!
        </Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateApril252024;
