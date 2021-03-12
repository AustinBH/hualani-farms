import logo from '../media/logo.svg';
import photo25 from '../media/photo25.jpg';
import photo26 from '../media/photo26.jpg';

function Contact() {
  return (
    <div>
      <div className="three-grid">
        <div>
          <img src={photo25} alt="sunrise" />
        </div>
        <div className="contact">
          <img src={logo} alt="hualani-farms-logo" />
        </div>
        <div>
          <img src={photo26} alt="ocean" />
        </div>
      </div>
      <p>
        Email: hualanifarms@gmail.com
        <br />
        Phone: (808) 748-4404
      </p>
    </div>
  );
}

export default Contact;
