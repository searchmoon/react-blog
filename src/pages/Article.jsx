import { useLocation } from "react-router-dom";
import ArticleMeta from "../components/article/ArticleMeta";

const Article = () => {
  const location = useLocation();
  const data = location.state;
  const { title, description, body, tagList } = data;
  console.log(location);
  console.log(data);
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>
          <ArticleMeta data={data} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{description}</p>
            <h2 id="introducing-ionic">{data.title}</h2>
            <p>{body}</p>
            <ul className="tag-list">
              {tagList.map((list, idx) => (
                <li key={idx} className="tag-default tag-pill tag-outline">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta data={data} />
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
              </div>
              <div className="card-footer">
                <img src={data.author.image} className="comment-author-img" />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <img src={data.author.image} className="comment-author-img" />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  {data.author.username}
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <img src={data.author.image} className="comment-author-img" />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  {data.author.username}
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
