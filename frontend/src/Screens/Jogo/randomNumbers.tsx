export function getDanoAtaqueBasico(){
    return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
}
export function getDanoAtaqueEspecial(){
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}
export function getDanoAtaqueBasicoMonstro(){
    return Math.floor(Math.random() * (12 - 6 + 1)) + 6;
}
export function getDanoAtaqueEspecialMonstro(){
    return Math.floor(Math.random() * (16 - 8 + 1)) + 8;
}
export function getRandomCura(){
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5
}