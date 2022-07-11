const Navigation = () => {
  const navItems = ["Home", "About Us", "Contact", "Services"];
  const style = {
    display: "flex",
    fontSize: 12,
    listStyle: "none",
    listItem: {
      padding: "12px 16px",
      hyperlink: {
        textDecoration: "none",
        color: "#333",
      },
    },
    backgroundColor: "#ffa",
    fontFamily: "Arial",
  };
  return (
    <div>
      <ul style={style}>
        {navItems.map((item) => (
          <li key={item} style={style.listItem}>
            <a href={`#${item}`} style={style.listItem.hyperlink}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
