import { useEffect } from "react";
import { axiosInstance } from "../api/axios-api";
import ArticleBox from "../components/article/ArticleBox";
import { useDispatch, useSelector } from "react-redux";
import { setArticleList } from "../components/features/articleSlice";

function Home() {
  //articles 목록
  const dispatch = useDispatch();

  const articlesData = async () => {
    try {
      const response = await axiosInstance("/articles");
      const articles = response.data.articles;
      dispatch(setArticleList(articles));
      console.log(articles);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    articlesData();
  }, []);

  const data = useSelector((state) => state.article.articleList);

  console.log("data", data);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            {/* article list 넣어주는곳  */}
            {data.map((data) => (
              <ArticleBox key={data.slug} data={data} />
            ))}

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
