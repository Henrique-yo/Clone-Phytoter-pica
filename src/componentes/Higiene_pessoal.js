/* eslint-disable react/jsx-pascal-case */
import Banner_prop from './Banner_prop'
import Oleo_prop from './Oleo_prop'
import sab_lav from '../img/pessoal/sabonete_lavanda_e_rosa_mosqueta_100g_-_phytoterapica_1_.jpg'
import sab_mel from '../img/pessoal/sabonete_melaleuca_gergelim_conj2.jpg'
import sab_yla from '../img/pessoal/Mockup_Sabonete_Caixa_Ylang_Ylang_cinza.jpg'
import sab_dent from '../img/pessoal/Mockup-Gel-Dental-Sangue-de-Dragao-Ecommerce.jpg'
import sab_lima from '../img/pessoal/Mockup_Sabonete_Caixa_Limao_Siciliano_cinza.jpg'
import sab_kit from '../img/pessoal/Kit_Miniaturas_Sabonetes_1000x1000px_Cinza.jpg'
import sab_ment from '../img/pessoal/sabonete_menta_e_germe_de_trigo_100g_-_phytoterapica_1_.jpg'
import sab_lemo from '../img/pessoal/sabonete-lemongrass-abacate_100g_phytoterapica_b.jpg'

import Styles from '../css/Oleo_essenciais.module.css'

function Higiene_pessoal(){
    return(
        
            <><Banner_prop
                nome_oleos='Higiene Pessoal'
                p_oleos='Linha de produtos com óleos essenciais: Sabonetes com óleos vegetais, creme dental adulto, gel dental infantil e enxaguante bucal com extratos naturais.' />
                <main>
                    <div className={Styles.oleos}>
                        <Oleo_prop

                            img_oleo={sab_lav}
                            nome_oleo='Sabonete de Lavanda & Rosa Mosqueta - 100g'
                            preco_ant='R$21,00'
                            preco_novo='R$17,85'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 5,61 sem juros)'
                        />
                        <Oleo_prop

                            img_oleo={sab_mel}
                            nome_oleo='Sabonete de Melaleuca & Gergelim - 100g'
                            preco_ant='R$21,00'
                            preco_novo='R$17,00'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 5,00 sem juros)'
                        />
                        <Oleo_prop

                            img_oleo={sab_yla}
                            nome_oleo='Sabonete Esfoliante Ylang Ylang & Coco - 100g'
                            preco_ant='R$21,00'
                            preco_novo='R$17,20'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 5,73 sem juros)'
                        />
                        <Oleo_prop

                            img_oleo={sab_dent}
                            nome_oleo='Gel Dental Sangue de Dragão - 90g'
                            preco_ant='R$30,00'
                            preco_novo='R$25,00'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 8,16 sem juros)
    '
                        />
                    </div>
                    <div className={Styles.oleos}>
                        <Oleo_prop

                            img_oleo={sab_lima}
                            nome_oleo='Sabonete de Limão-Siciliano & Semente de Uva - 100g'
                            preco_ant='R$21,00'
                            preco_novo='R$17,00'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 5,00 sem juros)'
                        />
                        <Oleo_prop

                            img_oleo={sab_kit}
                            nome_oleo='Kit Miniaturas Sabonetes Vegetais'
                            preco_ant='R$52,00'
                            preco_novo='R$44,00'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 14,00 sem juros)'
                        />
                        <Oleo_prop

                            img_oleo={sab_ment}
                            nome_oleo='Sabonete de Menta & Germe de Trigo - 100g'
                            preco_ant='R$21,00'
                            preco_novo='R$17,00'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 5,00 sem juros)'
                        />
                        <Oleo_prop

                            img_oleo={sab_lemo}
                            nome_oleo='Sabonete de Lemongrass & Abacate - 100g'
                            preco_ant='R$21,00'
                            preco_novo='R$17,00'
                            desc_prec='-15'
                            parc_oleo='(ou em até 3 x de R$ 5,00 sem juros)'
                        />
                    </div>
                    
                </main>


            
        </>
        
    )
}

export default Higiene_pessoal