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
    backgroundColor?: string;
}

export const MyLabel = ({label, size, allCaps, color, fontColor, backgroundColor = 'transparent'}: Props) => {
    return (
        <span className={`${size} ${color}`} style={{color: fontColor, backgroundColor}}>{allCaps ? label.toUpperCase() : label}</span>
    )
}
