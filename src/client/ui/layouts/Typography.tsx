import styled from 'styled-components';

import type {Colors} from 'UI/utils/globalStyles';

/**
 * The H1 component is a styled heading level 1 (`<h1>`) component.
 *
 * @param props       The props of the component.
 * @param props.theme The theme of the component.
 * @returns              A React component.
 *
 * @example
 * ```tsx
 * <H1>Hello, World!</H1>
 * ```
 */
export const H1 = styled.h1`
    font-family: ${({theme}) => theme.fonts.Lato};
    font-size: 6rem;
    font-weight: normal;
    line-height: 8.4rem;
    margin: 0;
    padding: 0;
`;

/**
 * The H2 component is a styled heading level 2 (`<h2>`) component.
 *
 * @param props       The props of the component.
 * @param props.theme The theme of the component.
 * @returns              A React component.
 *
 * @example
 * ```tsx
 * <H2>Hello, World!</H2>
 * ```
 */
export const H2 = styled.h2`
    font-family: ${({theme}) => theme.fonts.Lato};
    font-size: 4rem;
    font-weight: normal;
    line-height: 5.6rem;
    margin: 0;
    padding: 0;
`;

/**
 * The H3 component is a styled heading level 3 (`<h3>`) component.
 *
 * @param props       The props of the component.
 * @param props.theme The theme of the component.
 * @returns              A React component.
 *
 * @example
 * ```tsx
 * <H3>Hello, World!</H3>
 * ```
 */
export const H3 = styled.h3`
    font-family: ${({theme}) => theme.fonts.Lato};
    font-size: 2.8rem;
    font-weight: normal;
    line-height: 3.9rem;
    margin: 0;
    padding: 0;
`;

export const H4 = styled.h4`
    font-family: ${({theme}) => theme.fonts.Lato};
    font-size: 1.8rem;
    padding-left: 1rem;
`;

interface PProps {
    /**
     * Determines the horizontal alignment of the paragraph.
     * - `'center'`: Center alignment.
     * - `'left'`: Left alignment.
     * - `'right'`: Right alignment.
     * If `undefined`, the paragraph will inherit the text alignment from its parent.
     */
    $align?: 'center' | 'left' | 'right';
    $size?: 'normal' | 'small';
}

/**
 * The P component is a styled paragraph (`<p>`) component.
 *
 * @param props        The props of the component.
 * @param props.theme  The theme of the component.
 * @param props.$align Determines the horizontal alignment of the paragraph.
 * @param props.$size  Determines the size of the paragraph.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <P $align="center">
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </P>
 * ```
 */
export const P = styled.p<PProps>`
    font-family: ${({theme}) => theme.fonts.Lato};
    font-size: ${({$size}) => ($size === 'small' ? '1rem' : '1.4rem')};
    line-height: ${({$size}) => ($size === 'small' ? '1.3rem' : '2rem')};
    margin: 0;
    padding: 0;
    text-align: ${({$align}) => $align ?? 'inherit' as const};
`;

export interface ColorProps {
    /**
     * The color value to be applied to the text content.
     * The possible colors are determined by the pallette defined in the theme.
     */
    $color: Colors;
}

/**
 * The Color component is a styled `<span>` component.
 *
 * @param props        The props of the component.
 * @param props.$color The color value to be applied to the text content.
 * @returns            A React component.
 *
 * @example
 * ```tsx
 * const App = () => {
 *     const colors = useThemeColors();
 *
 *     return <Color $color={colors.primaryFontColor}>Hello, World!</Color>;
 * };
 * ```
 */
export const Color = styled.span<ColorProps>`
    color: ${({$color}) => $color};
    transition: color 0.2s ease-in-out;
`;