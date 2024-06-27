import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);

    return (
        <Box className='my-5'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} alt="news" width={800} height={500} />
                        <Grid container spacing={2} mt={2}>
                            <Grid item lg={6}>
                                <Image src={news.image_url} alt="news" width={800} height={500} />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.image_url} alt="news" width={800} height={500} />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant='h5' component='h2'
                        >
                            {news.title}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            <Avatar alt="author" src={news.author.img} />
                            <Typography gutterBottom className="my-2">
                                By {news.author.name}, Publish - {news.author.published_date}
                            </Typography>

                        </Box>
                        <Typography style={{
                            textAlign: 'justify',
                            whiteSpace: 'pre-line',
                            margin: '10px 0',
                            color: 'gray'
                        }} >
                            {news.details}
                        </Typography>
                        <Typography component={'h6'}>
                            ``Many desktop publishing packages and web page editors now use as
                            their default model text!
                        </Typography>
                        <Typography component={'h6'}>-SHOUN</Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetails;