import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface Props {
    image: Image;
}

function GalleryTab({ image }: Props) {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white ">
            {({ selected }) => (
                <>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                            src={image.url}
                            alt={image.id}
                            width={500}
                            height={500}
                            quality={40}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className="object-cover object-center"
                        />
                    </span>
                    <span
                        className={cn(
                            "absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected ? "ring-indigo-300" : "ring-transparent"
                        )}></span>
                </>
            )}
        </Tab>
    );
}

export default GalleryTab;
