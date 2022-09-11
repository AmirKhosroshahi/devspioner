import React from 'react';
import Styles from './Advice.module.scss';


const Advice = () => {
    return (
        <div className={Styles.AdviceBox}>
            <div>
                <div>
                    <h5>
                        Driving your business forward with strong products
                    </h5>
                </div>
                <div>
                    <p>
                        We are a full-service digital agency that builds immersive user experience. Our team creates an
                        exceptional visualization and thought-out functionality. We believe, our clients deserve to be
                        remarkable in their business. The studio develops the products people appreciate all around the
                        world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Advice;
