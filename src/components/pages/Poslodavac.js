import React from "react";
import reactDom from "react-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Poslodavac.css";
import "./poslovi_cards.css"
import { Button } from "../Button";

//data
import Profile from "../data/profiles.json"
import Poslovi from "../data/poslovi.json"
import Prijave from "../data/prijave.json"

//mui-icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ClearIcon from '@mui/icons-material/Clear';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import PendingIcon from '@mui/icons-material/Pending';

function Poslodavac(){
    let idx = localStorage.getItem('prof_index')
    let user = Profile.poslodavci[idx];
    window.scrollTo(0,0);

    var autoPayButton = <button className="reg_button auto_pay"><AccessTimeIcon style={{"color":"white"}}/></button>;
    var paidButton = <button className="reg_button paid"><CheckIcon style={{"color":"white"}}/></button>
    var deniedButton = <button className="reg_button denied"><ClearIcon style={{"color":"white"}}/></button>
    var errorButton = <button className="reg_button error"><ErrorIcon/></button>
    var waitingButton = <button className="reg_button waiting"><HourglassEmptyIcon style={{"color":"white"}}/></button>
    var blockedButton = <button className="reg_button denied"><BlockIcon style={{"color":"white"}}/></button>
    var waitButton = <button className="reg_button waiting"><PendingIcon style={{"color":"white"}}/></button>
    var AcceptButton = <button className="reg_button paid"><CheckIcon style={{"color":"white"}}/></button>;
    
    function ChangeInnerHTML(e) {
        let bjbutton = (<div>
                <button onClick={ChangeToPaid} className="reg_button paid"><CheckIcon style={{"color":"white"}}/></button>
                <button onClick={ChangeToDenied} className="reg_button denied"><ClearIcon style={{"color":"white"}}/></button>
            </div>);
        reactDom.render(bjbutton, e.target)
    }

    function changeToNA(){
        localStorage.setItem('prof_type', 'n');
    }

    function ChangeToPaid(e) {
        reactDom.render(paidButton, e.target.parentNode.parentNode)
    }

    function ChangeToDenied(e) {
        reactDom.render(deniedButton, e.target.parentNode.parentNode)
    }

    function SwitchCase(props) {
        switch(props.value) {
            case "0": 
                return autoPayButton;
            case "1":
                return paidButton;
            case "2": 
                return blockedButton;
            case "3":
                return waitingButton;
            default:
                return errorButton;
        }
    }

    function SwitchCasePrijave (props) {
        switch(props.value) {
            case "0": 
                return AcceptButton;
            case "1":
                return deniedButton;
            default:
                return waitButton;
        }
    }
    
    return(      
        <>
        <Navbar/>
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""/>
                        <span class="font-weight-bold">{user.ime} {user.prezime}</span>
                        <span class="text-black-50">{user["e-mail"]}</span>
                        <span>{user.Rodenje}</span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Korisnički podaci</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <label class="labels">Ime</label>
                                <input type="text" class="form-control" placeholder="first name" value={user.ime}/>
                            </div>
                            <div class="col-md-6">
                                <label class="labels">Prezime</label>
                                <input type="text" class="form-control" value={user.prezime} placeholder="surname"/>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label class="labels">Telefonski broj</label>
                                <input type="text" class="form-control" placeholder="enter phone number" value={user.mob}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Adresa</label>
                                <input type="text" class="form-control" placeholder="enter address line 1" value={user.adresa}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">ZIP</label>
                                <input type="text" class="form-control" placeholder="enter address line 2" value={user.zip}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Email</label>
                                <input type="text" class="form-control" placeholder="enter email id" value={user["e-mail"]}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Titula</label>
                                <input type="text" class="form-control" placeholder="education" value={user.Titula}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Kompanija</label>
                                <input type="text" class="form-control" placeholder="education" value={user.Kompanija}/>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="Hrvatska" value=""/></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value={user.zupanija} placeholder="županija"/></div>
                        </div>
                        <div>
                                 <div class="mt-5 text-center"><Button buttonStyle={'btn--logout'} buttonSize={'btn-size-lg'} onclick={changeToNA}>Odjava</Button></div>
                            </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <h2 style={{"padding-left":"16px"}}>Poslovi</h2>
                        {Poslovi.map(element => {
                            if(element.poslodavac.id === user.id){
                                return(<div className="poslovi_card" key={element.id}>
                                    <img className="card_img" src={element.slika} alt="Slika"></img>
                                    <div className="info_cont">
                                        <h3>{element.naslov}</h3>
                                        <p className="poslodavac_ime">{element.ucenik.ime}</p>
                                        <p className="email">{element.ucenik["e-mail"]}</p>
                                    </div>
                                    <div id={"button_" + element.id} className="button_cont">
                                        <SwitchCase value={element.status} id={element.id}></SwitchCase>
                                    </div>
                                </div>); 
                            }
                            return(<div></div>);
                        })}
                    </div>   
                    <div class="p-3 py-5">
                        <h2 style={{"padding-left":"16px"}}>Zahtjevi za poslove</h2>
                        {Prijave.map(element => {
                            if(element.poslodavac.id === user.id){
                                return(<div className="poslovi_card" key={element.id}>
                                    <img className="card_img" src={element.slika} alt="Slika"></img>
                                    <div className="info_cont">
                                        <h3>{element.naslov}</h3>
                                        <p className="poslodavac_ime">{element.ucenik.ime}</p>
                                        <p className="email">{element.ucenik["e-mail"]}</p>
                                    </div>
                                    <div id={"button_" + element.id} className="button_cont" onMouseEnter={element.status === "2" ? ChangeInnerHTML : ''}>
                                        <SwitchCasePrijave value={element.status}></SwitchCasePrijave>
                                    </div>
                                </div> );
                            }
                            return(<div></div>)
                        })}
                    </div>    
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}
export default Poslodavac;

