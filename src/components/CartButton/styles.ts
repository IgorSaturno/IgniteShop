import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    border: 'none',
    position: 'relative',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },

    cursor: 'pointer',
    background: '$gray800',
    color: '$gray500',

    variants: {
        color: {
            gray: {
                background: '$gray800',
                color: '$gray500',
            },
            green: {
                background: '$green500',
                color: '$white',

                "&:not(:disabled):hover": {
                    backgroundColor: "$green300",
                  },
            },
        },

        size: {
            medium: {
                height: '3rem',
                width: '3rem',

                svg: {
                    fontSize: 24,
                },
            },
            large: {
                height: '3.5rem',
                width: '3.5rem',

                svg: {
                    fontSize: 32,
                },
            },
        },
    },

    defaultVariants: {
        color: 'gray',
        size: 'medium',
    }
})