import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  
  const history = useNavigate();
  return (
  
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You send the products, <br className="sm:block hidden" /> we’ll handle
        them .
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
        All you have to do is to add the products and confirm the 
        order, and we will manage the rest for you. All you have to
        do is to click the button below and get started.
      </p>
      <div onClick={() => history("/register")}><Button styles={`mt-10`}  /></div>
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)};

export default Business;
