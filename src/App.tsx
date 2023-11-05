import "./App.css";

function App() {
  return (
    <>
      <main>
        <aside>
          <h1>Technical Interview</h1>
          <p>
            Check <code>README.md</code> for instructions
          </p>
          <form>
            <label>
              Add elements to your list
              <input
                name="item"
                required
                type="text"
                placeholder="Introduce element"
              />
            </label>
            <button>Add</button>
          </form>
        </aside>
        <section>
          <h2>Elements</h2>
          <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
