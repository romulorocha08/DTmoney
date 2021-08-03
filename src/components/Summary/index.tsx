import entradasimg from '../../assets/entradas.svg'
import saidasimg from '../../assets/saídas.svg'
import totalimg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary () {
  return (
    <Container>
     <div>
       <header>
         <p>Entradas</p>
         <img src={entradasimg} alt="Entradas" />
       </header>
       <strong>R$1000,00</strong>
     </div>
     <div>
       <header>
         <p>Saidas</p>
         <img src={saidasimg} alt="Saidas" />
       </header>
       <strong>-R$500,00</strong>
     </div>
     <div className="highlight-background">
       <header>
         <p>Total</p>
         <img src={totalimg} alt="Total" />
       </header>
       <strong>R$500,00</strong>

     </div>
    </Container>
  )
}