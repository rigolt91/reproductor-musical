import { Navbar } from "@nextui-org/react";

export default function Footer() {
    return (
        <Navbar className="bg-primary rounded-md shadow-sm flex flex-row" maxWidth="full" position="static">
            <p className="text-md text-white font-bold">
                Copyright © Edessi Argentina 2023
            </p>
            <p className="text-base text-white">
                Todos los derechos reservados.
            </p>
        </Navbar>
    );
}
