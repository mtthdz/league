'use client'

import styled from "styled-components"

export default function Home() {

  return (
    <SMain>
      <div>
        <p>league (coming soon)</p>
      </div>
    </SMain>
  )
}

const SMain = styled.main`
  height: 100vh;
  width: 90vw;
  max-width: 1200;
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