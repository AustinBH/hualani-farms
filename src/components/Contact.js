
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
          src="https://image.flaticon.com/icons/png/512/1077/1077071.png"
          alt="phone"
          longdesc="https://www.flaticon.com/packs/social-network-12"
        />
        <a href="mailto:hualanifarms@gmail.com?subject=Questions">
          hualanifarms@gmail.com
        </a>
        <img
          className="small-icon"
          src="https://image.flaticon.com/icons/png/512/1077/1077055.png"
          alt="twitter-logo"
          longdesc="https://www.flaticon.com/packs/social-network-12"
        />
        <a href="tel:+1808-758-4404">(808) 758-4404</a>
      </div>
    </div>
  );
}

export default Contact;
