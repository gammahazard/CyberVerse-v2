// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateMarch142024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - March 14, 2024
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="CyberVerse Update - March 14, 2024"
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

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Update List</Typography>
        <Typography variant="body1">
          We recommend clearing your cache before entering the game to avoid any visual bugs.
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Free-to-Play Default Character</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added ability to play free without owning a citizen with limited functionality - default non-NFT character (needs deep testing, many bugs should be expected)</li>
          <li>5 STAMINA and 100 ENERGY</li>
          <li>Can consume max three energy items a day</li>
          <li>50% less points in minigames</li>
          <li>No daily rewards</li>
          <li>No free daily spins</li>
          <li>No leveling up, no skills level up or exp</li>
          <li>No changing nicknames to their default character</li>
          <li>No daily quest</li>
          <li>No daily loot box</li>
          <li>No item shop NPC access (they can only trade items or sell to other players)</li>
          <li>Yes daily_limit (energy)</li>
          <li>Yes changing wallet nicknames</li>
          <li>Yes trading player-to-player</li>
          <li>Fixed visible bugs</li>
          <li>Worked to secure everything that changes in the game</li>
          <li>Added daily reset for the free character</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Crafting</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added ability to browse item crafting requirements while currently crafting an item</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Inventory</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added ability to sort in-game items however players want to</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Explorable Items</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added all seeds to be found in bins</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!
        </Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateMarch142024;
