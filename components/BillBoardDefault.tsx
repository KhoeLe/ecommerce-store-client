"use client";

import { useBillBoard } from "@/hooks";
import BillBoard from "./ui/billboard";
import Loading from "@/app/(routes)/loading";

function BillBoardDefault() {
    const { data, isFetching, isLoading } = useBillBoard(
        "0e12e5cf-29ab-4529-b8d5-c5371dae1f7b"
    );

    return (
        <>{!isFetching ? <BillBoard data={data} /> : <div><Loading /></div>  }</>
    );
}

export default BillBoardDefault;
