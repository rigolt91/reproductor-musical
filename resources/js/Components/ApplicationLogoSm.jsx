import { Image } from "@nextui-org/react";
import logo from '../../../public/img/sm_logo.png';

export default function ApplicationLogoSm(props) {
    return (
        <Image
            {...props}
            width={149}
            height={43}
            alt="BCLab"
            src={logo}
        />
    );
}
