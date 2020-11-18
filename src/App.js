import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Date Planner</h1>
        <p>Feeling stumped for date ideas within you budget?</p>
        <p>We've got you back!</p>
      </header>
      <section>
        <form>
          <label for="where">Where?</label>
          <input type="text" id="where" name="where"></input>
          <label for="budget">Budget</label>
          <input type="number" id="budget" name="budget"></input>
          <label for="date">When?</label>
          <input type="date" id="date" name="date"></input>
          <button>Search</button>
        </form>
        
      </section>
    </div>
  );
}

export default App;
