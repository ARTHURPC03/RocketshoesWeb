import styled from 'styled-components'
import { lighten } from 'polished'

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border-width: 7px;
    border-style: solid;
    border-color: rgb(11, 10, 13);
    border-image: initial;
    transition: all 0.2s ease 0s;

    &:hover {
      transform: translateY(-7px);
      border-color: #7159c1;
    }

    img {
      align-items: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      /* transition: background 0.2s; */
      transition: all 0.3s ease 0s;

      &:hover {
        /* background: ${lighten(0.25, '#7159c1')}; */
        color: black;
        background: transparent;
        border-color: black;
        box-shadow: black 0px 0px 0px 4px inset;
        border-radius: inherit;
        transition: all 0.35s cubic-bezier(0.75, 0, 0.125, 1) 0s;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`
