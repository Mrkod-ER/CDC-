import React from "react";
// import { useEffect } from 'react';
import "./Team.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function TeamCards  ({ member }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 sm:w-1/2  p-5  mx-auto  rounded  teamcard flex flex-wrap">
      <div className="team-1 mx-auto">
        <div className="pic w-full max-w-[320px]   object-cover rounded">
          {/* <img src={member.imgLink} className="w-full h-auto sm:max-w-sm " alt="Profile" loading="lazy" /> */}
        <LazyLoadImage alt="profile image" src={member.imgLink} className="w-full h-auto sm:max-w-sm" effect="blur" />
        </div>
        <div className="team-info">
          <h4 className=" text-gray-100">{member.name}</h4>
          <span>{member.position}</span>
          <div className="social">
            <a href={`mailto:${member.gmail}`}>
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href={member.insta}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href={member.linkedin}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;