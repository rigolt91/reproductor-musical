import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title={Lang.get('strings.Forgot Password')} />

            <div className="mb-4 text-sm text-gray-600">
                {Lang.get('strings.Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.')}
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                    errorMessage={errors.email}
                />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" isDisabled={processing}>
                        {Lang.get('strings.Email Password Reset Link')}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
