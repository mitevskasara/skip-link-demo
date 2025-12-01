const Home = () => {
  return (
    <main className="intro">
      <h1>Skip Link In React Apps</h1>
      <div className="intro__open-page">
        <a href="/without-skip">🔗 Page Without Skip Link</a>
      </div>
      <div className="intro__open-page">
        <a href="/with-skip">🔗 Page With Skip Link</a>
      </div>
    </main>
  );
};

export default Home;
