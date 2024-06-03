// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateApril62024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - April 6, 2024
      </Typography>

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
  

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Update Overview</Typography>
        <Typography variant="body1">
          We are excited to announce the latest updates to CyberVerse. This patch includes a new way to log in, changes to the UI, and several other improvements and fixes. Read on to discover the details of the new features, improvements, and bug fixes in this update.
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>New Features</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>New way to login with some changes in the UI.</li>
          <li>The game&apos;s open page will ask you to choose to connect from Ergo wallet or Cardano wallet with some specific details. (If you already play with Ergo Wallet, go to settings and it shows Cardano wallet to link)</li>
          <li>Ergo wallet will always open the same old UI.</li>
          <li>Cardano wallet will always let you sign without sending any fee.</li>
          <li>Password page or password feature are locked if you don&apos;t have any Ergo wallet in your account yet.</li>
          <li>Limit account features to only view (no edit) all features on the lobby page.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>UI to Add Ergo Wallet</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Similar steps to how Ergo wallet login works, but different tasks and backend code.</li>
          <li>After successfully connecting Ergo wallet, kick the player with the message &quot;You are now linked to Ergo wallet. Please refresh the page.&quot;</li>
          <li>After the refresh, all the game features would be available.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>New Funds Type (Ada)</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>For accounts that have Cardano wallet, frontend UI to deposit or withdraw Ada funds (include withdrawal fee of 1 Ada).</li>
          <li>Backend full handle for Ada in-game balance.</li>
          <li>Backend handle to detect new funds.</li>
          <li>Frontend UI change in some places, to show Ada in-game balance.</li>
          <li>Gen3 UI, choose to use Ergo or Ada balance from April 6, 2024.</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!
        </Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateApril62024;
