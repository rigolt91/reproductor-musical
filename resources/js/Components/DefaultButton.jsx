import { Button } from "@nextui-org/react";

export default function DefaultButton({ type="submit", className = '', color='default', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            type={type}
            color={color}
            disabled={disabled}
            radius="sm"
            className={`shadow-md hover:shadow-lg ` + className}
        >
            {children}
        </Button>
    );
}
