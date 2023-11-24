import { Button, Card, CardBody } from "@nextui-org/react";

export default function CardLista({ title='', description='', handleClick }) {
    return (
        <Card radius="sm" shadow="sm">
            <div className="bg-gray-200 w-full h-64 rounded-t-lg">

            </div>
            <CardBody className="bg-primary">
                <div className="flex justify-between">
                    <div className="full">
                        <h4 className="text-lg font-bold text-white">{title}</h4>
                        <p className="text-base text-white">{description}</p>
                    </div>

                    <Button
                        isIconOnly
                        color="success"
                        radius="full"
                        size="lg"
                        className="h-16 w-16 border-2"
                        onClick={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                            <path d="M20.7227 10.4818L3.53516 0.3207C2.13867 -0.504495 0 0.296286 0 2.3373V22.6547C0 24.4857 1.9873 25.5893 3.53516 24.6713L20.7227 14.515C22.2559 13.6117 22.2607 11.3852 20.7227 10.4818Z" fill="white"/>
                        </svg>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}
