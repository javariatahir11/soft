import "./DashboardCenter.css";
import img from "./block.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
function DashboardCenter() {
  return (
    <div className="center">

      {/* HEADER */}
      <div className="topHeader">
        <h2>Overview</h2>
        <span className="today">Today <IoIosArrowDown /></span>
      </div>

      {/* CARDS */}
      <div className="cards">

        <div className="card blue">
          <p>Views</p>
          <div className="cardRow">
            <h3>7,265</h3>
            <span className="green">
              +9.03% <FaArrowTrendUp/>
            </span>
          </div>
        </div>

        <div className="card purple">
          <p>Visits</p>
          <div className="cardRow">
            <h3>3,671</h3>
            <span className="red">
              -0.03% <FaArrowTrendUp/>
            </span>
          </div>
        </div>

        <div className="card light">
          <p>New Users</p>
          <div className="cardRow">
            <h3>256</h3>
            <span className="green">
              +15.03% <FaArrowTrendUp/>
            </span>
          </div>
        </div>

        <div className="card gray">
          <p>Active Users</p>
          <div className="cardRow">
            <h3>2,318</h3>
            <span className="green">
              +6.08% <FaArrowTrendUp/>
            </span>
          </div>
        </div>

      </div>

      {/* CHARTS */}
      <div className="charts">

        <div className="bigChart">
          <img src={img} alt="chart"/>
        </div>

        <div className="website">
          <h4>Traffic by Website</h4>

          <div className="site">
            <p>Google</p>
             <div className="google">
              <span></span>
              <span></span>
              <span></span>
             </div>
          </div>
          

          <div className="site">
            <p>YouTube</p>
             <div className="google1">
              <span></span>
              <span></span>
              <span></span>
             </div>
          </div>
          


           <div className="site">
            <p>Instagram</p>
             <div className="google">
              <span></span>
              <span></span>
              <span></span>
             </div>
          </div>
          


          <div className="site">
             <p>Pinterest</p>
             <div className="google1">
              <span></span>
              <span></span>
              <span></span>
             </div>
          </div>

         

          <div className="site">
             <p>Facebook</p>
             <div className="google">
              <span></span>
              <span></span>
              <span></span>
             </div>
          </div>

         
          
          <div className="site">
             <p>Twitter</p>
             <div className="google">
              <span></span>
              <span></span>
              <span></span>
             </div>
          </div>
          

        </div>

      </div>

      {/* BOTTOM */}
      <div className="bottom">

        <div className="device">
         <div className="device">
  <h4>Traffic by Device</h4>

  <div className="deviceChart">

    <div className="yAxis">
      <span>30K</span>
      <span>20K</span>
      <span>10K</span>
      <span>0</span>
    </div>

    <div className="bars">

      <div className="barBox">
        <div className="bar one"></div>
        <p>Linux</p>
      </div>

      <div className="barBox">
        <div className="bar two"></div>
        <p>Mac</p>
      </div>

      <div className="barBox">
        <div className="bar three"></div>
        <p>iOS</p>
      </div>

      <div className="barBox">
        <div className="bar four"></div>
        <p>Windows</p>
      </div>

      <div className="barBox">
        <div className="bar five"></div>
        <p>Android</p>
      </div>

      <div className="barBox">
        <div className="bar six"></div>
        <p>Other</p>
      </div>

    </div>

  </div>
</div>
        </div>

        <div className="location">
         <div className="location">
  <h4>Traffic by Location</h4>

  <div className="donutBox">
    <div className="donut"></div>

    <div className="legend">
      <div className="item">
        <span className="dot us"></span>
        <p> States</p>
        <b>52.1%</b>
      </div>

      <div className="item">
        <span className="dot ca"></span>
        <p>Canada</p>
        <b>22.8%</b>
      </div>

      <div className="item">
        <span className="dot mx"></span>
        <p>Mexico</p>
        <b>13.9%</b>
      </div>

      <div className="item">
        <span className="dot other"></span>
        <p>Other</p>
        <b>11.2%</b>
      </div>
    </div>
  </div>
</div>
        </div>

      </div>

    </div>
  );
}

export default DashboardCenter;