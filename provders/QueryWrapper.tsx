"use client";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToastProvider from "./ToastProvider";

interface Props {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

function QueryWrapper({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastProvider />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default QueryWrapper;
