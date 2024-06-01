// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateFebruary62024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - February 6, 2024
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="CyberVerse Update - February 6, 2024"
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
        <Link href="/patch" passHref>
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

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Energy Items</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Doubled the amount of energy gained after consuming any energy item (except breads)</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Nicknames</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Moved payment method into in-game payment</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Emotes</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added UI</li>
          <li>Added functions</li>
          <li>Added first 2 NFT emote crate collections</li>
          <li>Pressing &quot;B&quot; on keyboard shows NFT emote inventory</li>
          <li>When using emotes, they show for 3 seconds and then disappear; others see what you display</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Player Profile Account</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added UI</li>
          <li>Added functions</li>
          <li>Added TRADE button</li>
          <li>Added TWITTER link button; players can link their Twitter in the game profile</li>
          <li>Pressing &quot;K&quot; near a player shows their profile account</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>In-Game Player-to-Player Trading</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added UI</li>
          <li>Added functions</li>
          <li>Added ability to trade in-game items and CYPX tokens</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Apartment Multiplayer Access</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added function to set owner&apos;s apartment to private or public</li>
          <li>Private: Only the owner can see it; no one else can access the property</li>
          <li>Public: Everyone can see it and visit the property, but they can&apos;t edit it</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>The Wolf and Sheep Mini Game</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added first multiplayer minigame</li>
          <li>Minimum players: 5</li>
          <li>Maximum players: 10</li>
          <li>1 wolf, the rest are sheep</li>
          <li>Wolf is faster than sheep</li>
          <li>Pressing &quot;E&quot; allows the wolf to attack</li>
          <li>The wolf needs to hunt all sheep before the countdown expires to win</li>
          <li>The wolf gains points for every sheep hunted and when he wins</li>
          <li>Sheep need to hide and stay alive until the countdown expires</li>
          <li>Sheep gain points for every coin collected and when they win</li>
          <li>There are 3 abilities sheep can find on the map:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Speed: 3 seconds speed boost</li>
              <li>Invisible: 8 seconds invisibility</li>
              <li>Revive: 50% chance to drop a revive bottle to revive a random sheep</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>In-Game Chat</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Improved chat to allow typing up to 200 characters, showing in multiple lines</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Others</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Balance improvements</li>
          <li>Added custom amount when buying/selling in NPC market</li>
          <li>Changed spawning ores from 60 seconds to 200 seconds</li>
          <li>Removed the papers around the city used for finding the treasury</li>
          <li>Added energy indicator in citizen selection</li>
          <li>Fixed 2 rooms in the penthouse that couldn&apos;t be customized with walls and floors</li>
          <li>Changed crafting amounts for wires and cables from 6 &amp; 4 to 3 &amp; 2</li>
          <li>In apartments, clicking on the missing item sends you to the crafting recipe</li>
          <li>Added confirmation about purchase when trying to buy tickets in the weekly lottery</li>
          <li>Added admin page (users) to see all players online and their locations in real-time</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!</Typography>
        
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
              marginTop: '20px',
              backgroundColor: '#03a9f4',
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#0288d1',
              },
            }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateFebruary62024;
