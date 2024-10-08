import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title={Lang.get('strings.Log in')} />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className="mx-2">
                <div className="mt-4">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        label="Email"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        errorMessage={errors.email}
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        label="Password"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        errorMessage={errors.password}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            label={Lang.get('strings.Remember me')}
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                    </label>
                </div>

                <div className="flex items-center justify-end my-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {Lang.get('strings.Forgot your password?')}
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" isLoading={processing}>
                        {Lang.get('strings.Log in')}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
