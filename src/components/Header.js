import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import "./Component.css"; 
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const title = props.title;
  const backButton = props.backButton;
  const history = useHistory();

  return (
    <div className="navbar">
      {backButton ? (
        <Button onClick={() => history.goBack()}><IoIcons.IoMdArrowRoundBack/></Button>
      ) : null}
      <h1 className="font-bold text-white  text-lg capitalize">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  backButton: PropTypes.bool,
};

export default Header;
