import PostsCard from "./cards/PostsCard";
import Comment from "./forms/Comment";
import { user } from "../../constants";
import Wrapper from "./Wrapper";

export default function PostsInfo() {
  const data = {
    postedBy: {
      id: "abusiyama123",
      name: "Abusiyama",
      email: "abusiyamarg01@gmail.com",
      role: "",
      bio: "The real abusiyamarg",
      profilePic: "/logo.png",
      posts: [
        {
          id: "abusiyama123",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
          img: "/image-1.jpg",
        },
        {
          id: "abusiyama123",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
          img: "/ride.jpg",
        },
      ],
      communities: [
        {
          id: "backend123",
          img: "/background.jpg",
          title: "BACKEND COMMUNITY",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
          members: [
            { id: "auwalr123" },
            { id: "abusiyama123" },
            { id: "umar123" },
            { id: "abba123" },
          ],
          posts: [
            {
              postedBy: {
                id: "auwalr123",
                name: "Auwal",
                email: "auwalrg01@gmail.com",
                role: "",
                bio: "The real auwalrg",
                profilePic: "/about.jpg",
              },
              communityTitle: "BACKEND COMMUNITY",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
              img: "/background.jpg",
            },
          ],
        },
        {
          id: "WOMEN123",
          img: "/women.jpg",
          title: "WOMEN COMMUNITY",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
          members: [
            { id: "auwalr123" },
            { id: "abusiyama123" },
            { id: "umar123" },
            { id: "abba123" },
          ],
          posts: [
            {
              postedBy: {
                id: "auwalr123",
                name: "Auwal",
                email: "auwalrg01@gmail.com",
                role: "",
                bio: "The real auwalrg",
                profilePic: "/about.jpg",
              },
              communityTitle: "BACKEND COMMUNITY",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
              img: "/background.jpg",
            },
          ],
        },
      ],
      followers: [
        {
          id: "abba123",
          name: "Abba",
          email: "abbarg01@gmail.com",
          role: "",
          bio: "The real abbarg",
          profilePic: "/netflix.png",
        },
      ],
      following: [
        {
          id: "abba123",
          name: "Abba",
          email: "abbarg01@gmail.com",
          role: "",
          bio: "The real abbarg",
          profilePic: "/netflix.png",
        },
      ],
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
    img: "/image-1.jpg",
    createdAt: "fri, june, 7",
    id: "12345",
  };

  const community = {
    id: "backend123",
    img: "/background.jpg",
    title: "BACKEND COMMUNITY",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
    members: [
      { id: "auwalr123" },
      { id: "abusiyama123" },
      { id: "umar123" },
      { id: "abba123" },
    ],
    posts: [
      {
        postedBy: {
          id: "auwalr123",
          name: "Auwal",
          email: "auwalrg01@gmail.com",
          role: "",
          bio: "The real auwalrg",
          profilePic: "/about.jpg",
        },
        communityTitle: "BACKEND COMMUNITY",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur distinctio sit consectetur quisquam dolorem impedit similique veritatis eum cupiditate!",
        img: "/background.jpg",
      },
    ],
  };

  return (
    <Wrapper>
      <section className="relative">
        <h1 className="head-text text-light-1">Comment</h1>
        <div>
          <PostsCard
            id={data.id}
            content={data.text}
            author={data.postedBy}
            img={data.img}
            community={community}
            createdAt={data.createdAt}
          />
        </div>

        <div className="mt-7">
          <Comment postsId={data.id} currentUserImage={user.profilePic} />
        </div>
      </section>
    </Wrapper>
  );
}
