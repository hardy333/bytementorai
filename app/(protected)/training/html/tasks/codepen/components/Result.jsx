function Result({ srcCode }) {
  return (
    <div className="">
      <div className="card border " style={{ width: "100%", height: "350px" }}>
        <iframe
          className="card-body"
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="350px"
        ></iframe>
      </div>
    </div>
  );
}

export default Result;
