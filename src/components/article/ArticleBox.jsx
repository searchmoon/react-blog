const ArticleBox = ({ item }) => {
  return (
    <>
      <div className="article-preview">
        <div className="article-meta">
          <a href="/profile/eric-simons">
            <img src={item.author.image} />
          </a>
          <div className="info">
            <a href="/profile/eric-simons" className="author">
              {item.author.username}
            </a>
            <span className="date">{item.createdAt}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> {item.favoritesCount}
          </button>
        </div>
        <a href="/article/how-to-build-webapps-that-scale" className="preview-link">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {item.tagList.map((tagList, idx) => (
              <li key={idx} className="tag-default tag-pill tag-outline">
                {tagList}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </>
  );
};

export default ArticleBox;
