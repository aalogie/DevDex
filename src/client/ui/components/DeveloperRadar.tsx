import {
    Chart as ChartJS,
    Legend,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip
} from 'chart.js';
import {Radar} from 'react-chartjs-2';
import styled from 'styled-components';

import type {ChartOptions} from 'chart.js';
import type {Developer} from 'ServerDomain/entities/Developer';

ChartJS.register(
    Legend,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip
);

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The information of a developer that are needed to be stored for each added developer.
     */
    details: Developer;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `DeveloperRadar` Component.
 *
 * @param props         The component props.
 * @param props.testId  A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @param props.details The information of a developer that are needed to be stored for each added developer.
 * @returns A React element representing the `DeveloperRadar` component.
 *
 * @example
 * ```tsx
 * const MyComponent = <DeveloperRadar testId="myTestId">MyComponent</DeveloperRadar>;
 * ```
 */
const DeveloperRadar = ({details, testId}: ComponentProps) => {
    const data = {
        datasets: [
            {
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                data: Object.values(details.skills),
                label: 'Skills',
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75,192,192,1)'
            }
        ],
        labels: Object.keys(details.skills)
    };

    const options: ChartOptions<'radar'> = {
        scales: {
            r: {
                angleLines: {display: false},
                max: 99,
                min: 50,
                ticks: {
                    display: false,
                    stepSize: 3
                },
                type: 'radialLinear'
            }
        }
    };


    return (
        <Wrapper data-cy={testId}>
            <Radar data={data} options={options} />
        </Wrapper>
    );
};

DeveloperRadar.displayName = 'DeveloperRadar';
DeveloperRadar.defaultProps = {testId: 'DeveloperRadar'};

export {DeveloperRadar};

const Wrapper = styled.div`
    width: 40dvw;
`;