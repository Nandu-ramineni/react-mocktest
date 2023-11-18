import { useState } from "react"
import { motion } from "framer-motion"
import './Header.css'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    // framer motion variant for navbar animation 
    const navbar = {
        open: () => ({
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
          transition: {
            type: "spring",
            stiffness: 200,
            restDelta: 1,
          }
        }),
        closed: () => ({
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        })
    };

    const navLinks = [
        {label: "Home", icon: "bx bx-home"},
        {label: "Test Series", icon: "bx bx-briefcase"},
        {label: "Material", icon: "bx bx-edit"},
        {label: "Exams", icon: "bx bx-message-square-dots"},
        {label: "About us", icon: "bx bx-info-circle"},
        {label: "Contact us", icon: "bx bx-envelope"},
    ]

    return (
        <div className="header">
            <div className="header__logo">
                <img src={"https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/TEST1.png?alt=media&token=aa8ee1b1-921a-4a8b-a15f-c45b288c0ae3"} alt=""/>
                <h1>Sona Code</h1>
            </div>
            <div className="header__icon">
                <i class='bx bx-menu' onClick={() => setIsOpen(isOpen => !isOpen)}></i>
            </div>
            <motion.ul 
                className="header__nav"
                animate={isOpen ? "open" : "closed"}
                variants={navbar}
            >
                {navLinks.map((link) => (
                 <li 
                    className="nav-item" 
                    key={link.lable}
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                >
                    <i className={link.icon}></i>
                    {link.lable}
                 </li>
                ))}
            </motion.ul>
        </div>
    )
}

export default  Header