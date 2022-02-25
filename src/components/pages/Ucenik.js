import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Ucenik.css";
import Profile from "../data/profiles.json"

function Ucenik(){
    let idx = localStorage.getItem('prof_index')
    let user = Profile.ucenici[idx];
    window.scrollTo(0,0);
    
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
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <label class="labels">Name</label>
                                <input type="text" class="form-control" placeholder="first name" value={user.ime}/>
                            </div>
                            <div class="col-md-6">
                                <label class="labels">Surname</label>
                                <input type="text" class="form-control" value={user.prezime} placeholder="surname"/>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label class="labels">Mobile Number</label>
                                <input type="text" class="form-control" placeholder="enter phone number" value={user.mob}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Address Line 1</label>
                                <input type="text" class="form-control" placeholder="enter address line 1" value={user.adresa}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Address Line 2</label>
                                <input type="text" class="form-control" placeholder="enter address line 2" value="N/A"/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Postcode</label>
                                <input type="text" class="form-control" placeholder="enter address line 2" value={user.zip}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Email</label>
                                <input type="text" class="form-control" placeholder="enter email id" value={user["e-mail"]}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">School</label>
                                <input type="text" class="form-control" placeholder="education" value={user.Skola}/>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Smjer</label>
                                <input type="text" class="form-control" placeholder="education" value={user.Smjer}/>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="Hrvatska" value=""/></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value={user.zupanija} placeholder="županija"/></div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <h1>Hy</h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}
export default Ucenik;