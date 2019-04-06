import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

// TODONOW: which are the most used devices? -> pie chart
// https://www.highcharts.com/demo/pie-legend
export const MostUsedDevices = view(() => (
    <Wrapper>
        Most used devices, pie chart
    </Wrapper>
));
