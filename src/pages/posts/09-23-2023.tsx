// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateSeptember232023 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - September 23, 2023
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="CyberVerse Update - September 23, 2023"
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

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>New Update Along with the Drop is Now Live!</Typography>
        <Typography variant="body1">
          <a href="https://playcyberverse.com/">PLAY HERE</a> - We recommend clearing the cache on the game page to avoid bugs. The update contains more improvement features and small additions that had to be done before we start working on the new roadmap plans!
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>GEN3 Update Overview</Typography>
        <Typography variant="body1"><strong>The marketplace won&apos;t be working for a few hours until we fix an issue that just appeared, sorry for that!</strong></Typography>

        <Typography variant="h4" sx={{ color: '#03a9f4', marginTop: '20px' }}>NFT Marketplace</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added listing NFTs for sale</li>
          <li>Added buying NFTs</li>
          <li>Added inventory</li>
          <li>Added market</li>
          <li>Added showcasing nicknames of NFTs</li>
          <li>Added in-game stats visible when you flip the NFT card</li>
          <li>Added basic filters</li>
        </Box>
        <Typography variant="body1"><strong>Still missing:</strong></Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Add cancel listing of the NFT for sale (right now, you have to go to SkyHarbor to cancel the listing)</li>
          <li>Add better filtering</li>
          <li>List GEN3 collection</li>
          <li>List CyberVerse Tradable Items collection</li>
          <li>List Pets</li>
          <li>Add advanced filtering</li>
          <li>List CYPX token to the marketplace</li>
        </Box>

        <Typography variant="h4" sx={{ color: '#03a9f4', marginTop: '20px' }}>Generation 3 CyberCitizens</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Created 6000 designs</li>
          <li>Created 6000 in-game sprites (animations)</li>
          <li>Added 6000 NFTs to the game</li>
          <li>Added daily rewards</li>
          <li>Added 11 rarities</li>
          <li>Added minting opening in the game with animations and effects</li>
          <li>Added left NFTs in minting page</li>
          <li>Added info about GEN3 in minting page</li>
        </Box>

        <Typography variant="h4" sx={{ color: '#03a9f4', marginTop: '20px' }}>Bank Daily Rewards</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>GEN2 = all rarities of GEN2 CyberCitizens were increased by 2x</li>
          <li>GEN3 = all rarities of GEN3 receive the old rewards from GEN2</li>
        </Box>

        <Typography variant="h4" sx={{ color: '#03a9f4', marginTop: '20px' }}>Gardening Improvements</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Reduced rent price from 1000 CYPX to 250 CYPX</li>
          <li>Reduced Seed and Plants prices by 50%</li>
        </Box>

        <Typography variant="h4" sx={{ color: '#03a9f4', marginTop: '20px' }}>Item Craft Improvements</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Crafting Items that received changes in their craft recipes:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Power Cell
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x5 Silver Ingot</li>
                  <li>x5 Big Battery</li>
                  <li>x5 Copper Wire</li>
                  <li>x5 Wires and Cables</li>
                  <li>x1 Silicon Wafer</li>
                  <li>x1 Microchip</li>
                  <li>x1 Cooling Gel</li>
                  <li>x2 Nano-fiber Wires</li>
                </Box>
              </li>
              <li>Biometric Polymer
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x2 Water</li>
                  <li>x1 Diamond Dust</li>
                  <li>x2 Small Electronic Circuit</li>
                </Box>
              </li>
              <li>Chip
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x1 Plastic Plate</li>
                  <li>x8 Golden Ingot</li>
                </Box>
              </li>
              <li>Microchip
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x1 Plastic Plate</li>
                  <li>x4 Golden Ingot</li>
                </Box>
              </li>
              <li>Cooling Gel
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x3 Water</li>
                  <li>x3 Chamomile Herb</li>
                </Box>
              </li>
              <li>Nano-fiber Wires
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x4 Silver Ingot</li>
                  <li>x3 Plastic Plate</li>
                  <li>x4 Copper Wire</li>
                </Box>
              </li>
              <li>Advanced Circuit
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x4 Copper Wire</li>
                  <li>x2 Circuit Board</li>
                  <li>x2 Microchip</li>
                  <li>x4 Silver Ingot</li>
                  <li>x1 Microprocessor</li>
                </Box>
              </li>
              <li>Carbon Plate
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x25 Plastic Plate</li>
                  <li>x15 Steel Plate</li>
                  <li>x5 Diamond Dust</li>
                </Box>
              </li>
              <li>Silicon Wafer
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x4 Plastic Plate</li>
                  <li>x1 Diamond Dust</li>
                  <li>x1 Small Electronic Circuit</li>
                </Box>
              </li>
              <li>Cyberium Jackhammer
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x10 Cyberium Ingot</li>
                  <li>x5 Cyberium Plate</li>
                  <li>x1 Power Source</li>
                  <li>x2 Carbon Plate</li>
                  <li>x15 Screws and Bolts</li>
                  <li>x15 Wires and Cables</li>
                  <li>x2 Advanced Circuit</li>
                  <li>x2 Cooling Gel</li>
                </Box>
              </li>
              <li>Ergonium Jackhammer
                <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
                  <li>x10 Ergonium Ingot</li>
                  <li>x5 Ergonium Plate</li>
                  <li>x1 Power Source</li>
                  <li>x2 Carbon Plate</li>
                  <li>x15 Screws and Bolts</li>
                  <li>x15 Wires and Cables</li>
                  <li>x2 Advanced Circuit</li>
                  <li>x2 Cooling Gel</li>
                </Box>
              </li>
            </Box>
          </li>
        </Box>

        <Typography variant="h4" sx={{ color: '#03a9f4', marginTop: '20px' }}>Others</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Increased the price of diamond stick to 135 CYPX</li>
        </Box>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateSeptember232023;
