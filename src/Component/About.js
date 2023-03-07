import React from 'react'
import { Grid, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import profile from '../assets/aboutPicture.png'

const About = () => {
    const typographyStyles = {
        color: "#ffff",
        opacity: "0.8",
        marginBottom: "20px",
        fontFamily: "Ubuntu",
        letterSpacing: "2px",
        alignText: "center",
    }
    const aboutText = {
        display: "block",
        lineHeight: "8.5",
        margin: "20% 20px",
    }
    const aboutPicture = {
        justifyContent: "center",
    }
    const Img = styled('img')({
        maxWidth: '450px',
        maxHeight: '500px',
        opacity: "0.8",
        backgroundColor: "white",
        boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.5 );",
        borderRadius: "5%",
    });
    return (
        <div id='about' className='about'>
            <Typography align='center' sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1" }]} variant='h6'>About<b className='bold'>Me</b></Typography>
            <hr style={{ background: "white", margin: "0px 30% 5% 30%" }}></hr>
            <Grid container spacing={2} columns={10}>
                <Grid item md={5} xs={10}>
                    <ListItem className='' style={aboutPicture}>
                        <Img alt="profile" src={profile} />
                    </ListItem>
                </Grid>
                <Grid item md={5} xs={10}>
                    <ListItem style={aboutText}>
                        <Typography sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1", color: "#bac964" }]} variant='h2'>Saad Ashraf</Typography>
                        <Typography sx={typographyStyles} variant='subtitle2'>I’m passionate about exploring ways technology can provide practical solutions to everyday problems. I’m looking to connect with engineers and other professionals who are currently working in the field of technology.</Typography>
                    </ListItem>
                </Grid>
            </Grid >
        </div>
    )
}

export default About