import React from "react";
//import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { Card } from "./Components/card";
import { Collapse } from "./Components/collapse";

const container = document.getElementById("root");
const root = createRoot(container);
// index sayfasıyla root ilişkisini sağlıyor.

// ! Functional Component

// function App(){
//     return (
//         <div>
//             <h1>Selam Sinif</h1>
//             <h2>Deneme</h2>
//         </div>
//     );
// }

// ! Class Component

// class App1 extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Selam Sinif</h1>
//                 <h2>Denedim</h2>

//             </div>
//         );
//     }
// }

// ! JSX Kutuphanesi

// const names=["Efe","Metin","Elif","Serpis","Eda"];

// function App(){
//      return(
//          <div>
//              {names.map((name)=>(
//                  <h1 key={name.toString()}>Selam {name}</h1>
//              ))}
//          </div>
//      )
// }

//? Return içine çoklu kullanım varsa bu JSX kutuphanesidir.

// const buttonValue="JSX Button Value";
// const str1 = "Click";
// const str2 = "Button"
// function App() {
//     return (
//       <div>
//         <button
//           className="jsxButton"
//           type="button"
//           style={{
//             padding: "10px",
//             color: "darkblue",
//             backgroundColor: "yellow",
//             border: "2px solid darkblue",
//             margin: "10px",
//           }}
//         >
//           JSX Button <br />
//           <hr />
//           {buttonValue}
//           <br />
//           <hr />
//           {str1.concat(" ", str2)}
//           <br />
//           <hr />
//           {str1 + " " + str2}
//         </button>
//       </div>
//     );
//   }

//! Propslarin kullanimi (=> ifadesinden dolayı ArrowFunction adını alıyor)

const App = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
            <div className="card-group w-100">
                <div className="col-md-4">
                    <Collapse href="collFener">
                <Card
          cardTitle="Eskişehir"
          cardText1="Lorem ipsum I-I"
          cardText2="Lorem ipsum II-I"
          image="https://iaftm.tmgrup.com.tr/604c4a/829/469/0/86/2048/1243?u=https://iftm.tmgrup.com.tr/2021/12/27/fenerbahceden-aciklama-geldi-sike-davasinda-1640611799145.jpg"
        />
        </Collapse>

                </div>
                <div className="col-md-4">
                <Collapse href="collGalata">
                <Card
          cardTitle="Fenerbahçe"
          cardText1="Lorem ipsum I-II"
          cardText2="Lorem ipsum II-II"
          image="https://iaftm.tmgrup.com.tr/0a00ea/829/469/0/0/2048/1156?u=https://iftm.tmgrup.com.tr/2022/04/22/uefadan-galatasaraya-ceza-1650632067956.jpg"
        />
        </Collapse>

                </div>
                <div className="col-md-4">
                <Collapse href="collBesik">
                <Card
          cardTitle="Beşiktaş"
          cardText1="Lorem ipsum I-III"
          cardText2="Lorem ipsum II-III"
          image="https://ortacizgi.com/images/news/iki-transfer-onerdi-besiktasin-gelecegi-icin-cok-iyi-transfer-olabilir.jpg.webp"
        />
        </Collapse>
                </div>
            </div>
            </div>
        </div>

      
    </div>
  );
};

// ReactDOM.render(<App1/>,document.getElementById("root"));
root.render(<App />);
