import React, { useState } from "react";
import { Form, Label, Input, Row, Col, FormGroup, Container } from "reactstrap";

function R044(props) {
  return (
    <Container fluid>
      <Row>
        <Label for="exampleGender">Gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>man</option>
          <option>woman</option>
        </Input>
      </Row>
      <Form>
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="exampleAddress">address</Label>
              <Input type="text" name="address" id="address" />
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <Label for="exampleMobile">Mobile</Label>
              <Input type="text" name="mobile" id="mobile" />
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <Label for="exampleAge">Age</Label>
              <Input type="text" name="age" id="age" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default R044;
