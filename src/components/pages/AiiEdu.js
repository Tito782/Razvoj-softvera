import '../../App.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import './AiiEdu.css'

function AiiEdu (){
  return(
    <div className='redirect-container'>
        <form>
            <div className='aiiedu-logo'>
                <img src='https://www.aaiedu.hr/sites/default/files/styles/logo-aai_breakpoints_theme_aai_eduhr_mobile_1x/public/aai-70.png?itok=pPb5sBwK&timestamp=1445113290 105w'></img>
                <p className='entryText'>Autentikacijska i autorizacijska infrastruktura znanosti i visokog obrazovanja u Republici Hrvatskoj</p>
            </div>
            <div className='input-box'>
                <label for="username" aria-label="Upišite korisničku oznaku svog e-identiteta iz sustava AAI@EduHr" title="Upišite korisničku oznaku svog e-identiteta iz sustava AAI@EduHr">KORISNIČKA OZNAKA </label>
                <input id="username" name="username" aria-label="Upišite korisničku oznaku svog e-identiteta iz sustava AAI@EduHr" title="Upišite korisničku oznaku svog e-identiteta iz sustava AAI@EduHr" tabindex="1"/>
                <PersonIcon className='input_img'/>
            </div>
            <div className='input-box'>
                <label for="password" aria-label="Upišite zaporku svog e-identiteta iz sustava AAI@EduHr" title="Upišite zaporku svog e-identiteta iz sustava AAI@EduHr">ZAPORKA </label>
                <input id="username" name="username" aria-label="Upišite korisničku oznaku svog e-identiteta iz sustava AAI@EduHr" title="Upišite korisničku oznaku svog e-identiteta iz sustava AAI@EduHr" tabindex="1"/>
                <LockIcon className='input_img'/>
            </div>
        </form>
    </div>
  );
}

export default AiiEdu;