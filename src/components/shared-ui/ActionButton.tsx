export default function ActionButton({ text, action, type, validation=false }: 
    { text: string,
    action?: () => void,
    type: "button" | "submit" | "reset" | undefined,
    validation?: boolean}) {

    return (
        <button className={`w-56 h-10 text-center bg-lettuce-blue text-lettuce-cream text-sm`} onClick={action ? action : () => {console.log("")}} type={type} disabled={validation}>
            {text}
        </button>
    )
}
