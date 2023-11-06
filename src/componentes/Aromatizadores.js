/* eslint-disable react/jsx-pascal-case */
import Banner_prop from './Banner_prop'
import Oleo_prop from './Oleo_prop'
import Aro_ultr from '../img/aromatizadores/Mockup_Aromatizador_caixa_cinza.jpg'
import Aro_arv from '../img/aromatizadores/colar_difusor_pessoal_rvore_da_vida.jpg'
import Aro_dif from '../img/aromatizadores/Mockup_Difusor_de_Aromas_Caixa_cinza.jpg'
import Aro_mand from '../img/aromatizadores/colar_difusor_pessoal_mandala.jpg'
import Aro_cor from '../img/aromatizadores/aromatizador_pessoal_coracao_rosa_-_ceramica_-_phytoterapica.jpg'
import Aro_cald from '../img/aromatizadores/aromatizador_pessoal_caldeirao_azul_-_ceramica_-_phytoterapica.jpg'
import Aro_ultr2 from '../img/aromatizadores/aromatizador_ultrassonico.jpg'
import Aro_lotus from '../img/aromatizadores/colar_difusor_pessoal_flor_de_lotus.jpg'


import Styles from '../css/Oleo_essenciais.module.css'

function Aromatizadores(){
    return(
        
                <><Banner_prop
            nome_oleos='Aromatizadores'
            p_oleos='Uma das maneiras mais eficazes e simples para usufruir dos aromas e propriedades terapêuticas dos óleos essenciais.' />
                <main>
                    <div className={Styles.oleos}>
                        <Oleo_prop

                            img_oleo={Aro_ultr}
                            nome_oleo='Óleo Essencial De Lavanda (Gt. França) - 10ml'
                            preco_ant='R$41,00'
                            preco_novo='R$34,85'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 11,61 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Aro_arv}
                            nome_oleo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Aro_dif}
                            nome_oleo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                            preco_ant='R$52,00'
                            preco_novo='R$44,20'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 14,73 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Aro_mand}
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

                            img_oleo={Aro_cor}
                            nome_oleo='Óleo Essencial De Gerânio - 5ml'
                            preco_ant='R$48,00'
                            preco_novo='R$40,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 13,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Aro_cald}
                            nome_oleo='Óleo Essencial De Sâandalo - 5ml'
                            preco_ant='R$63,00'
                            preco_novo='R$53,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Aro_ultr2}
                            nome_oleo='Óleo Essencial De Copaíba - 10ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Aro_lotus}
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

export default Aromatizadores