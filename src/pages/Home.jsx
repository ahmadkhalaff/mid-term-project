import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import CategoryCard from "../components/CategoryCard";
import Brands from "../components/Brands";
import NewsLetter from "../components/NewsLetter";
import './HomeStyle.css'

function Home() {

  const Services = [
    
  ];

  const Categories = [
    {
      backgroundimg: "image-shop2.jpg",
      title: "רחל",
      link: "האגדה רחל מאופקים",
    },
    {
      backgroundimg: "imagesell2.jpg",
      title: "ברהנו",
      link: "כתב השטח מס #1",
    },
    {
      backgroundimg: "image-create2.jpg",
      title: "ביידן",
      link: "one word DON'T..",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="parent_">
        {Services.map((service, key) => (
          <ServiceCard
            key={key}
            img={service.img}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>

      <div className="parent_">
        {Categories.map((category, key) => (
          <CategoryCard
            key={key}
            backgroundimg={category.backgroundimg}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>

      <div className="parent_banner">
        <img
          src="/small-banner.jpg"
          alt=""
          className="h-[500px] "
          style={{ objectFit: "cover", height: "500px", width: "100%" }}
        />

        <div className="right_banner ">
          <h6 className="bannerheading">'קולקציית מלחמרצ</h6>
          <p className="paragraphtext">
            זמנים לא פשוטים בלשון המעטה חולצת רלוונטיות לתקופה קשה זו נקווה לימים שקטים ובטוחים יותר .
          </p>
          <button className="custombutton">Shop collection</button>
        </div>
      </div>

      <Brands />
      <NewsLetter />
    </div>
  );
}

export default Home;
