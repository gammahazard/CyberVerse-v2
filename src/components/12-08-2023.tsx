// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateDecember132023 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - December 13, 2023
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

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Auto Login</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Changed server system to save data and load it again when the server restarted</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Account Password Login</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added password feature where players can set up a password when logging into the game so they don&apos;t have to pay the fee after every relog</li>
          <li>At start, players during verification send 1 fee and then set up the password</li>
          <li>Once they set up their password, they can log into the game with the password next time</li>
          <li>How it works:
            <Box component="ol" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Newcomer connects their wallet to the game and verifies their wallet</li>
              <li>Once in the lobby, they go to settings</li>
              <li>In settings, they click change password</li>
              <li>They set up their password and it&apos;s done</li>
            </Box>
          </li>
          <li>After setting up the password, they can log into the game using the password once connected with their wallet and don&apos;t have to pay the verification fee</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Login & Server & Mac Improvements</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Changed the way the server operates for login; this should help solve the issue when players paid the verification fee and the game didn&apos;t verify the player</li>
          <li>Fixed some errors from our database that caused our game server to crash sometimes</li>
          <li>Sped up the opening of the game speed by x(8-16) and fixed some Mac problems</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Global Chat</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added global chat to the game that allows people to chat with all active players</li>
          <li>Added function when you double-click on someone&apos;s nickname in the chat, it copies the player&apos;s message, nickname, and ergo public address</li>
          <li>Each message is limited to 27 letters (this will change later)</li>
          <li>Added an option to close the global chat</li>
          <li>Added function to type and send messages in the chat</li>
          <li>Added UI</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>CyberCar NFTs</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added car crate with 501 supply</li>
          <li>Added car specs for each car:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Speed = how fast the car can speed up</li>
              <li>Max Speed = the max speed of a car</li>
              <li>X Speed = the right and left movement speeds</li>
            </Box>
          </li>
          <li>Added 15 types of cars with distribution, speed, max speed, and x speed:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Vexel Nomad Mini: 103 NFTs / Speed: 1 / Max Speed: 40 / X Speed: 0.8</li>
              <li>LYNX Classic: 94 NFTs / Speed: 1.1 / Max Speed: 47 / X Speed: 0.9</li>
              <li>LYNX Series 1: 77 NFTs / Speed: 1.2 / Max Speed: 50 / X Speed: 1</li>
              <li>Hyron Vision 7X: 69 NFTs / Speed: 1.2 / Max Speed: 50 / X Speed: 1</li>
              <li>Apex Dominator: 54 NFTs / Speed: 1.3 / Max Speed: 53 / X Speed: 1.1</li>
              <li>BlitzMach Vector3: 38 NFTs / Speed: 1.3 / Max Speed: 53 / X Speed: 1.1</li>
              <li>Pulsar 919: 18 NFTs / Speed: 1.5 / Max Speed: 57 / X Speed: 1.3</li>
              <li>Ferrion Synthossa: 13 NFTs / Speed: 1.5 / Max Speed: 57 / X Speed: 1.3</li>
              <li>Hyron Vision Supercar: 11 NFTs / Speed: 1.6 / Max Speed: 60 / X Speed: 1.4</li>
              <li>Hyron Vision Supercar Cabrio: 8 NFTs / Speed: 1.6 / Max Speed: 60 / X Speed: 1.4</li>
              <li>Axiom R89: 6 NFTs / Speed: 1.7 / Max Speed: 67 / X Speed: 1.5</li>
              <li>Ferrion Flux: 4 NFTs / Speed: 1.75 / Max Speed: 73 / X Speed: 1.55</li>
              <li>Raven Rhexis - Phantom: 3 NFTs / Speed: 1.6 / Max Speed: 60 / X Speed: 1.4</li>
              <li>BladeTech Veyronix: 2 NFTs / Speed: 1.78 / Max Speed: 65 / X Speed: 1.5</li>
              <li>Neo-Sigma Elite: 1 NFT / Speed: 1.66 / Max Speed: 62 / X Speed: 1.5</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>CyberCar Minigame v1</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Utilized all 501 NFT cars</li>
          <li>Added loading car NFT from wallet</li>
          <li>Added minigame backend</li>
          <li>Added NPC to start minigame, leaderboard</li>
          <li>Added menu where you can rent a car and see your cars and race</li>
          <li>Added leaderboard with tier rewards</li>
          <li>Added obstacles on the road (oil object) that slows you down</li>
          <li>Added coins that you can collect for an extra boost</li>
          <li>Added countdown that shows players how long until the game ends if they don&apos;t reach the finish line</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Daily Quests</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added daily quests for NFT characters</li>
          <li>Each NFT character has its own daily quests</li>
          <li>Added first 54 daily quests</li>
          <li>Types of daily quests:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Visit</li>
              <li>Play</li>
              <li>Claim</li>
              <li>Mine</li>
              <li>Harvest</li>
              <li>Talk</li>
              <li>Craft</li>
              <li>Explore</li>
              <li>Hit Points</li>
              <li>Catch</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Furniture Box</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added furniture box that players can open to receive one of many in-game furniture items</li>
          <li>The box costs 600 CYPX</li>
          <li>The box has unlimited supply (for now)</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Christmas Loot Boxes</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added spawns for loot boxes in the city</li>
          <li>Each NFT can open a loot box once a day</li>
          <li>Cost: 10 energy; 50% chance to open an empty Christmas box</li>
          <li>If you miss, you can still open another box</li>
          <li>Limited time events from date A to date B</li>
          <li>Added new look message with Christmas theme on the left when opening</li>
          <li>Added backend and secure system</li>
          <li>Items you can get from loot boxes and the amounts you can get:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Wood: 1 - 10</li>
              <li>Wooden Stick: 1 - 14</li>
              <li>Iron Stick: 1 - 8</li>
              <li>Circuit board: 1 - 3</li>
              <li>Golden Stick: 1 - 6</li>
              <li>Plastic Plate: 1 - 12</li>
              <li>Steel Plate: 1 - 4</li>
              <li>Ergonium Plate: 1 - 2</li>
              <li>Carbon Plate: 1 - 4</li>
              <li>Advanced circuit: 1 - 3</li>
              <li>Power cell: 1</li>
              <li>Microprocessors: 1 - 3</li>
              <li>Chip: 1 - 4</li>
              <li>Copper wire: 1 - 6</li>
              <li>Screws and bolts: 1 - 8</li>
              <li>Small electronic circuit: 1 - 3</li>
              <li>Wires and Cables: 1 - 8</li>
              <li>Microchip: 1 - 6</li>
              <li>Diamond dust: 1 - 3</li>
              <li>Nano-fiber Wires: 1 - 2</li>
              <li>Iron Ingot: 1 - 3</li>
              <li>Silver Ingot: 1 - 3</li>
              <li>Golden Ingot: 1 - 3</li>
              <li>Diamond: 1</li>
              <li>Wooden Fishing Rod: 5 - 15</li>
              <li>Iron Fishing Rod: 3 - 12</li>
              <li>Golden Fishing Rod: 2 - 10</li>
              <li>Diamond Fishing Rod: 1 - 6</li>
              <li>Diamond Stick: 1 - 2</li>
              <li>Default Iron Pickaxe: 5 - 12</li>
              <li>Iron Pickaxe: 4 - 10</li>
              <li>Golden Pickaxe: 2 - 8</li>
              <li>Diamond Pickaxe: 2 - 6</li>
              <li>Golden dust: 1 - 4</li>
              <li>Multivitamin Juice: 1</li>
              <li>Copper Ingot: 1 - 6</li>
              <li>NovaCore Lite CPU: 1</li>
              <li>Cybervision X-Gen 1000 GPU: 1 - 6</li>
              <li>PowerTech Light Motherboard: 1</li>
              <li>ProCharge PSU: 1</li>
              <li>Stone Pickaxe: 7 - 15</li>
              <li>Grape Vine: 1</li>
              <li>Oceanic Smoothie: 1</li>
              <li>Synthesso: 1</li>
              <li>Dirt: 3 - 10</li>
              <li>Metal: 1 - 3</li>
              <li>Cooling System V1: 1</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Furniture Previews</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added 2 Christmas trees</li>
          <li>Added furniture box to purchase random furniture</li>
          <li>Fixed furniture reported by community members</li>
          <li>Added feature to check how the furniture looks in the apartment; you can move and rotate it</li>
          <li>Added feature that shows the collisions of the furniture</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Furnace Furniture</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added a crafted furniture in items furnace that allows players to melt multiple ores into ingots</li>
          <li>Players can only place the furnace into their real estates = 1 furnace per apartment</li>
          <li>How long it takes to melt 1 ore of:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Copper Ore = 30 Seconds</li>
              <li>Iron Ore = 60 Seconds</li>
              <li>Silver Ore = 90 Seconds</li>
              <li>Golden Ore = 120 Seconds</li>
              <li>Diamond Ore = 150 Seconds</li>
              <li>Cyberium Ore = 240 Seconds</li>
              <li>Ergonium Ore = 300 Seconds</li>
            </Box>
          </li>
          <li>To melt ore, you need one of these types of items:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>1 ORE = 2 COALS</li>
              <li>1 ORE = 7 WOODEN STICKS</li>
              <li>1 ORE = 2 OAK WOODS</li>
              <li>1 ORE = 3 WOODEN PLANKS</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Select Character - Filter GEN2/GEN3 + Based on LVL</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added filter for GEN2/GEN3 NFTs</li>
          <li>Cybercitizens NFTs are now sorted based on their level/XP by default</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Lottery Fix</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Fixed the lottery bugs</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!</Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateDecember132023;
