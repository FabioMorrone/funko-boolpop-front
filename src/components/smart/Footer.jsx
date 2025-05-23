
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-5 px-3">
                <div className="container d-flex justify-content-between align-items-start flex-wrap">

                    {/* Brand a sinistra */}
                    <div className="mb-4 mb-md-0" style={{ minWidth: '250px' }}>
                        <h2 className="fw-bold mb-3">Funko Boolpop</h2>
                        <p className="text-secondary">
                            Il tuo punto di riferimento per i Funko Pop! più rari e iconici. Scopri collezioni esclusive ogni settimana!
                        </p>
                    </div>

                    {/* Scopri & Supporto a destra */}
                    <div className="d-flex gap-5" style={{ minWidth: '300px' }}>
                        {/* Scopri */}
                        <div>
                            <h5 className="fw-semibold mb-3">Scopri</h5>
                            <ul className="list-unstyled text-secondary">
                                <li><a href="#" className="text-decoration-none text-secondary">Nuovi arrivi</a></li>
                                <li><a href="#" className="text-decoration-none text-secondary">Esclusive</a></li>
                                <li><a href="#" className="text-decoration-none text-secondary">Preordini</a></li>
                                <li><a href="#" className="text-decoration-none text-secondary">Offerte</a></li>
                            </ul>
                        </div>

                        {/* Supporto */}
                        <div>
                            <h5 className="fw-semibold mb-3">Supporto</h5>
                            <ul className="list-unstyled text-secondary">
                                <li><a href="#" className="text-decoration-none text-secondary">Contattaci</a></li>
                                <li><a href="#" className="text-decoration-none text-secondary">Spedizioni</a></li>
                                <li><a href="#" className="text-decoration-none text-secondary">Resi e Rimborsi</a></li>
                                <li><a href="#" className="text-decoration-none text-secondary">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Footer base centrato */}
                <div className="border-top border-secondary pt-3 text-secondary small text-center">
                    © 2025 Funko Boolpop – Tutti i diritti riservati.
                </div>
            </footer>
        </>
    );
}
