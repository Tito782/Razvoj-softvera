import React from "react";

function Ucenik(){
    
    window.scrollTo(0,0);
    
    return(
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
    )
}
export default Ucenik;