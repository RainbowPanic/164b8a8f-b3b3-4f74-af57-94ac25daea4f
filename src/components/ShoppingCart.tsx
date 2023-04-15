import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import EventCard from './EventCard';
type SCProps = {
    addedEvents: any
}

export const ShoppingCart = (props: SCProps) => {
    console.log("IN SHOPPINGCART")
    console.log(props.addedEvents)
    return (
        <div>
            <h2>Shoppingcart</h2>
            <Box
                textAlign="center" display="flex" justifyContent="center" my={10}>
                <Grid container justifyContent="space-evenly" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {props.addedEvents.map((eventdata:any) => (
                        <Grid item xs={2} sm={4} md={4}><EventCard event={eventdata} showStickyHeader={false} addClickedEvent={props.addedEvents}/></Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}