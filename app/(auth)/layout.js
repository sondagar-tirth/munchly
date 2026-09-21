import GuestGuard from "@/components/guest-guard/GuestGuard";

export default function AuthLayout({ children }) {
    return (
        <GuestGuard>
            {children}
        </GuestGuard>
    );
}