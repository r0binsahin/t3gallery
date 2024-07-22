import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

//makes deployed site dynamicaly refetch the new data information
export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={index} className="w-48">
          <img src={image.url} alt="image" />
          <p>{image.id}</p>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div>Please sign in!</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
