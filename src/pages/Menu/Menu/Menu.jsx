
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const offered=menu.filter(item=>item.category==='offered');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
   
    return (
        <div>
          

            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover title={'our menu'} img={menuImg}></Cover>
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg} ></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg} ></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImg} ></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;