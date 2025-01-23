export default function TabButton({children,handleClick , isSelected}) {
    // function handleClick() {
    //     console.log(`Button clicked: ${children}`);
    // }
    return (
        <li>
            <button className={isSelected ? "active" : null} onClick={handleClick} >
                {children}
            </button>
        </li>
    );
}