import './MyLabel.css';

interface Props {
    /** 
     * text to display
    */
    label: string;

    /** 
     * label size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'text-primary' | 'text secondary' | 'text-terciary';
    fontColor?: string;
}

export const MyLabel = ({label, size, allCaps, color, fontColor}: Props) => {
    return (
        <span className={`${size} ${color}`} style={{color: fontColor}}>{allCaps ? label.toUpperCase() : label}</span>
    )
}
