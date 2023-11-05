import Styles from '../css/Main.module.css'
import { PiFlowerLotusLight } from "react-icons/pi";
import { PiPawPrintLight } from "react-icons/pi";
import { GiDroplets } from "react-icons/gi";

function Main(){
    return(
        <main>
            <section className={Styles.fundo_img}>
            </section>
            <div className={Styles.cont_infos}>
                <section className={Styles.infos}>
                    <PiFlowerLotusLight/>
                    <div className={Styles.infos2}>
                        <h2>Vegano</h2>
                        <p>sem componentes de origem animal</p>
                    </div>
                </section>
                <section className={Styles.infos}>
                    <PiPawPrintLight/>
                    <div className={Styles.infos2}>
                        <h2>Cruelty-Free</h2>
                        <p>não testado em animais</p>
                    </div>
                </section>
                <section className={Styles.infos}>
                    <GiDroplets/>
                    <div className={Styles.infos2}>
                        <h2>100% Puro</h2>
                        <p>Óleos puros e naturais</p>
                    </div>
                </section>
                
            </div>
        </main>
    )
}

export default Main