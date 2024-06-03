import Post02062024 from '../components/02-06-2024';
import Post02222024 from '../components/02-22-2024';
import Post03142024 from '../components/03-14-2024';
import Post03262024 from '../components/03-26-2024';
import Post04062024 from '../components/04-06-2024';
import Post04252024 from '../components/04-25-2024';
import Post05032024 from '../components/05-03-2024';
import Post09012023 from '../components/09-01-2023';
import Post09232023 from '../components/09-23-2023';
import Post10272023 from '../components/10-27-2023';
import Post12082023 from '../components/12-08-2023';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  image: string;
  component: React.ComponentType;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'May 3, 2024 Patch Notes',
    excerpt: "Changes to NPC Market, items, accumulating rewards, NFT marketplace, fees, quests, sketchy dealers, chat bubbles gardening and the wiki",
    publishDate: '2024-05-03T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post05032024
  },
  {
    id: '2',
    title: 'April 25, 2024 - Patch Notes',
    excerpt: 'New audio NFTs, QOL improvements, general fixes',
    publishDate: '2024-04-25T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post04252024
  },
  {
    id: '3',
    title: 'April 6, 2024 - Patch Notes',
    excerpt: 'New login method, changes to login flow, cardano support!',
    publishDate: '2024-04-06T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post04062024
  },
  {
    id: '4',
    title: 'March 26, 2024 - Patch Notes',
    excerpt: 'The community market has arrived!',
    publishDate: '2024-03-26T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post03262024
  },
  {
    id: '5',
    title: 'March 14, 2024 - Patch Notes',
    excerpt: 'Free to play character added, implementation of sorting items, other QOL fixes',
    publishDate: '2024-03-14T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post03142024
  },
  {
    id: '6',
    title: 'February 22, 2024 - Patch Notes',
    excerpt: 'General game improvements, wolf and sheep game improvements, ui fixes and more',
    publishDate: '2024-02-22T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post02222024
  },
  {
    id: '7',
    title: 'February 6, 2024 - Patch Notes',
    excerpt: 'Ingame trading, wolf and sheep minigame added (multiplayer minigame), and more',
    publishDate: '2024-02-06T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post02062024
  },
  {
    id: '8',
    title: 'December 8, 2023 - Patch Notes',
    excerpt: 'Auto login implementation, global chat, cybercar NFTs, daily quests, furniture boxes, christmas loot boxes and more!',
    publishDate: '2023-12-08T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post12082023
  },
  {
    id: '9',
    title: 'October 27, 2023 - Patch Notes',
    excerpt: 'Addition of new furniture system, addition of mining rigs, new music choices for lobby, weekly lottery addition, fishing/gardening QOL changes',
    publishDate: '2023-10-27T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post10272023
  },
  {
    id: '10',
    title: 'September 23, 2023 - Patch Notes',
    excerpt: 'Marketplace addition, addition of new generation of CyberCitizens (GEN 3), item crafting improvements',
    publishDate: '2023-09-23T00:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post09232023
  },
  {
    id: '11',
    title: 'September 01, 2023 - Patch Notes',
    excerpt: 'New notifications added, added XP addition for CyberCitizen level, added NFT crafting, added  recharging NFT items. apartment NFT integrations etc',
    publishDate: '2023-09-01T10:00:00Z',
    image: 'https://i.gyazo.com/0f867673c72e5828b859b60466abd04a.png',
    component: Post09012023
  },
];
