// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateOctober272023 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - October 27, 2023
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="CyberVerse Update - October 27, 2023"
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
        <Typography variant="body1">
          We are excited to announce that Update 1 is officially done! Here is a quick overview of what the update contains. We recommend clearing your cache before starting to play the new update.
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Real Estate - Furniture Crafts</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Created a whole new furniture system</li>
          <li>Created a furniture tool for adding new furniture items</li>
          <li>Added over 1000 furniture items</li>
          <li>Added over 1000 furniture craft recipes</li>
          <li>Added new floor textures</li>
          <li>Added new wall textures</li>
          <li>Added support for most furniture to rotate</li>
          <li>Added furniture that can be placed on the table:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Click CTRL to drop the furniture in table spots only</li>
              <li>Click CTRL to select furniture that is in table spots only</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Mining Rigs</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added mining system</li>
          <li>Added UI</li>
          <li>Added balance</li>
          <li>Added electricity bill</li>
          <li>Added slot inventory in the mining rig</li>
          <li>Added turn on/off mining rig function</li>
          <li>Added calculator of electricity/heat level/rewards from mining per hour and timer</li>
          <li>Added Pay the bill button</li>
          <li>Added collect rewards button</li>
          <li>Added multiple rarities of each PC component to craft</li>
          <li>Each apartment can have 1 Mining Rig - when you own multiple apartments, you can set up a mining rig in each one</li>
          <li>The mining rig is craftable</li>
          <li>You can select to place it somewhere in your apartment like furniture</li>
          <li>When it&apos;s placed somewhere in your apartment, press E to open the inventory of the mining rig</li>
          <li>Every GPU comes up with X heat</li>
          <li>The maximum heat the mining rig can take is 100 - above 100, it won&apos;t turn on</li>
          <li>The cooling systems can reduce the total heat by X%</li>
          <li>To be able to mine, you need at least 1 GPU, CPU, PSU, MOTHERBOARD, and COOLING SYSTEM items</li>
          <li>There is also an electricity bill to pay, when you reach 100 electricity, it costs 1 CYPX to pay the bill (for now)</li>
          <li>The bigger your apartment is, the higher the electricity limit you get:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>SMALL = 0/100</li>
              <li>MIDDLE = 0/200</li>
              <li>LARGE = 0/300</li>
              <li>PENTHOUSES/YACHTS = 0/500</li>
            </Box>
          </li>
          <li>PC components:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Cooling System V1</li>
              <li>Cooling System V2</li>
              <li>Cooling System V3</li>
              <li>NovaCore Lite CPU</li>
              <li>QuantumBoost 5000 CPU</li>
              <li>TechnoCore Ultra-XT CPU</li>
              <li>Cybervision X-Gen 1000 GPU</li>
              <li>Cybervision X-Gen 2000 GPU</li>
              <li>Cybervision X-Gen 3000 GPU</li>
              <li>PowerTech Light Motherboard</li>
              <li>TitanTech-101 Motherboard</li>
              <li>CyberSynthetiX Motherboard</li>
              <li>ProCharge PSU</li>
              <li>SynthWavePower PSU</li>
              <li>QuantumBoost 3000 PSU</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Energy Items</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added energy system</li>
          <li>Each NFT character can consume any 10 energy items per day</li>
          <li>When consuming energy, you cannot go over 100 ENERGY (When an NFT character has 10 ENERGY left and consumes a 100 ENERGY item, the character&apos;s energy will go max to 100/100)</li>
          <li>List of energy items:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Bread = +20 ENERGY</li>
              <li>Multivitamin Juice = +25 ENERGY</li>
              <li>Oceanic Smoothie = +25 ENERGY</li>
              <li>Grape Vine = +30 ENERGY</li>
              <li>Synthesso = +100 ENERGY</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Music in the Lobby</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added a track to the lobby</li>
          <li>Added button to Pause/Resume the track</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>New Casino Game - Weekly Lottery</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Added lottery system</li>
          <li>Rules:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>1 ticket costs 500 CYPX</li>
              <li>The more tickets you buy, the better chance of winning you have against other participants</li>
              <li>Each week, there is only 1 winner</li>
              <li>Casino takes a 10% fee from the winning lottery</li>
              <li>New lottery starts every Monday</li>
              <li>The latest winner of the weekly lottery will be visible below the rules with also the prize</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Fishing</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Decreased prices for fishes:
            <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
              <li>Cybernetic Salmon - 15 CYPX</li>
              <li>Circuit Pike - 15 CYPX</li>
              <li>Binary Bass - 20 CYPX</li>
              <li>Neon Trout - 20 CYPX</li>
              <li>Holo Herring - 35 CYPX</li>
              <li>Glitchfin - 35 CYPX</li>
              <li>Quantum Tuna - 55 CYPX</li>
            </Box>
          </li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Gardening</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Fixed bug with % when planting seeds (Please report if there are still some bugs with %)</li>
          <li>Added 14 new seeds and plants</li>
          <li>Added a 1/15 chance of getting dirt after harvesting plants</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>What&apos;s Next?</Typography>
        <Typography variant="body1">
          We will be sharing a lot of information such as an updated short-term roadmap, CYPX token whitepaper, and more in the upcoming days. Hope you guys enjoy the update and don&apos;t forget to share your feedback with us! 🦾
        </Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateOctober272023;
