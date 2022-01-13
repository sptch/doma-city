import styled, { css } from 'styled-components';

export const
Header = styled.header`
	width: 100%;
	height: auto;
	padding: 40px 40px 10px 40px;
  position: fixed;
  z-index: 1;
  >div{
    display: flex;
    justify-content: space-between;
    >:first-child{
      >a{
        display: block;
        width: 100%;
        height: 100%;
        >svg{
          display:block;
          fill: #fff;
        }
      }
    }
    >nav{
      >ul{
        list-style: none;
        padding: 0;
        display: flex;
        >li{
          margin-left: 20px;
          >a{
            text-decoration: none;
            color: #fff;
            font-family: 'Post Grotesk Light', Helvetica, sans-serif;
            font-size: 18px;
            font-weight: lighter;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`,

LogoContainer = styled.a<{opaque:boolean}>`
  opacity: ${props => props.opaque ? 1 : 0.2};
  transition: opacity 0.5s;
`