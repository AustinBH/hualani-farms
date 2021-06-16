
function Contact() {
  return (
    <div>
      <div className="three-grid">
        <div>
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/contact/photo25.jpg"
            alt="sunrise"
          />
        </div>
        <div className="contact">
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/logo/logo.svg"
            alt="hualani-farms-logo"
          />
        </div>
        <div>
          <img
            src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/contact/photo26.jpg"
            alt="ocean"
          />
        </div>
      </div>
      <div className="contact-links">
        <img
          className="small-icon"
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/logo/email_icon.png"
          alt="email"
          longdesc="Image found in https://www.flaticon.com/packs/social-network-12"
        />
        <a href="mailto:hualanifarms@gmail.com?subject=Questions">
          hualanifarms@gmail.com
        </a>
        <img
          className="small-icon"
          src="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/logo/phone_icon.png"
          alt="phone"
          longdesc="Image found in https://www.flaticon.com/packs/social-network-12"
        />
        <a href="tel:+1808-758-4404">(808) 758-4404</a>
      </div>
    </div>
  );
}

export default Contact;
