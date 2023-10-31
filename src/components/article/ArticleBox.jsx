import { Link } from "react-router-dom";

const ArticleBox = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <div className="article-preview">
        <div className="article-meta">
          <Link to="/profile/eric-simons">
            <img src={data.author.image} />
          </Link>
          <div className="info">
            <Link to="/profile/eric-simons" className="author">
              {data.author.username}
            </Link>
            <span className="date">{data.createdAt}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> {data.favoritesCount}
          </button>
        </div>
        <Link to={`/article/${data.slug}`} state={data} className="preview-link">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {data.tagList.map((tagList, idx) => (
              <li key={idx} className="tag-default tag-pill tag-outline">
                {tagList}
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </>
  );
};

export default ArticleBox;
