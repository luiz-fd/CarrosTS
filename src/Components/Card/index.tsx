import './styles.css'
import CarImg from '../../assets/car-card.png'
import Button from '../Button';

export default function Card(){
    return(
        <div className='ct-card'>
            <img src={CarImg} alt='Carro'></img>
            <h3>Aud Supra TT</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
            </p>
            <Button></Button>
        </div>
    );
}