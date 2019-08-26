import { User } from './user';

export class Profile {
    public ID: number;
    public ProfileUser: User;
    public ProfileUserID: number;
    public Bio: string;
    public Followers: [User];
    public FollowersCount: number;
    public Following: [User];
    public FollowingCount: number;
    public BlockList: [User];
    public BlockCount: number;
    public isActive: boolean;
}
