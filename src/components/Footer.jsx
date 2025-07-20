// Footer.js
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="p-10 bg-emerald-200 flex justify-center bg-indigo-900 text-white">
            <p className="font-bold text-white">
                ©Copyright {currentYear}. All rights are reserved by samtech solution service ent.
            </p>
        </section>
    );
}