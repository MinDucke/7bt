import React from "react";
import "./Github.scss";
export default function Result(props: any) {
  const { data } = props;
  return (
    <div className="result">
      <img className="avt" src={data.avatar_url} />
      <div className="profile">
        <div className="name">{data.name}
        </div>
        <div className="bio">{data.bio}</div>
        <div className="follow">
          <div className="follower"> {data.followers} follower</div>
          <div className="following"> {data.following} following</div>
        </div>
      </div>
    </div>
  );
}
