import { Injectable } from "@angular/core";
import { Blog } from "../models/blog.model";

@Injectable({providedIn:'root'})

export class BlogService{
    private storageKey ='blogs';

    getAll():Blog[]{
        return JSON.parse(localStorage.getItem(this.storageKey) ||'[]');
    }

    getById(id:number):Blog | undefined {
        return this.getAll().find(b=>b.id===id);
    }

    save(blog:Blog):void{
        const blogs = this.getAll();
        if(!blog.id){
            blog.id = new Date().getTime();
            blogs.push(blog)
        }else{
            const idx = blogs.findIndex(b=>b.id===blog.id);
            blogs[idx]=blog

        }

        localStorage.setItem(this.storageKey, JSON.stringify(blogs));

    }

    delete(id:number):void{
        const blogs = this.getAll().filter(b=>b.id!==id);
        localStorage.setItem(this.storageKey, JSON.stringify(blogs));
    }
}