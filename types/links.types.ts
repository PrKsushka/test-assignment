export type Votes = {
    id: number;
    user: {
        id: number;
        name: string;
    }
}
export type Links = {
    id?: number;
    count?: number;
    description: string;
    url: string;
    postedBy?: {
        id: number;
        name: string;
    },
    votes?: Array<Votes>;
}
