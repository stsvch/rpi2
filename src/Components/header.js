import { Container, FormControl, Navbar, Nav } from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/home';
import List from '../Pages/list';
import PersonalInfo from "../Pages/PersonalInfo";
import { useTranslation } from "react-i18next";
import "../i18n.js";
import rus from "../img/flagRus.svg";
import eng from "../img/flagEng.svg";

export default function Header (){
        const { t, i18n } = useTranslation();
        return(
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/list">List</Nav.Link>
                            </Nav>
                            <div className="nav-languages">
							<Nav.Link
								className="lang"
								onClick={() => i18n.changeLanguage("ru")}
							>
								<img src={rus} alt="russian" className="flag" />
								<span>{t("russian_lang")}</span>
							</Nav.Link>

							<Nav.Link
								className="lang"
								onClick={() => i18n.changeLanguage("en")}
							>
								<img src={eng} alt="english" className="flag" />
								<span>{t("english_lang")}</span>
							</Nav.Link>
						</div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/list" element={<List/>} />
                        <Route exact path="/PersonalInfo/:id" element={<PersonalInfo/>} />
                    </Routes>
                </Router>
            </>
        )
    }