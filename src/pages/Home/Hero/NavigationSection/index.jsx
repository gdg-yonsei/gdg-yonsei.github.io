import { ReactComponent as MicIcon } from '@assets/images/mic.svg';
import { Button } from '@components/Button';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

function NavigationSection() {
  return (
    <Container>
      <NavbarContainer>
        <Navbar>
          <LeftEnd>
            <SearchIcon data-scroll data-scroll-position="top" data-scroll-speed="4" />
            <StyledTypeAnimation sequence={['We are GDSC developers.']} speed={20} wrapper="div" />
          </LeftEnd>
          <RightEnd data-scroll-section>
            <KeyboardImg
              src="https://www.google.com/tia/tia.png"
              alt="ally keyboard"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="3"
            />
            <MicIconImg data-scroll data-scroll-position="top" data-scroll-speed="4" />
            <CameraImg
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IlN0YW5kYXJkX3Byb2R1Y3RfaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCSB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE5MnB4IiBoZWlnaHQ9IjE5MnB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTkyIDE5MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxyZWN0IGlkPSJib3VuZGluZ19ib3hfMV8iIGZpbGw9Im5vbmUiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIi8+CjxnIGlkPSJhcnRfbGF5ZXIiPgoJPGNpcmNsZSBpZD0iRG90IiBmaWxsPSIjNDI4NUY0IiBjeD0iOTYiIGN5PSIxMDQuMTUiIHI9IjI4Ii8+Cgk8cGF0aCBpZD0iUmVkIiBmaWxsPSIjRUE0MzM1IiBkPSJNMTYwLDcydjQwLjE1VjEzNmMwLDEuNjktMC4zNCwzLjI5LTAuODIsNC44MnYwdjBjLTEuNTcsNC45Mi01LjQzLDguNzgtMTAuMzUsMTAuMzVoMHYwCgkJYy0xLjUzLDAuNDktMy4xMywwLjgyLTQuODIsMC44Mkg2NmwxNiwxNmg1MGgxMmM0LjQyLDAsOC42My0wLjksMTIuNDYtMi41MWMzLjgzLTEuNjIsNy4yOC0zLjk2LDEwLjE3LTYuODYKCQljMS40NS0xLjQ1LDIuNzYtMy4wMywzLjkxLTQuNzRjMi4zLTMuNCwzLjk2LTcuMjgsNC44MS0xMS40NGMwLjQzLTIuMDgsMC42NS00LjI0LDAuNjUtNi40NXYtMTJWOTYuMTVWODRsLTYtMTlsLTEwLjgyLDIuMTgKCQlDMTU5LjY2LDY4LjcxLDE2MCw3MC4zMSwxNjAsNzJ6Ii8+Cgk8cGF0aCBpZD0iQmx1ZSIgZmlsbD0iIzQyODVGNCIgZD0iTTMyLDcyYzAtMS42OSwwLjM0LTMuMjksMC44Mi00LjgyYzEuNTctNC45Miw1LjQzLTguNzgsMTAuMzUtMTAuMzVDNDQuNzEsNTYuMzQsNDYuMzEsNTYsNDgsNTYKCQloOTZjMS42OSwwLDMuMjksMC4zNCw0LjgyLDAuODJjMCwwLDAsMCwwLDBMMTQ5LDQ1bC0xNy01bC0xNi0xNmgtMTMuNDRIOTZoLTYuNTZINzZMNjAsNDBINDhjLTE3LjY3LDAtMzIsMTQuMzMtMzIsMzJ2MTJ2MjBsMTYsMTYKCQlWNzJ6Ii8+Cgk8cGF0aCBpZD0iR3JlZW4iIGZpbGw9IiMzNEE4NTMiIGQ9Ik0xNDQsNDBoLTEybDE2LjgzLDE2LjgzYzEuMjMsMC4zOSwyLjM5LDAuOTMsMy40NywxLjU5YzIuMTYsMS4zMiwzLjk3LDMuMTMsNS4yOSw1LjI5CgkJYzAuNjYsMS4wOCwxLjIsMi4yNCwxLjU5LDMuNDd2MEwxNzYsODRWNzJDMTc2LDU0LjMzLDE2MS42Nyw0MCwxNDQsNDB6Ii8+Cgk8cGF0aCBpZD0iWWVsbG93IiBmaWxsPSIjRkJCQzA0IiBkPSJNNDgsMTY4aDM5Ljg5bC0xNi0xNkg0OGMtOC44MiwwLTE2LTcuMTgtMTYtMTZ2LTIzLjg5bC0xNi0xNlYxMzZDMTYsMTUzLjY3LDMwLjMzLDE2OCw0OCwxNjh6CgkJIi8+CjwvZz4KPC9zdmc+Cg=="
              alt="search by img"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="6"
            />
          </RightEnd>
        </Navbar>
      </NavbarContainer>
      <ButtonContainer data-scroll-section>
        <a
          href="https://www.google.com/search?q=gdsc+yonsei+seoul+campus"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledButton data-scroll data-scroll-position="top" data-scroll-speed="2">
            <ButtonSpan>Google Search</ButtonSpan>
          </StyledButton>
        </a>
        <a
          href="https://gdsc.community.dev/yonsei-university-seoul-campus/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledButton data-scroll data-scroll-position="top" data-scroll-speed="4">
            <ButtonSpan>I&apos;m Feeling Lucky</ButtonSpan>
          </StyledButton>
        </a>
      </ButtonContainer>
    </Container>
  );
}

export default NavigationSection;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  ${({ theme }) => theme.mobile`
    gap: 20px;
  `}
`;

const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.div`
  width: 700px;
  padding: 10px 20px;
  border: 1px solid #b6c0c9;
  border-radius: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.tablet`
    width: 500px;
  `}

  ${({ theme }) => theme.mobile`
    width: 300px;
  `}
`;

const LeftEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  cursor: text;
`;

const SearchIcon = styled(MdSearch)`
  font-size: 24px;

  color: #525151;

  ${({ theme }) => theme.mobile`
    font-size: 18px;
  `}
`;

const RightEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  height: 36px;
`;

const ButtonSpan = styled.span`
  font-size: 14px;
`;

const KeyboardImg = styled.img`
  width: 24px;
  height: 24px;
  filter: grayscale(1);
  clip-path: circle(45% at 50% 50%);

  cursor: pointer;
`;

const MicIconImg = styled(MicIcon)`
  cursor: pointer;
`;

const CameraImg = styled.img`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

const StyledTypeAnimation = styled(TypeAnimation)`
  color: ${(props) => props.theme.backgroundColor.black};
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;

  ${({ theme }) => theme.mobile`
    font-size: 18px;
  `}
`;
