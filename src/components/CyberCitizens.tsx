// @ts-ignore
// @ts-nocheck
import { Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionText = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const featureImages = [
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
  ];

  return (
    <Box p={2} maxWidth="90%" margin="auto">
      <Slider {...sliderSettings}>
        {featureImages.map((imageUrl, index) => (
          <Box key={index} style={{ padding: '0', position: 'relative' }}>
            <Box
              style={{
                height: '500px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img
                src={imageUrl}
                alt={`Feature ${index + 1}`}
                style={{
                  width: '80%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
              <Box
                style={{
                  marginTop: '10px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                Feature {index + 1}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SectionText;
