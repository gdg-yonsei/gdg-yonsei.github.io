// Icon Import
import { ReactComponent as SiPython } from '@assets/images/icons/python.svg';
import { ReactComponent as SiCplusplus } from '@assets/images/icons/server/cplusplus.svg';
import { ReactComponent as SiDocker } from '@assets/images/icons/server/docker.svg';
import { ReactComponent as SiDotnet } from '@assets/images/icons/server/dotnet.svg';
import { ReactComponent as SiExpress } from '@assets/images/icons/server/express.svg';
import { ReactComponent as SiFastAPI } from '@assets/images/icons/server/fastapi.svg';
import { ReactComponent as SiGolang } from '@assets/images/icons/server/go.svg';
import { ReactComponent as SiGCP } from '@assets/images/icons/server/googlecloud.svg';
import { ReactComponent as SiJava } from '@assets/images/icons/server/java.svg';
import { ReactComponent as SiJenkins } from '@assets/images/icons/server/jenkins.svg';
import { ReactComponent as SiJira } from '@assets/images/icons/server/jira.svg';
import { ReactComponent as SiKotlin } from '@assets/images/icons/server/kotlin.svg';
import { ReactComponent as SiLaravel } from '@assets/images/icons/server/laravel.svg';
import { ReactComponent as SiMongoDB } from '@assets/images/icons/server/mongodb.svg';
import { ReactComponent as SiMySQL } from '@assets/images/icons/server/mysql.svg';
import { ReactComponent as SiNestJS } from '@assets/images/icons/server/nestjs.svg';
import { ReactComponent as SiPhp } from '@assets/images/icons/server/php.svg';
import { ReactComponent as SiPostgreSQL } from '@assets/images/icons/server/postgresql.svg';
import { ReactComponent as SiRedis } from '@assets/images/icons/server/redis.svg';
import { ReactComponent as SiRuby } from '@assets/images/icons/server/ruby.svg';
import { ReactComponent as SiRubyOnRails } from '@assets/images/icons/server/rubyonrails.svg';
import { ReactComponent as SiScala } from '@assets/images/icons/server/scala.svg';
import { ReactComponent as SiSpring } from '@assets/images/icons/server/spring.svg';
import { ReactComponent as SiSpringBoot } from '@assets/images/icons/server/springboot.svg';
import { ReactComponent as SiSQLite } from '@assets/images/icons/server/sqlite.svg';
import { ReactComponent as SiSymfony } from '@assets/images/icons/server/symfony.svg';
import { ReactComponent as SiSwift } from '@assets/images/icons/swift.svg';
import { ReactComponent as SiNodeJS } from '@assets/images/icons/web/nodedotjs.svg';
import useOnScreen from '@hooks/useOnScreen';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

import GithubMenu from './GithubMenu';

function ServerSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const observerRefThird = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);
  const onScreenThird = useOnScreen(observerRefThird);

  const setTooltip = (content) => {
    return {
      'data-tooltip-id': 'server-tooltip',
      'data-tooltip-content': content,
      'data-tooltip-place': 'bottom',
      'data-tooltip-hide': 0.5,
    };
  };

  return (
    <Container data-scroll-section>
      <ContentWrapper id="fixed-element-server">
        <LeftSection>
          <OutlineContainer
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-server"
          >
            <H1>02.</H1>
            <H2>Server Development</H2>
            <Paragraph>
              The backend of the service appears magical to the user, as all communications between
              the client and the server take place under the hood. <br />
              Communication should be held in an integrated manner, and every communication should
              have its own responsibility.
            </Paragraph>
          </OutlineContainer>
        </LeftSection>
        <RightSection>
          <SectionWrapper ref={observerRef} id="server-section-wrapper-first">
            <TitleWrapperFirst
              data-scroll
              data-scroll-sticky
              data-scroll-target="#server-section-wrapper-first"
            >
              {onScreen && (
                <TypeAnimation sequence={['What we do']} speed={50} wrapper={'span'} repeat={1} />
              )}
            </TitleWrapperFirst>
            <LearnList>
              <List>Develop a web application with RDBMS & Redis.</List>
              <List>Manage REST & RESTful API endpoint using HTTP protocol.</List>
              <List>Automated CI/CD for continuous service.</List>
              <List>Penetration test & hacking, learn security by mock CTF.</List>
              <List>Design microservice architecture using multi-languages.</List>
            </LearnList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefSecond} id="server-section-wrapper-second">
            <TitleWrapperSecond
              data-scroll
              data-scroll-sticky
              data-scroll-target="#server-section-wrapper-second"
            >
              {onScreenSecond && (
                <TypeAnimation
                  sequence={['What we learn']}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperSecond>
            <IconList>
              <IconName>Languages</IconName>
              <IconWrapper>
                {/* FIXME: Why not fill color props? */}
                <SiJava {...setTooltip('Java')} />
                <SiPython {...setTooltip('React')} />
                <SiJavascript {...setTooltip('JavaScript')} />
                <SiSwift {...setTooltip('Swift')} />
              </IconWrapper>
              <IconWrapper>
                <SiGolang {...setTooltip('Go')} />
                <SiRuby {...setTooltip('Ruby')} />
                <SiKotlin {...setTooltip('Kotlin')} />
              </IconWrapper>
              <IconWrapper>
                <SiScala {...setTooltip('Scala')} />
                <SiPhp {...setTooltip('php')} />
                <SiCplusplus {...setTooltip('C++')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>Server Frameworks & Libraries</IconName>
              <IconWrapper>
                <SiSpring {...setTooltip('Spring')} />
                <SiSpringBoot {...setTooltip('Spring Boot')} />

                <SiNodeJS {...setTooltip('NodeJS')} />
                <SiExpress {...setTooltip('Express.js')} />
              </IconWrapper>
              <IconWrapper>
                <SiDotnet {...setTooltip('.NET')} />
                <SiRubyOnRails {...setTooltip('Ruby On Rails')} />
                <SiLaravel {...setTooltip('Laravel')} />
              </IconWrapper>
              <IconWrapper>
                <SiSymfony {...setTooltip('Symfony')} />
                <SiNestJS {...setTooltip('Next.js')} />
                <SiFastAPI {...setTooltip('FastAPI')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>RDBMS</IconName>
              <IconWrapper>
                <SiMongoDB {...setTooltip('MongoDB')} />
                <SiMySQL {...setTooltip('MySQL')} />
                <SiPostgreSQL {...setTooltip('PostgreSQL')} />
                <SiSQLite {...setTooltip('SQLite')} />
                <SiRedis {...setTooltip('Redis')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>CI/CD</IconName>
              <IconWrapper>
                <SiDocker {...setTooltip('Docker')} />
                <SiJira {...setTooltip('Jira')} />
                <SiJenkins {...setTooltip('Jenkins')} />
                <SiGCP {...setTooltip('GCP')} />
              </IconWrapper>
            </IconList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefThird} id="server-section-wrapper-third">
            <TitleWrapperThird
              data-scroll
              data-scroll-sticky
              data-scroll-target="#server-section-wrapper-third"
            >
              {onScreenThird && (
                <TypeAnimation
                  sequence={["What we've done"]}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperThird>
            <GithubList>
              <GithubMenu
                title={'Faster DB utilizing in-memory DBMS'}
                type="Github"
                description={
                  'Utilizing in-memory DBMS, widely known as Redis, DB caching makes handling queries a lot more easier!'
                }
                link="https://github.com/orgs/gdsc-ys/repositories?q=sprint1&type=all"
              />
              <GithubMenu
                title={'Wargame Simulation'}
                type={'Dreamhack'}
                description={
                  <span>
                    If you know the enemy and know yourself, you need not fear the result of a
                    hundred battles. <br />- Sun Zhu, The Art of War -
                  </span>
                }
                link="https://dreamhack.io/group/989/detail"
              />
              <GithubMenu
                title={'Jira Implementation'}
                type={'Github'}
                description={
                  <span>
                    Implementation of Jira, the project tracking software. <br />
                    Designed based on microservice architecture.
                  </span>
                }
                link="https://github.com/orgs/gdsc-ys/repositories?q=jira&type=all&language=&sort="
              />
              <GithubMenu
                title={'Catrot Market Service'}
                type={'Github'}
                description={
                  <span>
                    Backend of secondhand market services.
                    <br />
                    Designed based on microservice architecture.
                    <br />
                    Implemented chat, item query, user grouping and more!
                  </span>
                }
                link="https://github.com/orgs/gdsc-ys/repositories?q=catrot"
              />
            </GithubList>
          </SectionWrapper>
        </RightSection>
      </ContentWrapper>
      <Tooltip id="server-tooltip" />
    </Container>
  );
}

export default ServerSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.backgroundColor.white};

  perspective: 1px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: flex;
`;

const LeftSection = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineContainer = styled.div`
  position: relative;
  z-index: 0;

  padding-top: 25vh;
  padding-right: 20%;
  padding-left: 10%;
  padding-bottom: 20vh;
`;

const H1 = styled.h1`
  font-size: 88px;
  color: ${(props) => props.theme.backgroundColor.black};
`;

const H2 = styled.h2`
  display: inline-block;
  font-size: 30px;
  color: ${(props) => props.theme.backgroundColor.black};
`;

const Paragraph = styled.p`
  margin-top: 5vh;

  font-size: 16px;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.3;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const RightSection = styled.div`
  width: 65%;

  padding: 3% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
  background-color: ${(props) => props.theme.color.red};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 15vh;
  padding: 7% 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1000;

  background-color: ${(props) => props.theme.color.red};

  span {
    font-weight: 500;

    &::after {
      // cursor styling
      color: ${(props) => props.theme.brightColor.red};
    }
  }
`;

const TitleWrapperFirst = styled(TitleWrapper)`
  span {
    font-size: 8vw;
  }
`;

const LearnList = styled.ul`
  width: 100%;

  padding: 3% 12%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;

  list-style-type: decimal;
`;

const List = styled.li`
  font-size: 1.7vw;
  font-weight: 400;
`;

const TitleWrapperSecond = styled(TitleWrapper)`
  span {
    font-size: 7vw;
  }
`;

const IconList = styled.div`
  width: 100%;

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;
`;

const IconName = styled.div`
  width: 100%;

  font-size: 3vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  padding: 3% 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  // Icon Styling
  svg {
    width: 4.5vmax;
    height: 4.5vmax;
    cursor: pointer;

    path {
      fill: ${(props) => props.theme.lightColor.red};
      transition: fill 0.1s ease-in;
    }

    &:hover {
      path {
        fill: ${(props) => props.theme.backgroundColor.white};
        /* fill: inherit; */
      }
    }
  }
`;

const TitleWrapperThird = styled(TitleWrapper)`
  span {
    font-size: 5.5vw;
  }
`;

const GithubList = styled.ul`
  width: 100%;

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5vh;
`;
