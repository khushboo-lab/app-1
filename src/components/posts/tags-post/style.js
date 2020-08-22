import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
`;

export const Tag = styled.div`
  padding: 4px 10px;
  border-radius: 50px;
  font-weight: 400;
  margin: 4px;
  border: 1px solid ${getColor('greyLigther')};
  background: ${getColor('white')};
  color: ${getColor('grey', 'white')};
  cursor: pointer;
`;

function getColor(inactiveColor, activeColor = 'gradient') {
  return (props) => {
    if (props.active) {
      return props.theme.colors[activeColor];
    }
    return props.theme.colors[inactiveColor];
  };
}
