import { Box, Container, Typography } from "@mui/material";
import SocialIcons from "../SocialIcons/SocialIcons";
import NavMenu from "../NavMenu/NavMenu";

const Footer = () => {

    return (
        <Box className='bg-black px-2 py-10'>
            <Container>
                <Box className='flex justify-center'>
                    <SocialIcons />

                </Box>
                <Box className='my-5'>
                    <NavMenu />

                </Box>

                <Typography color='gray' variant="body2" textAlign={'center'}>
                    @{new Date().getFullYear()} The Dragon News. Design by Programming Hero.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;