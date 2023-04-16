import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'
import {StickyDateHeader} from "./StickyDateHeader";
import {useNavigate}  from 'react-router-dom'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {EventInterface} from '../interface/EventInterface';

type EventCardProps = {
    event:EventInterface
    showStickyHeader: boolean
    addClickedEvent (event: any) : void;
}
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const useStyles = makeStyles({
    card: {
        maxWidth: 400, // set your max width here
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    stickyHeader: {
        position: 'sticky',
        top: 63,
    },
});
export const  EventCard = (props: EventCardProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddEvent = () => {
        console.log("Add Event")
        const anchor = document.querySelector('div')
        if(!anchor) {
            console.log("Error")
            return
        } else {
            props.addClickedEvent(props.event)

            const thisEvent = anchor.getElementsByClassName("Event: "+props.event._id)[0] // gets root div Element from EventCard
            const thisEventID = () => {
                console.log("Added Event"+thisEventID)
            }//thisEvent.getAttribute("id") //gets id from this Event
        }
    }
    const classes = useStyles();

    const dateObj = new Date(props.event.date)
    const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


    const handleLocationClick = (location: string) => {
        window.open(location, '_blank');
    };


    return (
        <div className={"Event: "+props.event._id} id={props.event._id} key={props.event._id}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<Typography variant="h6">
                            {props.event.title}
                            </Typography>}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.event.flyerFront || "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"}
                    alt="Event Flyer"
                />
                <CardContent >
                    <Typography variant="h6" color="text.secondary"  onClick={() => handleLocationClick(props.event.venue.direction)}>
                        {"Location: "+ props.event.city}<br /><br />
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="add">
                        {props.showStickyHeader ? <AddCircleIcon onClick={handleAddEvent}/> : <RemoveCircleOutlineIcon onClick={handleAddEvent} />}
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent >
                        <Typography variant="h6">Description:</Typography>
                        <Typography paragraph>
                            {props.event.pick ? props.event.pick.blurb : "None"}
                        </Typography>
                        <Typography variant="h5">Artists:</Typography>
                        <Typography paragraph >
                            {props.event.artists.map((artist:any) => (
                                <li>{artist.name}</li>
                            ))}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default EventCard