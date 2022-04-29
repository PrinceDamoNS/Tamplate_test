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
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Text</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input placeholder="จัดมาวัยรุ่น"  id="exampleText" name="text" type="textarea" />
              </FormGroup>  
              <Button>Submit</Button>
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
      </Col>
    </Row>
  );
};

export default About;
