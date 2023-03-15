import {Button, Row} from "react-bootstrap";
import {useState} from "react";

export function Footer() {

    const [top, setTop] = useState(true)

    document.addEventListener("scroll", () => {
        if(scrollY > 0) {
            setTop(false)
        } else {
            setTop(true)
        }
    });

    const roundButtonStyle = {
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        backgroundColor: '#fff',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const arrowStyle = {
        width: 0,
        height: 0,
        borderTop: '0 solid transparent',
        borderBottom: '20px solid #ccc',
        borderLeft: '20px solid transparent',
        borderRight: '20px solid transparent',
    };




    return (

        <Row style={{position: "fixed", bottom: top ? -60 : 10, display:"flex", width:"100vw", justifyContent: "center", transition: "bottom 0.3s ease-in-out"}}>
            <Button variant="light" style={roundButtonStyle} href="#home">
                <div style={arrowStyle}></div>
            </Button>
        </Row>
    )
}