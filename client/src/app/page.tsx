'use client'

import styled from "styled-components"

export default function Home() {

  return (
    <SMain className="wrapper">
      <div>
        <p>league is coming soon</p>
      </div>
    </SMain>
  )
}

const SMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: orange;
    }
  }
`;