import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ABOUT ME</div>
          <div className="ab">
            <img
              src="https://images.pexels.com/photos/5071493/pexels-photo-5071493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="sidebarImg"
            />
            <p className="sidebarAbout">
              Vivamus blandit vehicula odio id elementum. Mauris lobortis risus
              vel ligula facilisis luctus. Quisque interdum ultrices suscipit.
              Pellentesque sit amet urna ullamcorper, sollicitudin ipsum eu,
              ultricies purus.
            </p>
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">CATEGORIES</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <li>{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW US</div>
          <div className="sidebarIcons">
            <a
              href="https://rzt.altervista.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram-square sidebarIcon">
                <FontAwesomeIcon icon={faInstagram} size="1x" color="black" />
              </i>
            </a>
            <a
              href="https://rzt.altervista.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-square sidebarIcon">
                <FontAwesomeIcon icon={faFacebook} size="1x" color="black" />

              </i>
            </a>

            <a
              href="https://rzt.altervista.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin sidebarIcon">
                <FontAwesomeIcon icon={faLinkedin} size="1x" color="black" />

              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
