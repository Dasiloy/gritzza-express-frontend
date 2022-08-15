export enum StoreStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IStore {
  owner: { username: string; active: boolean; _id: string };
  name: string;
  description: string;
  displayPic: string;
  status: StoreStatus;
  location: string;
  contact?: string;
  isPublic: boolean;
  likes: Array<string>;
  followers: Array<string>;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
