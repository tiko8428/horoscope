import Header from "./header";

const styels = {
  margin: "16px",
  color: "#ccc",
  fontSize: "25px",
  border: "1px solid #DDD"
};

export const Layout = props => (
  <div style={styels}>
    <Header />
    {props.children}
  </div>
);

export const wrapperLayout = Component => {
  return () => (
    <div style={styels}>
      <Header />
      <Component />
    </div>
  );
};
