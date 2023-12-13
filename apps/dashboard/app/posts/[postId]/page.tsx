export default async function Page({ params }: { params: { postId: string } }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((res) => res.json());
  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {post.title}
      </h1>

      <p>{post.body}</p>
    </div>
  );
}
