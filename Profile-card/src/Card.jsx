import profilepic from './assets/profile.png'

function App() {

  return(
    <div className="card">
      <img className='card-image' src={profilepic} atl="profile pricture" />
      <h2 className='card-title'>Boma Delights</h2>
      <p className="card-text">Developing React Apps</p>


    </div>
  );
}
export default App