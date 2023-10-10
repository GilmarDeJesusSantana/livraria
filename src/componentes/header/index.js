import Logo from '../../componentes/logo'
import Opcoes from '../../componentes/opcoesHeader'
import Icones from '../../componentes/iconesHeader'
import './estilo.css'

function Header(){
    return(
        <header className='App-header'>
        <Logo/>
        <Opcoes/>
        <Icones/>
      </header>
    )
}
export default Header;