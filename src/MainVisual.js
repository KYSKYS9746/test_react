import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "./MainVisual.scss";

const MainVisual = () => {

    const [slideNum, setSlideNum] = useState(0);

    const slide = useRef(null);



    const option = {
        arrows: false,
        // dots: true,
        afterChange: (idx) => {
            setSlideNum(idx);
        }
    }

    const slideData = [
        {tit:"title01", desc:"아무거나 써보자 1"},
        {tit:"title02", desc:"아무거나 써보자 2"},
        {tit:"title03", desc:"아무거나 써보자 3"},
        {tit:"title04", desc:"아무거나 써보자 4"},
        {tit:"title05", desc:"아무거나 써보자 5"},
    ]
    return (
        <div className="MainVisual">
            <Slider {...option} className="Main_visual_slide" ref={slide}>
                {
                    slideData.map(  (it,idx)=> {
                        return (
                            <div className={'itm itm0${idx + 1} ${idx == slideNum ? "on" : ""}'}>
                                <div className="slg">
                                    <strong>{it.tit}</strong>
                                    <p>
                                        {it.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                    }
            </Slider>
            <div className="num">
            {slideNum + 1}  / {slideData.length}
            </div>
            <div className="arrows">
                <button className="prev" onClick={()=> slide.current.slickPrev()}>prev</button>
                <button className="next" onClick={()=> slide.current.slickNext()}>next</button>
            </div>
            <ul className="dots">
                {
                    slideData.map( (it,idx)=> {
                        return (
                            <li className={'${idx == slideNum ? "on" : ""}'}>
                                <button onClick={()=> slide.current.slickGoTo(idx)}>{idx + 1}</button>
                            </li>
                        )
                    })
                }
            </ul>
            {console.log(slide.current)}
        </div>
    )
}

export default MainVisual;