import { Button } from "@nextui-org/react"

export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            type={type}
            color="default"
            disabled={disabled}
            radius="sm"
            className={`shadow-md hover:shadow-lg ` + className}
        >
            {children}
        </Button>
    );
}
