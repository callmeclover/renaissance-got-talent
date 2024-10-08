import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "renaissance-got-talent/",
    element: Main(),
  },
  {
    path: "renaissance-got-talent/workscited",
    element: WorksCited(),
  },
]);

function Main() {
  return (
    <>
      <h1>Galileo Galilei</h1>
      <h2>for Renaissance Got Talent</h2>
      <p>
        <strong>Galileo Galilei</strong> was an Italian philosopher,
        mathematician, and astronomer who changed the way we think about our
        universe. His many theories from us orbiting the sun to the law of
        falling bodies challenged the catholic church's power, but his
        persistence led to a <em>significant change</em> in the studies of
        motion and natural philosophy. His studies make him the perfect fit for
        Renaissance Got Talent.
        <br />
        <br />
        But what did Galileo even do? Well I'm glad you asked:
        <ul>
          <li>
            Challenged the church with his heliocentric theory (This boosted the
            popularity of natural philosophy and philosophy in general)
          </li>

          <li>
            Created the law of falling bodies (A conclusion that contradicted
            Aristotelian physics)
          </li>
          <li>
            Made{" "}
            <strong>
              <em>very big</em>
            </strong>{" "}
            improvements to the telescope (Refracting telescopes could see the
            moon, among many other things)
          </li>
        </ul>
      </p>
      <p>
        Galileo <strong>rocked</strong> the world with his scientific
        discoveries. People started to be skeptical of things around them, like
        the rule of the catholic church. The field of astronomy and physics
        started using his heliocentric model, and he's still important today!
        His studies heavily influenced modern day studies of astronomy, physics,
        and mathematics.
      </p>

      <p>
        <a href="./workscited">Works Cited</a>
      </p>
    </>
  );
}

function WorksCited() {
  return (
    <>
      <h1>Works Cited</h1>
      <p>
        <cite>
          Machamer, Peter, and David Marshall Miller. “Galileo Galilei.”
          Stanford Encyclopedia of Philosophy, Stanford University, 4 June 2021,{" "}
          <a href="plato.stanford.edu/entries/galileo/">
            plato.stanford.edu/entries/galileo/
          </a>
          .
        </cite>
      </p>
      <p>
        <cite>
          Van Helden, Albert. “Galileo.” Encyclopædia Britannica, Encyclopædia
          Britannica, inc., 10 Sept. 2024,{" "}
          <a href="www.britannica.com/biography/Galileo-Galilei/">
            www.britannica.com/biography/Galileo-Galilei/
          </a>
          .
        </cite>
      </p>

      <p>
        <a href="../">Back to Main</a>
      </p>
    </>
  );
}

function App() {
  return (
    <div className="bg-container">
      <div className="background">
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
