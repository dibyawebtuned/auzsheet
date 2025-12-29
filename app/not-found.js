import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-[6rem] font-extrabold text-gray-200 host-grotesk">
                404
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-600 mt-3 mb-8 max-w-md">
                Sorry, the page you are looking for does not exist or may have been moved.
            </p>

            <Link
                href="/"
                className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
