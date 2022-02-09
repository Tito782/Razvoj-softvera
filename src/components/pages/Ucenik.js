import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Ucenik(){
    
    window.scrollTo(0,0);
    
    return(

        <>
        <Navbar/>
        <div className="table-ucenik">
            <table>
                <tr>
                    <td>
                        Ucenik:                   
                    </td>
                    <td>
                        Ivan Horvat
                    </td>
                </tr>
                <tr>
                    <td>
                        Razred:
                    </td>
                    <td>
                        4.a
                    </td>
                </tr>
                <tr>
                    <td>
                        Škola:
                    </td>
                    <td>
                        Strukovna
                    </td>
                </tr>
            </table>
        </div>
        <Footer/>
        </>
    )
}
export default Ucenik;