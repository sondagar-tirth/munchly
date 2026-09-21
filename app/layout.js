import "./globals.css";
import "animate.css";

import WowInit from "@/components/wow-init/WowInit";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <WowInit />

                {children}

            </body>
        </html>
    );
}