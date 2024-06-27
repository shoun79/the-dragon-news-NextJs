import { Box, Button } from "@mui/material";
import Link from "next/link";

const navItems = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'Pages',
        pathname: '/pages'
    },
    {
        route: 'Category',
        pathname: '/categories/news?category=all-news'
    },
    {
        route: 'News',
        pathname: '/news'
    },
    {
        route: 'About',
        pathname: '/about'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    },
];
const NavMenu = () => {
    return (
        <Box className='w-full text-center'>
            {navItems.map((item, i) => (
                <Link href={item.pathname} key={i}>
                    <Button className='text-white hover:text-green-600'>
                        {item.route}
                    </Button>
                </Link>

            ))}
        </Box>
    );
};

export default NavMenu;