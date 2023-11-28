import { Input } from '@nextui-org/react';

export default function FileInput({ label, type = 'text', className = '', icon='', name='file_upload', description='', isFocused = false, errorMessage, ...props }) {
    return (
        <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg bg-gray-100 border-gray-900/25 px-6 py-10">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        {icon}
                    </div>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label htmlFor={name} className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Cargue el archivo</span>
                            <input
                                id={name}
                                name={name}
                                type="file"
                                className="sr-only"
                                {...props}
                            />
                        </label>
                        <p className="pl-1">o arrástrelo y suéltelo</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">{description}</p>
                </div>
            </div>
            {errorMessage && <div className="text-xs text-danger">{errorMessage}</div>}
        </div>
    );
}
