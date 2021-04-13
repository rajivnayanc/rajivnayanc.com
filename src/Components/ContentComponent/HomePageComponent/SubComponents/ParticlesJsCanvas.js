import React from 'react';
import Particles from 'react-particles-js';
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
            params={{
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
                    line_linked:{
                        color:{
                            value: color
                        }
                    }
                },
            }}
        />
    )
}

export default ParticlesJsCanvas
