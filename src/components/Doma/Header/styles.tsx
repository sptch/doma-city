import styled, { css } from 'styled-components';

export const
Header = styled.header`
	width: 100%;
	height: auto;
	padding: 50px 50px;
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
            font-size: 21px;
            font-weight: lighter;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`