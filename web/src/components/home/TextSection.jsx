const TextSection = ({ title, text }) => {
  return (
    <div className="home-text-container">
      <h2 className="home-text-h2">{title}</h2>
      <p className="home-text-p">{text}</p>
    </div>
  );
};

export default TextSection;
