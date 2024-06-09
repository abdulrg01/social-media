import { useRouter } from "next/router";
import PostsInfo from "../component/PostsInfo";

export default function index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <PostsInfo id={id} />
    </div>
  );
}
