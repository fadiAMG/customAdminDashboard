import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class SystemUsers extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        {/* <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card> */}
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">System Users</Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>In Building</th>
                                        <th>Check in Date</th>
                                        <th>Acess Type</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark Steve</td>
                                        <td>True</td>
                                        <td>12-30-2020</td>
                                        <td>Access A</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob Robert</td>
                                        <td>False</td>
                                        <td>12-31-2020</td>
                                        <td>Access B</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry Ford</td>
                                        <td>False</td>
                                        <td>21-31-2020</td>
                                        <td>Access C</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        {/* <Card>
                            <Card.Header>
                                <Card.Title as="h5">Striped Table</Card.Title>
                                <span className="d-block m-t-5">use props <code>striped</code> with <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card> */}
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SystemUsers;