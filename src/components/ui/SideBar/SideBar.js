import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideTopNews from '@/assets/side-top-news.png'
import blankImg from '@/assets/blankImage.png'
import sideBottomImg from '@/assets/side-bottom-img.png'
import { getCurrentFormattedDate } from "@/utils/getCurrentFormattedDate";
const SideBar = () => {
    return (
        <Box>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideTopNews} alt='Top news' width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className="w-[100px] px-2 bg-red-500 text-white my-5 rounded">Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, qui.
                        </Typography>
                        <Typography gutterBottom className="my-3">
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere commodi sed nobis praesentium saepe assumenda! At facere ipsam pariatur quidem?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Box className='mt-5'>
                <Box sx={{ width: 1 }} className='border-t-2'>
                    <Box className='mt-5' display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>

                        <Box gridColumn="span 4">
                            <Image src={blankImg} alt="blankImg" />
                        </Box>
                        <Box gridColumn="span 8">
                            <Typography gutterBottom  >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {getCurrentFormattedDate()}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='mt-5'>
                <Box sx={{ width: 1 }} className='border-t-2'>
                    <Box className='mt-5' display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>

                        <Box gridColumn="span 4">
                            <Image src={blankImg} alt="blankImg" />
                        </Box>
                        <Box gridColumn="span 8">
                            <Typography gutterBottom  >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {getCurrentFormattedDate()}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='mt-5'>
                <Box sx={{ width: 1 }} className='border-t-2'>
                    <Box className='mt-5' display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>

                        <Box gridColumn="span 4">
                            <Image src={blankImg} alt="blankImg" />
                        </Box>
                        <Box gridColumn="span 8">
                            <Typography gutterBottom  >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {getCurrentFormattedDate()}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='mt-5'>
                <Box sx={{ width: 1 }} className='border-t-2'>
                    <Box className='mt-5' display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>

                        <Box gridColumn="span 4">
                            <Image src={blankImg} alt="blankImg" />
                        </Box>
                        <Box gridColumn="span 8">
                            <Typography gutterBottom  >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {getCurrentFormattedDate()}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Image className="mt-5" src={sideBottomImg} alt="sideBottomImg" />
        </Box>
    );
};

export default SideBar;