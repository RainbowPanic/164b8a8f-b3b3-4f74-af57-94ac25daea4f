import * as React from 'react';
type SDHProps = {
    showDate: string
}
export const  StickyDateHeader = (props: SDHProps) => {

    return (
        <div>
            <p><h3>{props.showDate}</h3></p>
        </div>
    );
}