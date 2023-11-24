import { Button } from "@nextui-org/react";

export default function DangerButton({ type='button', className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            type={type}
            color="danger"
            disabled={disabled}
            className={`shadow-md hover:shadow-lg ` + className}
            radius="sm"
        >
            {children}
        </Button>
    );
}
