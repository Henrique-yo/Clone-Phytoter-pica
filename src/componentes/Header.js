import Styles from '../css/Header.module.css';
import Logo from '../img/logo.webp';
import { BsTruck } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <section className={Styles.frete}>
                <BsTruck/>
                <h4>Com mais R$ 200,00 o frete é por nossa conta!</h4>
            </section>
            <section className={Styles.cont_header}>
                <Link to='/'>
                    <img src={Logo} alt='Logo phytoterápica' /> 
                </Link>
             
             <div className={Styles.infos}>
                <input type='text' placeholder='O que você precisa?'/>
                <p>-5 NA PRIMEIRA COMPRA <AiOutlinePercentage/></p> 
                <GoPerson/>
                <GrCart/>

             </div>
            </section>
            
            <nav className={Styles.menu}>
                <ul>
                    <li><Link to='/Oleos_ecenciais' className={Styles.link}>ÓLEOS ESSENCIAIS</Link></li>
                    <li><Link to='/Oleos_vegetais' className={Styles.link}>ÓLEOS VEGETAIS</Link></li>
                    <li><Link to='/Sinergias' className={Styles.link}>SINERGIAS</Link></li>
                    <li><Link to='/Cosmeticos_naturais' className={Styles.link}>COSMETICOS NATURAIS</Link></li>
                    <li><Link to='/Higiene_pessoal' className={Styles.link}>HIGIENE PESSOAL</Link></li>
                    <li><Link to='/Aromatizadores' className={Styles.link}>AROMATIZADORES</Link></li>
                    <li><Link to='' className={Styles.link}>ACESSÓRIOS</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header