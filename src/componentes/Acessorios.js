/* eslint-disable react/jsx-pascal-case */
import Banner_prop from './Banner_prop'
import Oleo_prop from './Oleo_prop'
import Oleo_cami from '../img/vegetais/extrato_oleoso_de_camomila_alem.jpg'
import Oleo_uva from '../img/vegetais/oleo-vegetal-semente-de-uva.jpg'
import Oleo_abaca from '../img/vegetais/Mockup_Cartucho_OV_Abacate_cinz.jpg'
import Oleo_jojo from '../img/vegetais/_leo_vegetal_de_jojoba.jpg'
import Oleo_uva2 from '../img/vegetais/semente-uva-2.jpg'
import Oleo_cale from '../img/vegetais/oleo-essencial-calendula-50ml-phytoterapica-cartucho-1000x1000.webp'
import Oleo_balsa from '../img/vegetais/Mockup_Caixa_OV_Copaiba.jpg'

import Styles from '../css/Oleo_essenciais.module.css'

function Acessorios(){
    return(
        
                <><Banner_prop
            nome_oleos='Óleos Vegetais'
            p_oleos='Óleos vegetais são gorduras extraídas de grãos, sementes e polpas de frutos. São formados por ácidos graxos a maior parte insaturados, que são os ômega 3, 6 e 9 e vitaminas A, D e E, dentre outras substâncias.' />
                <main>
                    <div className={Styles.oleos}>
                        <Oleo_prop

                            img_oleo={Oleo_cami}
                            nome_oleo='Óleo Essencial De Lavanda (Gt. França) - 10ml'
                            preco_ant='R$41,00'
                            preco_novo='R$34,85'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 11,61 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Oleo_uva}
                            nome_oleo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Oleo_abaca}
                            nome_oleo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                            preco_ant='R$52,00'
                            preco_novo='R$44,20'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 14,73 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Oleo_jojo}
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

                            img_oleo={Oleo_uva2}
                            nome_oleo='Óleo Essencial De Gerânio - 5ml'
                            preco_ant='R$48,00'
                            preco_novo='R$40,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 13,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Oleo_abaca}
                            nome_oleo='Óleo Essencial De Sâandalo - 5ml'
                            preco_ant='R$63,00'
                            preco_novo='R$53,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Oleo_cale}
                            nome_oleo='Óleo Essencial De Copaíba - 10ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Oleo_balsa}
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