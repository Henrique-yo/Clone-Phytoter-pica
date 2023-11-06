/* eslint-disable react/jsx-pascal-case */
import Banner_prop from './Banner_prop'
import Oleo_prop from './Oleo_prop'
import Comp_harm from '../img/sinergias/composto-essencial-harmonize-rollon.jpg'
import Comp_equi from '../img/sinergias/composto-essencial-equilibrium.jpg'
import Comp_citr from '../img/sinergias/composto-essencial-citrinos.jpg'
import Comp_defe from '../img/sinergias/mockup_Defense_com_caixa.jpg'
import Comp_insp from '../img/sinergias/composto-essencial-inspire.jpg'
import Comp_dosh from '../img/sinergias/E-commerce_Mockups.jpg'
import Comp_pitta from '../img/sinergias/E-commerce_Mockups3.jpg'
import Comp_dosha from '../img/sinergias/E-commerce_Mockups2.jpg'


import Styles from '../css/Oleo_essenciais.module.css'

function Sinergias(){
    return(
        
                <><Banner_prop
            nome_oleos='Sinergias'
            p_oleos='Sinergia é a mistura dos óleos essenciais, um processo criativo que tem como objetivo combinar suas propriedades e componentes. Juntos esses componentes trabalham em equilíbrio e harmonia, intensificando o efeito desejado dessa mistura e potencializando os princípios ativos de cada óleo essencial.' />
                <main>
                    <div className={Styles.oleos}>
                        <Oleo_prop

                            img_oleo={Comp_harm}
                            nome_oleo='Composto Essencial Harmonize Roll-On - 10ml'
                            preco_ant='R$54,00'
                            preco_novo='R$45,85'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 15,61 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Comp_equi}
                            nome_oleo='Composto Essencial Equilibrium - 15ml'
                            preco_ant='R$60,00'
                            preco_novo='R$51,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 17,00 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Comp_citr}
                            nome_oleo='Composto Essencial Citrinos - 15ml'
                            preco_ant='R$52,00'
                            preco_novo='R$44,20'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 14,73 sem juros)' 
                        />
                        <Oleo_prop

                            img_oleo={Comp_defe}
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

                            img_oleo={Comp_insp}
                            nome_oleo='Composto Essencial Inspire Enfance - 15ml'
                            preco_ant='R$68,00'
                            preco_novo='R$57,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 19,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Comp_dosh}
                            nome_oleo='Óleo de Massagem Para Dosha Vata - 100 ml'
                            preco_ant='R$70,00'
                            preco_novo='R$59,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 19,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Comp_harm}
                            nome_oleo='Composto Essencial Harmonize - 15ml'
                            preco_ant='R$64,00'
                            preco_novo='R$54,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 18,00 sem juros)' 
                            />
                            <Oleo_prop

                            img_oleo={Comp_pitta}
                            nome_oleo='Óleo de Massagem Para Dosha Pitta - 100 ml'
                            preco_ant='R$70,00'
                            preco_novo='R$59,00'
                            desc_prec= '-15'
                            parc_oleo='(ou em até 3 x de R$ 19,00 sem juros)' 
                            />
                    </div>
                    
                </main>


            
        </>
        
    )
}

export default Sinergias