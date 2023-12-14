import { Heading } from '@jsfront/components';

export default async function Page({ params }: { params: { postId: string } }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((res) => res.json());
  return (
    <div className="flex flex-col gap-4">
      <Heading size="xl">{post.title}</Heading>

      <p>{post.body}</p>
    </div>
  );
}
