export const getAllcategories = async () => {
    const res = await fetch('https://the-news-portal-server.vercel.app/categories');
    return res.json()
}