import { Image } from "@nextui-org/react";
import logo from '../../../public/img/logo.png';

export default function ApplicationLogo(props) {
    return (
        <Image
            {...props}
            width={149}
            height={53}
            alt="BCLab"
            src={logo}
        />
    );
}
