/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *       </div>
 *   <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *       </div>
 * </div>
 */
const h1 = React.createElement("h1",{}, "I'm h1 tag");
const h2 = React.createElement("h2",{}, "I'm h2 tag");
const child1 = React.createElement("div", { id: "child12" }, [h1, h2])
const child2 = React.createElement("div", { id: "child21" }, [h1, h2])

const parent = React.createElement("div", { id: "parent" },
    [child1, child2])


// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)