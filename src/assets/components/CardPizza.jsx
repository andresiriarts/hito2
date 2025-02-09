const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      {<img className="product" src={img} alt={name} />}
      <h2 className="title">{name}</h2>
      {<hr className="separacion" />}
      <section className="ingredientes"></section>
      <h2>Ingredientes:</h2>
      <p>🍕 {ingredients.join(", ")}</p>
      <hr className="separacion" />
      <h2>Precio: ${price.toLocaleString("es-CL")}</h2>
      <section className="botones">
        <button className="vermas">Ver Más 👀</button>
        <button className="añadir">Añadir 🛒</button>
      </section>
    </>
  );
};

export default CardPizza;
