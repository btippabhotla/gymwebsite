/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const MainInfo = () => (
  <div css={styles} className="mainInfo">
    <h2>Your metamorphosis starts here</h2>
    <p>Change your life one rep at a time.</p>
    {/* <p>Build Your Body and Fitness with Professional Touch</p> */}
    {/* <Button text="JOIN US" /> */}
  </div>
);

const styles = css`
  h2 {
    font-size: 6rem;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
  }
  h1 {
    font-size: 150px;
    font-weight: 900;
    line-height: 1;
    margin: 24px 0;
    text-transform: uppercase;
  }
  p {
    font-size: 21px;
  }
  .btn {
    margin: 32px 0 0 0;
    padding: 15px 50px;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 641px) and (max-width: 965px) {
    h1 {
      font-size: 80px;
    }
  }
`;

export default MainInfo;
