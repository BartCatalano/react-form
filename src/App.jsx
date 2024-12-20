import { useState } from "react";
 

function App() {
const  [lista, setLista] = useState ([]);

  return (
    <>
      <div className="container">
        <section>
 <h2>Articoli inseriti</h2>
 <div className="row row-cols-2 rowcols-lg-3">
 {lista.length === 0 ? (
            <p>Nessun articolo presente</p>
          ) : (
    lista.map((curItem) =>(
        <div className="col" key={curItem.id}>
          <div className="card">
            <div className="card-body">
              <h4>{curItem.title}</h4>
              <p>{curItem.description}</p>
            </div>
          </div>
        </div>
      ))
      
          )}
  </div>
  </section>
  <section>
    <h3>aggiungi articolo</h3>
    <form action=""></form>
  </section>
 </div>
    </>
  );
}

export default App
