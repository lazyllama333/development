//https://www.youtube.com/watch?v=S5q4sPe_K_Q&ab_channel=CodeForU
import "../App.css";
import { useState,useEffect } from "react";


export default function Cart({cart, setCart,favoritedNamesList, setFavoritedNamesList}) {
    const [price, setPrice] = useState(0);

    const handleRemove = (name) => {
        const arr = cart.filter((item) => item.name !== name);
        setCart(arr);
        const newFavoritedNameList = favoritedNamesList.filter((favoritedName) => favoritedName!==name);
        setFavoritedNamesList(newFavoritedNameList)
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        ans = Math.round(ans * 100) / 100
        setPrice(ans);
      };

    useEffect(() => {
    handlePrice();
    });
    

	return(
        <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
        
            <div>
              <span>${item.price}</span>
              <button onClick={() => handleRemove(item.name)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your favorites</span>
          <span>${price}</span>
        </div>
      </article>
    )

}