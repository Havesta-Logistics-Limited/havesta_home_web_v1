

const RouteWrapper = ({ component: Component, hero }) => {
  return <Component hero={hero} />;
};

export default RouteWrapper;
