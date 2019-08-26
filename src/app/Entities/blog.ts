import { User } from './user';

export class Blog {
    public ID: number;
    public UserID: number;
    public User: User;
    public Date: Date;
    public Subject: string;
    public MessageBody: string;
    public isActive: boolean;
    public Likes: number;
    public UserLikes : [User];

    constructor(){
        
    }
}

