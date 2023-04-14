import * as React from 'react';
type SDHProps = {
    showDate: string
}
export const  StickyDateHeader = (props: SDHProps) => {

    return (
        <div>
            <p><h2>{props.showDate}</h2></p>
        </div>
    );
}