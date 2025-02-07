// 1 - Render Phase -> Initial Render, Re-Render
// 2 - Commit Phase -> When Virtual DOM did the changes to Actual DOM thats commit phase

function Counter() {
  const [count, setCount] = React.useState(0);
  let count1 = 0;

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1); // now it will increment by 4 values it is asynchronous but we will get updated value in every state change, it takes  a function inside and component will only re render once
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);  // will increment only 1 value because of asynchronous nature only, count for all of this will be zero only initially and all will update same value
    count1 = count1 + 1; // Re-rendering only happens with state changes
  };

  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("p", null, `Count: ${count}`),
  //     React.createElement("button", { onClick: increment }, `Increment`)
  //   );

  console.log("Counter(child) Rendered");

  return (
    <div>
      <p>Count : {count}</p>
      <p>Count1 : {count1}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const CounterParent = () => {
  const [showMessage, setShowMessage] = React.useState(false);
  const [showMessage2, setShowMessage2] = React.useState(false);
  console.log("Parent Rendered");

  const toggleMessages = () => {
    setShowMessage(!showMessage);
    setShowMessage2(!showMessage2); // 2 states but re-render only one time because of asynchronous nature
  };

  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <br />
      {showMessage && <b>Now You See Me</b>}
      <br />
      {showMessage2 && <b>Now You See Me Again</b>}
      <br />
      <button onClick={toggleMessages}>Show Message</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(React.createElement(Counter));
root.render(React.createElement(CounterParent));
