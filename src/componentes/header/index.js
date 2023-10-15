import Logo from '../../componentes/logo'
import Opcoes from '../../componentes/opcoesHeader'
import Icones from '../../componentes/iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <Opcoes/>
            <Icones/>
        </HeaderContainer>
    )
}
export default Header;