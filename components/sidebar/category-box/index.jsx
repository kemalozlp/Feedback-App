export default function CategoryBox({categories}) {
    return (
      <div className="categories">
        <button className="category-all">All</button>
        {categories?.map((x, i) => (
          <button className="category-item" key={i}>{x}</button>
        ))}
      </div>
    );
  }
  