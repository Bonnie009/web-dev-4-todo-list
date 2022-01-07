import React from "react";
import styled from "styled-components";

const ProgressBar = () => {
    return (
        <div id="container">
        </div>
    );
};

var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#000000',
    trailColor: '#000FFF',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},

    text: {
        style: {
            color: '#OOOOOO',
            position: 'absolute',
            right: '0',
            top: '25px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
        },
        from: {color: '#000000'},
        to: {color: '#000FFF'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value () *100));
        }
    });

    bar.animate(1.0);


export default ProgressBar;