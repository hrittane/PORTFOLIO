'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider } from 'next-themes'

type Props = {
    children: React.ReactNode;
};


export function Providers({ children }: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange >
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )

}