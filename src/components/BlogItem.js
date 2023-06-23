export default function BlogItem({ post }) {
  const redirectToHashnode = () => {
    window.open("https://presleytieman.hashnode.dev/" + post.slug, "_blank");
  };
  console.log(post);
  const getDateAdded = () => {
    let d = new Date(post.dateAdded);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${mo} ${da}, ${ye}`;
  };

  const formattedDate = getDateAdded();

  return (
    <div onClick={redirectToHashnode}>
      <style jsx>{`
        .card {
          cursor: pointer;
        }
      `}</style>
      <img src={post.coverImage} className="img-fluid" />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <h6 >{formattedDate}</h6>
        <p className="card-text">{post.brief}</p>
      </div>
    </div>
  );
}
