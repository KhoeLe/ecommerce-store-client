"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

import qs from "query-string";

interface Props {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

function Filter({ name, data, valueKey }: Props) {
    const searchParams = useSearchParams();

    const selectedValue = searchParams.get(valueKey);

    const router = useRouter();

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id,
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true }
        );

        router.push(url, { scroll: false });
    };

    return (
        <div className="mb-8">
            <h3>{name}</h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data?.map((filter) => (
                    <div className="flex items-center" key={filter.id}>
                        <Button
                            className={cn(
                                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300  ",
                                selectedValue === filter.id &&
                                    "bg-black text-white"
                            )}
                            onClick={() => onClick(filter.id)}>
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;
