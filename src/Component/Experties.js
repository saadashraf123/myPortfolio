import React from 'react'
import { Typography } from '@mui/material'
import data from "../assets/expertise.json"

const Experties = () => {
    const typographyStyles = {
        color: "#ffff",
        opacity: "0.6",
        marginBottom: "20px",
        fontFamily: "Ubuntu",
        letterSpacing: "2px",
    }
    const expertise = data.expertise
    return (
        <div className='Expertise' id='expertise'>
            <Typography align='center' sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1" }]} variant='h6'>Expertise</Typography>
            <hr style={{ background: "white", margin: "0px 30% 5% 30%" }}></hr>
            <div className='row expertiseList'>
                {expertise.map((item) =>
                    <div key={item.id} className='col-lg-2 col-md-3 col-sm-4 col-6' >
                        <img className='expertiseItems' src={require(`../assets/${item.image}.png`)} alt={item.name} srcSet="" />
                    </div>
                )}
            </div >
        </div>
    )
}

export default Experties