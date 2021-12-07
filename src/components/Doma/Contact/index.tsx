import bg3 from 'assets/images/b3.png';
import { Section, TextRight, Video } from '../styles';
import video3 from 'assets/videos/3.mp4';
import { useWindowSize } from 'react-use-size';

export default function Contact() {
  const {width,height} = useWindowSize()

    return (
      <Section id='get-in-touch' bg={bg3}>
        <div className="video-container">
          <Video
            id="contact-us-video"
            {...{width, height}}
          >
            <source src={video3} />
          </Video>
        </div>
        <TextRight>
          <div>
            <h2>Get in touch</h2>
            <p>
              We are working on bringing DOMA to your city. Join our
              community today, and be part of the transition towards
              affordable, inclusive, and sustainable cities. Get in touch
              via <a href="mailto:contact@doma.city">Email</a> to share
              feedback and ideas for the next steps of the project. Follow
              us on <a href="https://twitter.com/doma_city/">Twitter</a> and{" "}
              <a href="https://www.facebook.com/domacity/">Facebook</a>{" "}
              to hear about the latest developments of DOMA. And sign up
              below to receive our newsletter!
              <br />
            </p>
            <div className="email_form">
              <form
                action="http://chrispetro.us3.list-manage.com/subscribe/post?u=0a04a50324b4d5e6e80ce17c4&id=767af1ce8c"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  size={15}
                  placeholder="enter email"
                  required
                />
                <button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="signupbtn"
                >
                  sign up
                </button>
              </form>
              {/* <div className="email_form_success">
                <h2>Let's keep in touch</h2>
                <p>Thank you for subscribing!</p>
              </div> */}
            </div>
            <div className="box">
              <p>
                |
                {' '} 
                <a href="https://twitter.com/doma_city/">Twitter</a> 
                {' '} | {' '} 
                <a href="https://www.facebook.com/domacity/"> Facebook</a> 
                {' '} | {' '} 
                <a href="mailto:contact@doma.city">Email</a> 
                {' '} 
                |
              </p>
            </div>
          </div>
        </TextRight>
      </Section>
    )
}