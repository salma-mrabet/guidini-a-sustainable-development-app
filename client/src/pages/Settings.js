import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import ParentComponent from "../components/ParentForm";
const onFinish=async()=>{
  // try{
  //   const res=await axios.get("")
  // }
}

export default () => {
  return (
    <>
      

      <Row>
        <Col >
          <ParentComponent />
        </Col>

        
      </Row>
    </>
  );
};
