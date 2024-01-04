import {darken, lighten, spacing} from '@nfq/react-grid';
import Link from 'next/link';
import styled from 'styled-components';

import type {WithChildren} from 'types/global';

interface BaseProps<C extends 'button' | 'link'> {
    /**
     * The type of the component, specified as either 'button' or 'link'. This determines the underlying element or component to be rendered.
     */
    as: C;
    /**
     * The class name for the component. This is used to customize the styling of the component.
     */
    className?: string;
    /**
     * A boolean indicating whether the component is disabled. When `true`, the component will not respond to user interactions and is typically styled differently to indicate its disabled state.
     */
    isDisabled: boolean;
    /**
     * The size of the component, which can be either 'normal' or 'small'. This affects the component's dimensions and is used to align it with different design requirements.
     */
    size: 'icon' | 'normal' | 'small';
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
    /**
     * The variant of the button.
     * This determines the visual variant of the button.
     * Available options: `'primary'` (default) or `'secondary'`.
     *
     * @default 'primary'
     */
    variant: 'primary' | 'secondary';
    /**
     * The width of the component, which can be either 'auto' or 'full'. This property controls the horizontal sizing of the component, allowing it to either fit its content ('auto') or stretch to the full available width ('full').
     */
    width: 'auto' | 'full';
}

type ButtonProps<C extends 'button' | 'link'> = BaseProps<C> & (C extends 'button' ? {
    href?: never;
    onClick?(...args: any): void;
    type: 'button' | 'reset' | 'submit';
} : C extends 'link' ? {
    href: string;
    onClick?(...args: any): void;
    type: never;
} : never);

/**
 * Represents a flexible button component that can function as a regular button or a link.
 * It allows a wide range of customization including size, variant, and width. The component
 * is designed to adapt its behavior and styling based on the provided props.
 *
 * @param props            The properties for configuring the button or link.
 * @param props.as         Specifies whether the component should behave as a 'button' or 'link'.
 * @param props.className  The class name for the component. This is used to customize the styling of the component.
 * @param props.isDisabled Determines if the button/link is disabled.
 * @param props.size       Sets the size of the button/link. Can be 'normal' or 'small'.
 * @param props.testId     A unique identifier for testing purposes.
 * @param props.variant    Determines the visual style of the button/link. Can be 'primary' or 'secondary'.
 * @param props.width      Sets the width of the button/link. Can be 'auto' or 'full'.
 * @param props.href       The URL to navigate to when the component is used as a link. Only applicable for 'link' type.
 * @param props.onClick    The function to call when the button/link is clicked.
 * @param props.type       Specifies the type of the button. Can be 'button', 'reset', or 'submit'. Only applicable for 'button' type.
 * @param props.children   The content to be displayed inside the button/link.
 * @returns The rendered button or link component.
 *
 * @example
 * ```tsx
 * <Button
 *     as="button"
 *     isDisabled={false}
 *     size="normal"
 *     testId="my-button"
 *     variant="primary"
 *     width="auto"
 *     onClick={() => console.log('Clicked')}
 *     type="button"
 * >
 *     Click me
 * </Button>
 * ```
 */
const Button = <C extends 'button' | 'link' = 'button'>(
    {
        as,
        children,
        className,
        href,
        isDisabled,
        onClick,
        size,
        testId,
        type,
        variant,
        width
    }: WithChildren<ButtonProps<C>>
) => (
    <Wrapper
        $size={size}
        $variant={variant}
        $width={width}
        as={as === 'link' ? Link : 'button'}
        className={className}
        data-cy={testId}
        disabled={isDisabled}
        href={href}
        type={type}
        onClick={onClick}
    >
        {children}
    </Wrapper>
    );

Button.displayName = 'Button';
Button.defaultProps = {
    as: 'button',
    isDisabled: false,
    testId: 'Button',
    type: 'button'
};

export {Button};

interface ButtonWrapperProps {
    $size: 'icon' | 'normal' | 'small';
    $variant: 'primary' | 'secondary';
    $width: 'auto' | 'full';
}

const Wrapper = styled.button<ButtonWrapperProps>`
    background-color: ${({
        $variant,
        theme
    }) => ($variant === 'primary' ? theme.colors.primaryActionColor : theme.colors.secondaryActionColor)};
    border: none;
    border-radius: 6px;
    color: ${({
        $variant,
        theme
    }) => ($variant === 'primary' ? theme.colors.primaryActionFontColor : theme.colors.secondaryActionFontColor)};
    cursor: pointer;
    display: inline-block;
    font-family: ${({theme}) => theme.fonts.Lato};
    font-size: 1.6rem;
    font-weight: 500;
    padding: ${({$size, theme}) => {
        if ($size === 'small') {
            return `${spacing(2, theme)} ${spacing(4, theme)}`;
        } else if ($size === 'normal') {
            return `${spacing(3, theme)} ${spacing(6, theme)}`;
        }
        return `${spacing(2, theme)}`;
    }};
    text-align: center;
    text-decoration: none;
    width: ${({$width}) => ($width === 'full' ? '100%' : 'auto')};

    &:hover {
        background-color: ${({$variant, theme}) => ($variant === 'primary' ? lighten(theme.colors.primaryActionColor, 20) : darken(theme.colors.secondaryActionColor, 20))};
        text-decoration: none;
        transition: background-color .3s ease;
    }

    &:disabled {
        background-color: ${({
        $variant,
        theme
    }) => ($variant === 'primary' ? theme.colors.secondaryActionColor : theme.colors.secondaryActionColor)};
        cursor: not-allowed;
        text-decoration: none;
    }
`;