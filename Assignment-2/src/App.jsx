import './App.css';

// Card component
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="Card" className='img-fluid'/>}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Button component
const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='d-flex'>
    <div className="App">
      <Card
        title="Card Title"
        description="This is a card component"
        image="https://images.pexels.com/photos/3214991/pexels-photo-3214991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Button text="Click me" onClick={handleButtonClick} />
    </div>
    <div className="App">
      <Card
        title="Card Title"
        description="This is a card component"
        image="https://i.pinimg.com/564x/ee/59/78/ee597862709e051275eb3e51b6acd079.jpg"
      />
      <Button text="Click me" onClick={handleButtonClick} />
    </div>
    <div className="App">
      <Card
        title="Card Title"
        description="This is a card component"
        image="https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Button text="Click me" onClick={handleButtonClick} />
    </div>
    </div>
  );
};

export default App;
