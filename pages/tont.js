import Axios from "axios";
import { useState } from "react";
import React from "react";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Card,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Image from "next/image";
import simg from "../src/assets/images/background/icons2.jpg";

const About = () => {


 

  //show
  const [ContentsList, setContentsList] = useState([]);

  const getContentsList = () => {
    Axios.get('http://localhost:3001/contents').then((response) => {
      setContentsList(response.data);
    })
  }
 //show

 //add
 const [title, settitle] = useState("");
 const [short_desc, setshort_desc] = useState(0);
 const [long_desc, setlong_desc] = useState("");

  const addContentsList = () => {
    Axios.post('http://localhost:3001/add_contents', {
      title: title,
      short_desc: short_desc,
      long_desc: long_desc
    }).then(() => {
      setContentsList([
        ...ContentsList,
        {
          title: title,
          short_desc: short_desc,
          long_desc: long_desc
        }
      ])
    
    })
  }
//add
//update
const [Newtitle, setNewtitle] = useState("");
const updateContents = (id) => {
  Axios.put('http://localhost:3001/update_contents', {
    title: Newtitle,
    id: id
  }).then((response) =>  {
    setContentsList(
      ContentsList.map((val) => {
        return val.id == id ? {
          id: val.id,
          title: Newtitle,
          short_desc: val.short_desc,
          long_desc: val.long_desc,
        } : val;
      })
    )
  
  })
}
//update
//delete
const deleteContents = (id) => {
  Axios.delete(`http://localhost:3001/delete_contents/${id}`).then((response) =>  {
    setContentsList(
      ContentsList.filter((val) => {
        return val.id != id;
      })
    )
  })
}
//delete



  const features = [
    {
      title: "Create React App Based",
      desc: "Create React App is a tool that gives you a massive head start when building React apps.",
      icon: "bi-vinyl",
    },
    {
      title: "Support",
      desc: "Premium customer support from the actual people who have created.",
      icon: "bi-person-check",
    },
  ];
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardBody>
            <h4>ปลากระป๋องโลซ่า</h4>
            <p>
                แนะนำให้ใส่ปลากระป๋องลงในมาม่าเพื่อความอร่อย
            </p>
            <Form action="">
              <FormGroup>
                <Label for="exampleEmail">Text</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="text"
                  autoComplete="off"
                  onChange={(event) => {
                    settitle(event.target.value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input id="exampleSelect" name="select" type="select"  
                onChange={(event) => {
                  setshort_desc(event.target.value)
                }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input placeholder="จัดมาวัยรุ่น"  id="exampleText" name="text" type="textarea" 
                onChange={(event) => {
                  setlong_desc(event.target.value)
                }}
                />
              </FormGroup>  
              <Button onClick={addContentsList}>Submit</Button>
            </Form>
            
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Row>
              {features.map((feature) => (
                <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                  <div>
                    <i className={`bi ${feature.icon} text-primary fs-2`} />

                    <CardTitle tag="h5" className="my-3">
                      {feature.title}
                    </CardTitle>
                    <CardSubtitle className="text-muted col-10">
                      {feature.desc}
                    </CardSubtitle>
                  </div>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
              
        <Card>
          <CardBody>
            <Row>
              <Button onClick={getContentsList}>Show Data</Button>

              {ContentsList.map((val, key) => {
                  return(
                    /*<div>Title: {val.title} </div>
                    <div>Short: {val.short_desc} </div>
                    <div>Long: {val.long_desc} </div>*/
                    <Col lg="4" className="mb-5 pb-3" >
                    <div>
                    <CardTitle tag="h5" className="my-3">
                        {val.title}
                      </CardTitle>
                      <CardTitle tag="h5" className="my-3">
                        {val.short_desc}
                      </CardTitle>
                      <CardSubtitle className="text-muted col-10">
                        {val.long_desc}
                      </CardSubtitle>

                <FormGroup>
                  <Label for="exampleEmail">Text</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="text"
                    autoComplete="off"
                    onChange={(event) => {
                      setNewtitle(event.target.value)
                    }}
                  />
                </FormGroup>
                <Button onClick={() => updateContents(val.id)}>Submit</Button>
                <Button onClick={() => deleteContents(val.id)}>Delete</Button>
                    </div>
                  </Col>
                  
                  )
              })}
            
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
