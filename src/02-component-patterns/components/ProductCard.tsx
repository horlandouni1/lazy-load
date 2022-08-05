import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProducts";
const ProductCard = () => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={noImage} alt="Coffee Mug" />
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
      <h2>ProductCard</h2>
    </div>
  );
};

export default ProductCard;
