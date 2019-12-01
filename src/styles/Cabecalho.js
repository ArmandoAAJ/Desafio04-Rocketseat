import styled from 'styled-components';

export const Header = styled.header`

            background: #4a90e2;
            display: flex;
            justify-content: center;

        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 64px;
            padding: 0 42px;
            color: #fff;
            min-width: 980px;
        }


        h5{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        div{
            display: flex;
            align-items: center;
        }

        img{
            border-radius: 100%;
            padding: 3px;
            background-color: #1E90FF;
            color: #4a90e2;
            margin-left: 8px;
        }
`;
