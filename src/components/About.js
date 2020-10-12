import React from 'react';
import qs from "qs";

const About = ({ location }) => {
    console.log('location', location);

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true //이 설정을 통해 문자열의 맨 앞의 ?를 생략합니다.
    });
    console.log('query', query)
    const showDetail = query.detail === 'true'; //쿼리의 파싱 결과는 문자열입니다.
    return (
        <div>
            <h1>소개</h1>
            <p>안녕하세요 Soon9입니다. 즐~</p>
            {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;