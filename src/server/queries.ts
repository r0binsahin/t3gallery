import "server-only";
import { db } from "./db/index";
import { auth } from "@clerk/nextjs/server";

export const getMyImages = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unathorized");
  const images = await db.query.images.findMany({
    where: (image, { eq }) => eq(image.userId, user.userId),
    orderBy: (image, { desc }) => desc(image.id),
  });

  return images;
};
