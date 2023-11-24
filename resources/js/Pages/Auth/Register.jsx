import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        label="Name"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        errorMessage={errors.name}
                        required
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        errorMessage={errors.email}
                        required
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        errorMessage={errors.password}
                        required
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        label="Confirm Password"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        errorMessage={errors.password_confirmation}
                        required
                    />
                </div>

                <div className="flex items-center justify-end my-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" isDisabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
