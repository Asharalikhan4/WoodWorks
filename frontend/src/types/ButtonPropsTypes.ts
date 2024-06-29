export default interface ButtonPropsTypes {
    buttonName: string;
    link?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}