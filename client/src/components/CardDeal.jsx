import { card, ewaste, micro } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const CardDeal = () => {
  const history = useNavigate();
return(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Build the better place<br className="sm:block hidden" /> for our
        next generation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      When e-waste is exposed to the heat, toxic chemicals are released into the air damaging the atmosphere.
      we will stop this process with your help. just click the button below and get started.  
      </p>

      <div onClick={() => history("/register")}><Button styles={`mt-10`} /></div>
    </div>

    <div className={layout.sectionImg}>
      <img src={micro} alt="billing" className="w-[100%] h-[100%]" /> 
    </div>
  </section>
)};

export default CardDeal;
