import { Figure, ProgressBar } from 'react-bootstrap'

type PersonagemProps = {
    progressBarHeroi: string;
    imageSrc: string;
    widhtImage: number;
    heightImage: number;
    vida: number;
}

export function Personagem(props: PersonagemProps){
    return (
        <div>
            <ProgressBar variant={props.progressBarHeroi} min={0} max={100} now={props.vida} label={`${props.vida}%`} animated/>                               
            <Figure>
                <Figure.Image
                    width={props.widhtImage}
                    height={props.heightImage}
                    src={props.imageSrc}
                />
            </Figure>
        </div>
        
     
        

    )
}