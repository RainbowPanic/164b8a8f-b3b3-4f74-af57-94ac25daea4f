import {useEffect, useState} from "react";
import {EventCard} from "./EventCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
export const EventCollection = () => {

    const [events, setEvents] = useState<any[]>([])
    const [error, setError] = useState([])
    //const [error, setError] = useState([])

    useEffect(() => {
        fetch('https://teclead-ventures.github.io/data/london-events.json')
            .then(response => response.json())
            .then(res => setEvents(res))
            .catch(err => setError(err))
    }, [])
    /*const EVENTS = [
        fetch('https://teclead-ventures.github.io/data/london-events.json')
    ];*/

// maybe noch Box um alles um selben Astand zu gewährleisten
    return (
        <div>
            <Box
            textAlign="center" display="flex" justifyContent="center" my={10}>
                <Grid container justifyContent="space-evenly" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).map((eventdata) => (
                        <Grid item xs={2} sm={4} md={4}><EventCard event={eventdata} /></Grid>
                    ))}
                </Grid>
        </Box>
        </div>

    )
}

const generateRows = (allEvents:any[], steps:number, offset:number) => {
    const start = 0+offset;
    while (allEvents.length>start) {
        allEvents.splice(start+steps, 1)
    }
    console.log(allEvents)
    return allEvents;
};