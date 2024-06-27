import notFoundImg from '@/assets/404.png'
import { Box } from '@mui/material';
import Image from 'next/image';
const NotFoundPage = () => {
    return (
        <Box>
            <Image className='mx-auto mt-14' src={notFoundImg} alt='Not found image' width={800}
                height={500}></Image>
        </Box>
    );
};

export default NotFoundPage;