import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProfileAvatar = styled.div`
  padding-left: 3rem;
  @media (max-width: 768px) {
    padding-left: 0rem;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
