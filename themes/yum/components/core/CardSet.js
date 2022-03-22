import React, { useRef, useLayoutEffect, createRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import * as yum from '@@yum'

/**
 *
 * @param {Array} cards  Array of cards objects
 */

export default function CardSet({ cards }) {
  const wrapperRef = useRef();
  const [eltPerLine, setEltPerLine] = useState(0);
  const minWidth = 260;
  const [cardWidth, setCardWidth] = useState(minWidth);

  return (
    <CardSetWrapper
      totalCards={cards.length}
      cardWidth={cardWidth}
      ref={wrapperRef}
    >
      {/* {cards.map((item, index) => (
        <div key={index} className={`card-container ${index}`}>
          <yum.Row>
            <yum.Col>
              <Card {...item} />
            </yum.Col>
          </yum.Row>
        </div>
      ))} */}

      <yum.Row>
      {cards.map((item, index) => (
        <yum.Col key={index} xs={12} md={4}>
          <Card {...item} />
        </yum.Col>
      ))}
      </yum.Row>

    </CardSetWrapper>
  );
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const CardSetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    display: block;
  }
`;
