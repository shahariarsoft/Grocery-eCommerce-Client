import Category from '../components/Category';
import Banner from './../components/Banner';
import BestSeller from './../components/BestSeller';


const Home = () => {
  return (
    <div className='mt-10'>
      <Banner />
      <Category />
      <BestSeller />
    </div>
  );
};

export default Home;
