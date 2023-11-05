import Styles from '../css/Footer.module.css' 


function Footer(){
    return(
        <footer>
            <section className={Styles.notifica}>
                <div className={Styles.cont_news}>
                    <div className={Styles.encurtar}>
                        <h3>INSCREVA-SE</h3>
                        <h5>E RECEBA NOVIDADES E PROMOÇÕES</h5>
                    </div>

                    
                        <input type='email' placeholder='Seu e-mail'/>

                    <div className={Styles.news}>
                        <h5>ASSINAR NEWSLETTER</h5>
                    </div>
                </div>
            </section>
            <section className={Styles.cont_contatos}>
                <div className={Styles.sobre}>
                    <h4>Sobre</h4>
                    <p>Quem Somos(A Empresa)</p>
                    <p>Nossos Contatos</p>
                    <p>Trabalhe Conosco</p>
                    <p>Fale Conosco</p>
                    <p>PhytoSPA</p>
                </div>
                <div className={Styles.suporte}>
                    <h4>suporte</h4>
                    <p>Politica de Entrega</p>
                    <p>Politica de Troca e Devolução</p>
                    <p>Ingestão de Óleos Essenciais </p>
                    <p>Cromatografia</p>
                    <p>Encarregado de Dados</p>
                </div>
                <div className={Styles.Cliente}>
                    <h4>Login</h4>
                    <p>Carrinho</p>
                    <p>Minha Conta</p>
                    <p>Meus Pedidos </p>
                    <p>Preferencias de Coockies</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer