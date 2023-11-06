/* eslint-disable react/jsx-pascal-case */
import Banner_prop from './Banner_prop'
import Oleo_prop from './Oleo_prop'
import Ace_nesc from '../img/acessorios/necessarie_lona_crua_1000x1000px_2.jpg'
import Ace_esta from '../img/acessorios/necessaire-porta-oleos-pequena-costela-de-adao-phytoterapica-01.jpg'
import Ace_sac from '../img/acessorios/image_1_.png'
import Ace_valv from '../img/acessorios/valvula-pump-embalagem-500ml-phytoterapica.jpg'
import Ace_presen from '../img/acessorios/Mockup_Caixa_Presente_Porta_OleosEssenciais_aberto_comOleos_cinza.jpg'
import Ace_amar from '../img/acessorios/sacola-phytoterapica-g.jpg'
import Ace_caix from '../img/acessorios/caixa-madeira-marchetaria-clara-20-divisorias-sem-alca-phytoterapica-1000x1000-cinza-A.jpg'
import Ace_caix2 from '../img/acessorios/caixa_de_madeira_escura.jpg'




import Styles from '../css/Oleo_essenciais.module.css'

function Acessorios(){
    return(
        
                <><Banner_prop
            nome_oleos='Acessórios'
            p_oleos='Material de apoio desenvolvido pra você que ama a Aromaterapia.' />
                <main>
                    <div className={Styles.oleos}>
                    <Oleo_prop

                        img_oleo={Ace_nesc}
                        nome_oleo='Óleo Essencial De Lavanda (Gt. França) - 10ml'
                        preco_ant='R$41,00'
                        preco_novo='R$34,85'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 11,61 sem juros)' 
                        />
                        <Oleo_prop

                        img_oleo={Ace_esta}
                        nome_oleo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                        preco_ant='R$60,00'
                        preco_novo='R$51,00'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                        img_oleo={Ace_sac}
                        nome_oleo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                        preco_ant='R$52,00'
                        preco_novo='R$44,20'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 14,73 sem juros)' 
                        />
                        <Oleo_prop

                        img_oleo={Ace_valv}
                        nome_oleo='Óleo Essencial de Melaleuca (Tea Tree) - 10mlv'
                        preco_ant='R$50,00'
                        preco_novo='R$42,00'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 14,16 sem juros)
                        ' 
                        />
                        </div>
                        <div className={Styles.oleos}>
                        <Oleo_prop

                        img_oleo={Ace_presen}
                        nome_oleo='Óleo Essencial De Gerânio - 5ml'
                        preco_ant='R$48,00'
                        preco_novo='R$40,00'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 13,00 sem juros)' 
                        />
                        <Oleo_prop

                        img_oleo={Ace_amar}
                        nome_oleo='Óleo Essencial De Sâandalo - 5ml'
                        preco_ant='R$63,00'
                        preco_novo='R$53,00'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                        img_oleo={Ace_caix}
                        nome_oleo='Óleo Essencial De Copaíba - 10ml'
                        preco_ant='R$60,00'
                        preco_novo='R$51,00'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                        img_oleo={Ace_caix2}
                        nome_oleo='Óleo Essencial de Eucalipto Globulus - 10ml'
                        preco_ant='R$60,00'
                        preco_novo='R$51,00'
                        desc_prec= '-15'
                        parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                    </div>
                    
                </main>


            
        </>
        
    )
}

export default Acessorios