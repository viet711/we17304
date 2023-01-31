import Header from "../components/Header";
import { projectList } from "../data/data";
const ProjectPage = ()=>{
    return `
        ${Header()}
        <h1>ProjectPage</h1>
        ${
            projectList.map((item)=>{
                return `
                <div>
                <p>Project Id:  ${item.id}</p>
                <p>Project Name: ${item.name}</p>
                </div>
                `
            }).join("")
        }
    `;
}

export default ProjectPage;