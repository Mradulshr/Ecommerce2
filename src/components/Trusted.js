import styled from "styled-components";
const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trust by2000+ companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210130/ourmid/pngtree-asymmetric-black-heart-clipart-png-image_2795910.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210130/ourmid/pngtree-asymmetric-black-heart-clipart-png-image_2795910.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210130/ourmid/pngtree-asymmetric-black-heart-clipart-png-image_2795910.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210130/ourmid/pngtree-asymmetric-black-heart-clipart-png-image_2795910.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210130/ourmid/pngtree-asymmetric-black-heart-clipart-png-image_2795910.jpg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20210130/ourmid/pngtree-asymmetric-black-heart-clipart-png-image_2795910.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: CgEnter;
    }
  }
`;

export default Trusted;
