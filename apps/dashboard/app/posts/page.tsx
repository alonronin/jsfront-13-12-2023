import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@jsfront/components';
import Link from 'next/link';

export default async function Page() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Posts
      </h1>

      <ul className="grid gap-4 grid-cols-3">
        {posts.map((post: { title: string; body: string; id: string }) => (
          <li key={post.id}>
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>{post.body}</CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`posts/${post.id}`}>
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
