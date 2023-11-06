import { useState } from "react";
import "./App.css";

type Item = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  timestamp: number;
  value: string;
};

const INITIAL_ITEMS: Item[] = [
  { id: crypto.randomUUID(), timestamp: Date.now(), value: "Add elements" },
];

function App() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);

  /**
   * Handles the form submission event. It prevents the default form submission action,
   * retrieves the input element by its name, and checks if it's a valid HTMLInputElement.
   * If the input is valid and not null, it creates a new item with a unique ID,
   * the current timestamp, and the input value. This new item is then added to the
   * state array of items. Finally, it clears the input field.
   *
   * @param event - The form event triggered on submission.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      value: input.value,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    input.value = "";
  };

  /**
   * Factory function that creates a function to handle the removal of an item.
   * The returned function will filter out the item with the specified ID from
   * the current items state. This is a common pattern for creating event handlers
   * in a loop or map function in React, which ensures that each handler has the
   * correct item ID in its closure.
   *
   * @param id - The unique identifier of the item to remove.
   * @returns A function that removes the item from the state when called.
   */
  const createHandleRemoveItem = (id: Item["id"]) => () => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== id));
  };

  return (
    <>
      <main>
        <aside>
          <h1>Technical Interview</h1>
          <p>
            Check <code>README.md</code> for instructions
          </p>
          <form aria-label="Add items" onSubmit={handleSubmit}>
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
            {items.length === 0 ? (
              <p>
                <strong>There's no elements on the list.</strong>
              </p>
            ) : (
              items.map((item) => (
                <li key={item.id}>
                  <span>{item.value}</span>
                  <button
                    style={{ marginLeft: "1rem" }}
                    onClick={createHandleRemoveItem(item.id)}
                  >
                    X
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
