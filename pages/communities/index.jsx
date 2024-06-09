import CommunityNav from "../component/shared/CommunityNav";
import { data, user } from "../../constants";

export default function index({}) {
  const followingPosts = data.filter((post) =>
    user.following.map((follow) => follow.id === post.postedBy.id)
  );

  return (
    <>
      <CommunityNav
        dataInfo={user.communities}
        followingPosts={followingPosts}
      />
    </>
  );
}
