export default function ActionButton({ text, action, type, validation=false, width="w-56", height="h-10", extraStyles }: 
    { text: string,
    action?: () => void,
    type: "button" | "submit" | "reset" | undefined,
    validation?: boolean,
    extraStyles?: string,
    width?: string,
    height?: string}) {

    return (
        <button className={`${width} ${height} text-center bg-lettuce-blue text-lettuce-cream ${extraStyles}`} onClick={action ? action : () => {console.log("")}} type={type} disabled={validation}>
            {text}
        </button>
    )
}
