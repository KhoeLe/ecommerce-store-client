import Image from "next/image";

interface Props {
    data: Billboard | undefined;
}
function BillBoard({ data }: Props) {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
            <div className="relative">
                <Image
                    className="rounded-xl object-cover aspect-square md:aspect-[2.4/1] overflow-hidden"
                    width={1200}
                    height={900}
                    resource="responsive"
                    src={data?.imageUrl || ""}
                    alt="billBoard" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-center">
                        {data?.label}
                    </div>
                </div>

            </div>


        </div>
    );
}

export default BillBoard;

{/* <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs absolute mt-20">
                        {data?.label}
                    </div>
                </div> */}

{/* <div
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
                className="rounded-xl relative object-cover aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data?.label}
                    </div>
                </div>
            </div> */}
