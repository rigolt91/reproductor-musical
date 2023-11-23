import { Button } from "@nextui-org/react";

export default function PrimaryButton({ type="submit", className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            type={type}
            color="primary"
            disabled={disabled}
            radius="sm"
            className={`shadow-md hover:shadow-lg ` + className}
        >
            {children}
        </Button>
    );
}
