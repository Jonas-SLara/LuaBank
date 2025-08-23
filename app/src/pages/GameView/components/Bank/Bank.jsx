import { spring, motion } from "framer-motion";
import style from "./Bank.module.css";
const BankMotion = motion.button;

const Bank = ()=>{
    return(
        <>
            <BankMotion 
                className={style.bankButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: spring, duration: 0.2 }}
            >
                <span>BANCO</span>
                <img src="/game/iconBank.png" alt="Banco Icon" />
            </BankMotion>
        </>
    )
}

export default Bank;