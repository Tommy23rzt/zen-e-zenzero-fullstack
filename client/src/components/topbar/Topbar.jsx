import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <a
            href="https://rzt.altervista.org/"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram-square topbarIcon">
            <FontAwesomeIcon icon={faInstagram} size="1x" color="black" />
            </i>
          </a>
          <a
            href="https://rzt.altervista.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square topbarIcon">
            <FontAwesomeIcon icon={faFacebook} size="1x" color="black" />

            </i>
          </a>

          <a
            href="https://rzt.altervista.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin topbarIcon">
            <FontAwesomeIcon icon={faLinkedin} size="1x" color="black" />

            </i>
          </a>

        </div>
        <div className="topbarCenter">
          <Link to="/" className="link"  style={{ textDecoration: 'none', color: '#000' }}>
            <span className="topbarCenterItem">HOME </span>
          </Link>
          <Link to="/about" className="link"  style={{ textDecoration: 'none', color: '#000' }}>
            <span className="topbarCenterItem">ABOUT</span>
          </Link>
          <Link to="/contact" className="link"  style={{ textDecoration: 'none', color: '#000' }}>
            <span className="topbarCenterItem">CONTACT</span>
          </Link>
          <Link to="/write" className="link"  style={{ textDecoration: 'none', color: '#000' }}>
            <span className="topbarCenterItem">WRITE</span>
          </Link>

          <span className="topbarCenterItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
        </div>
        <div className="topbarRight">
          {user && (
            <Link to="/settings">
              <img
                src={
                  (user.profilePicture !== "")
                    ? PF + user.profilePicture
                    : `../../no-avatar.jfif`
                }
                alt=""
                className="topbarImg"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
