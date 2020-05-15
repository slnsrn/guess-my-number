interface ButtonProps {
    label: string
    onClick:()=> void
    disabled?: boolean,
    mobileAlign?:'center'|'right'|'left'
}
export default function Button ({label, onClick, disabled=false, mobileAlign='right'}:ButtonProps) {

    return (
        <div className={`w-full mt-8 text-${mobileAlign} md:text-right`}>
             <button onClick={onClick} disabled={disabled} className="nes-btn">
                {label}
            </button>
        </div>)
}