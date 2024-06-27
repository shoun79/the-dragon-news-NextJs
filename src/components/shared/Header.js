import { Box, Container, Typography } from "@mui/material";
import headingImg from '@/assets/heading.png'
import Image from "next/image";
import { getCurrentFormattedDate } from "@/utils/getCurrentFormattedDate";
const Header = () => {
    const date = new Date(new Date()); // Month is 0-based, so 10 is November

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return (
        <Box className='my-5'>
            <Container>
                <Image src={headingImg} alt="heading image" width={500} height={500} className="mx-auto" />
                <Typography color='gray' variant="body2" textAlign={'center'} className="my-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign={'center'}>
                    {getCurrentFormattedDate()}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;