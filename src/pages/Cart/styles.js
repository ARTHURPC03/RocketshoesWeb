import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darken, lighten } from 'polished'

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  #vazio {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    button {
      display: flex;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`
export const EmptyCart = styled.section`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 560px) {
    min-height: 400px;
  }
  svg {
    font-size: 260px;
    color: #f3f3f6;
    position: absolute;
  }
  div {
    z-index: 1;
    text-align: center;
    h2 {
      font-size: 56px;
    }
    p {
      margin: 12px 0 28px;
      font-size: 16px;
    }
  }
`

export const StartShopping = styled(Link)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 180ms ease-in-out;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background: ${lighten(0.04, '#7159c1')};
  }
  &:active {
    background: ${darken(0.04, '#7159c1')};
  }
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`
