import { Input } from '@nextui-org/react';

export default function TextInput({ label, type = 'text', className = '', isFocused = false, ...props }) {
    return (
        <div className="flex flex-col items-center w-full gap-2 text-gray-600">
            <Input
                {...props}
                type={type}
                label={label}
                radius='sm'
                className={className}
            />
        </div>
    );
}
