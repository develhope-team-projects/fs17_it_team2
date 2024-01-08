import Carousel from 'react-bootstrap/Carousel';
import image0 from '../../-assets/media/image0.png';
import image1 from '../../-assets/media/video_1.gif';
import image2 from '../../-assets/media/video_2.gif';
import '../Style/CarouselLandingpage.css';
import '../../-common/colors.css';
import '../../-common/media-query.css';
import '../../-common/global.css';

export function CarouselLandingpage() {
    return (
        <Carousel bsPrefix='carousel'className='carousel-container'>
            <Carousel.Item interval={7000} bsPrefix='carousel-item' className='carousel-item'>
                <img src={image0} alt='' className="carousel-image" />
                <Carousel.Caption>
                    <div id='carousel-text'>
                        Frase motivazionale sull'utilizzo di KCALendar.
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000} bsPrefix='carousel-item' id="carousel-style">
                <img src={image1} alt="Kcalendar" className="carousel-image" />
                <Carousel.Caption>
                    <div id='carousel-text'>
                        Qualcosa del tipo "non servirà più segnarsi le cose sul calendario perchè lo farà KCALendar per te!"
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000} bsPrefix='carousel-item' id="carousel-style">
                <img src={image2} alt="Kcalendar" className="carousel-image" />
                <Carousel.Caption>
                    <div id='carousel-text'>
                        Sempre disponibile i nostri dietologi per aiutarti nei momenti no.
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}