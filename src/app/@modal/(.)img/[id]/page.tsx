import { getImage } from "~/server/queries";
import Image from "next/image";
import { Modal } from "./modal";

type ParamsType = {
  params: {
    id: string;
  };
};

export default async function PhotoModal({
  params: { id: photoId },
}: ParamsType) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <Image alt={image.name} src={image.url} width={500} height={500} />
    </Modal>
  );
}
