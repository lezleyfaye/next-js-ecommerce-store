export default function singleBeerPage(props) {
  console.log(props);
  return <h1>{props.params.singleBeer}</h1>;
}
