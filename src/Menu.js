import React from 'react'

const Menu = ({items}) => {
      return (
    <div >
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} >
            <img src={img} alt={title}  />
            <div >
              <header>
                <h4>{title}</h4>
                <h4 >${price}</h4>
              </header>
              <p >{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
  
}

export default Menu