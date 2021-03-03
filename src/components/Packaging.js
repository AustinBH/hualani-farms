import photo23 from "../media/photo23.jpg";
import photo24 from "../media/photo24.jpg";

function Packaging() {

  return (
    <div>
      <h1>Environmentally Intelligent Packaging</h1>
      <p>
        Hualani Farms uses only glass packaging, which costs more than plastic,
        but is our way of not contributing further to the environmental
        destruction of our Pacific marine environment and the build up of
        plastic waste in our oceans, threatening to irreparably damage healthy
        oceans and coral reefs.
      </p>
      <img src={photo23} alt="koki-beach" />
      <p>
        All of our packaging is recycleable and renewable. We use shipping boxes
        and materials made from 100% recycled post-consumer materials.
      </p>
      <img src={photo24} alt="buddha-with-lemons" />
      <p>
        Because farming with our hearts and our minds is what can, and will,
        make a difference in our world. Because planting a seed, tree, or an
        entire acre makes one an optimist. Because we are all blessed and
        grateful to be able to nurture our small organic farm, growing and
        sharing what we have with the Hāna community and the world.
      </p>
    </div>
  );
}

export default Packaging;
