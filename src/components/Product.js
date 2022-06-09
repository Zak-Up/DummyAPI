const Product = ({ nameP, imageP }) => {
  return(
    <div>
      <h3>{nameP}</h3>
      <img src={imageP} alt='img'/>
    </div>
  );
};
export default Product
