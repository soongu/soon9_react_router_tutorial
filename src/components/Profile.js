import React from 'react';
import WithRouterSample from "./WithRouterSample";

const data = {
    nako : {
        name: '나코',
        description : '나코나코땅땅~'
    },
    kura : {
        name: '꾸라',
        description : '민주가 또오~'
    }
}

const Profile = ({ match }) => {
    // console.log(match)
    const { username } = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;