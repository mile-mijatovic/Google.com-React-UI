import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Menu from "../components/Menu";

import { ReactComponent as Moon } from "../assets/svg/moon.svg";
import { ReactComponent as Sun } from "../assets/svg/sun.svg";

import { toggleTheme } from "../redux/features/uiSlice";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footer.background};

  .country {
    padding: 15px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.footer.divider};
    font-size: 15px;
    color: ${({ theme }) => theme.footer.text};
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 46px;
    padding: 0px 35px;

    a {
      margin-right: 30px;
      color: ${({ theme }) => theme.footer.links};

      &:last-child {
        margin-right: 0px;
      }
    }

    @media screen and (max-width: 768px) {
      height: 92px;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

export default function Footer() {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  const [country, setCountry] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get country
  const getCountry = async () => {
    const ip = await fetch("http://api.ipify.org/?format=json");
    const ipData = await ip.json();

    const geoLocation = await fetch(
      `https://api.ipdata.co/${ipData.ip}?api-key=${process.env.REACT_APP_API_KEY}`
    );
    const geoData = await geoLocation.json();
    setCountry(geoData.country_name);
  };

  // Toggle theme
  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
    setIsMenuOpen(false);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <StyledFooter>
      <div className="country">{country}</div>
      <div className="links">
        <div>
          <Link to="about">About</Link>
          <Link to="advertising">Advertising</Link>
          <Link to="business">Business</Link>
          <Link to="how-search-works">How Search works</Link>
        </div>
        <div>
          <Link to="privacy">Privacy</Link>
          <Link to="terms">Terms</Link>
          <a onClick={() => setIsMenuOpen(!isMenuOpen)}>Settings</a>
        </div>
      </div>
      <Menu isOpen={isMenuOpen}>
        <li onClick={toggleThemeHandler}>
          Dark theme: {theme === "dark" ? "On" : "Off"}{" "}
          {theme === "dark" ? <Moon /> : <Sun />}
        </li>
      </Menu>
    </StyledFooter>
  );
}
