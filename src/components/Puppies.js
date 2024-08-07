import one from "../images/assets/p2.jpeg"
import two from "../images/assets/p3.jpeg"
import three from "../images/assets/p4.jpeg"
//PUPPIES PART
function Puppies(){
    return(
      <div className="puppies">
      <div className="puppies__container">
          <div className="puppies__card">
              <img src={one} alt="puppy1" style={{width: "200px",height: "200px"}}></img>
              <h2 className="name">Yorkshire Terrier</h2>
              <p>The Yorkshire Terrier, often known as the "Yorkie," is a small but feisty and affectionate breed known for its silky, long coat and energetic personality.</p>
              <p><span style={{textDecoration: "line-through"}}>$1500</span><b>$999</b></p>
          </div>
          <div className="puppies__card">
              <img src={two} alt="puppy1" style={{width: "200px",height: "200px"}}></img>
              <h2 className="name">Beagle</h2>
              <p>The Beagle is a small, friendly, and curious hound breed, known for its keen sense of smell and love for exploring.</p>
              <p><span style={{textDecoration: "line-through"}}>$1500</span><b>$999</b></p>
          </div>
          <div className="puppies__card">
              <img src={three} alt="puppy1" style={{width: "200px",height: "200px"}}></img>
              <h2 className="name">Golden Retriever</h2>
              <p>The Golden Retriever is a friendly, intelligent, and loyal breed, renowned for its gentle temperament and beautiful golden coat.</p>
              <p><span style={{textDecoration: "line-through"}}>$1500</span><b>$999</b></p>
          </div>
      </div>
  </div>
    )
  }

export default Puppies