import React from "react";
import CountUp from "react-countup";
import "./statistic.css";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

function Statistic() {
    const { t } = useTranslation(["home"]);


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
                                <h4>{t("count1")}</h4>
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
                                <h4>{t("count2")}</h4>
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
                                <h4>{t("count3")}</h4>
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
                                <h4>{t("count4")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistic;
