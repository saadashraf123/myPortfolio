import React from "react";
import { Grid, ListItem, Typography, Box, TextField, Button } from '@mui/material'

const Contact = () => {
    const typographyStyles = {
        color: "#ffff",
        opacity: "0.8",
        marginBottom: "10px",
        fontFamily: "Poppins",
        letterSpacing: "2px",
        alignText: "center",
    }
    const textFieldStyles = {
        '& .MuiTextField-root': { m: 2, width: '100%', maxWidth: "100%", backgroundColor: "#5d5d5d", borderRadius: "3%", outline: "none", fontFamily: "Poppins", margin: "2% 0" },
        "& label, label.Mui-focused": {
            color: "#bac964",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#bac964"
            },
            '&:hover fieldset': {
                borderColor: '#bac964',
            },
        },
    }
    const btnStyles = {
        margin: "15px 3% 0px 3%",
        padding: "10px 20px",
        color: "white",
        backgroundColor: "#bac964",
        borderRadius: "25px",
        '&:hover': {
            backgroundColor: "white",
            color: "#bac964",
        },
    }
    const contactDetails = {
        display: "block",
        lineHeight: "8.5",
        margin: "10px 20px",
    }

    return (
        <div id="contact" className="contact">
            <Typography align='center' sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1" }]} variant='h5'>Get<b className='bold'>In Touch</b></Typography>
            <hr style={{ background: "white", margin: "0px 40% 5% 40%" }}></hr>
            <Grid container spacing={2} columns={10}>
                <Grid item md={5} xs={10} sx={{ justifyContent: "center" }}>
                    <Typography sx={[typographyStyles, { opacity: "1" }]} variant='h5'>Send us Message</Typography>
                    <Box
                        component="form"
                        sx={textFieldStyles}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                label="Your Name"
                            />
                            <TextField
                                required
                                label="Your Email"
                            />
                            <TextField
                                required
                                label="Your Phone"
                            />
                            <TextField
                                required
                                label="Your Message"
                                multiline
                                rows={4}
                            />
                        </div>
                        <Button sx={btnStyles}>Send Message</Button>
                    </Box>
                </Grid>
                <span id="divider"></span>
                <Grid item md={4} xs={10}>
                    <Typography sx={[typographyStyles, { opacity: "1", marginLeft: "5%" }]} variant='h5'>Contact Details</Typography>
                    <ListItem style={contactDetails}>
                        <Typography sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1", color: "#bac964" }]} variant='subtitle2'>Email</Typography>
                        <Typography sx={typographyStyles} variant='subtitle2'>saadjewani888@gmail.com</Typography>
                    </ListItem>
                    <ListItem style={contactDetails}>
                        <Typography sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1", color: "#bac964" }]} variant='subtitle2'>Phone</Typography>
                        <Typography sx={typographyStyles} variant='subtitle2'>+92 336 3448425</Typography>
                    </ListItem>
                    <ListItem style={contactDetails}>
                        <Typography sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1", color: "#bac964" }]} variant='subtitle2'>Fax</Typography>
                        <Typography sx={typographyStyles} variant='subtitle2'>+(336) 3448425</Typography>
                    </ListItem>
                    <ListItem style={contactDetails}>
                        <Typography sx={[typographyStyles, { fontFamily: "Poppins", opacity: "1", color: "#bac964" }]} variant='subtitle2'>Address</Typography>
                        <Typography sx={typographyStyles} variant='subtitle2'>Block 4, Works Cooperative Housing Society, Gulistan-e-johar, Karachi.</Typography>
                    </ListItem>
                </Grid>
            </Grid >
        </div>
    );
};


export default Contact
