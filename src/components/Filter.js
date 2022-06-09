import React from 'react';

const Filter = ({inChange}) => {
  const handleChange = (e) => {
    inChange(e.target.value);
    console.log(e.target.value);
  };
  return(
    <>
      <input type='text' onChange={(e) => handleChange(e)}/>
    </>
  );
};
export default Filter