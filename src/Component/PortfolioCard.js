import { Button, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'

export default function PortfolioCard({ data }) {
    return (
        <Card className='portfolioCard' sx={{ maxWidth: 345, height: 350 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={require(`../assets/${data.image}.png`)}
                title={data.name}
            />
            <CardContent sx={{ height: 150 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography className='descStyles' variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                {data.site_link &&
                    <Button className='linksBtn' href={data.site_link} target="_blank">
                        <i className="fa-solid fa-eye" style={{ marginRight: "5px" }}></i>
                        View
                    </Button>
                }
                <Button className='linksBtn' href={data.github_link} target="_blank">
                    <i className="fa-brands fa-github" style={{ marginRight: "5px" }}></i>
                    Github
                </Button>
            </CardActions>
        </Card>
    );
}