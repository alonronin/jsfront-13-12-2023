import { Heading } from '@jsfront/components';

export default async function Index() {
  return (
    <div className="flex flex-col gap-4">
      <Heading size="xl">Overview</Heading>

      <p className="text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut
        commodi consectetur dolorem dolores, et fuga ipsum itaque laboriosam
        magnam minima modi odio omnis perferendis praesentium qui sit tempora
        voluptatibus.
      </p>
    </div>
  );
}
