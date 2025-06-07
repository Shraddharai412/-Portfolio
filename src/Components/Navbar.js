import React from "react";
import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/skills" style={styles.link}>Skills</Link>
            <Link to="/projects" style={styles.link}>Projects</Link>
            <Link to="/certificate" style={styles.link}>Extracurricular Activities</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            
        </nav>
    )
}
const styles={
    navbar:{
        backgroundColor:'plum',
        padding :'10px',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        boxShadow:'0 2px 4px rgba(0,0,0,0.1)',
        borderRadius:'5px',
        margin:'20px 0',
        fontFamily:'Arial, sans-serif',
        fontSize:'18px',
        fontWeight:'bold',
        color:'black',
        letterSpacing:'1px',
        transition:'background-color 0.3s ease',
        position: "sticky",
         top: 0,
          zIndex: 100

    },
    link:
    {
        margin:'0 10px',
        marginLeft:'20px',
        textDecoration:'none',
        color:'white',
        fontSize:'20px',
        fontWeight:'bold'
    }
}
export default Navbar;