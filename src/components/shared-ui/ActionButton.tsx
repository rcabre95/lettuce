export default function ActionButton({ text, action, type, validation=false, extraStyles }: 
    { text: string,
    action?: () => void,
    type: "button" | "submit" | "reset" | undefined,
    validation?: boolean,
    extraStyles?: string}) {

    return (
        <button className={`w-56 h-10 text-center bg-lettuce-blue text-lettuce-cream text-sm ${extraStyles}`} onClick={action ? action : () => {console.log("")}} type={type} disabled={validation}>
            {text}
        </button>
    )
}
