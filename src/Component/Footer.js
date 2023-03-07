import React from 'react'
import { Typography, Stack, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';


const Footer = () => {
    const typographyStyles = {
        color: "#ffff",
        opacity: "0.7",
        marginBottom: "10px",
        fontFamily: "Poppins",
        letterSpacing: "2px",
        fontSize: "12px",
        fontWeight: "100"
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "rgba(132, 132, 132, 0.2)",
        boxShadow: "2px 2px 10px 5px rgba(20, 20, 20, 0.2);",
        borderRadius: "50%",
        textAlign: 'center',
    }));
    return (
        <div className='footer text-center'>
            <Typography className='footerText' sx={typographyStyles} variant='body2'>Copyright © 2023 All rights reserved | This site is made by <b className='bold'>Saad Ashraf</b></Typography>
            <Stack className='socialIcons' direction="row" spacing={2}>
                <Item><a style={{ color: "#bac964" }} href='https://www.linkedin.com/in/saad-ashraf-jewani-4ab84020a/' rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a></Item>
                <Item><a style={{ color: "#bac964" }} href='https://github.com/saadashraf123' rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a></Item>
                <Item><i style={{ color: "#bac964" }} className="fa-brands fa-twitter"></i></Item>
                <Item><a style={{ color: "#bac964" }} href='https://instagram.com/saad_ashraf_jewani?igshid=ZDdkNTZiNTM=' rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a></Item>
                <Item><a style={{ color: "#bac964" }} href='https://www.facebook.com/profile.php?id=100012515710437' rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook"></i></a></Item>
            </Stack>
        </div>
    )
}

export default Footer