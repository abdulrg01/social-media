import PostsCard from "../component/cards/PostsCard";
import { data, user } from "../../constants";

export default function Home() {
  const followingPosts = data.filter((post) =>
    user.following.map((follow) => follow.id === post.postedBy.id)
  );

  return (
    <>
      <section className="flex flex-col gap-5">
        {data && data.length === 0 ? (
          <p className="no-result">No Threads found</p>
        ) : (
          <>
            {data &&
              data.map((post) => (
                <PostsCard
                  key={post.id}
                  id={post.id}
                  content={post.text}
                  img={post.img}
                  author={post.postedBy}
                  createdAt={post.createdAt}
                  followingPosts={followingPosts}
                  isComment={false}
                />
              ))}
          </>
        )}
      </section>
    </>
  );
}
