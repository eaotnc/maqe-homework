export type User = {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "Jason Bourne",
    role: "Registered user",
    place: "New York",
    avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Michael De Santa",
    role: "Moderator",
    place: "Los Santos",
    avatar_url: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Peter Parker",
    role: "Moderator",
    place: "New York",
    avatar_url: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Harry Potter",
    role: "Admin",
    place: "Hogwarts",
    avatar_url: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Boromir",
    role: "Registered user",
    place: "Gondor",
    avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Bruce Wayne",
    role: "Sponsor",
    place: "Gotham City",
    avatar_url: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];
