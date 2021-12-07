import { Button } from 'react-bootstrap';

type ButtonProps = {
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
    image?: string;
    variant?: string;
}

export function ButtonCustom(props: ButtonProps){
    
    return (
        <div className="d-grid gap-2">
        <Button
        variant={props.variant}
        size="sm"
        onClick= {props.onClick}
        disabled={props.disabled}>
            {props.text ?? <img src={props.image} style={{width:"", height:"50%"}} alt="img"/>}
        </Button>
        </div>

    )
}