import Styles from '../css/Banner_prop.module.css'
 

function Banner_prop({nome_oleos, p_oleos}){
    return(
        <section className={Styles.banner}>
            <div className={Styles.con_prop}>
                <h1>{nome_oleos}</h1>
                <p>{p_oleos}</p>
            </div>
            
        </section>
        
    )
}

export default Banner_prop