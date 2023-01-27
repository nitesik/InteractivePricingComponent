import { AlertClassKey, Slider, Switch  } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import sliderBackground from "./Images/icon-slider.svg";
import checks from "./Images/icon-check.svg";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

import "./Styles.css";

const CustomSlider = styled(Slider)({
  // color: "hsl(224, 65%, 95%)",
  height: 5,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: "hsl(174, 86%, 45%)"
  },

  '& .MuiSlider-thumb': {
    height: 32,
    width: 32,
    backgroundColor: 'hsl(174, 86%, 45%)',
    "&:active": {
      boxShadow: "0 0 20px 5px hsl(174, 86%, 45%)"
    },
    backgroundImage: `url(${sliderBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  }  

}) as typeof Slider;

const CustomToggle = styled(Switch)({
  padding: ".1px",
  borderRadius: "500px",
  '& .Mui-checked + .MuiSwitch-track': {
    backgroundColor: "hsl(174, 86%, 45%) !important",
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: "white",
    width: 20,
    height: 20
  },
  '& .MuiSwitch-track': {
    backgroundColor: "grey"
  },
  
}) as typeof Switch;

function Home() {

  const [value, setValue] : any = useState(16);
  const [checked, setChecked] : any = useState(false);
  const [width, setWidth] : any = useState(window.innerWidth);

  function GetWidth() {
    setWidth(window.innerWidth);
  }

  function handleSlider(event : any) {
    setValue(event.target.value);
  }
  
  useEffect(() => {
    
    window.addEventListener("resize", GetWidth);
  }, [width, value]);
  
  function DesktopContent() {

    return (
      <div className="content">
        <div className="main-component">
          <div className="upper">
            <div className="text" style={{letterSpacing: "2px"}}>100K PAGEVIEWS</div>
            <div style={{display: "flex", alignItems: "center"}}>
              <div className="money">${value}</div>
              <div className="text">/ month</div>
            </div>
          </div>
          <div className="slider">
            <CustomSlider defaultValue={value} onChange={handleSlider} />
          </div>
          <div className="billing">
            <div className="text">Monthly billing</div>
            <div className='toggle'>
              <CustomToggle checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
              <div className="text">Yearly billing</div>
              <div className="discount">25% discount</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <div className="footer-components">
              <img src={checks} />
              <div className="text">Unlimited Websites</div>
            </div>
            <div className="footer-components">
              <img src={checks} />
              <div className="text">100% data ownership</div>
            </div>
            <div className="footer-components">
              <img src={checks} />
              <div className="text">Email reports</div>
            </div>
          </div>
          <div className="right">
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    )
  }
  
  function MobileContent() {

    return (
      <div className="content">
        <div className="upper">
          <div className="text" style={{letterSpacing: "2px"}}>100K PAGEVIEWS</div>
          <div className="slider">
            {/* <CustomSlider min={0} max={50} value={value} onChange={handleSlider} /> */}
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <div className="money">${value}</div>
            <div className="text">/ month</div>
          </div>
          <div className="billing">
            <div className="text">Monthly billing</div>
            <div className='toggle'>
              <CustomToggle checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
              <div className="text">Yearly billing</div>
              <div className="discount">-25%</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <div className="footer-components">
              <img src={checks} />
              <div className="text">Unlimited Websites</div>
            </div>
            <div className="footer-components">
              <img src={checks} />
              <div className="text">100% data ownership</div>
            </div>
            <div className="footer-components">
              <img src={checks} />
              <div className="text">Email reports</div>
            </div>
          </div>
          <div className="right">
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container">
      <div className="logo">
        <div className="title">Simple, traffic-based pricing</div>
        <div className="text"><div>Sign-up for our 30 day trial.</div> <div>No credit card required.</div></div>
      </div>
      {width > 737 ? <DesktopContent /> : <MobileContent />}
       
    </div>
  )
}

export default Home;