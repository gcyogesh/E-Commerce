import  {FormEvent, useRef} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactPage = () => {


 
 


  const form = useRef<HTMLFormElement>();
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs
        .sendForm("service_a30ytyl", "template_luzmzrb", form.current, {
          publicKey: "q5WAYzh7c4tNuFRrm",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Mail sent successfully',
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form reference is null.");
    }
  };
  




  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail}>
              <div className="form my-3">
                <label >Name</label>
                <input
                  name="name"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label >Email</label>
                <input
                  className="form-control"
                  id="Email"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form  my-3">
                <label >Message</label>
                <textarea
                  rows={5}
                  name="message"
                  className="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                
                 
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
