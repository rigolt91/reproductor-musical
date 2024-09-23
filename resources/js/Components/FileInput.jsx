import { Input } from '@nextui-org/react';
import { useEffect } from 'react';

export default function FileInput({ label, type = 'text', className = '', icon='', name='file_upload', description='', files=[], isFocused = false, errorMessage, ...props }) {

    const Items = ({files}) => {
        let arrayFiles = []

        for(let i = 0; i < files.length; i++) {
            arrayFiles[i] = <div key={i} className="text-sm text-gray-600">{URL.createObjectURL(files[0])}</div>
        }

        return arrayFiles
    }

    return (
        <div className="col-span-full">
            <div className="flex justify-center px-6 py-10 mt-2 bg-gray-100 rounded-lg border-gray-900/25">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        {icon}
                    </div>
                    {files.length > 0
                        ? <Items files={files} />
                        : <>
                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                <label htmlFor={name} className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
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
                        </>
                    }

                </div>
            </div>
            {errorMessage && <div className="text-xs text-danger">{errorMessage}</div>}
        </div>
    );
}
