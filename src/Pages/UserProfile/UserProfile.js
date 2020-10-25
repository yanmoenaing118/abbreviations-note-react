import { faHeart, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Abbreviation from "../../components/Abbreviation/Abbreviation/Abbreviation";
import NewButton from "../../components/UI/Buttons/NewButtton/NewButton";

import profile from "./../../assets/kyg.jpg";
import setting from "./../../assets/settings.png";

import classes from "./UserProfile.module.scss";

class UserProfile extends React.Component {
  render() {
    return (
      <div className={classes.UserProfile}>
        <div className={classes.Banner}>
          <div className={classes.Picture}>
            <img src={profile} alt="Yan Moe Naing" />
          </div>
          <div>
            <p className={classes.UserName}>ကိုရန်မိုးနိုင်</p>
            <p className={classes.UserEmail}>yanmoenaingphys@gmail.com</p>
          </div>
          <div className={classes.Setting}>
            <img src={setting} alt="Setting" />
          </div>
        </div>
        <nav className={classes.Nav}>
          <ul>
            <li>
              <div>
                <FontAwesomeIcon icon={faListAlt} />
              </div>
              <p>My abbreviations</p>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <p>Favorites</p>
            </li>
          </ul>
        </nav>
        <div className={classes.Content}>
          <Abbreviation
            id="1"
            abbreviation="အချစ်ဦး"
            stands_for="ပထမဦးဆုံးချစ်ရသူ"
          />
          <Abbreviation
            id="1"
            abbreviation="ABC"
            stands_for="A for apple, B for bell, C for Cat"
          />
          <Abbreviation id="1" abbreviation="DGC" stands_for="Do Go Co" />
        </div>
        <NewButton />
      </div>
    );
  }
}

export default UserProfile;
