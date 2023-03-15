import {useState} from "react";
import {Container, Row, ListGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Home() {

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Project 1",
        },
        {
            id: 2,
            name: "Project 2",
        },
        {
            id: 3,
            name: "Project 3",
        }
    ])

    return (
        <Container>
            <div style={{height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Row className="content-row">
                    <h2 className="name">Hi I'm Axel Bergman</h2>
                </Row>
                <Row className="content-row">
                    <h6 className="description">
                        I'm a software developer and computer science and engineering student at <a href="https://www.chalmers.se/" className="chalmers-link">Chalmers</a> in Gothenburg, Sweden.
                    </h6>
                </Row>
            </div>

            <div id="Projects" style={{height: "100vh", display:"flex", flexDirection: "column", justifyContent:"center"}}>
                <Row className="content-row align-items-center mb-4">
                    <h2 className="name">Find some of my projects here</h2>
                </Row>

                <div>
                    <ListGroup>
                        {projects.map((project) => (
                            <ListGroup.Item key={project.id}>
                                <Link to={`/projects/${project.id}`}>{project.name}</Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>

            <h2 id="Contact" style={{textAlign:"center", padding:"1rem"}}>Follow me here</h2>
            <Row className="row-cols-2">
                <Button variant="outline-primary" href="https://www.linkedin.com/in/axel-bergman-391014256/">LinkedIn</Button>{' '}
                <Button variant="outline-primary" href="https://github.com/axellage">Github</Button>{' '}
            </Row>
        </Container>
    );
}