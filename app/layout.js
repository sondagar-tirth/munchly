import "./globals.css";
import "animate.css";

import WowInit from "@/components/wow-init/WowInit";
import PageTitle from "@/components/page-title/PageTitle";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <WowInit />
                <PageTitle />

                {children}

            </body>
        </html>
    );
}