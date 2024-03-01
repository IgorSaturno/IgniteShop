import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    border: 'none',
    position: 'relative',
    cursor: 'pointer',
    background: '$gray800',
    color: '$gray500',
    height: '3rem',
    width: '3rem',
    
    svg: {
        fontSize: 24,
    }
})