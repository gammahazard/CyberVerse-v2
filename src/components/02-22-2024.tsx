// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateFebruary222024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - February 22, 2024
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


        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Game Server Is Live Again!</Typography>
        <Typography variant="body1">
          <Link href="https://playcyberverse.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#03a9f4' }}>
            Play Here
          </Link>
        </Typography>
        <Typography variant="body1">
          We recommend clearing your cache (CTRL + F5) before playing to avoid any visual bugs.
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Update Overview</Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Game Improvements</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>NFTs - Added missing NFTs (nft emotes, cars, and apartments)</li>
          <li>In in-game trading - Added the ability for players to see real-time offers they choose before the other player clicks on the confirm button, so they can discuss it without completely canceling the trade UI</li>
          <li>Wolf and Sheep - Made countdown visible for how long the ability lasts when using ability</li>
          <li>Wolf and Sheep minigame - Added by default the ability to &quot;howl&quot; every 30-45 sec as a wolf, making the sheep make a &quot;baaah&quot; sound in fear, indicating the side of the map they might be on</li>
          <li>Wolf, for every haunted sheep, gets extra time</li>
          <li>Sheep can collect 1 ability in 1 slot inventory and use it by pressing &quot;E&quot;</li>
          <li>Weekly lottery - Made text on the right bigger; fixed grammar: &quot;You purchased 0 tickets.&quot;</li>
          <li>Inventory & Crafting - Made items searchable by name</li>
          <li>Crafting - Made green required items clickable (previously only red missing items were clickable)</li>
          <li>Energy items - Allowed players to use energy items from the quick selection inventory</li>
          <li>Furnace - Added wood item gathered from exploring bins to be used for furnaces</li>
          <li>Furnace - Changed coal to 1 coal melts 1 ore</li>
          <li>Apartment - Allowed apartment owners to use furniture like furnaces, mining rigs, etc., whether the apartment is set as public or private</li>
          <li>Apartment - Added plant and window crafts</li>
          <li>Player’s profile - Added prompt &quot;press K to show player’s profile&quot; when near other players</li>
          <li>Player’s profile - Fixed links in player’s profiles to open the correct Twitter profile</li>
          <li>NPC - Added an indicator for interactive NPCs (e.g., Guy who sends you mining, bar game, furniture crate, etc.)</li>
          <li>Emotes - Enabled emotes during the Wolf and Sheep game</li>
          <li>Emotes - Allowed editing of Emote wheel to display favorite emotes on the first page</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Others</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Replaced the &quot;E&quot; icon .png with a new one</li>
          <li>Fixed issue where you couldn’t select anything else after charging a jackhammer unless you selected the jackhammer again</li>
          <li>Museum - Removed AnetaBTC (the angel) statue from the museum</li>
          <li>General - Fixed small text errors from PDF list</li>
          <li>Deposit in-game tokens - Changed text from &quot;casino wallet&quot; to &quot;in-game wallet&quot;</li>
          <li>General - Updated the backward casino sign</li>
          <li>Keyboard - Added option to bind keys to certain functions</li>
          <li>The car game - Fixed 0 point issue</li>
          <li>Chat - Made chat functionality such that hitting the enter key without text brings you back to the main window</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Select Citizen UI</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Changed the UI to a new one</li>
          <li>Showed rarity of the citizen in selection windows using different colored frames (red for legendary, orange for epic, blue for rare, green uncommon, white common)</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!</Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateFebruary222024;
