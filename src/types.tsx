export type User = {
    id: number;
    name: string;
    avatar: string;
    details?: UserDetails;
}

export type UserDetails = {
    city: string
    company: string;
    position: string
}

export type UserListItem = {
    id: number;
    name: string;
  };