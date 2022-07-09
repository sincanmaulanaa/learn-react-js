const root = document.getElementById("root");
console.log(root);
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

const App = () => {
  const [klik, setKlik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(document.querySelector("h1"));
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setKlik(true);
      console.log(klik);
    }
  }, "Klik disini"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, count));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);