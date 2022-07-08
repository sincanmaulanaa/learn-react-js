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
const element = (
  <div
    style={{
      width: 200,
      padding: 20,
      border: "1px solid black",
      borderRadius: 5,
      height: 200,
    }}
  >
    <h1>Halo Sincan</h1>
  </div>
);

ReactDOM.render(element, root);
