import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img className={style.site_header} src='https://u.kanobu.ru/editor/images/51/bf9e7531-74e0-4e83-9db5-5de172987644.jpg' />
      <div className={style.discription}>
        <img className={style.ava} src={props.profile.photos.large != null ? props.profile.photos.large  : 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png'}  ></img>
        <div className={style.personInfo}>
          <div>{props.profile.fullName}</div>
          <br />
          <div>Contacts:</div>
          <br></br>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.mainLink}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.youtube}</div>
          <br></br>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
