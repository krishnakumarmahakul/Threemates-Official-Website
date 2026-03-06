import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center px-6 pt-24">
            <div className="space-y-6 max-w-2xl mx-auto relative">
                <h1 className="text-[10rem] md:text-[16rem] font-heading font-bold leading-none tracking-tighter text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
                    404
                </h1>
                <h2 className="text-4xl md:text-6xl font-heading font-semibold tracking-tight text-white">
                    Page Not Found
                </h2>
                <p className="text-lg md:text-xl text-white/50 leading-relaxed mt-4">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/"
                        className="btn-primary text-lg"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
