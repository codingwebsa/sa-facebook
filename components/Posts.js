import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
import { collection, orderBy } from "firebase/firestore";

function Posts({ posts }) {
  const [realtimePosts, loading, error] = useCollection(
    collection(db, "posts"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
    orderBy("timestamp", "desc")
  );
  error && console.log(error);
  loading && console.log("loading");

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
