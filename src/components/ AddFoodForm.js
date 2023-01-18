// import { useState } from "react";
// import { Divider, Input } from 'antd';

// function AddFoodForm(props) {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [calories, setCalories] = useState("");
//   const [servings, setServings] = useState("");

//   const handleSubmit = function (e) {
//     e.preventDefault();
//     const newFood = {
//       name,
//       image,
//       calories,
//       servings,
//     };
//     props.addNewFood(newFood);
//   };

//   return (
//     <div className="addFoodForm">
//     <form>
//     <Divider>Add Food Entry</Divider>

//     <label>Name</label>
//     <Input value={name} type="text" onChange={() => {}} />

//     <label>Image</label>
//     <Input  value={image} type="text" onChange={() => {}}/>

//     <label>Calories</label>
//    <Input value={calories} type="number" onChange={() => {}}/>

//     <label>Servings</label>
//     <Input value={servings} type="number" onChange={() => {}}/> 

//     <button type="submit">Create Food</button>
//   </form>
//   </div>
//   );
// }

// export default AddFoodForm;