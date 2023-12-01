import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title={Lang.get('strings.Confirm Password')} />

            <div className="mb-4 text-sm text-gray-600">
                {Lang.get('strings.This is a secure area of the application. Please confirm your password before continuing.')}
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        value={data.password}
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                        errorMessage={errors.password}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" isDisabled={processing}>
                        {Lang.get('strings.Confirm')}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
