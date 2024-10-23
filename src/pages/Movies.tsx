import Banner from "@/components/Banner/Banner";
import Card from "@/components/media-card/Card";
import RowItem from "@/components/media-card/RowItem";
import { Accordion } from "@/components/ui/accordion";
import { MovieCardData } from "@/helpers/urls";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="flex">
          <div>
            <Accordion type="single"></Accordion>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((_, i) => (
                <Card
                  date=""
                  image="/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
                  title=""
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
