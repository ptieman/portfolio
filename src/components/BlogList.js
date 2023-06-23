import BlogItem from "./BlogItem";

export default function BlogList({ publications }) {
  let posts = publications?.data?.user?.publication?.posts || [];
  console.log(publications);
  console.log(posts);
  return (
    <div>
      <div>
        <h2>My Publications</h2>
      </div>
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index}>
              <BlogItem post={post} />
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
    // </div>
  );
}
