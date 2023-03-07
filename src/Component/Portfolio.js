import { Typography } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard'
import data from "../assets/portfolio.json"

const Portfolio = () => {
    const typographyStyles = {
        color: "#ffff",
        opacity: "0.6",
        marginBottom: "20px",
        fontFamily: "Ubuntu",
        letterSpacing: "2px",

    }
    const sites = data.sites
    return (
        <div className='Portfolio' id='portfolio'>
            <Typography align='center' sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1" }]} variant='h6'>Featured<b className='bold'>Portfolio</b></Typography>
            <hr style={{ background: "white", margin: "0px 30% 5% 30%" }}></hr>
            <div className='row portfolioList'>
                {sites.map((item) =>
                    <div key={item.id} className='col-lg-4 col-md-6 col-sm-12' >
                        <PortfolioCard data={item} />
                    </div>
                )}
            </div >
        </div>
    )
}

export default Portfolio