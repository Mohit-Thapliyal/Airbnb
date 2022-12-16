import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import axios from "axios";
const https = require("https");

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Mohit Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll p-3 scrollbar-hide -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <div>
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="Wishlist created by Airbnb"
              buttonText="Get Inspired"
            />
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};
export const getStaticProps = async () => {
  const exploreData = await axios
    .get("https://links.papareact.com/pyp", {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
    .then((res) => res.data);
  const cardsData = await axios
    .get("https://links.papareact.com/zp1", {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
    .then((res) => res.data);
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
export default Home;
