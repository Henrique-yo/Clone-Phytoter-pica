/* eslint-disable react/jsx-pascal-case */
import Banner_prop from './Banner_prop'
import Oleo_prop from './Oleo_prop'
import Oleo_lav from '../img/essenciais/oleo-essencial-lavanda.jpg'
import Oleo_ale from '../img/essenciais/oleo-essencial-alecrim.jpg'
import Oleo_Hort from '../img/essenciais/oleo-essencial-hortela-pimenta.jpg'
import Oleo_mela from '../img/essenciais/oleo-essencial-melaleuca-tea-tree.jpg'
import Oleo_gera from '../img/essenciais/oleo-essencial-geranio.jpg'
import Oleo_sanda from '../img/essenciais/oleo-essencial-sandalo.jpg'
import Oleo_copa from '../img/essenciais/_leo_essencial_de_copa_ba.jpg'
import Oleo_euca from '../img/essenciais/oleo-essencial-eucalipto-globulus.jpg'
import Styles from '../css/Oleo_essenciais.module.css'

function Oleos_essenciais(){
    return(
        
                <><Banner_prop
            nome_oleos='Óleos Essenciais'
            p_oleos='Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.' />
                <main>
                    <div className={Styles.oleos}>
                        <Oleo_prop

                            img_oleo={Oleo_lav}
                            nome_oleo='Óleo Essencial De Lavanda (Gt. França) - 10ml'
                            preco_ant='R$41,00'
                            preco_novo='R$34,85'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 11,61 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Oleo_ale}
                            nome_oleo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Oleo_Hort}
                            nome_oleo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                            preco_ant='R$52,00'
                            preco_novo='R$44,20'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 14,73 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Oleo_mela}
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

                            img_oleo={Oleo_gera}
                            nome_oleo='Óleo Essencial De Gerânio - 5ml'
                            preco_ant='R$48,00'
                            preco_novo='R$40,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 13,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Oleo_sanda}
                            nome_oleo='Óleo Essencial De Sâandalo - 5ml'
                            preco_ant='R$63,00'
                            preco_novo='R$53,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Oleo_copa}
                            nome_oleo='Óleo Essencial De Copaíba - 10ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Oleo_euca}
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

export default Oleos_essenciais