import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import { useRouter } from 'next/router';
import boy from '../../assets/img/illustrate-2.png';
const AboutUs = () => {
  const router = useRouter();
  return (
    <Box>
      <Header />
      <Container>
        <Box className="flex flex-col items-center justify-center space-y-[20px] mb-5">
          <Typography
            variant="h1"
            className="text-2xl md:text-5xl font-bold text-center mb-7"
          >
            About Us
          </Typography>
          <Typography
            variant="h2"
            className="text-xl md:text-3xl font-light text-center mb-3"
          >
            We Grow Your Skills From A Young Age
          </Typography>
          <Typography variant="body1" className="text-center max-w-4xl">
            This is a mobile and web-based application that aims to increase
            kids’ interest in technology and get them to love tech-related
            courses early in life. This is a mobile and web-based application
            that aims to increase kids’ interest in technology and get them to
            love tech-related courses early in life. This is a mobile and
            web-based application that aims to increase kids’ interest in
            technology and get them to love tech-related courses early in life.
            This is a mobile and web-based application that aims to increase
            kids’ interest in technology and get them to love tech-related
            courses early in life.
          </Typography>
          <Box sx={aboutStyles.cardContainer}>
            <Grid container rowSpacing={2} columnSpacing={5}>
              {statistics.map((item) => (
                <Grid item xs={12} sm={4}>
                  <Box sx={{ ...aboutStyles.card, borderColor: item.color }}>
                    <Box className="flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center justify-center my-2">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          height={50}
                          width={50}
                        />
                      </div>

                      <Typography variant="h3" sx={aboutStyles.title}>
                        {item.number}
                        <AddIcon fontSize="large" />
                      </Typography>
                      <Typography variant="body2" sx={aboutStyles.description}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={aboutStyles.secondSection}>
          <Box sx={aboutStyles.left}>
            <Image src={boy} alt="hero" width={450} height={400} />
          </Box>
          <Box sx={aboutStyles.right}>
            <Typography variant="h3" mb={2}>
              Why Students Choose Us for Knowledge Acquisition
            </Typography>
            <Typography variant="body2" mb={2}>
              At Horace Learning, we specialize in providing students with the
              computer knowledge they need to succeed in today's fast-paced
              digital world. From coding and programming to data analysis and
              cyber security, our courses and resources are designed to help
              students develop the practical skills and theoretical knowledge
              they need to excel in a variety of fields.
            </Typography>
            <Box className="flex justify-start items-center space-x-2">
              <Checkbox
                defaultChecked
                sx={{
                  color: 'green !important',
                }}
              />{' '}
              <Typography variant="body2" sx={aboutStyles.description}>
                Easy to enroll for courses
              </Typography>
            </Box>
            <Box className="flex justify-start items-center space-x-2">
              <Checkbox
                defaultChecked
                sx={{
                  color: '#F9AD56',
                }}
              />{' '}
              <Typography variant="body2" sx={aboutStyles.description}>
                Awards for best student in particular courses
              </Typography>
            </Box>
            <Box className="flex justify-start items-center space-x-2">
              <Checkbox
                defaultChecked
                sx={{
                  color: 'blue !important',
                }}
              />{' '}
              <Typography variant="body2" sx={aboutStyles.description}>
                Easy and applicable lectures
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={aboutStyles.button}
              onClick={() => router.push('/login')}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        <Box className="flex flex-col items-center justify-center mb-12">
          <Typography variant="h3" mb={2}>
            Courses We Offer
          </Typography>
          <Grid container spacing={3}>
            {exampleCourses.map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                <Typography
                  variant="body2"
                  className="flex flex-col items-center border rounded-md border-red-500 p-3"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography variant="h3" mb={2}>
            Our Team
          </Typography>
          <Typography variant="body1" mb={2} className="max-w-3xl">
            Our team is comprised of experienced professionals with a passion
            for education and a commitment to creating cutting-edge solutions
            that empower learners of all ages and backgrounds. From product
            development and design, to marketing and sales, our team brings a
            wealth of knowledge and expertise to every project we undertake.{' '}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;

const aboutStyles = {
  cardContainer: {
    width: '100%',
    maxWidth: '50rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 3,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    p: 3,
    my: 3,
    border: '2px solid',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
  },
  icon: {
    fontSize: '3rem',
    borderRadius: '50%',
    padding: 2,
    marginBottom: 2,
    zIndex: -1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
  },
  secondSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    my: '50px',
  },
  button: {
    backgroundColor: '#FF6854 !important',
    color: '#fff',
    px: 3,
    mt: 3,
    borderRadius: 10,
    textTransform: 'capitalize',
    mb: '20px',
  },
  right: {
    maxWidth: '600px',
  },
  left: {
    display: { xs: 'none', sm: 'block' },
    maxWidth: '500px',
  },
};

const statistics = [
  {
    number: 99,
    name: 'Courses',
    color: '#F9AD56',
    icon: require('../../assets/img/icon-1.png'),
  },
  {
    number: 12,
    name: 'Awards',
    color: '#16C79A',
    icon: require('../../assets/img/icon-2.png'),
  },
  {
    number: 100,
    name: 'Students',
    color: '#FF5E78',
    icon: require('../../assets/img/icon-3.png'),
  },
];

const exampleCourses = [
  'Javascript',
  'Python',
  'Web Development',
  'CyberSecurity',
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Java',
];