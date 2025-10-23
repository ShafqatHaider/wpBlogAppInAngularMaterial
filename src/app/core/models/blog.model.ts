export interface Blog{
    id: number;
    title:string;
    content: string;
    auther:string;
    date:string;
    imageUrl?:string;
    tags?:string[];
    published:boolean;
}