import React from 'react';
import './TypeTag.css'
import { colorsDefault } from '../../data/pokemonColors';

type Props = {
    type: string;
}

export default function TypeTag (props: Props) {

    const style = {
        backgroundColor: colorsDefault[props.type as keyof typeof colorsDefault] || "#000",
    }

    return (
        <div className="Tag" style={style}>{props.type}</div>
    )
}