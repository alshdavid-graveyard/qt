import { BehaviorSubject } from "rxjs";

export class PostService {
    posts = new BehaviorSubject<string[]>([])
    title = 'Hello'
    
    add(title: string) {
        this.posts.next([ ...this.posts.value, title ])
    }
}