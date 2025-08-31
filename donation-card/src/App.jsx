import Header from "./Header";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";

let App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Card title="Donation Card" description="This is a donation card and I like to donate." />
      <Card title="Legit Card" description={"This is a legit card."} />
      <Footer />
    </div>
  );
};
export default App;
