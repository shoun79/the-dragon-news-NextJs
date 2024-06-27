import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const DynamicNewsPage = async ({ searchParams }) => {
    const { data: categoryNewses } = await getCategoryNews(searchParams.category);
    return (
        <div className='my-5'>
            <h2>Total <strong>{searchParams.category}</strong> news: {categoryNewses.length}</h2>
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    categoryNewses.map(categoryNews => <Grid key={categoryNews._id} item xs={6}>
                        <Link href={`/${categoryNews.category.toLowerCase()}/${categoryNews._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia sx={{
                                        '& img': {
                                            width: '100%',
                                            height: '250px'
                                        }
                                    }}>
                                        <Image src={categoryNews.thumbnail_url} alt='Top news' width={800} height={800} />
                                    </CardMedia>
                                    <CardContent>
                                        <span className=" px-2 py-1 bg-red-500 text-white my-5 rounded">{categoryNews.category}</span>
                                        <Typography gutterBottom

                                            component={'h6'}
                                            fontWeight={'bold'}>
                                            {categoryNews.title.length > 30 ? categoryNews.title.slice(0, 30) + '...' : categoryNews.title}
                                        </Typography>
                                        <Typography gutterBottom className="my-2">
                                            By {categoryNews.author.name} - {categoryNews.author.published_date}

                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {categoryNews.details.length > 200 ? categoryNews.details.slice(0, 200) + '...' : categoryNews.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>)
                }

            </Grid>
        </div>
    );
};

export default DynamicNewsPage;