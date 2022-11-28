import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function Barner() {
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    return (
        <div className="container" style={{
            backgroundImage: 'url("../image/banner1.jpg")',
            height: '600px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }
        }>
            <div style={{
                verticalAlign: 'middle',
                display: 'table-cell',
                height: '600px',
                paddingLeft: '40px'
            }}>
                
                <h1 style={{ fontStyle: 'italic', fontWeight: '300', fontSize: '5rem' }}>20 % OFF ON NEW</h1>
                <h1 style={{ fontStyle: 'italic', fontWeight: '300', fontSize: '5rem' }}>SEASON</h1>
                <Button onClick={() => pageNavigate('shop')} style={{ backgroundColor: '#333333', fontStyle: 'italic', fontSize: '2.5rem' }} > Browse collection.</Button>
            </div>
        </div >
    )
}
export default Barner;