import BackToTop from "@/components/back-to-top/BackToTop";
import "./globals.css";
import "animate.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WowInit from "@/components/wow-init/WowInit";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <WowInit />
                {children}
                <Footer />
                <BackToTop />
            </body>
        </html>
    );
}