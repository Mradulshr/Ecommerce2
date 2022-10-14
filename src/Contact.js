import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs{
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              /* transform:scale(0.9); */
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73908065975!2d76.81307179071018!3d28.646677257441542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1665664585768!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
      <div className="contact-form">
        <form action="" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username"/>
          <input type="email" placeholder="Email" name="username"/>
          <textarea name="message" cols="30" rows="10"  required autoComplete="" placeholder="Enter your message"></textarea>
          <input type="submit" value = "send"/>
        </form>
        </div>
      </div>
      
    </Wrapper>
  );
};

export default Contact;