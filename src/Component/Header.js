import { Grid, ListItem, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import profile from '../assets/profile3.png'


const Header = () => {
    const profileText = {
        display: "block",
        marginTop: "20%",
        lineHeight: "8.5"
    }
    const typographyStyles = {
        color: "#ffff",
        opacity: "0.8",
        marginBottom: "20px",
        fontFamily: "Ubuntu",
        letterSpacing: "2px",
        textAlign: "right",
        '@media (max-width: 600px)': {
            textAlign: "center",
            marginLeft: "0"
        }
    }
    const profilePicture = {
        marginTop: "15%",
        justifyContent: "center"
    }
    const Img = styled('img')({
        maxWidth: '500px',
        maxHeight: '500px',
        opacity: "0.8",
        backgroundColor: "gray",
        boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.2);",
        borderRadius: "50%",
    });
    return (
        <Grid className='header' container spacing={2} columns={10}>
            <Grid item md={5} xs={10}>
                <ListItem style={profileText} className="profileText">
                    <Typography sx={typographyStyles} variant='h6'>Hello, I'm</Typography>
                    <Typography sx={[typographyStyles, { fontWeight: "bold", fontFamily: "Poppins", opacity: "1", color: "#bac964" }]} variant='h2'>Saad Ashraf</Typography>
                    <Typography sx={[typographyStyles, { marginLeft: "20%" }]} variant='subtitle2'>I’m passionate about exploring ways technology can provide practical solutions to everyday problems. I’m looking to connect with engineers and other professionals who are currently working in the field of technology.</Typography>
                </ListItem>
            </Grid>
            <Grid item md={5} xs={10}>
                <ListItem className='profilePicture' style={profilePicture}>
                    <Img alt="profile" src={profile} />
                </ListItem>
            </Grid>
        </Grid >
    )
}

export default Header

