const ArticleMeta = ({ data }) => {
  return (
    <div className="article-meta">
      <a href="/profile/eric-simons">
        <img src={data.author.image} />
      </a>
      <div className="info">
        <a href="/profile/eric-simons" className="author">
          {data.author.username}
        </a>
        <span className="date">{data.createdAt}</span>
      </div>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; Follow {data.author.username} <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; Favorite Post <span className="counter">(29)</span>
      </button>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-edit"></i> Edit Article
      </button>
      <button className="btn btn-sm btn-outline-danger">
        <i className="ion-trash-a"></i> Delete Article
      </button>
    </div>
  );
};

export default ArticleMeta;
