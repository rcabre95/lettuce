export default function ActionButton({ text, action }: 
    { text: string,
    action: () => void }) {

    return (
        <button className={``} onClick={action} type="button">
            {text}
        </button>
    )
}
