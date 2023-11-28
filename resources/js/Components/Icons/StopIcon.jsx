export default function StopIcon({ color='#4B5563', width='22', height='18', className='' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 22 22"
            fill="none"
            className={`transition duration-200 ` + className}
        >
            <path
                d="M19.5312 0H2.34375C1.0498 0 0 1.0498 0 2.34375V19.5312C0 20.8252 1.0498 21.875 2.34375 21.875H19.5312C20.8252 21.875 21.875 20.8252 21.875 19.5312V2.34375C21.875 1.0498 20.8252 0 19.5312 0Z"
                fill={color}
            />
        </svg>
    );
}
