import React from "react";
import CountUp from "react-countup";
import "./statistic.css";
import VisibilitySensor from "react-visibility-sensor";

function Statistic() {
   

    return (
        <section className="count"> 
            <div className="hero">
                <div className="rgba-hero">
                    <div className="wor">
                        <div className="col">
                            <div className="counter-box">
                                <CountUp end={420} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <h4>UMUMIY HAMKORLAR O'ZBEKISTON VA CHET DAVLATLARDA</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-box">
                                <CountUp end={350} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <h4>MALAKALI MUTAXASSISLAR</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-box">
                                <CountUp end={90} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <h4>QURILISHDAGI MUKOFOT VA DIPLOMLAR</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-box">
                                <CountUp end={7500} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <h4>TAMIRLAB TUGATILGAN OB'EKTLAR</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistic;
