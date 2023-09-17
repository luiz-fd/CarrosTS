import "./styles.css";

export default function SearchBar() {
  return (
    <>
      <form action="" className="ct-search-bar">
        <input className="ct-form-control" type="text" placeholder="Digite sua busca"></input>
        <button className="ct-search-bar-submit" type="submit">Buscar</button>
      </form>
    </>
  );
}
