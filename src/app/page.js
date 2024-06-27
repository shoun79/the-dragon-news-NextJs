import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Box, Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Box className='my-5' >

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>

      </Grid>
    </Box>
  );
};

export default HomePage;