import { AccountInfo } from "./AccountInfo";
import { ContactInfo } from "./ContactInfo";
import { MainGreetings } from "./MainGreetings";
import { PlaceInfo } from "./PlaceInfo";
import { Copyright } from "../style/Footer";
import { Flower } from "../component/Flower";

const makeFlowers = () => {
  const arr = Array.from({ length: 100 });

  return arr.map((_, i) => {
    const style = {
      animationDelay: `${Math.random() * 1}s`,
      fontSize: `${Math.floor(Math.random() * 20) + 10}px`,
    };
    return <Flower style={style} key={i} />;
  });
};

export const Main: React.FC = () => {
  return (
    <div style={{ padding: "0 10px", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
        }}
      >
        {makeFlowers()}
      </div>
      <MainGreetings />
      <PlaceInfo />
      <AccountInfo />
      <ContactInfo />
      <Copyright>Copyright @ 2022 Jongdae Park</Copyright>
    </div>
  );
};
