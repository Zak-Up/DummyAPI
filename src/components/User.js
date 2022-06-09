const User = ({ name, image }) => {
  return(
    <div className="user-card">
      <h3>{name}</h3>
      <img src={image} alt='img'/>
    </div>
  );
};
export default User