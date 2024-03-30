import products from '../data/products';

const Products = () => {
  const formatPrice = (price) => {
    return `€ ${(price / 100).toFixed(2).replace('.', ',')}`;
  };

  return (
    <div className="section products light" id="products">
      <h2>Produkte</h2>
      <p>
        Entdecke unsere köstlichen Kaffeespezialitäten und hausgemachten
        Leckereien
      </p>
      <div className="products__wrapper">
        {products.map((product) => (
          <div key={product.id} className="products__product">
            <img
              src={product.image}
              alt={product.name}
              className="products__image"
            />
            <div className="products__text">
              <div className="products__name">{product.name}</div>
              <div className="products__description">{product.description}</div>
            </div>
            <div className="products__price">{formatPrice(product.price)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
