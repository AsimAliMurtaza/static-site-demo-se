import { getPostData } from "../lib/posts/parser";

export default function Home({ post }) {
  const { data, content } = post;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

// Fetch data server-side at build time
export async function getStaticProps() {
  const post = getPostData(); // Call the server-side function
  return {
    props: {
      post, // Pass the result as props
    },
  };
}
