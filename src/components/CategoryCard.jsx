function CategoryCard({ backgroundimg, title, link }) {
  return (
    <div
      style={{ backgroundImage: `url(/${backgroundimg})` }}
      className="CategoryCard"
    >
      <h1 className="mainheading">{title}</h1>
      <a className="subheading">{link}</a>
    </div>
  );
}

export default CategoryCard;
