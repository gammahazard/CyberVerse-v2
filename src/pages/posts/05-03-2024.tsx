// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateMay32024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - May 3, 2024
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="CyberVerse Update - May 3, 2024"
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
        <Typography variant="body1">
          We are excited to announce the latest updates to CyberVerse. This patch includes changes to the NPC Market, items, accumulating rewards, NFT marketplace, fees, quests, sketchy dealers, chat bubbles, gardening, and the wiki. Read on to discover the details of the new features, improvements, and bug fixes in this update.
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>NPC Market</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Changed offer deals impacts from 80%/100%/120% to 80%/100%/170%</li>
          <li>Added an option to deliver any amount that won't exceed the dealer's deal (e.g., if the dealer wants 30, the player can sell even just 1 or 10, and the dealer's offer will display 20 remaining)</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Items</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Fixed 1 flower seed price</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Accumulating Rewards</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added confirmation UI for claiming all rewards and showing the fee after the player clicks on "claim all"</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>NFT Marketplace</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Fixed car images</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Fee</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Reduced withdrawal fee to 250 CYPX</li>
          <li>Reduced changing wallet nickname fee to 500 CYPX</li>
          <li>Reduced changing NFT nickname fee to 250 CYPX</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Quests</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Removed "claim daily reward" quest (this change will be visible in tomorrow's daily quests)</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Sketchy Dealer</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>5 dealers spawn around the map every 15 minutes (the spawned NPCs will respawn after the timeline)</li>
          <li>You can sell an unlimited amount of items</li>
          <li>Added 5%-25% chance to get scammed for a quarter of the items the player sells to the NPC</li>
          <li>Prices will be set 25% less than the original ones (current prices)</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Chat Bubbles</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added chat bubble that will appear when a player sends a message in public chat</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Gardening</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Changed watering energy to 1 energy</li>
          <li>Changed watering mechanic to boost the chance of growing healthy plants by 20%</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>CyberVerse Wiki Update</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Updated the pages for Fishing, Gardening, and Ore Mining with new item prices</li>
          <li>Added pages for the following NPCs: Fisherman, Farmer, Mining Man, Snake, and Sketchy Dealer</li>
          <li>Added lore to the Fisherman, Sketchy Dealer, and Caption (Harbor Master)</li>
          <li>Fixed several smaller issues and outdated data</li>
          <li>Added three recent updates to the Update log</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!
        </Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateMay32024;
