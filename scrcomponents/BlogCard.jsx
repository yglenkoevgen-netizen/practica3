import './Card.css';

export default function BlogCard({ 
  image, 
  category, 
  date, 
  title, 
  description, 
  authorImage, 
  authorName 
}) {
  return (
    <article className="card">
      <div className="card__image">
        <img src={image} alt="Зображення блогу" /> 
      </div>
      <div className="card__content">
        <span className="card__tag">{category}</span>
        <span className="card__date">{date}</span>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">
          {description}
        </p>
        <div className="card__author">
          <img src={authorImage} alt="Автор" />
          <span className="card__author-name">{authorName}</span>
        </div>
      </div>
    </article>
  );
}