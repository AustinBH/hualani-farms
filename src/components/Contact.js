
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
      <p>
        Email: <a href="mailto:hualanifarms@gmail.com?subject=Questions">hualanifarms@gmail.com</a>
        <br />
        Phone: <a href="tel:+1808-758-4404">(808) 758-4404</a>
      </p>
    </div>
  );
}

export default Contact;
