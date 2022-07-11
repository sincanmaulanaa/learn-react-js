import Navigation from "./components/Navigation.js";
const root = document.getElementById("root");
/**
		// membuat element h1 dengan children dan className
		const p1 = React.createElement('p', {
			children: "Sincan Maulana"
		});

		const p2 = React.createElement('p', {
			children: "Aldi Indra"
		});

		const element = React.createElement(React.Fragment, {
			className: 'container',
			children: [p1, p2]
		});

		// render element di root menggunakan ReactDM.render()
		ReactDOM.render(element, root);
		**/
// React Nested & Fragmet

/**
		const listItem = React.createElement('li', {
			children: "Apel"
		});

		const listItem2 = React.createElement('li', {
			children: "Mangga"
		});

		const listItem3 = React.createElement('li', {
			children: "Jeruk"
		});

		const unorderedList = React.createElement('ul', {
			className: 'list'
		}, [listItem, listItem2, listItem3]);

		ReactDOM.render(unorderedList, root);
		**/
//JSX & Babel

/** const name = 'Sincan Maulana';
	  const className = 'heading';
      const element = <h1 className={className}>Halo {name}</h1>;
	  const style = {
		width: 200,
		padding: 20,
		border: '1px solid black',
		borderRadius: 5
	  }

	  const image = <img src="https://thumb.viva.co.id/media/frontend/thumbs3/2020/12/04/5fc9a4ab3d341-deteksi-gambar_665_374.jpg" style={style}/>;

      ReactDOM.render(image, root);
	  **/
// React Component

/**
	  function Halo(props) {
		return <p>Halo {props.name}</p>;
	  }

	  const element = (
		<>
	  		<Halo name="naufall"/>
	  		<Halo name="sincan"/>
	  		<Halo name="ishaq"/>
	  	</>
	  );

	  ReactDOM.render(element, root)
	  **/
// Rendering
// function tick() {
//   const element = (
//     <div>
//       <h1>Jam skr</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, root);
// }
// setInterval(function () {
//   tick();
// }, 1000);
// inline style
// const element = (
//   <div
//     style={{
//       width: 200,
//       padding: 20,
//       border: "1px solid black",
//       borderRadius: 5,
//       height: 200,
//     }}
//   >
//     <h1>Halo Sincan</h1>
//   </div>
// );
// ReactDOM.render(element, root);
// external style
// const className = "box";
// const element = (
//   <div className={className}>
//     <h1>Halo sincan</h1>
//   </div>
// );
// function hmm(msg) {
//   alert(msg);
// }
// const element = <button onClick={hmm.bind(this, "halo")}>Click Me</button>;
// React state
// const App = () => {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <span>{count}</span>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// };
// React Lifecycle
// const App = () => {
//   const [klik, setKlik] = React.useState(false);
//   const [count, setCount] = React.useState(0);
//   React.useEffect(() => {
//     console.log(document.querySelector("h1"));
//   }, []);
//   return (
//     <div>
//       <h1>Ini judul</h1>
//       <button
//         onClick={() => {
//           setKlik(true);
//           console.log(klik);
//         }}
//       >
//         Klik disini
//       </button>
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//       <span>{count}</span>
//     </div>
//   );
// };
// conditional rendering
// function App() {
//   const [login, setLogin] = React.useState(false);
//   return (
//     <div>
//       <h1>Aplikasi</h1>
//       <p>{login && "Saya sudah login"}</p>
//       <button
//         onClick={() => {
//           setLogin(true);
//         }}
//       >
//         {login ? "Logout gih" : "login"}
//       </button>
//     </div>
//   );
// }
// DOM manipulation
// const App = () => {
//   const [login, setLogin] = React.useState(false);
//   const judulRef = React.useRef(null);
//   console.log(judulRef);
//   React.useEffect(() => {
//     setTimeout(() => {
//       judulRef.current.textContent = "Sudah Login";
//     }, 2000);
//   });
//   return (
//     <div>
//       <h1 ref={judulRef}>Belum Login</h1>
//     </div>
//   );
// };
// list
// const App = () => {
//   const fruits = ["Apple", "Orange", "Grape", "Lengkeng"];
//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <li key={fruit}>{fruit}</li>
//       ))}
//     </ul>
//   );
// };
// form
// function App() {
//   const namaRef = React.useRef(null);
//   const umurRef = React.useRef(null);
//   const submitted = (event) => {
//     event.preventDefault();
//     const nama = namaRef.current.value;
//     const umur = umurRef.current.value;
//     console.log("Nama: ", nama);
//     console.log("Umur: ", umur);
//   };
//   return (
//     <form onSubmit={submitted}>
//       <div>
//         <label htmlFor="name">Nama: </label>
//         <input type="text" id="name" ref={namaRef} />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="umur">Umur: </label>
//         <input type="text" id="umur" ref={umurRef} />
//       </div>
//       <br />
//       <button type="submit">Kirim</button>
//     </form>
//   );
// }
// form with control component
// const App = () => {
//   const [name, setName] = React.useState("");
//   const kirim = "kirim";
//   const submitted = (event) => {
//     event.preventDefault();
//     console.log("Nama: ", name);
//   };
//   return (
//     <div>
//       <Navigation />
//       <form onSubmit={submitted}>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(event) => {
//               setName(event.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <button type="submit">{kirim}</button>
//       </form>
//     </div>
//   );
// };
// Data fetching
// const App = () => {
//   React.useEffect(function () {
//     async function getData() {
//       const request = await fetch(
//         "https://jadwal-shalat-api.herokuapp.com/cities"
//       );
//       console.log(request);
//       const response = await request.json();
//       console.log(response);
//     }
//     getData();
//   }, []);
//   return <h1>data fetching</h1>;
// };
// const App = () => {
//   React.useEffect(function () {
//     async function getData() {
//       const request = await fetch(
//         "https://jadwal-shalat-api.herokuapp.com/cities"
//       );
//       console.log(request);
//       const response = await request.json();
//       console.log(response);
//     }
//     getData();
//   });
// };

const App = () => {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch("https://jadwal-shalat-api.herokuapp.com/cities");
      console.log(request);
      const response = await request.json();
      console.log(response);
    }

    getData();
  });
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);