import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import {livros} from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: 
                    linear-gradient(
                                    90deg, 
                                    #002f52 35%, 
                                    #326589 165%);
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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    margin-bottom: 20px;
    cursor: pointer;
    p{
        width: 200px;
    }
    img{
        width: 200px;
    }
    &:hover{
        border: 1px solid white;
    }
`

function Pesquisa(){
    const[livrosPesquisados, setLivrosPesquisados] = useState([])
    return(
        <PesquisaContainer>
            <Titulo> Sabe por onde começar? </Titulo>
            <Subtitulo>Encontre seu livro na estante. </Subtitulo>
            <Input 
                placeholder="Busque um livro." 
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPequisa = livros.filter(
                        livro => livro.nome.includes(textoDigitado)
                    )
                    setLivrosPesquisados(resultadoPequisa)
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )

}

export default Pesquisa