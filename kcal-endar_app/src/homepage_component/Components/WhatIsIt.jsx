import Card from 'react-bootstrap/Card';
import '../Style/WhatIsIt.css';
import image from '../../-assets/media/image1.png';
import '../../-common/colors.css';
import '../../-common/global.css';
import '../../-common/media-query.css';

export function WhatIsIt() {
    return (
        <div className='whatisit-container'>
            <Card bsPrefix='card' className='whatisit-card'>
                <Card.Body className='whatisit-card-body'>
                    <div className='whatisit-image'>
                        <img src={image} alt='KCALendar' />
                    </div>
                    <div className='whatisit-text'>
                        <Card.Title className='whatisit-title'>Che cos'è KCALendar?</Card.Title>
                        <Card.Text>
                            <p>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <p>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}