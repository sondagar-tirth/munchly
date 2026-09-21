import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import AuthGuard from "@/components/auth-guard/AuthGuard";

export default function MainLayout({ children }) {
    return (
        <AuthGuard>

            <Navbar />

            {children}

            <Footer />

            <BackToTop />

        </AuthGuard>
    );
}