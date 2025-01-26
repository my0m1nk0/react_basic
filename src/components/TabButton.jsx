export default function TabButton({children,isSelected ,...props}) {
    // function handleClick() {
    //     console.log(`Button clicked: ${children}`);
    // }
    return (
        <li>
            <button className={isSelected ? "active" : null} {...props}>
                {children}
            </button>
        </li>
    );
}