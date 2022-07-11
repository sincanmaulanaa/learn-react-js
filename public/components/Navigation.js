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
        color: "#333"
      }
    },
    backgroundColor: "#ffa",
    fontFamily: "Arial"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    style: style
  }, navItems.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: style.listItem
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${item}`,
    style: style.listItem.hyperlink
  }, item)))));
};

export default Navigation;