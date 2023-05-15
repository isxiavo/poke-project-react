import './TypeTag.css'

export default function TypeTag (props) {

    const colors = {
        normal:'#a8a878',
        fire:'#f08030',
        water:'#6890f0',
        grass:'#78c850',
        electric:'#edc736',
        ice:'#98d8d8',
        fighting:'#c03028',
        poison:'#a040a0',
        ground:'#d7b969',
        flying:'#a890f0',
        psychic:'#f85888',
        bug:'#a8b820',
        rock:'#b59e3b',
        ghost:'#705898',
        dark:'#705848',
        dragon:'#7038f8',
        steel:'#b8b8d0',
        fairy:'#dfadb1'
    }

    const style = {
        backgroundColor: colors[props.type] || "#000",
    }

    return (
        <div className="Tag" style={style}>{props.type}</div>
    )
}