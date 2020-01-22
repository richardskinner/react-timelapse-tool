import styled from 'styled-components'

const StyledCarousel = styled.div`
  
`

const StyledTile = styled.div`
  
`

const StyledTileH5 = styled.h5`
  font-size: 12px;
  margin: 3px 0 0 5px;
`

const StyledTileImage = styled.img`
  padding: 2%;
  position: relative;
  width: 100%;
`

const StyledTileInput = styled.input`
  display: none;
  &:checked + :before {
    display: inline-block;
  }
`

const StyledTileLabel = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  margin-bottom: 0;
  overflow: hidden;
  &:before {
    content: "\\2641";
    display: none;
    text-align: center;
    padding-top: 17%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: whitesmoke;
    opacity: .7;
    z-index: 1000;
  }
`

export {StyledCarousel, StyledTileImage, StyledTile, StyledTileInput, StyledTileLabel, StyledTileH5}
