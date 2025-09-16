import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import ThemeToogle from "./ThemeToogle";

const App = () => {
  return (
    <>
      <div className="toggle-container">
        <ThemeToogle />
      </div>
      <h1 className="title">Unsplash Images Starter</h1>
      <SearchForm />
      <Gallery />
    </>
  );
};
export default App;
