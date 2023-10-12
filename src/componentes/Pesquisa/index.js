import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(
        90deg, 
        #002f52 35%,
        #326589 165%);
    )
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa(){
    const[textoDigitado, setTextoDigitado] = useState('')

    return(
        <PesquisaContainer>
            <Titulo> Sabe por onde começar? </Titulo>
            <Subtitulo>Encontre seu livro na estante. </Subtitulo>
            <Input placeholder="Busque um livro." onBlur={evento => setTextoDigitado(evento.target.value)}/>
            <Subtitulo>{textoDigitado}</Subtitulo>
        </PesquisaContainer>
    )

}

export default Pesquisa