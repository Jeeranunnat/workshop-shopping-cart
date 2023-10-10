import { MyCartContext } from '../menagement/context';
const HeaderCart = () => {
  const { amount } = MyCartContext();
  return (
    <button className="button">
      <span>ตะกร้าสินค้า</span>
      <span className="budge">{amount}</span>
    </button>
  );
};
export default HeaderCart;
