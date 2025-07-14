// src/components/Footer.tsx

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-gray-500 text-center p-6 border-t border-gray-800">
            <p>© {currentYear} Chloy Costa. Faith in God, fascination for galaxies.</p>
        </footer>
    )
}