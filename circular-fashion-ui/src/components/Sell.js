export default function Sell() {
  return (
    <div className="sell">
      <h2>Sell Your Clothes</h2>
      <input type="file" multiple />
      <input placeholder="Product name" />
      <input placeholder="Price" />
      <textarea placeholder="Condition" />
      <button>Submit</button>
    </div>
  );
}
