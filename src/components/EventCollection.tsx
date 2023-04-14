import {useEffect, useState} from "react";
import {EventCard} from "./EventCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core/styles';
export const EventCollection = () => {
    interface EventInterdace {
        date: Date;
        // other properties
    }
    const [events, setEvents] = useState<any[]>([])
    const [error, setError] = useState([])

    useEffect(() => {
        fetch('https://teclead-ventures.github.io/data/london-events.json')
            .then(response => response.json())
            .then(res => setEvents(res))
            .catch(err => setError(err))
    }, [])

    const lastDate = events.reduce((acc, event) => {
        if (!acc || Date.parse(event.date) < acc) {
            return Date.parse(event.date);
        }
        return acc;
    }, null);

    return (
        <div>
            <h1>Events App</h1>
            <Box
            textAlign="center" display="flex" justifyContent="center" my={10}>
                <Grid container justifyContent="space-evenly" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).map((eventdata) => (
                        <Grid item xs={2} sm={4} md={4}><EventCard event={eventdata} showStickyHeader={true}/></Grid>
                    ))}
                </Grid>
        </Box>
        </div>

    )
};



