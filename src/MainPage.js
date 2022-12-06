import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function MainPage() {
  //useState 선언
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "오늘 할일1",
      body: "쉬기",
      isDone: false,
    },
    {
      id: 2,
      title: "할일2",
      body: "잠자기!",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
}
export default MainPage;
