// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateSeptember12023 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - September 1, 2023
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
      

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>New Update is Now Live!</Typography>
        <Typography variant="body1">
          <a href="https://playcyberverse.com/">PLAY HERE</a> - We recommend clearing the cache on the game page to avoid bugs. The update contains more improvement features and small additions that had to be done before we start working on the new roadmap plans!
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Notifications</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added notification for &quot;not enough CYPX&quot;</li>
          <li>Added notification for &quot;not enough energy&quot;</li>
          <li>Added notification when player without VIP card tries to enter the VIP section: &quot;You need a VIP NFT Card to access VIP Section.&quot;</li>
          <li>Added notifications for players who don&apos;t own an apartment and try to enter one: &quot;You don&apos;t own this apartment.&quot;</li>
          <li>Improved notifications: sped up when there are many</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>CyberCitizen Level</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added gaining XP for CyberCitizen level by doing tasks: mining, crafting, farming, fishing, exploring</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Crafting NFT Items</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added NFT item crafting</li>
          <li>Currently, 2 NFT items are available: Cyberium Jackhammer &amp; Ergonium Jackhammer</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Crafting Recipe Update</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added a small addition: When opening an item recipe to craft and needing a certain sub-item crafted, you can click on the sub-item, and it takes you to the specific item&apos;s recipe</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Rechargeable NFT Item Tools</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added recharging NFT items that are used as tools: jackhammers</li>
          <li>Jackhammers: mine until the HP goes to zero, then ask to recharge the tool with &quot;Power Cell&quot; in-game item that can be crafted</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Apartment Designs</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>All owners of the new apartment NFTs now have access to their apartments</li>
          <li>Added new apartment designs (13 new apartment designs + 1 yacht)</li>
          <li>List of apartment designs:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Small1 - 288 squares (16x16 square)</li>
              <li>Small2 - 296 squares (16x16 square)</li>
              <li>Small3 - 283 squares (16x16 square)</li>
              <li>Small4 - 229 squares (16x16 square)</li>
              <li>Medium1 - 354 squares (16x16 square)</li>
              <li>Medium2 - 397 squares (16x16 square)</li>
              <li>Medium3 - 342 squares (16x16 square)</li>
              <li>Medium4 - 400 squares (16x16 square)</li>
              <li>Large1 - 575 squares (16x16 square)</li>
              <li>Large2 - 469 squares (16x16 square)</li>
              <li>Large3 - 665 squares (16x16 square)</li>
              <li>Large4 - 499 squares (16x16 square)</li>
              <li>Penthouse - 886 squares (16x16 square)</li>
              <li>Yacht - 499 squares (16x16 square)</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Apartment Icon</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added icons on the map above the building where player owns an apartment, so it can be easily located by the player</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Yacht</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added Fishing when you are on yachts you own</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Public Lobby</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added access for everyone to the lobby: you can now check leaderboards, item shop, assets, use citizen search, open crates with NFTs without a CyberCitizen NFT</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Youtube Video in the Lobby</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added introduction video in the lobby</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Gardening Rule</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added new gardening rule:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>New successful harvested plants rate = normal with a skill effect of 85%–100%</li>
              <li>Every seed placed, the % drops by 5%</li>
              <li>Adds 1% every 10 minutes</li>
              <li>The lowest you can go with 1 type of seed is 0%–15% (we have 7 types of seeds that you can plant)</li>
              <li>Note: this rule is for each plot individually. That means when you rented 2 plots and harvested Wheat Seeds on plot number 1 and you ended up with a 45% success rate, on plot number 2, you will start again with 85% with the same Seed</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Item Additions</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Stone - can be looted in the bins or mined in the caves, item is used to craft stone pickaxes</li>
              <li>Copper - can be mined in the caves</li>
              <li>Stone Pickaxes - can be crafted using stone and sticks</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Mining</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added Copper Ore and Stone to mine</li>
          <li>Improved mining rates by the concept @kilver shared with us</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>New Website Design</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Mongo revamped our website and added more information.</li>
          <li>Link: <a href="https://www.cyberversegame.io/">CyberVerse Game Website</a></li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Second Part of the Update</Typography>
        <Typography variant="body1">(That should be hopefully integrated within a week)</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Marketplace - we are waiting on SkyHarbor team to deliver their side of work, so we can start the integration</li>
          <li>GEN3 - more info will be announced soon along with our new game update plans. All I can tell you is, you are gonna be hyped for what is coming!</li>
          <li>New Roadmap - we hope to also release what is coming in the upcoming months</li>
        </Box>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateSeptember12023;
