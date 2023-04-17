import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import EventCard from './EventCard';
import {EventInterface} from '../interface/EventInterface';
import { makeStyles } from '@material-ui/core/styles';

type SCProps = {
    addedEvents: EventInterface[] //Events die zum Cart hinzugefügt wurden
    removeClickedEvent:(event:EventInterface) => any //funktion zum entfernen der Events aus dem Cart
    searchText:string //inputText zum Filtern der Events
}
const useStyles = makeStyles({
    border: { // gibt Datum Header einen Rand damit man normal auf die Button klicken kann
        marginInline: '20%',
        zIndex:8,
    },
});
export const ShoppingCart = (props: SCProps) => {
    console.log("IN SHOPPINGCART")
    console.log(props.addedEvents)
    const classes = useStyles()
    const filteredEvents = props.addedEvents.filter(event => event.title.includes(props.searchText));

    return (
        <div className={classes.border}>
            <h2>Shoppingcart</h2>
            <Box
                textAlign="center" display="flex" justifyContent="center" my={10}>
                <Grid container justifyContent="space-evenly" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {props.addedEvents.map((eventdata:EventInterface) => (
                        <Grid item xs={2} sm={4} md={4}><EventCard event={eventdata} isAddEvent={false} handleClickedEvent={props.removeClickedEvent}/></Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}