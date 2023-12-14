import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@jsfront/components';
import Link from 'next/link';
import { Heading } from '@jsfront/components';

export default async function Page() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return (
    <div className="flex flex-col gap-4">
      <Heading size="xl">Posts</Heading>

      <ul className="grid gap-4 grid-cols-3 place-items-stretch">
        {posts.map((post: { title: string; body: string; id: string }) => (
          <li key={post.id} className="flex">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">{post.body}</CardContent>
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
