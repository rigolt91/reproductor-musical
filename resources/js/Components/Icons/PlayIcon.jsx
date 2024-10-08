export default function PlayIcon({ color='#4B5563', width='22', height='18', className='' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 22 25"
            fill="none"
            className={`transition duration-200 ` + className}
        >
            <path
                d="M20.7227 10.4818L3.53516 0.3207C2.13867 -0.504495 0 0.296286 0 2.3373V22.6547C0 24.4857 1.9873 25.5893 3.53516 24.6713L20.7227 14.515C22.2559 13.6117 22.2607 11.3852 20.7227 10.4818Z"
                fill={color}
            />
        </svg>
    );
}
