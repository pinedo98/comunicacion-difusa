import { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const levels = [
  {
    name: "Básico",
    level: 1,
    color: "#F0C419",
  },
  {
    name: "Intermedio",
    level: 2,
    color: "#5C9DC1",
  },
  {
    name: "Avanzado",
    level: 3,
    color: "#A7C15C",
  },
];

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1>Nivel</h1>
          <p>Selecciona tu nivel</p>
          <div className="flex space-x-8">
            {levels.map((level, index) => (
              <Link key={index} href={`ambiguity`}>
                <a>
                  <div className="shadow-md rounded-lg bg-white w-32 h-48 flex flex-col p-4 justify-center items-center">
                    <span style={{ fontSize: "100px", color: level.color }}>
                      {level.level}
                    </span>
                    <span>{level.name}</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          {/* <Link href={`/categories`}>
            <button>Categorias</button>
          </Link> */}
        </div>

        <style jsx>{``}</style>
      </Layout>
    );
  }
}