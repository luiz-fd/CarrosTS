import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import "./styles.css";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className="ct-catalog-main">
        <section id="#ct-catalog-section" className="ct-container">
          <div className="ct-search-bar-container">
            <SearchBar></SearchBar>
          </div>
          <div className="ct-catalog-cards-container">
            <div>Test</div>
          </div>
        </section>
      </main>
    </>
  );
}
