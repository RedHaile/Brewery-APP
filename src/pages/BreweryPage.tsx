import { useParams } from "react-router-dom";
import BreweryDetails from "../components/brewery/BreweryDetails";


const BreweryPage = () => {
   const { id } = useParams();
   return <BreweryDetails id={id} />;
};

export default BreweryPage;
