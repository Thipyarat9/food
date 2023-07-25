import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import Contact from "./Contact";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export function Layout() {
  return (
    <nav className="be-secondary p-2 md-3">
      <img str="card-07.jpg" alt="My logo" />
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี่
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div className="text-center">
        <img str="IMG_5991.JPG" alt="ปลาส้มทรงเครื่องสมุนไพร" />
        <h3>ปลาส้มทรงเครื่องสมุนไพร</h3>
        <div>
        
        </div>
        <Button onclick={P1}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="f0801.jpg" alt="แกงเห็ดเผาะไข่มดแดง" />
        <h3>แกงเห็ดเผาะไข่มดแดง</h3>
        <div>
          
        </div>
        <Button onClick={P2}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="f0901.jpg" alt="แกงอ่อมหอยขม" />
        <h3>ลาบปลาคัง</h3>
        <div>
        ลาบปลาคัง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น
        ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี 
        </div>
        <Button onClick={P3}>เรียนรู้เพิ่มเติม</Button>
      </div>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.DeleteRow(index);
  };

  const data = [
    ["ปลาส้มทรงเครื่องสมุนไพร", 150],
    ["แกงเห็เผาะไข่มดแดง", 140],
    ["ลาบปลาคัง", 130],
  ];

  return (
    <>
      <Layout />
      <h4>ตารางเทียบแคลอรี่</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>ชื่ออาหาร</th>
            <th>แคลอรี่</th>
            <th>เทียบแคลอรี่</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                ker={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    เทียบแคลอรี่
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-ligh">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
