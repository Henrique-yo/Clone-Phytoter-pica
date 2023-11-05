import Styles from '../css/Oleo.module.css'


function Oleo_prop ({img_oleo, nome_oleo, preco_ant, preco_novo, desc_prec, parc_oleo}){
    return(
        <section className={Styles.cont_prod}>
                <img src={img_oleo} alt="foto óleo"/>
                <div>
                    <h5>{nome_oleo}</h5>
                    <p className={Styles.risc}>{preco_ant}</p>
                    <p className={Styles.preco_novo}>{preco_novo} <span>{desc_prec}</span> </p>
                    <p className={Styles.parc_oleo}>{parc_oleo}</p>
                </div>
            
        </section>
    )
}

export default Oleo_prop