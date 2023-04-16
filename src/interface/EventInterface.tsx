export interface EventInterface {
    _id:string
    artists: Artist[]
    attending?:number
    city: string
    contentUrl:string
    country:string
    date:string
    endTime?:string
    flyerFront?:string
    private: boolean;
    startTime?:string
    title:string
    venue: Venue;
    __v:number
    pick?:Pick
}

interface Venue {
    contentUrl: string;
    direction: string;
    id: string;
    live: boolean;
    name: string;
}

interface Artist {
    id: string;
    name: string;
    _id: any; // Replace `any` with the type for `_id`, if known
}

interface Pick {
    blurb:string
    id:string
}