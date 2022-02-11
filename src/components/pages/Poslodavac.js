import Footer from '../Footer';
import Navbar from '../Navbar';
import './Poslodavac.css';


function Poslodavac(){
    return(
        <>
            <Navbar/>
            
            <div className='user-component'>
                <div className='upper-component'>
                    <div>
                        <table className=''>
                            <tr>
                            <td><img  className = 'slika' src = '/images/user-profile.jpg'/></td>
                        
                            
                                <td>Bok</td>
                            </tr>
                        </table>
                    </div>
                </div>
  
                    <div className='info'>
                        <table>
                            <tr>
                                <td><h4>Ime</h4></td>
                                <td><input value = 'Microsoft d.o.o' readOnly></input></td>
                            </tr>
                        </table>
                    </div>



            </div>
            <Footer/>
        </>
    )
}

export default Poslodavac;

