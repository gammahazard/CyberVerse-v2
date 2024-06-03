// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CyberVerseUpdateMarch262024 = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        CyberVerse Update - March 26, 2024
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

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Community Market Update Overview</Typography>
        <Typography variant="body1">
          We are thrilled to introduce the Community Market, a community marketplace where players can sell in-game items to other players or buy in-game items from other players. Here are the details of the new features and updates:
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>1. Listing Items Page</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>You can buy items with CYPX.</li>
          <li>Some items have amounts; you can select the amount you want to buy.</li>
          <li>Sorting is always by listing date; you can search by typing the name of the item into the search bar.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>2. Your Listed Items Page</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>You can list up to 3 items.</li>
          <li>You can delist your items 1 minute after listing the item.</li>
          <li>You can list only one type of item, put the amount of how many you are selling, and for how much CYPX per 1 item.</li>
          <li>When you list an item, it is taken from your inventory and listed in the community market.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>3. Requests Page</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Browse other players&apos; item requests.</li>
          <li>You can accept only the whole deal, e.g., &quot;I need 5 A items for 100 CYPX.&quot;</li>
          <li>When a deal is accepted, the community market will take the items from your inventory and give you the CYPX in the deal.</li>
          <li>Sorting is always by requests date; you can search by selecting the item you are looking for. You have all the items on pages [1], [2], [3],... [10].</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>4. Your Request Page</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Here you can request items that you would like to buy, type the amount you want and CYPX.</li>
          <li>When you add a request, the CYPX is taken from your in-game balance.</li>
          <li>You can cancel a request.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>5. Collect Profits Page</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>This page contains all of your sales profits and accepted requests for items to be collected.</li>
          <li>Community Market will take 5% of your CYPX sales.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>6. F.A.Q Page</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Explanation of the community market.</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Else</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Community Market takes a 5% CYPX fee from each sale.</li>
          <li>Handle security to prevent glitches, duplications, and critical bugs.</li>
          <li>Add total volume from the Community Market.</li>
          <li>Backend improvements.</li>
          <li>Enhanced security measures.</li>
          <li>Other updates and fixes.</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          We hope you enjoy these updates and continue to have an amazing experience in CyberVerse. As always, your feedback is invaluable to us. Happy gaming!
        </Typography>
      </Box>
    </Box>
  );
};

export default CyberVerseUpdateMarch262024;
