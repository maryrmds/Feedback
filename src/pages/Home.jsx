import { CardContainer } from "./Home.styles";

import IconStarImg from "../assets/icon-star.svg"

export function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src="" alt="" />
      </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <botton>1</botton>
        <botton>2</botton>
        <botton>3</botton>
        <botton>4</botton>
        <botton>5</botton>
      </ButtonContainer>
      <button>Enviar</button>
    </CardContainer>
  )
}
