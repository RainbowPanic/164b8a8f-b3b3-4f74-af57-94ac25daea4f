import * as React from 'react';
type SDHProps = {
    showDate: string
}
export const  StickyDateHeader = (props: SDHProps) => {

    return (
        <div>
            <p><h1>{props.showDate}</h1></p>
        </div>
    );
}