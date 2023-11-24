import { Checkbox as Check } from "@nextui-org/react";

export default function Checkbox({ label, ...props }) {
    return (
        <Check
            {...props}
            radius='sm'
            size="lg"
        >
            <span className="ms-2 text-sm text-gray-600">{label}</span>
        </Check>
    );
}
