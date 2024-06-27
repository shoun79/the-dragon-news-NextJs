import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialIcons = () => {
    return (
        <Stack direction="row"
            sx={{
                '& svg': {
                    color: '#fff',
                    '&:hover': {
                        color: 'green',
                        transition: '.5s'
                    }
                }
            }}>
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton>
                <XIcon></XIcon>
            </IconButton>
            <IconButton>
                <InstagramIcon></InstagramIcon>
            </IconButton>
        </Stack>
    );
};

export default SocialIcons;