function Post({ alt, date, image, title, url }) {
  return (
    <div className="container">
      <div className="text">
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
      <a href={url}>
        <img alt={alt} src={image} />
      </a>

      <style jsx>{`
        .container {
          cursor: pointer;
          color: black;
          margin-bottom: 50px;
          border: 1px solid;
          padding: 0 10px 10px 10px;
          box-shadow: 5px 10px #888888;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        img {
          height: 200px;
        }
        h2 {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}

export default Post;
