
import './App.css';
import prof from "./image/prof.png";
import email from "./image/email.png";
import pw from "./image/pw.png";

function App() {
  return (
    <div className="main">
      <div className='sub_main'>
      <div>
          <div className='img'>

              <div className='container_img'>
                <img src={prof} alt="prof" className='prof'/> 
                   
              </div>
          </div>
          <div >
                <h1 >Login page</h1>
                <div>
                  <img src={email} alt="email" className='email'/>
                  <input type="text" placeholder="user name" className='name'/>
                </div>

                <div className='second_input'>
                  <img src={pw} alt="pw" className='pw'/>
                  <input type="password" placeholder="password" className='name '/>
                </div>
              <div className='login_button'>
                <button>Login</button>
              </div>

              
                <p className='link'>
                  <a href='#'>Forgot password</a> or <a href='#'>Sign-up</a>
                </p>
              
                
          </div> 
      </div>
      </div>
    </div>
  );
}

export default App;
