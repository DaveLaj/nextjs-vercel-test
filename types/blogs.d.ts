export interface Blog {
    id: number;
    cover_image: string; // img src target
    published_at: string;
    public_reactions_count: number;
    comments_count: number;
    url: string;
    title: string;
    reading_time_minutes: string;
    description: string;
}
