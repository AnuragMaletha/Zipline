import React from 'react'
import "./Testimonials.css"

function Testimonials() {
    return (
        <div>
            <div class="slider">
            <div className='box'>
                <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav" />
                <input type="radio" name="slider" title="slide2" class="slider__nav" />
                <input type="radio" name="slider" title="slide3" class="slider__nav" />
                <input type="radio" name="slider" title="slide4" class="slider__nav" />
                <div class="slider__inner">
                    <div class="slider__contents"><i class="slider__image fa fa-codepen"></i>
                        <h2 class="slider__caption">JITENDRA</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                    <div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
                        <h2 class="slider__caption">SANJAY RAWAT</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                    <div class="slider__contents"><i class="slider__image fa fa-television"></i>
                        <h2 class="slider__caption">ASHISH CHAUHAN</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                    <div class="slider__contents"><i class="slider__image fa fa-diamond"></i>
                        <h2 class="slider__caption">diamond</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials