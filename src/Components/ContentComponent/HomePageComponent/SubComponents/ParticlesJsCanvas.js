import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
const ParticleCanvas  = styled(Particles)`
    position: fixed;
    top:0;
    width:100%;
    height:100vh;
    background:transparent;
    display: block;
    
    filter: blur(2px);
    -webkit-filter: blur(2px);
`;
function ParticlesJsCanvas(props) {
    const color = props.theme==="dark"?"#FFFFFF":"#000000";
    return (
        <ParticleCanvas
            options={{
                particles: {
                    number: {
                    value: 100,
                        density: {
                            enable: true,
                            value_area: 1000,
                        }
                    },
                    color: {
                        value: color
                    },
                    size: {
                        value: 0
                    },
                    links: {
                        enable: true,
                        color: color,
                        distance: 150,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2
                    }
                },
            }}
        />
    )
}

export default ParticlesJsCanvas
