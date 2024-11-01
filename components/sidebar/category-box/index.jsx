export default function CategoryBox({categories}) {
    return (
      <div className="categories">
        <button className="category-all">All</button>
        {categories?.map(x => (
          <button className="category-item">{x}</button>
        ))}
      </div>
    );
  }
  