import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
type SDHProps = {
    showDate: string
}

const useStyles = makeStyles({
    stickyHeader: {
        position: 'sticky',
        top: '1%',
        zIndex: 10,
        marginInline: '20%',
    },
});
export const  StickyDateHeader = (props: SDHProps) => {

    const classes = useStyles()
    return (
        <div className={classes.stickyHeader}>
            <h2>{props.showDate}</h2>
        </div>
    );
}