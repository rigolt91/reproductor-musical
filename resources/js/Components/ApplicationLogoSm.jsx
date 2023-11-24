import { Image } from "@nextui-org/react";
import logo from '../../../public/img/sm_logo.png';

export default function ApplicationLogoSm(props) {
    return (
        <Image
            {...props}
            width={114}
            height={113}
            alt="BCLab"
            src={logo}
        />
    );
}
