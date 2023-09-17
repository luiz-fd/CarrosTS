import "./styles.css";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import Card from "../../Components/Card";


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
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </section>
      </main>
    </>
  );
}
