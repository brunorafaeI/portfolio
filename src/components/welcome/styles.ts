import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 52rem;
  color: #E2E2E2;

  background: linear-gradient(to right, var(--v-primary-base), var(--v-secondary-base));
  padding: 2rem 2.6rem;
  border-radius: 1.2rem;
  opacity: 75%;

  h1 {
    font-size: 2.6rem;
    font-weight: var(--font-medium);
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: var(--font-regular);

    &:first-child {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
  `

export { Container }
