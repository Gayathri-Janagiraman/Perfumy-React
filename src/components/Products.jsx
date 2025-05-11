//Products Component
import one from "../assets/images/p1.jpg";
import two from "../assets/images/p2.jpg";
import three from "../assets/images/p3.jpg";
function Products(){
  return(
     <div class="products">
            <div class="box">
            <img src={one} alt="One"></img>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia totam pariatur velit quidem sint natus sunt sequi porro aspernatur accusantium?</p>
        </div>

        <div class="box">
            <img src={two} alt="Two"></img>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia totam pariatur velit quidem sint natus sunt sequi porro aspernatur accusantium?</p>
        </div>

        <div class="box">
            <img src={three} alt="Three"></img>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia totam pariatur velit quidem sint natus sunt sequi porro aspernatur accusantium?</p>
        </div>
    </div>
  )
}
export default Products;