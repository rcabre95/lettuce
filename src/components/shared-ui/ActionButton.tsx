export default function ActionButton({ text, action, type, validation=false, width="w-56", height="h-10", extraStyles }: 
    { text: string,
    action?: () => void,
    type: "button" | "submit" | "reset" | undefined,
    validation?: boolean,
    extraStyles?: string,
    width?: string,
    height?: string}) {

    return (
        <button className={`${width} ${height} disabled:bg-slate-400 disabled:hover:bg-slate-400 disabled:hover:text-lettuce-cream hover:bg-lettuce-cream hover:text-lettuce-blue hover:border disabled:hover:border-0 border-lettuce-blue transition-colors duration-150 text-center bg-lettuce-blue text-lettuce-cream ${extraStyles}`} onClick={action ? action : () => {console.log("")}} type={type} disabled={validation}>
            {text}
        </button>
    )
}
